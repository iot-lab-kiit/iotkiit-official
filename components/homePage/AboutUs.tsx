const AboutUs = () => {
    return (
      <div
        id="about-us"
        className="bg-blue-100 lg:px-24 md:px-24 px-8 mt-28 pb-6"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:pr-8 lg:pr-16">
              <img
                src="/images/team.svg"
                alt="team_photo"
                className="-mt-24 md:mt-0 lg:-mt-24 mb-0 md:mb-0"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="flex flex-col text-4xl text-secondary font-bold mt-10 mb-4">
                About us{" "}
                <span className="bg-primary-default h-1 w-20 block mt-4" />
              </h3>
              <p className="text-lg text-secondary-700 mb-4">
                A group of dedicated students and faculties who are keenly focused
                on working towards the betterment of society through technology
                believing that small steps gradually contribute to bigger and
                better changes.
              </p>
              <p className="text-lg text-secondary-700">
                Even though we are a research lab, we harbour all domains,
                technical and non-technical for a complete in-house holistic
                appraoch towards everything.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  