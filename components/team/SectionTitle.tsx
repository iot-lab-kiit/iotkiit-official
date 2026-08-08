interface Props {
  title: string;
  subtitle?: string;
}

// Consistent, centered section heading used across the Team & Alumni pages.
const SectionTitle = ({ title, subtitle }: Props) => (
  <div className="mx-auto mb-12 max-w-2xl text-center">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
    {subtitle && <p className="mt-4 text-base font-light text-gray-500">{subtitle}</p>}
  </div>
);

export default SectionTitle;
