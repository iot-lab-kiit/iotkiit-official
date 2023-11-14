import Hero from '@/components/homePage/Hero';
import Process from '@/components/homePage/Process';
import AboutUs from '@/components/homePage/AboutUs';
import Services from '@/components/homePage/Services';
import Showcase from '@/components/homePage/Showcase';
import Announcement from '@/components/homePage/Announcement';

export default function Home() {
  return (
    <div>
      <Announcement />
      <Hero />
      <Process />
      <AboutUs />
      <Services />
      <Showcase />
    </div>
  );
}
