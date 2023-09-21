const CoordinatorMainCard = ({
  name,
  position,
  quote,
  imageUrl,
  githubUrl,
  linkedinUrl,
  mailID,
}) => {
  return (
    <div className="p-4 lg:w-screen mx-auto sm:mx-0">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img
          alt="team"
          className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
          src={imageUrl}
        />
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-xl text-gray-900">
            {name}
          </h2>
          <h3 className="text-gray-500 text-lg mb-3">{position}</h3>
          <p className="mb-4">{quote}</p>
          <span className="inline-flex sm:-ml-2.5">
            {githubUrl ? (
              <a
                className="text-gray-500 mx-3"
                target="_blank"
                title="github-link"
                rel="noopener noreferrer"
                href={githubUrl}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#718096"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-github"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            ) : null}
            {linkedinUrl ? (
              <a
                className="mx-3 text-gray-500"
                target="_blank"
                title="linkedin-link"
                rel="noopener noreferrer"
                href={linkedinUrl}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="#626262"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <path d="M2 9h4v12H2z" />
                    <circle cx={4} cy={4} r={2} />
                  </g>
                  <rect
                    x={0}
                    y={0}
                    width={24}
                    height={24}
                    fill="rgba(0, 0, 0, 0)"
                  />
                </svg>
              </a>
            ) : null}
            {mailID ? (
              <a
                className="mx-3 mt-1 text-gray-500"
                target="_blank"
                title="mail-link"
                rel="noopener noreferrer"
                href={`mailto:${mailID}`}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </a>
            ) : null}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CoordinatorMainCard;
