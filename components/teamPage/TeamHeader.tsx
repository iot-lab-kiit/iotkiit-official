import Image from 'next/image';

const TeamHeader = () => {
  return (
    <div className='w-full'>
      <Image
        src='/images/flower.svg'
        alt='flower'
        className='absolute lg:top-3/5 -z-1 top-1/2  right-5 lg:-mt-5 lg:left-14 lg:w-52 bg-no-repeat'
        width={136}
        height={192}
      />
      <div className='flex bg-transparent'>
        <div className='flex items-center text-center lg:text-left px-18 md:px-12 py-12 lg:w-1/2'>
          <div className='p-10'>
            <h3 className='text-5xl sm:text-5xl leading-normal font-extrabold tracking-tight uppercase text-gray-900 pb-8 -mt-4'>
              Meet the <br />
              <span className='text-primary-default tracking-wide'>
                IOT LAB Team
              </span>
            </h3>
            <p className='mt-0 text-xl text-gray-500 md:text-xl pr-24 lg:pr-20 font-light leading-tight tracking-tight text-justify'>
              Individual commitment to a group effort that is what makes a team
              work, a company work, a society work, a civilisation work.
            </p>
          </div>
        </div>
        <div
          className='hidden lg:block lg:w-1/2'
          style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 100%, 0 100%)' }}
        >
          <div
            className='h-full bg-no-repeat'
            style={{ backgroundImage: 'url(/images/aboutus.svg)' }}
          >
            <div className='h-full opacity-20 bg-[#b3c3e4]' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamHeader;
