const Hero: React.FC = () => {
  return (
    <div className='relative overflow-hidden px-0 pb-0 z-0'>
      <img
        src='/images/wave.svg'
        alt='bg_cloud_photo'
        className='absolute top-0 left-2/5'
      />
      <div className='container mx-auto relative px-6 lg:px-12'>
        <div className='flex flex-col md:flex-row items-center pt-32 lg:pl-12 md:px-12 px-12 pb-16 md:pb-0 '>
          <div className='md:w-1/2 lg:w-1/3 mb-4 sm:mb-16 md:mb-0'>
            <h1 className='text-6xl md:text-7xl font-bold font-sans text-secondary leading-tight mb-4 md:mb-4 mt-8 md:mt-0'> 
            {/* Temporary change: mt-8 md:mt-0 */}
              <div>
                <span className='flex h-7 w-7 sm:-ml-0.5 -m-1.5'>
                  <span className='animate-ping inline-flex h-full w-full rounded-full bg-primary-default opacity-75' />
                  <span className=' absolute inline-flex rounded-full h-7 w-7 bg-primary-default' />
                </span>
                IOT LAB,
                <br /> KIIT
              </div>
            </h1>
            <h2 className='text-2xl font-bold text-secondary-600 uppercase mb-12 ml-1'>
              A Centre Of Excellence
            </h2>
          </div>
          <div className='mt-16 sm:mt-0 flex-1 flex justify-end'>
            <img src='/images/hero.svg' alt='lab_photo' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
