import TeamMemberCard from '@/components/teamPage/TeamMemberCard';
import { MemberData } from '@/app/team/page';
import { positionData } from '@/types';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { SERVER } = publicRuntimeConfig;

interface TeamMemberPropsData {
  members: [MemberData];
}

const getMember = (x: string) => {
  switch (x) {
    case positionData['6']:
      return 'Team Lead';
    case positionData['7']:
      return 'Co-Lead';
    case positionData['8']:
      return 'Member';
    default:
      return 'Member';
  }
};

const Team = ({ members }: TeamMemberPropsData) => {
  const membersIndex = ['6', '7', '8'];
  return (
    <div>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-12 mx-auto'>
          <div className='max-w-xl mb-10 ml-6 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
            <div>
              <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
                Core Team
              </p>
            </div>
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto'>
              <span className='relative inline-block'>
                <svg
                  viewBox='0 0 52 24'
                  fill='currentColor'
                  className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'
                >
                  <defs>
                    <pattern
                      id='1d4040f3-9f3e-4ac7-b117-7d4009658ced'
                      x={0}
                      y={0}
                      width='.135'
                      height='.30'
                    >
                      <circle cx={1} cy={1} r='.7' />
                    </pattern>
                  </defs>
                  <rect
                    fill='url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)'
                    width={52}
                    height={24}
                  />
                </svg>
                <span className='relative'>Meet&nbsp;</span>
              </span>
              the Dream Team
            </h2>
            <p className='text-base text-gray-700 md:text-lg font-light '>
              "Talent wins games, but teamwork and intelligence win
              championships." <br />
              <span className='font-bold tracking-wider'>- Michael Jordan</span>
            </p>
          </div>
          <div className='flex flex-wrap -m-2 '>
            {members.map(member => (
              <TeamMemberCard
                key={`team-member-card-${member.id}`}
                name={member.name}
                ringColor={member.year}
                githubUrl={member.github}
                linkedinUrl={member.linkedin}
                mailID={member.email}
                position={getMember(member.position)}
                imageUrl={SERVER + '/assets/' + member.avatar + '?quality=25'}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
