import Image from 'next/image';
import PhotoPlaceholder from './PhotoPlaceholder';
import type { Person } from '@/data/team';
import { LinkedinIcon, GithubIcon } from '@/components/Icons';

const normalize = (url: string) =>
  url.startsWith('http') ? url : `https://${url}`;

const MemberCard = ({ person }: { person: Person }) => {
  const hasSocials = person.linkedin || person.github;
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl shadow-glass transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:-translate-y-1.5">
      <div className="relative aspect-square w-full overflow-hidden bg-black/30">
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

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Slide-up Social Dock */}
        {hasSocials && (
          <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-center gap-3 bg-[#030712]/90 backdrop-blur-md py-3 text-white transition-transform duration-300 group-hover:translate-y-0 border-t border-white/10">
            {person.linkedin && (
              <a
                href={normalize(person.linkedin)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${person.name} on LinkedIn`}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/30 text-cyan-300 hover:bg-blue-600 hover:text-white transition-all hover:scale-110"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            )}
            {person.github && (
              <a
                href={normalize(person.github)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${person.name} on GitHub`}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-gray-200 hover:bg-white hover:text-black transition-all hover:scale-110"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col items-center justify-between p-4 text-center">
        <p className="w-full truncate text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
          {person.name}
        </p>
        {person.domain && (
          <span className="mt-2 inline-block rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold text-cyan-300">
            {person.domain}
          </span>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
