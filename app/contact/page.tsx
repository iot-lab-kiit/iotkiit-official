import ContactButtons from "@/components/contactPage/Buttons";
import ContactUs from "@/components/contactPage/ContactUs";
import HandWave from "@/components/contactPage/HandWave";
import MapFooter from "@/components/contactPage/MapsFooter";
import Testimonials from "@/components/contactPage/Testimonials";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
const { SERVER } = publicRuntimeConfig;

interface ContactData {
  id: Number;
  facebookLink?: string;
  twitterLink?: string;
  instagramLink?: string;
  linkedinLink?: string;
  githubLink?: string;
  telegramLink?: string;
  mediumLink?: string;
  mailID?: string;
}

const Contact = async () => {
  const data: ContactData = await getProp();
  return (
    <div>
      <HandWave />
      <ContactButtons links={data} />
      <Testimonials />
      <ContactUs />
      <MapFooter />
    </div>
  );
};

async function getProp() {
  const ContactRes = await fetch(`${SERVER}/items/footer`, {
    cache: "default",
  });
  const ContactResponse = await ContactRes.json();
  const ContactData: ContactData = ContactResponse.data;
  return ContactData;
}

export default Contact;
