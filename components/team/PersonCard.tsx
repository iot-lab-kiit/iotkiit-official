import Image from 'next/image';
import PhotoPlaceholder from './PhotoPlaceholder';
import type { Person } from '@/data/team';
import { Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '@/components/Icons';

interface Props {
 person: Person;
 featured?: boolean;
 hideDomain?: boolean;
}

const PersonCard = ({ person, featured = false, hideDomain = false }: Props) => {
 const size = featured ? 'w-40 h-40 sm:w-48 sm:h-48' : 'w-32 h-32';
 const objectPosition = person.objectPosition ?? 'object-top';

 return (
 <div
 className={`group relative flex h-full flex-col items-center justify-between border border-brand-blue bg-brand-blue/10 p-6 text-center -2xl shadow-brutal transition-all duration-300 hover:border-brand-blue-400/40 hover:bg-brand-blue/10 hover:-translate-y-2 ${
 featured ? 'sm:p-8' : ''
 }`}
 >
 {/* Background Glow */}
 <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 bg-brand-blue/10 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

 <div className="flex flex-col items-center w-full">
 {/* Avatar Ring */}
 <div className={`relative ${size} overflow-hidden border-2 border-brand-blue p-1 bg-brand-blue/10 shadow-brutal transition-transform duration-500 group-hover:scale-105 group-hover:border-brand-blue-400/50`}>
 <div className="relative h-full w-full overflow-hidden ">
 {person.photo ? (
 <Image
 src={person.photo}
 alt={person.name}
 fill
 sizes="(max-width: 640px) 40vw, 200px"
 className={`object-cover ${objectPosition}`}
 />
 ) : (
 <PhotoPlaceholder name={person.name} className="h-full w-full" />
 )}
 </div>
 </div>

 {/* Copy */}
 <h3 className={`mt-5 font-bold tracking-tight text-brand-blue group-hover:text-brand-blue transition-colors ${featured ? 'text-xl sm:text-2xl' : 'text-lg'}`}>
 {person.name}
 </h3>
 {person.role && (
 <p className={`mt-1 font-mono font-medium text-brand-blue ${featured ? 'text-sm' : 'text-xs'}`}>
 {person.role}
 </p>
 )}
 {person.domain && !hideDomain && (
 <span className="mt-3 inline-block border border-brand-blue-400/20 bg-brand-blue/10 px-3 py-1 font-mono text-[11px] font-semibold text-brand-blue">
 {person.domain}
 </span>
 )}
 </div>

 {/* Social Links */}
 {(person.linkedin || person.github || person.email) && (
 <div className="mt-6 flex items-center justify-center gap-3 pt-4 border-t border-brand-blue w-full">
 {person.linkedin && (
 <a
 href={person.linkedin}
 target="_blank"
 rel="noopener noreferrer"
 title="LinkedIn"
 className="flex h-8 w-8 items-center justify-center bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/10 hover:text-brand-blue transition-all hover:scale-110"
 >
 <LinkedinIcon className="h-4 w-4" />
 </a>
 )}
 {person.github && (
 <a
 href={person.github}
 target="_blank"
 rel="noopener noreferrer"
 title="GitHub"
 className="flex h-8 w-8 items-center justify-center bg-brand-blue/10 text-gray-200 hover:bg-white hover:text-black transition-all hover:scale-110"
 >
 <GithubIcon className="h-4 w-4" />
 </a>
 )}
 {person.email && (
 <a
 href={`mailto:${person.email}`}
 title="Email"
 className="flex h-8 w-8 items-center justify-center bg-brand-blue/10 text-brand-blue hover:bg-brand-blue/10 hover:text-brand-blue transition-all hover:scale-110"
 >
 <Mail className="h-4 w-4" />
 </a>
 )}
 </div>
 )}
 </div>
 );
};

export default PersonCard;
