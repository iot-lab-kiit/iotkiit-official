"use client";

import { Trophy, ExternalLink, Award, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { achievements } from "@/data/achievements";
import { LinkedinIcon } from "@/components/Icons";
import MagneticCard from "@/components/MagneticCard";
import ScrollText from "@/components/ScrollText";

export default function AchievementsPage() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-white py-20 px-6 lg:px-12 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-blue-600/10 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Chapter Header Badge */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1.5 backdrop-blur-2xl shadow-glow-cyan">
            <Zap className="h-4 w-4 text-cyan-300" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
              WALL OF FAME &amp; RECOGNITION
            </span>
          </div>

          <ScrollText as="h1" className="font-display text-4xl sm:text-7xl font-black tracking-tight text-white leading-tight">
            LAB <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">ACHIEVEMENTS</span>
          </ScrollText>

          <ScrollText as="p" className="text-gray-300 font-light text-base sm:text-xl max-w-3xl" delay={0.2}>
            Celebrating national hackathon victories, research publications, patents, and milestones earned by IoT Lab KIIT members.
          </ScrollText>
        </div>

        {/* Tally Metrics Grid */}
        <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono">
          <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-2xl text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-300">15+</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest">National Hackathon Titles</div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-2xl text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-300">05</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest">Patents &amp; Publications</div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-2xl text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-300">₹15L+</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest">Prize Monies Won</div>
          </div>
          <div className="rounded-3xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-2xl text-center space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan-300">100%</div>
            <div className="text-[10px] text-gray-400 uppercase tracking-widest">Student Engineered</div>
          </div>
        </div>

        {/* Achievements Catalogue Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((ach, idx) => (
            <MagneticCard
              key={ach.url}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:border-cyan-400/50 hover:bg-white/[0.07]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-blue-600/20 text-cyan-300 backdrop-blur-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <LinkedinIcon className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-[10px] font-bold text-cyan-300 uppercase bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-400/20 flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3 text-cyan-400" />
                    Verified Win 0{idx + 1}
                  </span>
                </div>

                <h2 className="font-display text-xl font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                  {ach.title}
                </h2>

                <p className="text-xs font-light text-gray-300 leading-relaxed">
                  <span className="font-mono text-cyan-400 font-bold">Achieved by:</span> {ach.author}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <a
                  href={ach.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between font-mono text-xs font-bold text-cyan-300 hover:text-white transition-colors"
                >
                  <span>View Post on LinkedIn</span>
                  <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </MagneticCard>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-mono text-xs text-gray-400 tracking-widest uppercase">
            // MORE MILESTONES ON THE WAY. BUILDING DEEP TECH IN PUBLIC.
          </p>
        </div>
      </div>
    </main>
  );
}
