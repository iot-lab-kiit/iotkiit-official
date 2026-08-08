'use client';

import Process from '@/components/homePage/Process';
import AboutUs from '@/components/homePage/AboutUs';
import Services from '@/components/homePage/Services';
import Domains from '@/components/homePage/Domains';
import Showcase from '@/components/homePage/Showcase';
import Announcement from '@/components/homePage/Announcement';
import Hero from '@/components/homePage/Hero';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <main className="landing-page">
      <Announcement />
      <Hero />
      <Reveal className="process-flow">
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
    </main>
  );
}