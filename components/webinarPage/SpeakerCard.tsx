import React from "react";

interface SpeakerCardProps {
  image: string;
  name: string;
  title: string;
  linkedin: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ image, name, title, linkedin }) => {
  let imageUrl = `https://api.iotkiit.in/assets/${image}`;
  
  return (
    <>
      <div className="max-w-xs mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 my-6">
        <img
          className="object-cover w-screen h-auto"
          src={imageUrl}
          alt="avatar"
        />

        <div className="py-5 text-center">
          <a
            href="#"
            className="block text-2xl font-bold text-gray-800 dark:text-white"
          >
            {name}
          </a>
          <span className="text-sm text-gray-700 dark:text-gray-200">
            {title}
          </span>
          <br />
          <span className="text-sm mt-2 text-gray-700 dark:text-gray-200 flex justify-center">
            {/* <a
              target="_blank"
              title="github-link"
              rel="noopener noreferrer"
              href="#"
              className=" text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#101010"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>{" "} */}
            &nbsp;&nbsp;
            <a
              target="_blank"
              title="linkedin-link"
              rel="noopener noreferrer"
              href={linkedin}
              className="text-black"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default SpeakerCard;
