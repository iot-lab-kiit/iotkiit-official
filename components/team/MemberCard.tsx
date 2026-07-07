import Image from 'next/image';
import PhotoPlaceholder from './PhotoPlaceholder';
import type { Person } from '@/data/team';

const normalize = (url: string) =>
  url.startsWith('http') ? url : `https://${url}`;

// Photo-forward member card. Shows a real headshot when we have one, otherwise a
// clean colored-initials avatar (never a broken image). Social links live in a
// dock that slides up over the photo on hover, keeping the resting card tidy.
const MemberCard = ({ person }: { person: Person }) => {
  const hasSocials = person.linkedin || person.github;
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg">
      <div className="relative aspect-square w-full overflow-hidden bg-gray-50">
        {person.photo ? (
          <Image
            src={person.photo}
            alt={person.name}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 25vw, 200px"
            className={`object-cover ${person.objectPosition ?? 'object-top'} transition-transform duration-500 group-hover:scale-105`}
          />
        ) : (
          <PhotoPlaceholder name={person.name} className="h-full w-full" />
        )}

        {/* Slide-up social dock */}
        {hasSocials && (
          <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-4 bg-gradient-to-t from-black/70 to-black/0 pb-3 pt-8 text-white transition-transform duration-300 group-hover:translate-y-0">
            {person.linkedin && (
              <a
                href={normalize(person.linkedin)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${person.name} on LinkedIn`}
                className="transition-transform hover:scale-110"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49V23H8V8z" />
                </svg>
              </a>
            )}
            {person.github && (
              <a
                href={normalize(person.github)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${person.name} on GitHub`}
                className="transition-transform hover:scale-110"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col items-center px-3 py-4 text-center">
        <p className="w-full truncate text-sm font-semibold tracking-tight text-gray-800">
          {person.name}
        </p>
        {person.domain && (
          <span className="mt-2 inline-block rounded-full bg-primary-50 px-2.5 py-0.5 text-[11px] font-medium text-primary-700">
            {person.domain}
          </span>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
