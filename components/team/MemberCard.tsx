import Image from 'next/image';
import InitialsAvatar from './InitialsAvatar';
import type { Person } from '@/data/team';

// Compact card for the full member grid. Photo if available, else initials.
// Domain is shown only when known — absent domains simply don't render a tag.
const MemberCard = ({ person }: { person: Person }) => {
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition-all duration-200 hover:border-primary-100 hover:shadow-md">
      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg ring-1 ring-gray-100">
        {person.photo ? (
          <Image src={person.photo} alt={person.name} fill sizes="48px" className="object-cover" />
        ) : (
          <InitialsAvatar name={person.name} className="h-full w-full" />
        )}
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-gray-800">{person.name}</p>
        {person.domain && (
          <p className="truncate text-xs text-primary-500">{person.domain}</p>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
