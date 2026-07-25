import Hero from '@/components/homePage/Hero';
import Process from '@/components/homePage/Process';
import InteractiveTimeline from '@/components/homePage/InteractiveTimeline';
import AboutUs from '@/components/homePage/AboutUs';
import Services from '@/components/homePage/Services';
import Domains from '@/components/homePage/Domains';
import Showcase from '@/components/homePage/Showcase';
import Marquee from '@/components/Marquee';

export default function Home() {
  return (
    <div className="bg-[#030712] overflow-x-hidden">
      <Hero />
      <Marquee texts={["INTERNET OF THINGS", "EMBEDDED SYSTEMS", "AI & EDGE COMPUTING", "FULL STACK DEVELOPMENT"]} speed={20} />
      <Process />
      <InteractiveTimeline />
      <AboutUs />
      <Marquee texts={["RESEARCH LAB", "INNOVATION HUB", "HACKATHON WINNERS", "PATENT INCUBATOR"]} speed={24} />
      <Services />
      <Domains />
      <Showcase />
    </div>
  );
}
