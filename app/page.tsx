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
  return (
    <main className="landing-page">
      <section className="hero" id="home">
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
