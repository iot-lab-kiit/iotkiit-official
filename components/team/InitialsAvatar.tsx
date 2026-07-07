// Deterministic initials avatar — used when a member has no photo.
// Colours are drawn from the IoT-blue palette so the whole grid feels like one system.

const PALETTE = [
  ['#4763b7', '#2460DA'],
  ['#2054BF', '#5B88E3'],
  ['#3750a1', '#657abf'],
  ['#173C88', '#3F74DF'],
  ['#204381', '#405aad'],
  ['#12306D', '#2460DA'],
];

function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '?';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) | 0;
  return Math.abs(h);
}

interface Props {
  name: string;
  className?: string;
}

const InitialsAvatar = ({ name, className = '' }: Props) => {
  const [from, to] = PALETTE[hash(name) % PALETTE.length];
  return (
    <div
      aria-hidden
      className={`grid place-items-center font-semibold text-white select-none ${className}`}
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      <span className="text-[38%] leading-none tracking-wide">{initials(name)}</span>
    </div>
  );
};

export default InitialsAvatar;
