import type { Alum } from '@/data/alumni';
import { LinkedinIcon, GithubIcon } from '@/components/Icons';

const normalize = (url: string) =>
  url.startsWith('http') ? url : `https://${url}`;

const AlumCard = ({ alum, featured = false }: { alum: Alum; featured?: boolean }) => {
  return (
    <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-2xl shadow-glass transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:-translate-y-1.5">
      <span
        className={`absolute inset-x-0 top-0 h-1 transition-all duration-300 ${
          featured ? 'bg-gradient-to-r from-blue-600 to-cyan-400 shadow-glow-blue' : 'bg-white/10 group-hover:bg-cyan-400'
        }`}
      />

      <div className="space-y-1 mt-1">
        <p
          className={`font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors ${
            featured ? 'text-base sm:text-lg' : 'text-sm'
          }`}
        >
          {alum.name}
        </p>
        {alum.role && (
          <p className="font-mono text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">
            {alum.role}
          </p>
        )}
      </div>

      {(alum.linkedin || alum.github) && (
        <div className="mt-4 flex items-center justify-center gap-3 pt-3 border-t border-white/10">
          {alum.linkedin && (
            <a
              href={normalize(alum.linkedin)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${alum.name} on LinkedIn`}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600/30 text-cyan-300 hover:bg-blue-600 hover:text-white transition-all hover:scale-110"
            >
              <LinkedinIcon className="h-3.5 w-3.5" />
            </a>
          )}
          {alum.github && (
            <a
              href={normalize(alum.github)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${alum.name} on GitHub`}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-gray-200 hover:bg-white hover:text-black transition-all hover:scale-110"
            >
              <GithubIcon className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default AlumCard;
