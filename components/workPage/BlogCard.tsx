export const Blog = ({ main, top, bottom }) => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 row-gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
              {main.date}
            </p>
            <div className="mb-3">
              <a
                href={main.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-4xl xl:text-5xl">
                  {main.title}
                </p>
              </a>
            </div>
            <p className="mb-4 text-base text-gray-700 md:text-lg">{main.desc}</p>
            <div className="flex items-center">
              <div aria-label="Author" className="mr-3">
                <img
                  alt="avatar"
                  src={main.authorPic}
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </div>
              <div>
                <div
                  aria-label="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  {main.author}
                </div>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-8 lg:col-span-3">
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                {top.date}
              </p>
              <div className="mb-3">
                <a
                  href={top.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                    {top.title}
                  </p>
                </a>
              </div>
              <p className="mb-4 text-base text-gray-700 md:text-lg">
                {top.desc}
              </p>
              <div className="flex items-center">
                <div aria-label="Author" className="mr-3">
                  <img
                    alt="avatar"
                    src={top.authorPic}
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                  />
                </div>
                <div>
                  <div
                    aria-label="Author"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    {top.author}
                  </div>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Author
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
                {bottom.date}
              </p>
              <div className="mb-3">
                <a
                  href={bottom.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label="Article"
                  className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  <p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl">
                    {bottom.title}
                  </p>
                </a>
              </div>
              <p className="mb-4 text-base text-gray-700 md:text-lg">
                {bottom.desc}
              </p>
              <div className="flex items-center">
                <div aria-label="Author" className="mr-3">
                  <img
                    alt="avatar"
                    src={bottom.authorPic}
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                  />
                </div>
                <div>
                  <div
                    aria-label="Author"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    {bottom.author}
                  </div>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Author
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };