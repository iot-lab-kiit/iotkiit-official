const TeamMemberCard = ({
  name,
  position,
  imageUrl,
  githubUrl,
  linkedinUrl,
  mailID,
  ringColor,
  ...rest
}) => {
  let color = "";
  ringColor = parseInt(ringColor);
  switch (ringColor) {
    case 1:
      color = "ring-blue-200";
      break;
    case 2:
      color = "ring-purple-400";
      break;
    case 3:
      color = "ring-red-400";
      break;
    case 4:
      color = "ring-gray-300";
      break;
    case 5:
      color = "ring-yellow-300";
      break;
    default:
      color = "";
  }
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full z-1">
      <div className="h-full flex items-center border-gray-200 border py-6 px-8 rounded-lg">
        <img
          alt="team"
          className={`w-28 h-28 ring-4 ${color} bg-gray-100 object-cover object-center flex-shrink-0 rounded-full ml-0 mr-0`}
          src={imageUrl}
        />
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium text-center">
            {name}
          </h2>
          <p className="text-gray-500 mt-2 text-center">{position}</p>
          <div className="w-full flex justify-center pt-4 pb-2">
            {githubUrl ? (
              <a
                href={githubUrl}
                title="github-link"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 lg:mx-4"
              >
                <div>
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
                </div>
              </a>
            ) : null}
            {linkedinUrl ? (
              <a
                href={linkedinUrl}
                title="linkedin-link"
                rel="noopener noreferrer"
                target="_blank"
                className="mx-2 lg:mx-4 "
              >
                <div>
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
                </div>
              </a>
            ) : null}
            {mailID ? (
              <a
                href={`mailto:${mailID}`}
                title="mail-link"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 mt-1 lg:mx-4"
              >
                <div>
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
                </div>
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
