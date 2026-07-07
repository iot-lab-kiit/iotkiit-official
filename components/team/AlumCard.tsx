import type { Alum } from '@/data/alumni';

const normalize = (url: string) =>
  url.startsWith('http') ? url : `https://${url}`;

// Alumni photos couldn't be recovered from the old CMS, so rather than a page
// full of identical placeholders we use a clean, text-only card: name, role and
// socials. A slim accent bar carries the brand colour and gives leads a touch
// more visual weight than plain members.
const AlumCard = ({ alum, featured = false }: { alum: Alum; featured?: boolean }) => {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg">
      <span
        className={`absolute inset-x-0 top-0 h-1 ${
          featured ? 'bg-primary-default' : 'bg-primary-100'
        }`}
      />
      <p
        className={`font-semibold tracking-tight text-gray-900 ${
          featured ? 'text-base' : 'text-sm'
        }`}
      >
        {alum.name}
      </p>
      {alum.role && (
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary-500">
          {alum.role}
        </p>
      )}
      {(alum.linkedin || alum.github) && (
        <div className="mt-4 flex items-center justify-center gap-3">
          {alum.linkedin && (
            <a
              href={normalize(alum.linkedin)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${alum.name} on LinkedIn`}
              className="text-gray-400 transition-colors hover:text-primary-default"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49V23H8V8z" />
              </svg>
            </a>
          )}
          {alum.github && (
            <a
              href={normalize(alum.github)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${alum.name} on GitHub`}
              className="text-gray-400 transition-colors hover:text-primary-default"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
              </svg>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default AlumCard;
