import Image from 'next/image';
import Stagger from '@/components/Stagger';
import SectionTitle from '@/components/team/SectionTitle';
import AlumCard from '@/components/team/AlumCard';
import MemberSearch from '@/components/alumni/MemberSearch';
import { TypewriterEffect } from '@/components/animations/TypeWriter';
import { alumni } from '@/data/alumni';

export const metadata = {
  title: 'Alumni | IoT Lab KIIT',
  description:
    'The previous members of IoT Lab KIIT, whose work and ideas still shape the lab.',
};

const coordinators = alumni.filter((a) => a.tier === 'coordinator');
const leads = alumni.filter((a) => a.tier === 'lead');
const mentors = alumni.filter((a) => a.tier === 'mentor');
const members = alumni.filter((a) => a.tier === 'member');

// Complete alumni list for the searchable directory
const allMembers = alumni;

const Alumni = () => {
  return (
    <main className="bg-white">

      {/* Header */}
      <section className="relative overflow-hidden px-6 py-24 text-center sm:py-28 bg-[#060d29]">
        {/* Ambient glows for the dark header */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-full max-w-3xl -translate-x-1/2 rounded-full bg-blue-500/10 blur-[120px]" />

        {/* Content */}
        <div className="relative z-10">
          <p className="mb-3 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-700 shadow-sm">
            2024 – 25 Batch
          </p>

          <h1 className="sr-only">Our Alumni</h1>
          <div aria-hidden="true">
            <TypewriterEffect
              words={[
                { text: 'Our', className: 'text-white' },
                { text: 'Alumni', className: 'text-primary-200' },
              ]}
              className="text-4xl font-extrabold uppercase tracking-tight drop-shadow-md sm:text-5xl"
              cursorClassName="text-white"
            />
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-base font-light text-gray-200">
            The people who helped shape the lab before us, and whose work still
            carries forward.
          </p>
        </div>
      </section>

      {/* Coordinators */}
      {coordinators.length > 0 && (
        <section className="mx-auto max-w-7xl px-8 py-16 lg:px-12">
          <SectionTitle eyebrow="Leadership" title="Coordinators" />

          <Stagger
            className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16"
            childClassName="w-full max-w-[280px] h-full"
            step={60}
          >
            {coordinators.map((a) => (
              <AlumCard
                key={a.name}
                alum={a}
                featured
              />
            ))}
          </Stagger>
        </section>
      )}

      {/* Leads */}
      {leads.length > 0 && (
        <section className="bg-primary-50/40 py-16">
          <div className="mx-auto max-w-7xl px-8 lg:px-12">
            <SectionTitle eyebrow="Core Team" title="Team Leads" />

            <Stagger
              className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16"
              childClassName="w-full max-w-[280px] h-full"
              step={60}
            >
              {leads.map((a) => (
                <AlumCard
                  key={a.name}
                  alum={a}
                  featured
                />
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* Mentors */}
      {mentors.length > 0 && (
        <section className="mx-auto max-w-7xl px-8 py-16 lg:px-12">
          <SectionTitle eyebrow="Guidance" title="Mentors & Advisors" />

          <Stagger
            className="grid grid-cols-2 justify-items-center gap-x-16 gap-y-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
            childClassName="h-full"
            step={60}
          >
            {mentors.map((a) => (
              <AlumCard
                key={a.name}
                alum={a}
              />
            ))}
          </Stagger>
        </section>
      )}

      {/* Members */}
      {members.length > 0 && (
        <section className="bg-primary-50/40 py-16">
          <div className="mx-auto max-w-7xl px-8 lg:px-12">
            <SectionTitle
              eyebrow="The Family"
              title="Members"
              subtitle="People from the previous batch who were part of the lab."
            />

            {/* Pass all alumni instead of only members */}
            <MemberSearch members={allMembers} />
          </div>
        </section>
      )}

    </main>
  );
};

export default Alumni;