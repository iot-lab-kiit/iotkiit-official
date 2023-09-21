import ContactButtons from "@/components/contactPage/Buttons";
import ContactUs from "@/components/contactPage/ContactUs";
import HandWave from "@/components/contactPage/HandWave";
import MapFooter from "@/components/contactPage/MapsFooter";
import Testimonials from "@/components/contactPage/Testimonials";

const Contact = async () => {
  const data: FooterData = await getProp();
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
  const footerRes = await fetch(`https://api.iotkiit.in/items/footer`, {
    cache: "force-cache",
  });
  const footerData0 = await footerRes.json();
  const footerData = footerData0.data;
  return footerData;
}

export default Contact;
