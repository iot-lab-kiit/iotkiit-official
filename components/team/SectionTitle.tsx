interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

// Consistent, centered section heading used across the Team & Alumni pages.
const SectionTitle = ({ eyebrow, title, subtitle }: Props) => (
  <div className="mx-auto mb-12 max-w-2xl text-center">
    <p className="mb-3 inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-700">
      {eyebrow}
    </p>
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-4 text-base font-light text-gray-500">{subtitle}</p>}
  </div>
);

export default SectionTitle;
