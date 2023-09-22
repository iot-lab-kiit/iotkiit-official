import AppDevAnimation from "../animations/AppDevAnimation";
import WebDevAnimation from "../animations/WebDevAnimation";
import EventManagementAnimation from "../animations/EventManagementAnimation";

const Services = () => {
  return (
    <div id="services" className="relative lg:px-32 md:px-32 px-4 pb-14 ">
      <img
        src="/images/circle.svg"
        alt="side_image"
        className="absolute top-0 right-0 mt-64 hidden md:block"
      />
      <div className="container mx-auto px-6 pt-32 sm:pt-24 relative">
        <h3 className="flex flex-col items-center text-4xl pb-8 text-secondary font-bold">
          Services we offer{" "}
          <span className="bg-primary-default h-1 w-20 block mt-4" />
        </h3>
        <div className="flex flex-col md:flex-row items-center mb-24 md:mb-16 xl:mb-8 mt-16 md:mt-0 lg:mt-0">
          <div className="md:w-1/3">
            {/* <AppDevAnimation /> */}
          </div>
          <div className="md:ml-16 xl:ml-32 ">
            <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4 py-2">
              App Development
            </h4>
            <p className="text-secondary-700 text-lg mb-4">
              Our next-gen app development ideologies simplifies the business
              complexities for you as we aim at spending more time at the
              drawing board in order to get a better understanding of your needs
              and interests.
            </p>
            <p className="text-secondary-700 text-lg">
              Binding technology with solutions to real world problems, is
              exactly what we provide to your business. We come up with
              innovative features that extends the domians of e-commerce by
              putting you in the driver's seat.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-center mb-24 md:mb-16 xl:mb-8">
          <div className="md:mr-16 xl:mr-32">
            <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4 py-2">
              Web Solutions
            </h4>
            <p className="text-secondary-700 text-lg mb-4">
              In the era of internet, take your business up a notch with
              portfolios and e-commerce websites. With digitization in every
              sector, we strive to develop e-commerce websites that add
              innovation to your businesses.
            </p>
            <p className="text-secondary-700 text-lg">
              We also offer portfolio websites that present your business ideas
              to the global audience. From Cloud Server Management to Online
              Storage to Databases, we have all the tricks up our sleeve.
            </p>
          </div>
          <div className="md:w-1/3">
            {/* <WebDevAnimation /> */}
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3">
            {/* <EventManagementAnimation /> */}
          </div>
          <div className="md:ml-16 xl:ml-32">
            <h4 className="text-2xl md:text-3xl font-bold text-secondary-800 mb-4 py-2">
              Event Management
            </h4>
            <p className="text-secondary-700 text-lg mb-4">
              We soulfully extend our hands in organizing and managing events.
              We are always working in the background, ensuring all pieces are
              working in conjunction so that you can focus on providing value.
            </p>
            <p className="text-secondary-700 text-lg">
              We work with you from the beginning stages of planning the event
              to the live event and post-event reconciliation. Be it a small
              hackathon, or an international innovation drive, we have been a
              part of everything.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
