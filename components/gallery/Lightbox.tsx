'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Gallery.module.css';
import type { GalleryEvent } from '@/data/gallery';

interface Props {
  event: GalleryEvent | null;
  index: number;
  open: boolean;
  onClose: () => void;
  onIndexChange: (next: number) => void;
}

const SPINNER_DELAY = 150;

const FitIcon = () => (
  <svg
    className={styles.iFit}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M15 3h6v6M9 21H3v-6M21 3l-8 8M3 21l8-8" />
  </svg>
);

const CropIcon = () => (
  <svg
    className={styles.iCrop}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 4l-8 8M4 20l8-8M14 20h6v-6M10 4H4v6" />
  </svg>
);

const DownloadIcon = () => (
  <>
    <svg
      className={styles.iDl}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3v11M7.5 10.5L12 15l4.5-4.5M5 20h14" />
    </svg>
    <svg
      className={styles.iOk}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 13l4 4L19 7" />
    </svg>
  </>
);

const CollageIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M3 3h7v5H3zM3 11h7v10H3zM14 3h7v10h-7zM14 16h7v5h-7z" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    aria-hidden="true"
  >
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const Lightbox = ({ event, index, open, onClose, onIndexChange }: Props) => {
  // Fit state persists across navigation
  const [fitContain, setFitContain] = useState(false);
  // image-load state
  const [loading, setLoading] = useState(true);
  const [errored, setErrored] = useState(false);
  // download feedback
  const [dlState, setDlState] = useState<'idle' | 'busy' | 'done'>('idle');
  // token to invalidate stale decoders
  const loadToken = useRef(0);
  // thumbnails strip scroll container
  const thumbsRef = useRef<HTMLDivElement>(null);
  // Per-thumb "image has decoded" tracker. Held in React state — not just
  // classList.add() on the button — because React's className update on
  // re-render (e.g. when `index` changes and `is-active` flips) overwrites
  // the class attribute entirely, dropping any classList additions and
  // leaving the image at opacity:0 with the light button background showing.
  const [loadedThumbs, setLoadedThumbs] = useState<Set<number>>(new Set());
  // Refs into each thumbnail <img>, used to catch cached images whose
  // `onLoad` event may not fire on remount.
  const thumbImgRefs = useRef<(HTMLImageElement | null)[]>([]);

  const count = event?.images.length ?? 0;
  const src = event ? event.images[index] : null;

  /* -------- load lifecycle -------- */
  // Decode off-screen first so the visible <img> only ever points at
  // a fully decoded resource.
  useEffect(() => {
    if (!open || !src) return;
    const token = ++loadToken.current;
    setLoading(true);
    setErrored(false);

    const img = new window.Image();
    img.onload = () => {
      if (token !== loadToken.current) return;
      setLoading(false);
    };
    img.onerror = () => {
      if (token !== loadToken.current) return;
      setErrored(true);
      setLoading(false);
    };
    img.src = src;

    return () => {
      // invalidate on cleanup by bumping the token — captured at effect
      // creation so cleanup uses the same value React saw
      const myToken = token;
      if (loadToken.current === myToken) loadToken.current++;
    };
  }, [open, src]);

  /* -------- thumbnail strip: rebuild keys when event changes -------- */
  const thumbsKey = useMemo(() => event?.id ?? 'none', [event]);

  // Reset the loaded-set when the user switches albums. The thumbnails
  // are different files, so old flags would be misleading.
  useEffect(() => {
    setLoadedThumbs(new Set());
    thumbImgRefs.current = [];
  }, [event?.id]);

  // Mark a thumb loaded, idempotently. Errors also mark loaded so the
  // skeleton hides and the failed-state glyph can take over.
  const markLoaded = useCallback((i: number) => {
    setLoadedThumbs((prev) => {
      if (prev.has(i)) return prev;
      const next = new Set(prev);
      next.add(i);
      return next;
    });
  }, []);

  // Catch images that finished loading before React attached the onLoad
  // listener (browsers may fire load synchronously for cached entries).
  useEffect(() => {
    thumbImgRefs.current.forEach((img, i) => {
      if (img && img.complete && img.naturalWidth > 0) markLoaded(i);
    });
  });

  /* -------- reveal active thumbnail -------- */
  useEffect(() => {
    if (!open || !thumbsRef.current) return;
    const el = thumbsRef.current.children[index] as HTMLElement | undefined;
    if (!el) return;
    const left = el.offsetLeft;
    const right = left + el.offsetWidth;
    const c = thumbsRef.current;
    if (left < c.scrollLeft) c.scrollLeft = left - 12;
    else if (right > c.scrollLeft + c.clientWidth) c.scrollLeft = right - c.clientWidth + 12;
  }, [open, index, thumbsKey]);

  /* -------- keyboard shortcuts -------- */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') onIndexChange((index - 1 + count) % count);
      else if (e.key === 'ArrowRight') onIndexChange((index + 1) % count);
      else if (e.key === 'f' || e.key === 'F') setFitContain((v) => !v);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, index, count, onClose, onIndexChange]);

  /* -------- actions -------- */
  const step = useCallback(
    (dir: number) => onIndexChange((index + dir + count) % count),
    [index, count, onIndexChange],
  );

  const toggleFit = useCallback(() => setFitContain((v) => !v), []);

  const download = useCallback(async () => {
    if (!event) return;
    setDlState('busy');
    try {
      const res = await fetch(event.images[index], { mode: 'cors' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const blob = await res.blob();
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      const ext = event.images[index].split('.').pop();
      a.href = objectUrl;
      a.download = `${event.folder}-${String(index + 1).padStart(2, '0')}.${ext}`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      // Delay revoking — some browsers abort the save if it goes too early.
      setTimeout(() => URL.revokeObjectURL(objectUrl), 10000);
      setDlState('done');
      setTimeout(() => setDlState('idle'), 2000);
    } catch (err) {
      setDlState('idle');
      window.open(event.images[index], '_blank', 'noopener');
    }
  }, [event, index]);

  /* -------- frame state classes -------- */
  const frameCls = [
    styles.lbFrame,
    fitContain ? styles.isContain : '',
    loading ? styles.isLoading : '',
    errored ? styles.isError : '',
  ]
    .filter(Boolean)
    .join(' ');

  if (!open || !event) return null;

  return (
    <div
      className={`${styles.lightbox} ${open ? styles.open : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.lbStage}>
        <div className={frameCls}>
          {/* main image */}
          <Image
            src={event.images[index]}
            alt={`${event.eventName} — photo ${index + 1} of ${count}`}
            fill
            sizes="(max-width: 1000px) 88vw, 1000px"
            priority
            unoptimized
          />

          {/* loader */}
          <div className={styles.lbLoader} role="status" aria-live="polite">
            <span className={styles.spinner} aria-hidden="true" />
            <span className={styles.lbLoaderText}>LOADING…</span>
          </div>

          {/* error */}
          <div className={styles.lbError} role="alert">
            <span className={styles.lbErrorMark} aria-hidden="true">
              !
            </span>
            <span className={styles.lbLoaderText}>COULDN&apos;T LOAD IMAGE</span>
            <button
              type="button"
              className={styles.lbRetry}
              onClick={() => {
                setErrored(false);
                setLoading(true);
                const token = ++loadToken.current;
                const img = new window.Image();
                img.onload = () => {
                  if (token !== loadToken.current) return;
                  setLoading(false);
                };
                img.onerror = () => {
                  if (token !== loadToken.current) return;
                  setErrored(true);
                  setLoading(false);
                };
                img.src = event.images[index];
              }}
            >
              Retry
            </button>
          </div>

          {/* tools */}
          <div className={styles.lbTools}>
            <button
              id="lbFit"
              type="button"
              className={styles.lbBtn}
              aria-pressed={fitContain}
              aria-label={fitContain ? 'Crop to fill frame' : 'Show full picture'}
              title={fitContain ? 'Crop to fill (F)' : 'Show full picture (F)'}
              onClick={toggleFit}
            >
              <FitIcon />
              <CropIcon />
            </button>
            <Link
              id="lbCollage"
              href={`/collage?event=${event.id}`}
              className={styles.lbBtn}
              aria-label="Open collage view"
              title="Collage view"
            >
              <CollageIcon />
            </Link>
            <button
              id="lbDownload"
              type="button"
              className={`${styles.lbBtn} ${dlState === 'busy' ? styles.isBusy : ''} ${
                dlState === 'done' ? styles.isDone : ''
              }`}
              aria-label="Download photo"
              title="Download original"
              onClick={download}
            >
              <DownloadIcon />
            </button>
            <button
              id="lbClose"
              type="button"
              className={styles.lbBtn}
              aria-label="Close"
              onClick={onClose}
            >
              <CloseIcon />
            </button>
          </div>

          {/* prev/next nav */}
          <button
            id="lbPrev"
            type="button"
            className={`${styles.lbNav} ${styles.lbPrev}`}
            aria-label="Previous photo"
            onClick={() => step(-1)}
          >
            ‹
          </button>
          <button
            id="lbNext"
            type="button"
            className={`${styles.lbNav} ${styles.lbNext}`}
            aria-label="Next photo"
            onClick={() => step(1)}
          >
            ›
          </button>
        </div>

        <div className={styles.lbCap}>
          <span>{event.eventName}</span>
          <span>
            {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
          </span>
        </div>

        <div
          className={styles.lbThumbs}
          ref={thumbsRef}
          key={thumbsKey}
          role="tablist"
          aria-label="Album thumbnails"
        >
          {event.images.map((src, i) => (
            <button
              key={src}
              type="button"
              className={`${styles.lbThumb} ${i === index ? styles.isActive : ''} ${
                loadedThumbs.has(i) ? styles.isLoaded : ''
              }`}
              onClick={() => onIndexChange(i)}
              aria-label={`View photo ${i + 1} of ${count}`}
              aria-current={i === index ? 'true' : undefined}
            >
              <span className={styles.skeleton} aria-hidden="true" />
              <Image
                src={src}
                alt=""
                width={192}
                height={120}
                sizes="96px"
                loading="lazy"
                unoptimized
                ref={(el) => {
                  // next/image's ref points at the underlying <img>
                  thumbImgRefs.current[i] = el;
                  // Sync state if the image is already cached/loaded
                  if (el && el.complete && el.naturalWidth > 0) markLoaded(i);
                }}
                onLoad={() => markLoaded(i)}
                onError={() => markLoaded(i)}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
