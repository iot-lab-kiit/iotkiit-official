import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import "swiper/swiper-bundle.css";
import { Box } from "@mui/material";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps, footerData }: AppProps & { footerData: any }) {
  return (
    <>
      <Navbar />
      <div style={{ width: '100%', height: 'calc(100vh + 81px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Component {...pageProps} />
      </div>
      <Footer footerData={footerData} />
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  const SERVER = "https://api.iotkiit.in";

  // Getting FooterData from Server
  const footerRes = await fetch(`${SERVER}/items/footer`);
  const footerData = await footerRes.json();
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps, footerData, revalidate: 600 };
};

export default MyApp;
