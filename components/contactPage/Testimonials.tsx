const Testimonials = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-8 bg-gray-100 min-w-screen">
        <div className="max-w-6xl px-6 bg-gray-100 ">
          <div className="flex flex-col items-center lg:flex-row">
            <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
              <p className="mb-2 text-base font-medium tracking-tight text-indigo-900 uppercase">
                Our clients love our services
              </p>
              <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">
                Testimonials
              </h2>
              <p className="my-6 text-lg text-gray-600">
                Don&apos;t just take our word for it, read from our extensive
                list of case studies and client feedback.
              </p>
              {/* <a
                href="#_"
                className="flex items-center justify-center px-8 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo md:py-4 md:text-lg md:px-10"
              >
                View Case Studies
              </a> */}
            </div>
            <div className="w-full lg:w-1/2">
              <blockquote className="flex items-center justify-between w-full col-span-1 p-6 my-4 bg-white rounded-lg shadow">
                <div className="flex flex-col pr-8">
                  <div className="relative sm:pl-12 pl-6">
                    <svg
                      className="absolute left-0 sm:w-10 w-4 sm:h-10 h-7 text-indigo-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                      “Being a beginner in cloud technology I got to explore
                      many new things which would have been impossible if I had
                      not taken this course.”
                    </p>
                  </div>
                  <h3 className="sm:pl-12 pl-6 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-base">
                    Manav
                    <span className="mt-1 text-xs sm:text-sm leading-5 text-gray-500 truncate">
                      &nbsp; - Top performer, AWS course
                    </span>
                  </h3>
                </div>
              </blockquote>
              <blockquote className="flex items-center justify-between w-full col-span-1 p-6 my-4 bg-white rounded-lg shadow">
                <div className="flex flex-col pr-8">
                  <div className="relative sm:pl-12 pl-6">
                    <svg
                      className="absolute left-0 sm:w-10 w-4 sm:h-10 h-7 text-indigo-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                      “The course was well structured and the trainer was highly
                      qualified and was regular with taking classes. Overall the
                      course helped me a lot.”
                    </p>
                  </div>
                  <h3 className="sm:pl-12 pl-6 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-base">
                    Shivan
                    <span className="mt-1 text-xs sm:text-sm leading-5 text-gray-500 truncate">
                      &nbsp; - Top performer, AWS course
                    </span>
                  </h3>
                </div>
              </blockquote>
              {/* <blockquote className="flex items-center justify-between w-full col-span-1 p-6 my-4 bg-white rounded-lg shadow">
                <div className="flex flex-col pr-8">
                  <div className="relative sm:pl-12 pl-6">
                    <svg
                      className="absolute left-0 sm:w-10 w-4 sm:h-10 h-7 text-indigo-500 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 100 125"
                    >
                      <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
                    </svg>
                    <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">
                      Awesome product! And the customer service is exceptionally
                      well.
                    </p>
                  </div>
                  <h3 className="sm:pl-12 pl-6 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-base">
                    Jane Cooper
                    <span className="mt-1 text-xs sm:text-sm leading-5 text-gray-500 truncate">
                      - CEO SomeCompany
                    </span>
                  </h3>
                </div>
              </blockquote> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
