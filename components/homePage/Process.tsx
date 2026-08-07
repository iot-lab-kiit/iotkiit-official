import Stagger from '@/components/Stagger';

const Process: React.FC = () => {
  return (
    <div id='our-process' className='relative'>
      <img
        src='/images/circle2.svg'
        alt='side_image'
        className='hidden sm:block absolute top-0 left-0 -mx-32'
      />
      <div className='container mx-auto px-6 pt-0 pb-8 relative'>
        <h3 className='flex flex-col items-center text-4xl text-secondary font-bold mb-5'>
          Our Process{' '}
          <span className='bg-primary-default h-1 w-20 block mt-4' />
        </h3>
        <Stagger className='flex flex-col md:flex-row xl:px-32 py-5' childClassName='flex-1' step={120}>
          {/* TODO() make this a component */}
          <div className='group flex flex-col items-center md:px-6 py-4 lg:px-12 transition-transform duration-300 hover:-translate-y-1'>
            <span className='text-6xl text-primary-default mb-4 transition-transform duration-300 group-hover:scale-110'>1</span>
            <h4 className='font-semibold text-2xl text-secondary mb-2 text-center'>
              What do we do?
            </h4>
            <p className=' lg:w-full md:w-full sm:w-1/2 px-1 text-center text-secondary-700 leading-relaxed'>
              We look for problems that matter in daily life, then work through
              them until the solution feels useful and real.
            </p>
          </div>
          <div className='group flex flex-col items-center md:px-6 py-4 lg:px-12 transition-transform duration-300 hover:-translate-y-1'>
            <span className='text-6xl text-primary-default mb-4 transition-transform duration-300 group-hover:scale-110'>2</span>
            <h4 className='font-semibold text-2xl text-secondary mb-2 text-center'>
              How do we do it?
            </h4>
            <p className='lg:w-full md:w-full sm:w-1/2 px-1 text-center text-secondary-700 leading-relaxed'>
              Everyone brings something different. We figure out where people
              fit best, then let those strengths work together.
            </p>
          </div>
          <div className='group flex flex-col items-center md:px-6 py-4 lg:px-12 transition-transform duration-300 hover:-translate-y-1'>
            <span className='text-6xl text-primary-default mb-4 transition-transform duration-300 group-hover:scale-110'>3</span>
            <h4 className='font-semibold text-2xl text-secondary mb-2 text-center'>
              How are we unique?
            </h4>
            <p className='lg:w-full md:w-full sm:w-1/2 px-1 text-center text-secondary-700 leading-relaxed'>
              We rely on research, hands-on testing, and a lot of honest
              iteration. That is what keeps the work grounded.
            </p>
          </div>
        </Stagger>
      </div>
    </div>
  );
};

export default Process;
