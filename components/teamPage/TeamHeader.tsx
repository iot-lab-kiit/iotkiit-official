import Image from 'next/image';
import { Users, Sparkles } from 'lucide-react';

const TeamHeader = () => {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-20 px-6 lg:px-12 text-white border-b border-white/10">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[550px] rounded-full bg-blue-600/15 blur-[150px]" />
      <div className="pointer-events-none absolute top-10 right-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Header */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 backdrop-blur-xl">
              <Users className="h-3.5 w-3.5 text-cyan-300" />
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                The Minds Behind IoT Lab
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              MEET THE <br />
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-500 bg-clip-text text-transparent">
                INNOVATORS & ENGINEERS
              </span>
            </h1>

            <p className="text-gray-300 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
              “Individual commitment to a group effort — that is what makes a team work, a company work, a society work, a civilization work.”
            </p>
          </div>

          {/* Right Spotlight Team Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-2 backdrop-blur-2xl shadow-glass group">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/team-group.jpeg"
                  alt="IoT Lab KIIT Team"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHeader;
