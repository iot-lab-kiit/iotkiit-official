import { Metadata } from 'next';
import FormComponent from '../../components/webinarPage/FormComponent';
import HeroComponent from '../../components/webinarPage/HeroComponent';
import SpeakerComponent from '../../components/webinarPage/SpeakerComponent';
import { API_URL } from '../../lib/config';

export const metadata: Metadata = {
  title: 'Webinar',
  description: 'IoT Lab, KIIT is a team of dedicated students working under a team of competent and encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research and projects with more end-user interactions.',
  openGraph: {
    type: 'website',
    url: 'https://iotkiit.in',
    title: 'IoT Lab KiiT',
    description: 'IoT Lab, KIIT is a team of dedicated students working under a team of competent and encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research and projects with more end-user interactions.',
    images: ['/images/logo_small.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IoT Lab KiiT',
    description: 'IoT Lab, KIIT is a team of dedicated students working under a team of competent and encouraging professors guiding us at every phase and step. IoT Lab is technically a research forum exploring the potential of crowdsourcing and Internet of Things for multidisciplinary research and projects with more end-user interactions.',
    images: ['/images/logo_small.webp'],
  },
};

export default function Webinar() {
  return (
    <div>
      <HeroComponent />
      <FormComponent />
      {/* <SpeakerComponent  data={speakers} description={eventDescription[0].description}/> */}
    </div>
  );
}

// Use 'getStaticProps' for data fetching
// import { GetStaticProps } from 'next';

// const getStaticProps: GetStaticProps<WebinarProps> = async () => {
//   const response = await fetch(`${API_URL}/speakers`);
//   const speakerData = await response.json();

//   const event = await fetch(`${API_URL}/webinars`);
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
