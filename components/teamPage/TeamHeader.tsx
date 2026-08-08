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
        <div className='flex items-center text-center lg:text-left px-6 md:px-12 py-12 lg:w-1/2'>
          <div className='mx-auto max-w-xl px-2 py-6 sm:p-10'>
            <h1 className='text-4xl sm:text-5xl leading-normal font-extrabold tracking-tight uppercase text-gray-900 pb-6 sm:pb-8 -mt-4'>
              Meet the <br />
              <span className='text-primary-default tracking-wide'>
                IOT LAB Team
              </span>
            </h1>
            <p className='mt-0 text-lg sm:text-xl text-gray-500 font-light leading-relaxed tracking-tight text-center lg:pr-20 lg:text-justify'>
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
            className='h-full bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: 'url(/images/team-group.jpeg)' }}
          >
            <div className='h-full bg-primary-900/10' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamHeader;
