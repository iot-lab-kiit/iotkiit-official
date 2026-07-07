import ContactButtons from '@/components/contactPage/Buttons';
import ContactUs from '@/components/contactPage/ContactUs';
import HandWave from '@/components/contactPage/HandWave';
import MapFooter from '@/components/contactPage/MapsFooter';
import Testimonials from '@/components/contactPage/Testimonials';
import { site } from '@/data/site';

const Contact = () => {
  const links = {
    facebookLink: site.socials.facebook,
    twitterLink: site.socials.twitter,
    instagramLink: site.socials.instagram,
    linkedinLink: site.socials.linkedin,
    mailID: site.email,
  };
  return (
    <div>
      <HandWave />
      <ContactButtons links={links} />
      <Testimonials />
      <ContactUs />
      <MapFooter />
    </div>
  );
};

export default Contact;
