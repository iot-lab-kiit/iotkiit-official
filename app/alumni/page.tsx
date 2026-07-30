import SectionTitle from '@/components/team/SectionTitle';
import AlumCard from '@/components/team/AlumCard';
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

const Alumni = () => {
  return (
    <main className="bg-white">

      {/* Header */}
      <section
        className="
          border-b
          border-gray-100
          bg-primary-50/40
          px-8
          py-20
          text-center
        "
      >
        <p
          className="
            mb-3
            inline-block
            rounded-full
            bg-white
            px-3
            py-1
            text-xs
            font-semibold
            uppercase
            tracking-wider
            text-primary-700
            shadow-sm
          "
        >
          2024 – 25 Batch
        </p>

        <h1
          className="
            text-4xl
            font-extrabold
            uppercase
            tracking-tight
            text-gray-900
            sm:text-5xl
          "
        >
          Our{' '}
          <span className="text-primary-default">
            Alumni
          </span>
        </h1>

        <p
          className="
            mx-auto
            mt-4
            max-w-2xl
            text-base
            font-light
            text-gray-500
          "
        >
          The people who helped shape the lab before us, and whose work still
          carries forward.
        </p>
      </section>



      {/* Coordinators */}
      {coordinators.length > 0 && (
        <section
          className="
            mx-auto
            max-w-7xl
            px-8
            py-16
            lg:px-12
          "
        >
          <SectionTitle
            eyebrow="Leadership"
            title="Coordinators"
          />

          <div
            className="
              mx-auto
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-5
              justify-items-center
              gap-x-16
              gap-y-20
            "
          >
            {coordinators.map((a) => (
              <AlumCard
                key={a.name}
                alum={a}
                featured
              />
            ))}
          </div>

        </section>
      )}



      {/* Leads */}
      {leads.length > 0 && (
        <section
          className="
            bg-primary-50/40
            py-16
          "
        >
          <div
            className="
              mx-auto
              max-w-7xl
              px-8
              lg:px-12
            "
          >

            <SectionTitle
              eyebrow="Core Team"
              title="Team Leads"
            />

            <div
              className="
                mx-auto
                grid
                grid-cols-1
                sm:grid-cols-2
                lg:grid-cols-5
                justify-items-center
                gap-x-16
                gap-y-20
              "
            >

              {leads.map((a) => (
                <AlumCard
                  key={a.name}
                  alum={a}
                  featured
                />
              ))}

            </div>

          </div>
        </section>
      )}



      {/* Mentors */}
      {mentors.length > 0 && (
        <section
          className="
            mx-auto
            max-w-7xl
            px-8
            py-16
            lg:px-12
          "
        >

          <SectionTitle
            eyebrow="Guidance"
            title="Mentors & Advisors"
          />


          <div
            className="
              grid
              grid-cols-2
              sm:grid-cols-3
              md:grid-cols-4
              lg:grid-cols-5
              justify-items-center
              gap-x-16
              gap-y-16
            "
          >

            {mentors.map((a) => (
              <AlumCard
                key={a.name}
                alum={a}
              />
            ))}

          </div>

        </section>
      )}



      {/* Members */}
      {members.length > 0 && (
        <section
          className="
            bg-primary-50/40
            py-16
          "
        >

          <div
            className="
              mx-auto
              max-w-7xl
              px-8
              lg:px-12
            "
          >

            <SectionTitle
              eyebrow="The Family"
              title="Members"
              subtitle="People from the previous batch who were part of the lab."
            />


            <div
              className="
                grid
                grid-cols-2
                sm:grid-cols-3
                md:grid-cols-4
                lg:grid-cols-5
                justify-items-center
                gap-x-14
                gap-y-16
              "
            >

              {members.map((a, i) => (
                <AlumCard
                  key={`${a.name}-${i}`}
                  alum={a}
                />
              ))}

            </div>

          </div>

        </section>
      )}

    </main>
  );
};

export default Alumni;