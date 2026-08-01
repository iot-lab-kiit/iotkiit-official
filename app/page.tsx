const domains = [
  ["01", "Competitive Programming", "Algorithms"],
  ["02", "App Dev", "Mobile"],
  ["03", "Web Dev", "Full-stack"],
  ["04", "IoT", "Hardware"],
  ["05", "Machine Learning", "Intelligence"],
  ["06", "Cyber Security", "Defence"],
  ["07", "Content", "Stories"],
  ["08", "GD & UI/UX", "Design"],
  ["09", "Video", "Motion"],
  ["10", "Marketing", "Reach"],
  ["11", "Administration", "Operations"],
];

function DomainRail({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="domain-run" aria-hidden={hidden || undefined}>
      {domains.map(([number, name, note]) => (
        <div className="domain-pill" key={`${number}-${hidden ? "copy" : "main"}`}>
          <span className="domain-number">{number}</span>
          <span className="domain-name">{name}</span>
          <span className="domain-note">{note}</span>
        </div>
      ))}
    </div>
  );
}
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

        <div className="domains-band" id="domains">
          <div className="domains-heading">
            <span className="domains-kicker">Our domains</span>
            <p>
              Eleven disciplines.
              <br />
              One connected system.
            </p>
            <span className="rail-direction" aria-hidden="true">
              SCROLL / DISCOVER →
            </span>
          </div>
          <div className="domain-marquee">
            <div className="domain-track">
              <DomainRail />
              <DomainRail hidden />
            </div>
          </div>
        </div>
      </section>

      <section className="method-section" id="method">
        <div className="method-intro">
          <p className="section-index">[ 00—01 ]</p>
          <h2>
            Not a club with
            <br />
            <span>eleven disconnected teams.</span>
          </h2>
        </div>
        <div className="method-copy">
          <p>
            We are a working system. A hardware idea needs software. Software
            needs an interface. An interface needs a story. The strongest work
            happens where the domains overlap.
          </p>
          <div className="method-steps">
            <article>
              <b>01</b>
              <h3>Find the signal</h3>
              <p>Start with a problem grounded in real life.</p>
            </article>
            <article>
              <b>02</b>
              <h3>Build the circuit</h3>
              <p>Bring the right disciplines into one loop.</p>
            </article>
            <article>
              <b>03</b>
              <h3>Test the impact</h3>
              <p>Research, prototype, break it, and iterate.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
