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

// NEW: Complete alumni list for the searchable directory
const allMembers = alumni;

const Alumni = () => {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="relative overflow-hidden px-6 py-24 text-center sm:py-28">
        {/* Background photo */}
        <Image
          src="/images/alumni-header.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Darkening overlay so the white text stays legible, plus a soft
            drop-shadow feel via the vignette at the edges */}
        <div className="absolute inset-0 bg-gray-900/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/85" />
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_60px_rgba(0,0,0,0.55)]" />

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
        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionTitle eyebrow="Leadership" title="Coordinators" />

          <Stagger
            className="mx-auto grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 md:grid-cols-5"
            childClassName="h-full"
            step={60}
          >
            {coordinators.map((a) => (
              <AlumCard key={a.name} alum={a} featured />
            ))}
          </Stagger>
        </section>
      )}

      {/* Leads */}
      {leads.length > 0 && (
        <section className="bg-primary-50/40 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <SectionTitle eyebrow="Core Team" title="Team Leads" />

            <Stagger
              className="mx-auto grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 md:grid-cols-4"
              childClassName="h-full"
              step={60}
            >
              {leads.map((a) => (
                <AlumCard key={a.name} alum={a} featured />
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* Mentors */}
      {mentors.length > 0 && (
        <section className="mx-auto max-w-6xl px-6 py-16">
          <SectionTitle eyebrow="Guidance" title="Mentors & Advisors" />

          <Stagger
            className="grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8 md:grid-cols-6"
            childClassName="h-full"
            step={60}
          >
            {mentors.map((a) => (
              <AlumCard key={a.name} alum={a} />
            ))}
          </Stagger>
        </section>
      )}

      {/* Members */}
      {members.length > 0 && (
        <section className="bg-primary-50/40 py-16">
          <div className="mx-auto max-w-6xl px-6">
            <SectionTitle
              eyebrow="The Family"
              title="Members"
              subtitle="People from the previous batch who were part of the lab."
            />

            {/* CHANGED: Pass all alumni instead of only members */}
            <MemberSearch members={allMembers} />
          </div>
        </section>
      )}
    </main>
  );
};

export default Alumni;