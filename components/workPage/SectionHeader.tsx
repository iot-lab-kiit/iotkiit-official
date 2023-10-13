const SectionHeader = () => {
  return (
    <section className='text-gray-600 body-font'>
      <div className='container px-0  lg:px-28 pt-12 mx-auto flex items-center md:flex-row flex-col'>
        <div className='flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center'>
          <h2 className='text-xs text-indigo-900 uppercase tracking-widest font-medium title-font mb-1'>
            Projects, Blogs and Research
          </h2>
          <h1 className='md:text-3xl text-2xl font-medium title-font text-gray-900'>
            Our Recent Endeavors
          </h1>
        </div>
        <div className='flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4'>
          <a
            target='_blank'
            title='playstore-link'
            rel='noopener noreferrer'
            href='https://play.google.com/store/apps/developer?id=IoT+Lab,+KiiT'
          >
            <button className='bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='w-6 h-6'
                viewBox='0 0 512 512'
              >
                <path d='M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z' />
              </svg>
              <span className='ml-4 flex items-start flex-col leading-none'>
                <span className='text-xs text-gray-600 mb-1'>
                  View Our Apps
                </span>
                <span className='title-font font-medium'>Google Play</span>
              </span>
            </button>
          </a>
          <a
            target='_blank'
            title='github-link'
            rel='noopener noreferrer'
            href='https://github.com/iot-lab-kiit'
          >
            <button className='bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                viewBox='0 0 24 24'
                fill='none'
                stroke='#718096'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-github'
              >
                <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22' />
              </svg>
              <span className='ml-4 flex items-start flex-col leading-none'>
                <span className='text-xs text-gray-600 mb-1'>
                  Checkout Our Org
                </span>
                <span className='title-font font-medium'>GitHub</span>
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;
