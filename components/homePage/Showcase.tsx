const Showcase: React.FC  = () => {
    return (
      <div className="bg-gray-200">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="relative">
            <div className="relative lg:flex rounded-lg shadow-2xl overflow-hidden">
              <div className="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
                <img
                  className="absolute h-full w-full object-cover"
                  alt="bottom_photo"
                  src="/images/lab.webp"
                />
                <div className="absolute inset-0 bg-indigo-900 opacity-60" />
                <div className="relative font-bold text-white text-5xl">
                  DL - 7
                </div>
              </div>
              <div className="relative lg:w-7/12 bg-white">
                <svg
                  className="absolute h-full text-white w-24 -ml-12"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
                <div className="relative py-12 lg:py-16 px-8 lg:px-16 text-gray-700 leading-relaxed">
                  <p>
                    The best thing about working in an workspace is the excitement
                    of learning something new on a regular basis.
                  </p>
                  <br />
                  <p>
                    Our team at DL-7 in Computer Science Building always has the
                    opportunity to investigate and learn different kinds of
                    approaches, methods, and techniques.
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
  