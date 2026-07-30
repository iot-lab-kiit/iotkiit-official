'use client';

import { useMemo, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FiSearch, FiSliders, FiX } from 'react-icons/fi';
import Stagger from '@/components/Stagger';
import AlumCard from '@/components/team/AlumCard';
import type { Alum } from '@/data/alumni';

type SortOrder = 'az' | 'za';

interface Props {
  members: Alum[];
}

// Search + sort controls for the (often long) Members list. Kept as its own
// client component so the rest of the Alumni page can stay a server
// component. Filtering matches on name and role, case-insensitively, and the
// sort dropdown is a plain icon trigger (no "Filter" button) with a small
// menu for A-Z / Z-A ordering.
const MemberSearch = ({ members }: Props) => {
  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('az');

  const filteredMembers = useMemo(() => {
    const q = query.trim().toLowerCase();

    const filtered = q
      ? members.filter((m) => {
          const name = m.name.toLowerCase();
          const role = (m.role ?? '').toLowerCase();
          return name.includes(q) || role.includes(q);
        })
      : members;

    const sorted = [...filtered].sort((a, b) =>
      sortOrder === 'az'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name),
    );

    return sorted;
  }, [members, query, sortOrder]);

  return (
    <div>
      {/* Search + filter row */}
      {/* relative + z-20 puts this whole row in its own stacking context above
          the results grid below, so the dropdown never ends up rendered
          behind a card (the Stagger cards create their own stacking context
          via their reveal transform, which can otherwise out-paint a
          same-level z-index dropdown). */}
      <div className="relative z-20 mb-10 flex w-full items-center gap-3">
        <div className="relative flex-1">
          <FiSearch
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search members by name or role..."
            aria-label="Search members"
            className="w-full rounded-full border border-gray-200 bg-white py-3 pl-11 pr-11 text-sm text-gray-900 shadow-sm outline-none transition-colors placeholder:text-gray-400 focus:border-primary-default focus:ring-2 focus:ring-primary-100"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-primary-default"
            >
              <FiX size={16} />
            </button>
          )}
        </div>

        {/* Sort dropdown, icon-only trigger */}
        <Menu as="div" className="relative shrink-0">
          <Menu.Button
            aria-label="Sort members"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:border-primary-200 hover:text-primary-default focus:outline-none focus:ring-2 focus:ring-primary-100"
          >
            <FiSliders size={18} />
          </Menu.Button>

          <Transition
            enter="transition ease-out duration-150"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-30 mt-2 w-40 origin-top-right rounded-xl border border-gray-100 bg-white p-1 shadow-lg focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setSortOrder('az')}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm ${
                      active ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
                    } ${sortOrder === 'az' ? 'font-semibold' : 'font-normal'}`}
                  >
                    Sort A-Z
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setSortOrder('za')}
                    className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm ${
                      active ? 'bg-primary-50 text-primary-700' : 'text-gray-700'
                    } ${sortOrder === 'za' ? 'font-semibold' : 'font-normal'}`}
                  >
                    Sort Z-A
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      {/* Results */}
      {filteredMembers.length > 0 ? (
        <Stagger
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 md:grid-cols-4 lg:grid-cols-5"
          childClassName="h-full"
          step={60}
        >
          {filteredMembers.map((a, i) => (
            <AlumCard key={`${a.name}-${i}`} alum={a} />
          ))}
        </Stagger>
      ) : (
        <p className="py-12 text-center text-sm text-gray-500">
          No members match &ldquo;{query}&rdquo;.
        </p>
      )}
    </div>
  );
};

export default MemberSearch;