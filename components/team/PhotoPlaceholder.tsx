// Subtle, muted placeholder for people without a profile photo.
// Deliberately quiet: a soft neutral wash and a small monogram, no loud
// coloured circle or oversized initials, so a missing photo reads as a
// design choice rather than a broken asset.

function monogram(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

interface Props {
  name: string;
  className?: string;
}

const PhotoPlaceholder = ({ name, className = '' }: Props) => (
  <div
    aria-hidden
    className={`relative grid place-items-center select-none bg-gradient-to-br from-gray-100 to-gray-200 ${className}`}
  >
    {/* faint person glyph */}
    <svg
      viewBox="0 0 24 24"
      className="h-1/2 w-1/2 text-gray-300"
      fill="currentColor"
    >
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-4.42 0-8 2.69-8 6v2h16v-2c0-3.31-3.58-6-8-6Z" />
    </svg>
    {/* small monogram sits over the glyph for a touch of identity */}
    <span className="absolute text-[15%] font-semibold tracking-wide text-gray-400">
      {monogram(name)}
    </span>
  </div>
);

export default PhotoPlaceholder;
