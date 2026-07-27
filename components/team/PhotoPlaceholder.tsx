// Clean colored-initials avatar for people without a profile photo.
// A soft, deterministic tint derived from the name (so each person keeps a
// stable colour) with clear initials — reads as an intentional avatar, never
// as a broken image.

function initials(name: string): string {
 const parts = name.trim().split(/\s+/).filter(Boolean);
 if (parts.length === 0) return '?';
 if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
 return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// stable hue in [0,360) from the name
function hue(name: string): number {
 let h = 0;
 for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % 360;
 return h;
}

interface Props {
 name: string;
 className?: string;
}

const PhotoPlaceholder = ({ name, className = '' }: Props) => {
 const h = hue(name);
 return (
 <div
 aria-hidden
 className={`grid select-none place-items-center ${className}`}
 style={{
 background: `linear-gradient(135deg, hsl(${h} 65% 90%), hsl(${(h + 40) % 360} 60% 82%))`,
 }}
 >
 <span
 className="font-bold leading-none tracking-wide text-[clamp(1.1rem,32%,2.5rem)]"
 style={{ color: `hsl(${h} 45% 38%)` }}
 >
 {initials(name)}
 </span>
 </div>
 );
};

export default PhotoPlaceholder;
