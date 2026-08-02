'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { galleryEvents } from '@/data/gallery';
import TimelineCard from '@/components/gallery/TimelineCard';
import Lightbox from '@/components/gallery/Lightbox';
import styles from '@/styles/Gallery.module.css';

// Flatten every photo from every event into one pool the hero can pick
// from. Each entry remembers its source event so the tag can show the
// event name alongside the image.
const heroPool = galleryEvents.flatMap((event) =>
  event.images.map((src) => ({ src, eventName: event.eventName })),
);

const HERO_INTERVAL_MS = 10000;

const GalleryPage = () => {
  // { eventId, index } when open, else null. The id (not the array index)
  // is what we keep so we don't lose state when albums reorder.
  const [active, setActive] = useState<{ eventId: number; index: number } | null>(null);

  const activeEvent = useMemo(
    () => (active ? galleryEvents.find((e) => e.id === active.eventId) ?? null : null),
    [active],
  );

  // Start at index 0 so server and client agree on the first render — the
  // effect below swaps in a random image immediately after mount. Doing
  // Math.random() inside useState would mismatch hydration.
  const [heroIdx, setHeroIdx] = useState(0);

  useEffect(() => {
    setHeroIdx(Math.floor(Math.random() * heroPool.length));

    // Skip the auto-rotate when the user prefers reduced motion — sudden
    // image swaps can be jarring. The first random image still lands.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const id = setInterval(() => {
      setHeroIdx(Math.floor(Math.random() * heroPool.length));
    }, HERO_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  const heroImage = heroPool[heroIdx];

  // Latest album = highest id, used to flag the first timeline node.
  const latestId = useMemo(() => Math.max(...galleryEvents.map((e) => e.id)), []);

  return (
    <div className={styles.page}>
      <div className={styles.gridLines} aria-hidden="true" />

      <main className={styles.main}>
        <section className={styles.hero}>
          <div>
            <h1 className={styles.heroH1}>
              Moments,
              <br />
              <span>mapped.</span>
            </h1>
            <p className={styles.heroSub}>
              Every flagship event leaves a trace. This is the log — hackathons, hunts,
              and the nights the lab stayed lit past hours.
            </p>
          </div>
          <div className={styles.heroVisual}>
            <Image
              key={heroImage.src}
              src={heroImage.src}
              alt=""
              width={1920}
              height={1280}
              sizes="(max-width: 860px) 100vw, 60vw"
              priority
              unoptimized
            />
            <div className={styles.heroFade} aria-hidden="true" />
            <div className={styles.heroTag}>{heroImage.eventName}</div>
            <div
              key={`bar-${heroImage.src}`}
              className={styles.heroBar}
              aria-hidden="true"
            >
              <div className={styles.heroBarFill} />
            </div>
          </div>
        </section>

        <section className={styles.timeline}>
          <div className={styles.rail} aria-hidden="true" />
          {galleryEvents.map((event, i) => (
            <TimelineCard
              key={event.id}
              event={event}
              index={i}
              latest={event.id === latestId}
              onOpen={(eventId, tileIdx) => setActive({ eventId, index: tileIdx })}
            />
          ))}
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaOrb} aria-hidden="true" />
          <h2 className={styles.ctaH2}>Got photos from an IoT Lab event?</h2>
          <p className={styles.ctaP}>
            Send us the drive link and we&apos;ll get them archived here.
          </p>
          <a
            href="mailto:iot.lab@kiit.ac.in"
            className={`${styles.btnExplore} ${styles.ctaA}`}
          >
            Email the lab
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </section>
      </main>

      <Lightbox
        event={activeEvent}
        index={active?.index ?? 0}
        open={active !== null}
        onClose={() => setActive(null)}
        onIndexChange={(next) => setActive((a) => (a ? { ...a, index: next } : a))}
      />
    </div>
  );
};

export default GalleryPage;
