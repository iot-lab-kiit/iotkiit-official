'use client';

import { useEffect, useRef } from 'react';
import Process from '@/components/homePage/Process';
import AboutUs from '@/components/homePage/AboutUs';
import Services from '@/components/homePage/Services';
import Domains from '@/components/homePage/Domains';
import Showcase from '@/components/homePage/Showcase';
import Reveal from '@/components/Reveal';

function LogoLayer({
  className,
  label,
  index,
}: {
  className: string;
  label: string;
  index: string;
}) {
  return (
    <div className={`logo-layer ${className}`}>
      <div className="layer-face">
        <img src="/images/logo_small.webp" alt="" draggable={false} />
        <div className="layer-scan" />
      </div>
      <span className="layer-label">
        <b>{index}</b>
        {label}
      </span>
    </div>
  );
}

export default function Home() {
  const scrollStageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = scrollStageRef.current;
    if (!stage) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const clamp = (value: number) => Math.min(1, Math.max(0, value));
    const smooth = (value: number) => {
      const normalized = clamp(value);
      return normalized * normalized * (3 - 2 * normalized);
    };
    const phase = (progress: number, start: number, end: number) =>
      smooth((progress - start) / (end - start));

    const update = () => {
      frame = 0;

      if (reducedMotion.matches) {
        stage.style.removeProperty('--front-fade');
        stage.style.removeProperty('--mid-fade');
        stage.style.removeProperty('--back-fade');
        stage.style.removeProperty('--front-shift');
        stage.style.removeProperty('--mid-shift');
        stage.style.removeProperty('--back-shift');
        stage.style.removeProperty('--assembly-fade');
        stage.style.removeProperty('--copy-fade');
        stage.style.removeProperty('--copy-lift');
        return;
      }

      const distance = Math.max(stage.offsetHeight - window.innerHeight, 1);
      const progress = clamp(-stage.getBoundingClientRect().top / distance);
      const front = phase(progress, 0.06, 0.32);
      const middle = phase(progress, 0.25, 0.55);
      const back = phase(progress, 0.48, 0.78);
      const assembly = phase(progress, 0.64, 0.9);
      const copy = phase(progress, 0.76, 1);

      stage.style.setProperty('--front-fade', String(1 - front));
      stage.style.setProperty('--mid-fade', String(1 - middle));
      stage.style.setProperty('--back-fade', String(1 - back));
      stage.style.setProperty('--front-shift', `${front * 58}px`);
      stage.style.setProperty('--mid-shift', `${middle * -42}px`);
      stage.style.setProperty('--back-shift', `${back * -58}px`);
      stage.style.setProperty('--assembly-fade', String(1 - assembly));
      stage.style.setProperty('--copy-fade', String(1 - copy));
      stage.style.setProperty('--copy-lift', `${copy * -28}px`);
    };

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    reducedMotion.addEventListener('change', scheduleUpdate);

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      reducedMotion.removeEventListener('change', scheduleUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main className="landing-page">
      <div className="hero-scroll-stage" ref={scrollStageRef}>
        <section className="landing-hero" id="home">
        <div className="hero-grid" aria-hidden="true" />

        <div className="hero-body">
          <div className="hero-copy">
            <h1>
              <span>IoT LAB KIIT</span>
              <em>— Centre of Excellence</em>
            </h1>

            <p className="hero-description">
              A multidisciplinary lab where software, hardware, design and
              storytelling meet to build technology that matters.
            </p>

            <div className="hero-actions">
              <a className="primary-action" href="#domains">
                Explore our domains
                <span className="action-icon" aria-hidden="true">
                  ↓
                </span>
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <strong>11</strong>
                <span>working domains</span>
              </div>
              <div>
                <strong>01</strong>
                <span>shared lab culture</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>room to experiment</span>
              </div>
            </div>
          </div>

          <div className="assembly-wrap" aria-label="IoT Lab logo separated into three layers">
            <div className="assembly-orbit orbit-one" aria-hidden="true" />
            <div className="assembly-orbit orbit-two" aria-hidden="true" />
            <div className="assembly-note note-top">
              <span>EXPLODED VIEW</span>
              <b>LAB IDENTITY / 03 LAYERS</b>
            </div>
            <div className="assembly-note note-side" aria-hidden="true">
              <span>MOVE TO INSPECT</span>
              <i />
            </div>

            <div className="logo-assembly">
              <LogoLayer className="layer-back" index="01" label="Network field" />
              <LogoLayer className="layer-mid" index="02" label="Logic core" />
              <LogoLayer className="layer-front" index="03" label="Lab identity" />
            </div>

            <div className="assembly-axis" aria-hidden="true">
              <span>Z</span>
              <i />
              <b>03</b>
            </div>
          </div>
        </div>

        </section>
      </div>

      <div className="hero-to-content" aria-hidden="true">
        <span />
      </div>

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
