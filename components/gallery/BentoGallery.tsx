"use client";
import { useState } from "react";
import Image from "next/image";

// A single tile: shimmer skeleton until the image decodes, then a soft cross-fade.
// CSS-only (no motion library) so it ships in Phase 1 with zero new dependencies.
function ImageTile({
  src,
  alt,
  index,
  className = "",
}: {
  src: string;
  alt: string;
  index: number;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`group relative animate-tile-in overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-[#8B9FDE]/40 ${className}`}
      // stagger the reveal so the collage assembles rather than snapping in
      style={{ animationDelay: `${Math.min(index, 10) * 60}ms` }}
    >
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/[0.04] to-white/10" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
        className={`object-cover transition-all duration-[900ms] ease-out group-hover:scale-110 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        onLoadingComplete={() => setLoaded(true)}
      />
      {/* base sheen + hover-deepening vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
    </div>
  );
}

// Bento layout: a repeating rhythm of feature / tall / wide / small tiles so the
// grid reads as an editorial collage rather than a uniform thumbnail wall.
const PATTERN = [
  "col-span-2 row-span-2 h-72 md:h-80", // large feature
  "col-span-1 row-span-1 h-[8.5rem] md:h-36", // small
  "col-span-1 row-span-1 h-[8.5rem] md:h-36", // small
  "col-span-1 row-span-2 h-72 md:h-80", // tall
  "col-span-2 row-span-1 h-[8.5rem] md:h-36", // wide
  "col-span-1 row-span-1 h-[8.5rem] md:h-36", // small
  "col-span-1 row-span-1 h-[8.5rem] md:h-36", // small
  "col-span-2 row-span-1 h-[8.5rem] md:h-36", // wide
  "col-span-1 row-span-1 h-[8.5rem] md:h-36", // small
  "col-span-1 row-span-1 h-[8.5rem] md:h-36", // small
  "col-span-1 row-span-1 h-[8.5rem] md:h-36", // small
];

const BentoGallery = ({ images }: { images: string[] }) => {
  return (
    <div className="mt-6 grid auto-rows-min grid-cols-3 gap-3 md:grid-cols-4 md:gap-4 lg:grid-cols-6">
      {images.map((src, idx) => (
        <div key={src} className={PATTERN[idx % PATTERN.length]}>
          <ImageTile
            src={src}
            index={idx}
            alt={`gallery photo ${idx + 1}`}
            className="h-full w-full"
          />
        </div>
      ))}
    </div>
  );
};

export default BentoGallery;
