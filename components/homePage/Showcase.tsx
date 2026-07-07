const Showcase: React.FC = () => {
  return (
    <div className='bg-gray-200'>
      <div className='max-w-6xl mx-auto px-8 py-16'>
        <div className='relative'>
          <div className='relative lg:flex rounded-lg shadow-2xl overflow-hidden'>
            <div className='h-64 lg:h-auto lg:w-5/12 relative flex items-center justify-center'>
              <img
                className='absolute h-full w-full object-cover'
                alt='The IoT Lab team at Campus 25'
                src='/images/team-group.jpeg'
              />
              <div className='absolute inset-0 bg-secondary-900 opacity-70' />
              <a
                href='https://maps.app.goo.gl/wuBhh7PJVyAbosY28'
                target='_blank'
                rel='noopener noreferrer'
                className='relative flex flex-col items-center gap-2 px-4 text-center text-white transition-transform duration-300 hover:scale-105'
              >
                <span className='text-4xl font-bold sm:text-5xl'>Campus 25, A-004</span>
                <span className='text-sm font-medium uppercase tracking-widest text-white/80'>
                  📍 Find us on Maps
                </span>
              </a>
            </div>
            <div className='relative lg:w-7/12 bg-white'>
              <svg
                className='absolute h-full text-white w-24 -ml-12'
                fill='currentColor'
                viewBox='0 0 100 100'
                preserveAspectRatio='none'
              >
                <polygon points='50,0 100,0 50,100 0,100' />
              </svg>
              <div className='relative py-12 lg:py-16 px-8 lg:px-16 text-gray-700 leading-relaxed'>
                <p>
                  One of the best parts of working here is that there is always
                  something new to learn.
                </p>
                <br />
                <p>
                  At Campus 25, A-004, the team gets to try different ideas,
                  learn from them, and keep improving together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
