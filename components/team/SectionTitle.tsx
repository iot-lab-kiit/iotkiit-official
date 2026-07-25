interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
}: Props) => (
  <div className={`mb-12 ${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl space-y-3`}>
    {eyebrow && (
      <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300 backdrop-blur-xl">
        {eyebrow}
      </span>
    )}
    <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
      {title}
    </h2>
    {subtitle && (
      <p className="text-base font-light text-gray-300/90 sm:text-lg">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionTitle;
