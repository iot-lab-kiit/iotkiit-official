const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 inline-block mr-2"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const EventCard = (props) => {
  return (
    <div className="lg:w-3/12 md:w-3/12 min-w-max sm:w-full h-1/2 shadow-lg rounded-xl">
      <div className="text-center pricing-header p-5">
        <div className="flex items-center flex-col">
          <div className="divide-y-2 w-32 divide-green-500">
            <div className="font-extrabold text-3xl ">Date</div>
            <div></div>
          </div>
        </div>
        <h5 className="text-4xl font-extrabold ">Event Name</h5>
        <p className="text-3xl mb-3 text-gray-700">per year</p>
      </div>
      <div className="mb-8 flex flex-col items-center">
        <ul>
          <li>
            <CheckIcon />
            Carefully crafted components
          </li>
          <li>
            <CheckIcon /> Amazing page examples
          </li>
          <li>
            <CheckIcon /> Super friendly support team
          </li>
          <li>
            <CheckIcon /> Awesome Support
          </li>
        </ul>
      </div>
      <div className="flex flex-col">
        <button className="place-self-center font-semibold p-4 rounded-full text-white bg-main-btn-color focus:outline-none hover:bg-blue-500">
          GET STARTED
        </button>
      </div>
      <div className="bottom-shape">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 350 112.35"
          className="rounded-b-xl"
        >
          <defs>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  ".color-1{fill:#2bdbdc;isolation:isolate;}.cls-1{opacity:0.1;}.cls-2{opacity:0.2;}.cls-3{opacity:0.4;}.cls-4{opacity:0.6;}",
              }}
            />
          </defs>
          <title>bottom-part1</title>
          <g id="bottom-part">
            <g id="Group_747" data-name="Group 747">
              <path
                id="Path_294"
                data-name="Path 294"
                className="cls-1 color-1"
                d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z"
                transform="translate(0 0)"
              />
              <path
                id="Path_297"
                data-name="Path 297"
                className="cls-2 color-1"
                d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z"
                transform="translate(0 0)"
              />
              <path
                id="Path_296"
                data-name="Path 296"
                className="cls-3 color-1"
                d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z"
                transform="translate(0 0)"
              />
              <path
                id="Path_295"
                data-name="Path 295"
                className="cls-4 color-1"
                d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z"
                transform="translate(0 0)"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
};

export default EventCard;
