import type { Metadata } from 'next';
import Stagger from '@/components/Stagger';
import { achievements } from '@/data/achievements';

export const metadata: Metadata = {
  title: 'Achievements · IoT Lab KIIT',
  description: "Celebrating the wins and recognition earned by IoT Lab KIIT members.",
};

const LinkedInIcon = ({ className = '' }: { className?: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49V23H8V8z" />
  </svg>
);

export default function AchievementsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary-800 via-primary-900 to-[#0e2666] px-6 py-20 text-white sm:py-24">
      {/* ambient glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-full max-w-3xl -translate-x-1/2 rounded-full bg-blue-400/20 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary-400/10 blur-[110px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <header className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-100 backdrop-blur">
            <LinkedInIcon className="h-3.5 w-3.5" />
            Recognition
          </span>
          <h1 className="text-4xl font-black uppercase tracking-tight sm:text-5xl md:text-6xl">
            Achievements
          </h1>
          <p className="mt-4 text-base font-light text-blue-100/90 sm:text-lg">
            Celebrating the wins and recognition earned by our members.
          </p>
        </header>

        {/* Grid */}
        <Stagger
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          childClassName="h-full"
          step={90}
        >
          {achievements.map((ach) => (
            <a
              key={ach.url}
              href={ach.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between rounded-2xl border border-white/15 bg-white/[0.07] p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/60 hover:bg-white/[0.12] hover:shadow-2xl"
            >
              <div>
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-400/20 text-blue-200 transition-colors duration-300 group-hover:bg-blue-400/30 group-hover:text-white">
                  <LinkedInIcon />
                </div>
                <h2 className="text-xl font-bold leading-tight text-white">
                  {ach.title}
                </h2>
                <p className="mt-2 text-sm text-blue-100/80">
                  <span className="font-medium text-blue-200/70">by</span> {ach.author}
                </p>
              </div>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-200 transition-colors duration-300 group-hover:text-white">
                View on LinkedIn
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path
                    d="M7 17 17 7M17 7H8M17 7v9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          ))}
        </Stagger>

        <p className="mt-14 text-center text-sm text-blue-100/60">
          More milestones on the way. Watch this space.
        </p>
      </div>
    </main>
  );
}
