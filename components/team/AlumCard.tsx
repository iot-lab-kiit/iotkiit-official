import type { Alum } from '@/data/alumni';
import { LinkedinIcon, GithubIcon } from '@/components/Icons';

const normalize = (url: string) =>
 url.startsWith('http') ? url : `https://${url}`;

const AlumCard = ({ alum, featured = false }: { alum: Alum; featured?: boolean }) => {
 return (
 <div className="group relative flex h-full flex-col justify-between overflow-hidden border border-brand-blue bg-brand-blue/10 p-5 text-center -2xl shadow-brutal transition-all duration-300 hover:border-brand-blue-400/40 hover:bg-brand-blue/10 hover:-translate-y-1.5">
 <span
 className={`absolute inset-x-0 top-0 h-1 transition-all duration-300 ${
 featured ? 'bg-gradient-to-r from-blue-600 to-cyan-400 shadow-brutal' : 'bg-brand-blue/10 group-hover:bg-brand-blue/10'
 }`}
 />

 <div className="space-y-1 mt-1">
 <p
 className={`font-bold tracking-tight text-brand-blue group-hover:text-brand-blue transition-colors ${
 featured ? 'text-base sm:text-lg' : 'text-sm'
 }`}
 >
 {alum.name}
 </p>
 {alum.role && (
 <p className="font-mono text-[11px] font-semibold text-brand-blue uppercase tracking-wider">
 {alum.role}
 </p>
 )}
 </div>

 {(alum.linkedin || alum.github) && (
 <div className="mt-4 flex items-center justify-center gap-3 pt-3 border-t border-brand-blue">
 {alum.linkedin && (
 <a
 href={normalize(alum.linkedin)}
 target="_blank"
 rel="noopener noreferrer"
 aria-label={`${alum.name} on LinkedIn`}
 className="flex h-7 w-7 items-center justify-center bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/10 hover:text-brand-blue transition-all hover:scale-110"
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
 className="flex h-7 w-7 items-center justify-center bg-brand-blue/10 text-gray-200 hover:bg-white hover:text-black transition-all hover:scale-110"
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
