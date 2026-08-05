'use client';

import Image from 'next/image';
import styles from '@/styles/Gallery.module.css';
import type { GalleryEvent } from '@/data/gallery';

interface Props {
  event: GalleryEvent;
  index: number;
  latest?: boolean;
  onOpen: (eventId: number, tileIdx: number) => void;
}

const TimelineCard = ({ event, index, latest, onOpen }: Props) => {
  const cover = event.images[0];
  const tile2 = event.images[1];
  const tile3 = event.images[2];
  const more = event.images.length - 3;

  return (
    <article className={`${styles.event} ${latest ? styles.isLatest : ''}`}>
      <div className={styles.nodeCol}>
        <span className={styles.node} />
      </div>
      <div className={styles.eventBody}>
        <div className={styles.photoGrid}>
          <button
            type="button"
            className={styles.tile}
            onClick={() => onOpen(event.id, 0)}
            aria-label={`${event.eventName} — open first photo`}
          >
            <Image
              src={cover}
              alt={`${event.eventName} main photo`}
              width={640}
              height={420}
              sizes="(max-width: 900px) 100vw, 50vw"
              unoptimized
            />
            <div className={styles.tileTint} aria-hidden="true" />
            <div className={styles.tileShade} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={`${styles.tile} ${styles.small}`}
            onClick={() => onOpen(event.id, 1)}
            aria-label={`${event.eventName} — open photo 2`}
          >
            <Image
              src={tile2}
              alt=""
              width={384}
              height={256}
              sizes="(max-width: 900px) 50vw, 25vw"
              unoptimized
            />
            <div className={styles.tileTint} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={`${styles.tile} ${styles.small}`}
            onClick={() => onOpen(event.id, 2)}
            aria-label={`${event.eventName} — open photo 3`}
          >
            <Image
              src={tile3}
              alt=""
              width={384}
              height={256}
              sizes="(max-width: 900px) 50vw, 25vw"
              unoptimized
            />
            <div className={styles.tileTint} aria-hidden="true" />
            {more > 0 && (
              <div className={styles.tileMore} aria-hidden="true">
                +{more}
              </div>
            )}
          </button>
        </div>
        <div className={styles.eventInfo}>
          <span className={styles.eventIdx}>
            {String(index + 1).padStart(2, '0')} / FLAGSHIP ·{' '}
            {event.date.toUpperCase()}
          </span>
          <h3 className={styles.eventH3}>{event.eventName}</h3>
          <p className={styles.eventDate}>{event.blurb}</p>
          <p className={styles.eventDesc}>
            {event.eventName === 'Encode 4.0' &&
              "The lab's flagship competitive programming challenge returned for a fourth year, packing the room with 100+ solvers chasing a single leaderboard."}
            {event.eventName === 'Phantom Flag' &&
              'Teams chased cryptic clues room to room — jetpacks, androids, and a phantom flag hidden somewhere on campus, found only after hours of lateral thinking.'}
            {event.eventName === 'Innovance 3.0' &&
              'A semester of builds got its moment on stage — demos, mentor feedback, and faculty handing out mementos to the projects that stood out.'}
          </p>
          <div className={styles.eventFooter}>
            <button
              type="button"
              className={styles.btnExplore}
              onClick={() => onOpen(event.id, 0)}
            >
              View album
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
            <span className={styles.photoCount}>
              {String(event.images.length).padStart(2, '0')} PHOTOS
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TimelineCard;
