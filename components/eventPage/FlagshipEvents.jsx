import RightArrow from "../bullets/RightArrow";
import Tick from "../bullets/Tick";
import { CyanBottom, OrangeBottom, PurpleBottom } from "./BottomCards";

const EventListItemCenter = ({ point, ...rest }) => {
  return (
    <li className="flex items-center">
      <div className=" rounded-full p-2 fill-current text-green-700">
        <Tick />
      </div>
      <span className="text-gray-700 text-lg ml-3">{point}</span>
    </li>
  );
};

const EventListItem = ({ point, ...rest }) => {
  return (
    <li className="flex items-center">
      <div className=" rounded-full p-2 fill-current text-green-700">
        <RightArrow />
      </div>
      <span className="text-gray-700 text-lg ml-3">{point}</span>
    </li>
  );
};

const FlagshipEvents = ({ main, left, right }) => {

  main = main[0];
  left = left[0];
  right = right[0];

  return (
    <section>
      <div className="container max-w-full mx-auto lg:py-0 md:py-0 pt-12 mt-4 sm:mt-4 px-6 ">
        <h1 className="text-center text-4xl text-black font-medium leading-snug uppercase tracking-wider">
          Our Flagship Events
        </h1>
        <p className="text-center text-lg text-gray-700 mt-2 px-6"></p>
        <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

        <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
              <div className="bg-white text-black rounded-lg shadow-inner overflow-hidden">
                <div className="text-sm object-center leading-none rounded-t-lg bg-white-200 text-black font-semibold uppercase pt-6 text-center tracking-wide">
                  <img
                    className="w-auto h-16 inline-block"
                    alt="event image"
                    src={left.imgUrl}
                  />
                </div>

                <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                  <h1 className=" text-2xl font-medium uppercase p-3 pb-0 text-center tracking-wide">
                    {left.title}
                  </h1>
                  <h2 className="text-sm tracking-widest font-medium pt-1 text-gray-500 text-center pb-5">
                    {left.date}
                  </h2>
                  {left.desc}
                </div>
                <div className="flex flex-wrap mt-3 px-6">
                  <ul>
                    <EventListItem point={left.point1} />
                    <EventListItem point={left.point2} />
                    <EventListItem point={left.point3} />
                  </ul>
                </div>
                <PurpleBottom />
              </div>
            </div>

            <div className="w-full max-w-md sm:w-2/3 lg:w-2/5 sm:my-5 my-8 relative z-10 rounded-lg shadow-lg ">
              <div className="bg-white text-black rounded-lg shadow-inner overflow-hidden">
                <div className="text-sm object-center leading-none rounded-t-lg bg-white-200 text-black font-semibold uppercase pt-3 text-center tracking-wide">
                  <img
                    className="w-auto h-24 inline-block"
                    alt="event image"
                    src={main?.imgUrl}
                  />
                </div>
                <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                  <h1 className="text-2xl font-medium uppercase p-3 pb-0 text-center tracking-wide">
                    {main.title}
                  </h1>
                  <h2 className="text-sm tracking-widest font-medium pt-1 text-gray-500 text-center pb-5">
                    {main.date}
                  </h2>
                  {main.desc}
                </div>
                <div className="flex lg:pl-12 md:pl-2 sm:pl-12 pl-12 justify-start sm:justify-start mt-3">
                  <ul>
                    <EventListItemCenter point={main.point1} />
                    <EventListItemCenter point={main.point2} />
                    <EventListItemCenter point={main.point3} />
                    {/* <EventListItemCenter point={main.point4} /> */}
                  </ul>
                </div>
                <OrangeBottom />
              </div>
            </div>

            <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
              <div className="bg-white text-black rounded-lg shadow-inner overflow-hidden">
                <div className="text-sm object-center leading-none rounded-t-lg bg-white-200 text-black font-semibold uppercase pt-6 text-center tracking-wide">
                  <img
                    className="w-auto h-16 inline-block"
                    alt="event image"
                    src={right?.imgUrl}
                  />
                </div>

                <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                  <h1 className="text-2xl font-medium uppercase p-3 pb-0 text-center tracking-wide">
                    {right.title}
                  </h1>
                  <h2 className="text-sm tracking-widest font-medium pt-1 text-gray-500 text-center pb-5">
                    {right.date}
                  </h2>
                  {right.desc}
                </div>
                <div className="flex flex-wrap mt-3 px-6">
                  <ul>
                    <EventListItem point={right.point1} />
                    <EventListItem point={right.point2} />
                    <EventListItem point={right.point3} />
                  </ul>
                </div>
                <CyanBottom />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlagshipEvents;
