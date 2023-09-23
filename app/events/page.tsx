// import EventExtra from "../../components/eventPage/EventExtra";
// import EventHeader from "../../components/eventPage/EventHeader";

import UpcomingCard from "../../components/eventPage/UpcomingCard";
// import FlagshipEvents from "../../components/eventPage/FlagshipEvents";
import Head from "next/head";


interface Events {
    upcomingevents: any;
    index:number,
    title:string
    desc:string,
    imgUrl?:string,
    date:string|number,
    year:number,
    link?:string
    flagshipevents:any,
    pextraevents:any
  }

const Events= ({
   upcomingevents
  }: Events) => {
  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta
          name="description"
          content="IoT Lab, KIIT is a team of dedicated students working under a team of competent and
encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum
exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research
and projects with more end-user interactions."
        ></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://iotkiit.in"></meta>
        <meta property="og:title" content="IoT Lab KiiT"></meta>
        <meta
          property="og:description"
          content="IoT Lab, KIIT is a team of dedicated students working under a team of competent and
encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum
exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research
and projects with more end-user interactions."
        ></meta>
        <meta property="og:image" content="/images/logo_small.webp"></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://iotkiit.in"></meta>
        <meta property="twitter:title" content="IoT Lab KiiT"></meta>
        <meta
          property="twitter:description"
          content="IoT Lab, KIIT is a team of dedicated students working under a team of competent and
encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum
exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research
and projects with more end-user interactions."
        ></meta>
        <meta property="twitter:image" content="/images/logo_small.webp"></meta>
      </Head>
      {/* <EventHeader /> */}
      {upcomingevents.length == 0 ? null : (
        <section>
          <div className="container max-w-full mx-auto lg:py-0 md:pt-0 sm:pt-80 pt-48 mt-48 sm:mt-4 px-6 ">
            <h1 className="text-center sm:mt-12 text-4xl text-black font-medium leading-snug uppercase tracking-wider">
              Upcoming Events
            </h1>
            <p className="text-center text-lg text-gray-700 mt-2 px-6">
              Be up-to-date with the new and exciting stuff that is always
              happening at IoT lab.
            </p>
            <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>
          </div>
          <div className="container px-5 py-12 mx-auto flex flex-wrap">
            {upcomingevents.map((i:any, index:number) => (
              <UpcomingCard
                key={`upcoming-event-${i.id}`}
                index={index + 1}
                title={i.title}
                desc={i.desc}
                imgUrl={i.imgUrl}
                date={i.date}
                year={i.year}
                link={i.link}
              />
            ))}
          </div>
        </section>
      )}
      {/* <FlagshipEvents
        main={flagshipevents.main}
        left={flagshipevents.left}
        right={flagshipevents.right}
      />
      <EventExtra extraevents={pextraevents} /> */}
    </>
  );
};

// export async function getStaticProps(context) {
//   const SERVER = "https://api.iotkiit.in";

//   //Getting upcomingevents from Server

//   //Getting Extra events from Server
//   const totalEventRes = await (await fetch(`${SERVER}/items/events`)).json()
//   const totalEventsData = totalEventRes.data;

//   const extraEventsData = totalEventsData.filter((event) => event.type == "extraEvent");
//   //Getting Flagship Events from Server
//   const flagshipEventsRes = await (await fetch(`${SERVER}/items/flagshipevents`)).json()
//   const flagshipEventsData = flagshipEventsRes.data;
//   const upcomingeventsData = totalEventsData.filter(event => event.type === 'upcomingEvent');
//   const left = flagshipEventsData.filter(event => event.position === 'left');
//   const right = flagshipEventsData.filter(event => event.position === 'right');
//   const main = flagshipEventsData.filter(event => event.position === 'main');

//   return {
//     props: {
//       upcomingevents: upcomingeventsData,
//       extraevents: extraEventsData,
//       flagshipevents: {
//         left: left,
//         main: main,
//         right: right,
//       },
//     },
//     revalidate: 600,  
//   };
// }

export default Events;
