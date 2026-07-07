import Hero from '@/components/homePage/Hero';
import Process from '@/components/homePage/Process';
import AboutUs from '@/components/homePage/AboutUs';
import Services from '@/components/homePage/Services';
import Domains from '@/components/homePage/Domains';
import Showcase from '@/components/homePage/Showcase';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <div>
      <Hero />
      <Reveal>
        <Process />
      </Reveal>
      <Reveal>
        <AboutUs />
      </Reveal>
      <Reveal>
        <Services />
      </Reveal>
      <Reveal>
        <Domains />
      </Reveal>
      <Reveal>
        <Showcase />
      </Reveal>
    </div>
  );
}
