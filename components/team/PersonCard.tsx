import Image from 'next/image';
import PhotoPlaceholder from './PhotoPlaceholder';
import type { Person } from '@/data/team';

interface Props {
  person: Person;
  featured?: boolean; // coordinators get the larger, highlighted treatment
  hideDomain?: boolean; // leads already say e.g. "App Dev Lead" in their role
}

const Social = ({ href, label, children }: { href: string; label: string; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={label}
    aria-label={label}
    className="text-gray-400 transition-colors hover:text-primary-default"
  >
    {children}
  </a>
);

const PersonCard = ({ person, featured = false, hideDomain = false }: Props) => {
  const size = featured ? 'w-40 h-40 sm:w-44 sm:h-44' : 'w-32 h-32';
  const objectPosition = person.objectPosition ?? 'object-top';
  return (
    <div
      className={`group flex h-full flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg ${
        featured ? 'sm:p-8' : ''
      }`}
    >
      <div className={`relative ${size} overflow-hidden rounded-2xl ring-1 ring-gray-100`}>
        {person.photo ? (
          <Image
            src={person.photo}
            alt={person.name}
            fill
            sizes="(max-width: 640px) 40vw, 200px"
            className={`object-cover ${objectPosition} transition-transform duration-500 group-hover:scale-105`}
          />
        ) : (
          <PhotoPlaceholder name={person.name} className="h-full w-full rounded-2xl" />
        )}
      </div>

      <h3 className={`mt-5 font-bold tracking-tight text-gray-900 ${featured ? 'text-xl' : 'text-lg'}`}>
        {person.name}
      </h3>
      {person.role && (
        <p className={`mt-1 font-medium text-primary-default ${featured ? 'text-sm' : 'text-[13px]'}`}>
          {person.role}
        </p>
      )}
      {person.domain && !hideDomain && (
        <span className="mt-3 inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700">
          {person.domain}
        </span>
      )}

      {(person.linkedin || person.github || person.email) && (
        <div className="mt-4 flex items-center gap-4">
          {person.linkedin && (
            <Social href={person.linkedin} label="LinkedIn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49V23H8V8z" />
              </svg>
            </Social>
          )}
          {person.github && (
            <Social href={person.github} label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
              </svg>
            </Social>
          )}
          {person.email && (
            <Social href={`mailto:${person.email}`} label="Email">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 6L2 7" />
              </svg>
            </Social>
          )}
        </div>
      )}
    </div>
  );
};

export default PersonCard;
