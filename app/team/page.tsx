import TeamHeader from '@/components/teamPage/TeamHeader';
import SectionTitle from '@/components/team/SectionTitle';
import PersonCard from '@/components/team/PersonCard';
import MemberCard from '@/components/team/MemberCard';
import { coordinators, leads, members } from '@/data/team';

const Team = () => {
  return (
    <main className="bg-white">
      <TeamHeader />

      {/* Coordinators */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionTitle
          eyebrow="Leadership"
          title="Coordinators"
          subtitle="Steering IoT Lab and keeping every domain moving in sync."
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
            subtitle="The people driving each technical and creative vertical of the lab."
          />
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:grid-cols-4">
            {leads.map((p) => (
              <PersonCard key={p.name + p.role} person={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <SectionTitle
          eyebrow="The Family"
          title="Our Members"
          subtitle={`${members.length} students building, learning and shipping together.`}
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {members.map((p, i) => (
            <MemberCard key={`${p.name}-${i}`} person={p} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Team;
