import WorkAnimation from '../animations/WorkAnimation';

type WorkHeaderProps = {
  numBlogs?: number;
  numProjects?: number;
};

const WorkHeader = ({ numBlogs, numProjects }: WorkHeaderProps) => {
  return (
    <div className='flex flex-wrap mx-auto items-center h-2/3 lg:w-5/6'>
      <div className='bg-white w-full sm:w-full md:w-1/3 h-2/3 lg:mx-auto'>
        <div className='mx-12 sm:pl-10 md:mx-0 lg:mx-0 '>
          <h1 className='text-6xl font-bold mt-16'>Our Work</h1>
          <div className='flex mt-10 font-light text-gray-500'>
            <div className='pr-4'>
              <span className='uppercase'>Projects</span>
              <p className='text-2xl text-gray-900 font-semibold pt-2'>
                {numProjects ?? 25}
              </p>
            </div>
            {/* <div className="pr-4">
              <span className="uppercase">Papers</span>
              <p className="text-2xl text-gray-900 font-semibold pt-2">17</p>
            </div> */}
            <div className='pr-4'>
              <span className='uppercase'>Blogs</span>
              <p className='text-2xl text-gray-900 font-semibold pt-2'>
                {numBlogs ?? 5}
              </p>
            </div>
          </div>
          <div className='description w-full sm:w-full md:w-4/5 mt-12 text-gray-500 text-md'>
            "A new idea emerges from a great thinking and success comes from
            hard work. Hard work does not necessarily guarantee success, but no
            success is possible without hard work.”
          </div>
        </div>
      </div>
      <div className='bg-transparent w-full sm:w-full md:w-2/3 h-2/3 max-w-2xl mx-auto'>
        <div className=' pt-20 flex flex-col justify-center p-10'>
          <div className='relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto'>
            <div className='absolute inset-0 -m-2 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 rounded-3xl sm:rounded-3xl' />
            <div className='relative bg-white shadow-2xl m-1.5 rounded-3xl sm:rounded-3xl'>
              <div className='flex items-center justify-start pt-6 pl-6'>
                <span className='w-3 h-3 bg-red-400 rounded-full mr-2' />
                <span className='w-3 h-3 bg-yellow-400 rounded-full mr-2' />
                <span className='w-3 h-3 bg-green-400 rounded-full mr-2' />
              </div>
              <div className='px-20 py-6 sm:mt-0'>
                <div className='flex flex-col-reverse md:flex-row items-center mx-20'>
                  <div className='sm:m-1/2 sm:-ml-16 md:-ml-0'>
                    <span className='text-xl text-gray-900  mb-1 sm:-ml-10'>
                      E-Commerce App
                    </span>
                    <br />
                    <span className='text-sm text-gray-600  mb-1 sm:-ml-10'>
                      Monthly Stats
                    </span>
                    <div className='sm:-ml-0 md:-ml-28 lg:-ml-0 '>
                      <WorkAnimation />
                    </div>
                    <div className='lg:ml-5 text-left'>
                      <div className='flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer'>
                        <svg
                          className='w-6 h-6'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 14l-7 7m0 0l-7-7m7 7V3'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHeader;
