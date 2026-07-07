import Image from 'next/image';
import PhotoPlaceholder from './PhotoPlaceholder';
import type { Person } from '@/data/team';

// Compact card for the full member grid. Photo if available, else a muted placeholder.
// Domain is shown only when known; absent domains simply don't render a tag.
const MemberCard = ({ person }: { person: Person }) => {
  return (
    <div className="group flex items-center gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg">
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg ring-1 ring-gray-100">
        {person.photo ? (
          <Image
            src={person.photo}
            alt={person.name}
            fill
            sizes="48px"
            className={`object-cover ${person.objectPosition ?? 'object-top'}`}
          />
        ) : (
          <PhotoPlaceholder name={person.name} className="h-full w-full rounded-lg" />
        )}
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-gray-800">{person.name}</p>
        {person.domain && (
          <p className="truncate text-xs font-medium text-primary-500">{person.domain}</p>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
