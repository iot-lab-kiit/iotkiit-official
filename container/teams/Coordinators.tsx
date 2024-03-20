import CoordinatorCard from '@/components/teamPage/CoordinatorCard';
import { MemberData } from '@/app/team/page';
import { positionData } from '@/types';

import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { SERVER } = publicRuntimeConfig;

interface CoordinatorsPropData {
  coordinators: [MemberData];
}

const getCoordinator = (x: string) => {
  switch (x) {
    case positionData['1']:
      return 'Coordinator';
    case positionData['2']:
      return 'Non-Tech Coordinator';
    case positionData['3']:
      return 'Tech Coordinator';
    case positionData['4']:
      return 'Administrative Coordinator';
    case positionData['5']:
      return 'Faculty Coordinator';
    default:
      return 'Coordinator';
  }
};

const Coordinators = ({ coordinators }: CoordinatorsPropData) => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container py-24 mx-auto'>
        <div className='max-w-xl mb-10 ml-6 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <div>
            <p className='inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400'>
              Leading Team
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
              <span className='relative'>Meet Our&nbsp;</span>
            </span>
            Coordinators
          </h2>
          <p className='text-base font-light text-gray-700 md:text-lg'>
            “Of all the things I’ve done, the most vital is coordinating those
            who work with me and aiming their efforts at a certain goal.” <br />
            <span className='font-bold tracking-wider'>– Walt Disney</span>
          </p>
        </div>
        <div className='flex flex-wrap lg:flex-nowrap'>
          {coordinators.map(coordinator => (
            <CoordinatorCard
              key={`coordinator-card-${coordinator.id}`}
              name={coordinator.name}
              position={getCoordinator(coordinator.position)}
              imageUrl={SERVER + '/assets/' + coordinator.avatar}
              quote={coordinator.quote}
              githubUrl={coordinator.github}
              linkedinUrl={coordinator.linkedin}
              mailID={coordinator.email}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coordinators;
