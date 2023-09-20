const ContactButtons = ({ links }: ContactButtonsProps) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 uppercase ">
            Don&apos;t be shy, let&apos;s talk about everything.
          </h1>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-3 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
          <p className="lg:w-2/3 mx-auto mt-4 leading-relaxed tracking-widest text-lg">
            Monday - Friday : 11:00am - 5:00pm (IST)
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center mx-auto">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2 mb-8 max-w-xs mx-auto">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="text-indigo-500 sm:w-20 sm:h-20 h-14 w-14 bg-white -mt-20 inline-block"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <p className="leading-relaxed sm:text-xl  text-sm mt-1 sm:my-2 font-mono uppercase">
                Drop Us A DM!
              </p>
              <a
                title="insta-link"
                rel="noopener noreferrer"
                target="_blank"
                href={links.instagramLink}
              >
                <button className="ml-auto text-white bg-primary-default border-0 py-1 mt-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                  Instagram
                </button>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2 mb-8 max-w-xs mx-auto">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="text-indigo-500 sm:w-20 sm:h-20 h-14 w-14 bg-white -mt-20 inline-block"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <p className="leading-relaxed sm:text-xl text-sm mt-1 sm:my-2 font-mono uppercase">
                Linked-In-US?
              </p>
              <a
                title="linkedin-link"
                rel="noopener noreferrer"
                target="_blank"
                href={links.linkedinLink}
              >
                <button className=" ml-auto text-white bg-primary-default border-0 py-1 mt-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2 mb-8 max-w-xs mx-auto">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="text-indigo-500 sm:w-20 sm:h-20 h-14 w-14 bg-white -mt-20 inline-block"
              >
                <path d="M19 24h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5v14c0 2.761-2.238 5-5 5zm-7-19.5c-4.418 0-8 3.316-8 7.407 0 2.332 1.163 4.411 2.981 5.769v2.824l2.724-1.495c.727.201 1.497.31 2.295.31 4.418 0 8-3.317 8-7.408s-3.582-7.407-8-7.407zm.795 9.975l-2.037-2.173-3.975 2.173 4.372-4.642 2.087 2.173 3.926-2.173-4.373 4.642z" />
              </svg>
              <p className="leading-relaxed sm:text-xl  text-sm mt-1 sm:my-2 font-mono uppercase">
                Chat with us!
              </p>
              <a
                title="messenger-link"
                rel="noopener noreferrer"
                target="_blank"
                href={links.facebookLink}
              >
                <button className=" ml-auto text-white bg-primary-default border-0 py-1 mt-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                  Messenger
                </button>
              </a>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-1/2 mb-8 max-w-xs mx-auto">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="text-indigo-500 sm:w-20 sm:h-20 h-14 w-14 bg-white -mt-20 inline-block"
              >
                <path d="M.026 24l11.974-11.607 11.974 11.607h-23.948zm11.964-23.961l-11.99 8.725v12.476l7.352-7.127-5.653-4.113 10.291-7.488 10.309 7.488-5.655 4.108 7.356 7.132v-12.476l-12.01-8.725z" />
              </svg>
              <p className="leading-relaxed sm:text-xl  text-sm mt-1 sm:my-2 font-mono uppercase">
                Drop us a Line?
              </p>
              <a
                title="email-link"
                rel="noopener noreferrer"
                target="_blank"
                href={`mailto:${links.mailId}`}
              >
                <button className=" ml-auto text-white bg-primary-default border-0 py-1 mt-2 px-4 focus:outline-none hover:bg-indigo-600 rounded">
                  E-mail
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactButtons;
