const EventExtra = ({ extraevents }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl uppercase font-medium title-font mb-2 text-gray-900">
              We have also been involed in...
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded" />
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Collaborations, Interships, Recruitment Drives, and everything else.
            In case, you have missed any these, we'd suggest keeping up with the
            <b> Upcoming Events</b> sections and our <b>Social Media</b> ,
            because it sucks to know about these after they are over :(
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {extraevents.map((i) => (
            <div key={i.id} className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img
                  className="h-80 md:h-64 rounded w-full object-cover object-center mb-6"
                  src={i.imgUrl}
                  alt="content"
                />
                <div className="tracking-wide text-indigo-900 text-sm font-medium mb-1 title-font">
                  {i.type}
                </div>
                <h2 className="text-lg text-gray-900 font-semibold title-font mb-1">
                  <a
                    rel="noopener noreferrer"
                    title={`${i.name}-link`}
                    target="_blank"
                    href={i.link}
                  >
                    {i.name}
                  </a>
                </h2>
                <h3 className="tracking-wider font-semibold text-indigo-900 text-sm mb-3 title-font">
                  {i.date}
                </h3>
                <p className="leading-relaxed text-base">{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventExtra;
