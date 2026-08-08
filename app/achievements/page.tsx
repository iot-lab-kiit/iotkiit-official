import type { Metadata } from 'next';
import Image from 'next/image';
import Stagger from '@/components/Stagger';
import SectionTitle from '@/components/team/SectionTitle';
import { achievements } from '@/data/achievements';
import { ExternalLink } from 'lucide-react';

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
    <main className="relative min-h-screen bg-[#f5f3ef] text-slate-800 pb-20">

      {/* Cinematic Header Section - using SectionTitle for consistency with other pages */}
      <section className="relative overflow-hidden px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <SectionTitle
            title="Achievements"
            subtitle="Celebrating the incredible wins, hackathon victories, and milestones earned by IoT Lab members."
          />
        </div>
      </section>

      {/* Main Content / Grid */}
      <section className="mx-auto max-w-6xl px-6">
        <Stagger
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          childClassName="h-full flex"
          step={80}
        >
          {achievements.map((ach) => (
            <a
              key={ach.url}
              href={ach.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative flex w-full flex-col overflow-hidden rounded-[24px] 
                bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]
                transition-all duration-500 ease-out 
                hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-[0_20px_40px_-12px_rgba(36,96,218,0.15)]
              "
            >
              {ach.image ? (
                <div className="relative h-48 w-full overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={ach.image}
                    alt={ach.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              ) : (
                <div className="relative h-20 w-full shrink-0 overflow-hidden bg-gradient-to-br from-blue-50 to-slate-50">
                  {/* Abstract pattern placeholder for cards without images */}
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#2460da_1px,transparent_1px)] [background-size:16px_16px] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
                </div>
              )}

              <div className="flex flex-col flex-1 p-6 relative z-10">
                <div className="mb-4 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0f4ff] text-blue-600 shadow-sm transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110">
                  <LinkedInIcon className="w-4 h-4" />
                </div>

                <h2 className="text-xl font-bold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-700">
                  {ach.title}
                </h2>

                <p className="mt-2 text-sm font-medium text-slate-500">
                  Achieved by <span className="font-semibold text-slate-700">{ach.author}</span>
                </p>

                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-blue-600 transition-all duration-300 group-hover:gap-3 mt-auto pt-4">
                  View post
                  <ExternalLink className="w-4 h-4 opacity-80" />
                </div>
              </div>
            </a>
          ))}
        </Stagger>

        {achievements.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            <p>More milestones on the way. Watch this space.</p>
          </div>
        )}
      </section>
    </main>
  );
}
