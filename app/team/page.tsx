import TeamHeader from '@/components/teamPage/TeamHeader';
import SectionTitle from '@/components/team/SectionTitle';
import PersonCard from '@/components/team/PersonCard';
import MemberCard from '@/components/team/MemberCard';
import Stagger from '@/components/Stagger';
import { coordinators, leads, members, type Person } from '@/data/team';

// Fixed display order for the member domain groups. Members whose domain isn't
// listed here (or who have none) fall through to a final unlabelled group so
// they read as part of the same team, never a separate "Others" bucket.
const DOMAIN_ORDER = [
  'Competitive Programming',
  'App Dev',
  'Web Dev',
  'IoT',
  'Machine Learning',
  'Cyber Security',
  'Content',
  'GD & UI/UX',
  'Video',
  'Marketing',
  'Administration',
];

const normalizeDomain = (domain?: string) =>
  domain === 'Creative' ? 'GD & UI/UX' : domain;

const groupedMembers = DOMAIN_ORDER.map((domain) => ({
  domain,
  people: members.filter((m) => normalizeDomain(m.domain) === domain),
})).filter((g) => g.people.length > 0);

const ungrouped = members.filter(
  (m) => !normalizeDomain(m.domain) || !DOMAIN_ORDER.includes(normalizeDomain(m.domain)!),
);

const MemberGrid = ({ people }: { people: Person[] }) => (
  <Stagger
    className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4"
    childClassName="h-full"
    step={60}
  >
    {people.map((p, i) => (
      <MemberCard key={`${p.name}-${i}`} person={p} />
    ))}
  </Stagger>
);

const Team = () => {
  return (
    <main className="bg-white">
      <TeamHeader />

      {/* FIC / Mentorship */}
      <section className="border-y border-gray-100 bg-primary-50/40 px-6 py-16 sm:py-20">
        <SectionTitle
          eyebrow="Guidance"
          title="Our FIC"
          subtitle="The people we turn to for guidance, perspective, and support."
        />
        <figure className="mx-auto max-w-2xl text-center">
          <blockquote className="text-lg font-light italic leading-relaxed text-gray-600 sm:text-xl">
            “A mentor helps you notice the strengths you already have, and gives
            you the push to use them well.”
          </blockquote>
          <figcaption className="mt-3 text-sm font-medium text-gray-400">
            Bob Proctor
          </figcaption>
        </figure>
        <div className="mx-auto mt-10 max-w-xs">
          <div className="group rounded-2xl border border-white/60 bg-white/70 p-8 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-2xl font-bold text-primary-700">
              SN
            </div>
            <h3 className="mt-4 text-lg font-bold tracking-tight text-gray-900">
              Mr. Sankalp Nayak
            </h3>
            <p className="mt-1 text-sm font-medium uppercase tracking-wide text-primary-500">
              Mentor
            </p>
          </div>
        </div>
      </section>

      {/* Coordinators */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionTitle
          eyebrow="Leadership"
          title="Coordinators"
          subtitle="The two people keeping the lab organized and moving."
        />
        <div className="mx-auto flex max-w-2xl flex-col justify-center gap-8 sm:flex-row">
          {coordinators.map((p) => (
            <div key={p.name} className="w-full sm:w-72">
              <PersonCard person={p} featured />
            </div>
          ))}
        </div>
      </section>

      {/* Domain Leads */}
      <section className="bg-primary-50/40 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionTitle
            eyebrow="Core Team"
            title="Domain Leads"
            subtitle="The people leading each domain with their own pace and style."
          />
          <Stagger
            className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:grid-cols-4"
            childClassName="h-full"
            step={60}
          >
            {leads.map((p) => (
              <PersonCard key={p.name + p.role} person={p} />
            ))}
          </Stagger>
        </div>
      </section>

      {/* Members — grouped by domain, no count, no "Others" bucket */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionTitle
          eyebrow="The Family"
          title="Our Members"
          subtitle="Students learning, building, and helping each other across the lab."
        />
        <div className="space-y-12">
          {groupedMembers.map((g) => (
            <div key={g.domain}>
              <div className="mb-5 flex items-center gap-4">
                <h3 className="text-xs font-semibold uppercase tracking-widest text-primary-600">
                  {g.domain}
                </h3>
                <span className="h-px flex-1 bg-gray-100" />
              </div>
              <MemberGrid people={g.people} />
            </div>
          ))}
          {ungrouped.length > 0 && (
            <div>
              <span className="mb-5 block h-px w-full bg-gray-100" />
              <MemberGrid people={ungrouped} />
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Team;
