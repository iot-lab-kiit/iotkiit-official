'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { galleryEvents } from '@/data/gallery';
import styles from '@/styles/Gallery.module.css';

const CollagePage = () => {
  // ?event=<id>, default to first album
  const [eventId, setEventId] = useState<number>(galleryEvents[0].id);

  // Read ?event= from the URL on mount, then keep state in sync with the
  // tab clicks via pushState so a back-button pop restores the previous
  // album.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const idParam = Number(params.get('event'));
    if (Number.isFinite(idParam) && galleryEvents.some((e) => e.id === idParam)) {
      setEventId(idParam);
    }
  }, []);

  const ev = useMemo(() => galleryEvents.find((e) => e.id === eventId)!, [eventId]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Page metadata via document.title — keeps a tab identifiable when many
  // are open.
  useEffect(() => {
    document.title = `${ev.eventName} — Collage · IoT Lab, KIIT`;
  }, [ev]);

  const ratioFor = (i: number) => {
    const d = ev.dims[i] || { w: 3, h: 2 };
    return d.w / d.h;
  };

  return (
    <div className={styles.page}>
      <div className={styles.gridLines} aria-hidden="true" />

      <main className={styles.collageMain}>
        <section className={styles.collageHead}>
          <a className={styles.backLink} href="/gallery">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            All events
          </a>
          <h1>{ev.eventName}</h1>
          <p>{ev.blurb}</p>

          <div className={styles.cTabs} role="group" aria-label="Switch album">
            {galleryEvents.map((e) => (
              <a
                key={e.id}
                href={`/collage?event=${e.id}`}
                className={`${styles.cTab} ${e.id === eventId ? styles.isActive : ''}`}
                aria-current={e.id === eventId ? 'true' : undefined}
              >
                {e.eventName}
                <span className="n">{String(e.images.length).padStart(2, '0')}</span>
              </a>
            ))}
          </div>
        </section>

        <section className={styles.collage} ref={containerRef} aria-live="polite">
          {ev.images.map((src, i) => {
            const ratio = ratioFor(i);
            return (
              <a
                key={src}
                href={src}
                target="_blank"
                rel="noopener"
                className={styles.cItem}
                style={{ ['--r' as string]: ratio.toFixed(4) } as React.CSSProperties}
                aria-label={`${ev.eventName} — photo ${i + 1} of ${ev.images.length} (opens full size)`}
              >
                <span className={styles.skeleton} aria-hidden="true" />
                <Image
                  src={src}
                  alt=""
                  width={Math.round((ratio * 256) / 1)}
                  height={256}
                  sizes="(max-width: 560px) 33vw, (max-width: 900px) 25vw, 16vw"
                  loading="lazy"
                  unoptimized
                  onLoad={(e) => {
                    const item = e.currentTarget.closest('a');
                    if (item) item.classList.add(styles.isLoaded);
                  }}
                  onError={(e) => {
                    const item = e.currentTarget.closest('a');
                    if (item) item.classList.add(styles.isFailed);
                  }}
                />
                <span className={styles.cIdx}>{String(i + 1).padStart(2, '0')}</span>
              </a>
            );
          })}

          {/* Fillers absorb leftover space on the last row so its tiles keep
              the target height instead of stretching to fill the width on
              their own. */}
          {Array.from({ length: 6 }, (_, i) => (
            <span key={i} className={styles.cFill} aria-hidden="true" />
          ))}
        </section>

        <p className={styles.cFoot}>
          {String(ev.images.length).padStart(2, '0')} PHOTOS · CLICK ANY IMAGE FOR FULL SIZE
        </p>
      </main>
    </div>
  );
};

export default CollagePage;
