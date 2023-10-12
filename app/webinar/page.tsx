'use client'
import Head from "next/head";
import { GetStaticProps } from 'next';
import FormComponent from "../../components/webinarPage/FormComponent";
import HeroComponent from "../../components/webinarPage/HeroComponent";
import SpeakerComponent from "../../components/webinarPage/SpeakerComponent";

export default function Webinar () {
    const getData=async()=> {
        const response = await fetch(`https://api.iotkiit.in/speakers`)
        const speakerData= await response.json();
      
        const event = await fetch(`https://api.iotkiit.in/webinars`);
        const description= await event.json();
        return {
          props:{
            speakers:speakerData,
            eventDescription:description
          },
          revalidate:600
        }
      }  
  return (
    <div>
      <Head>
        <title>Webinar</title>
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
      <HeroComponent/>
      <FormComponent/>
      {/* <SpeakerComponent  data={speakers} description={eventDescription[0].description}/> */}
    </div>  
  );
};

// Use 'getStaticProps' for data fetching
// import { GetStaticProps } from 'next';

// const getStaticProps: GetStaticProps<WebinarProps> = async () => {
//   const response = await fetch(`https://api.iotkiit.in/speakers`);
//   const speakerData = await response.json();

//   const event = await fetch(`https://api.iotkiit.in/webinars`);
//   const description = await event.json();

//   return {
//     props: {
//       speakers: speakerData,
//       eventDescription: description,
//     },
//     revalidate: 600,
//   };
// };

// // Export 'getStaticProps' as the async function for data fetching
// export { getStaticProps };







