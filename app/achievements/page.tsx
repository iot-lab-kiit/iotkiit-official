"use client";

import { Trophy, ExternalLink, Award, Sparkles, Zap, ShieldCheck } from "lucide-react";
import { achievements } from "@/data/achievements";
import { LinkedinIcon } from "@/components/Icons";
import MagneticCard from "@/components/MagneticCard";
import ScrollText from "@/components/ScrollText";

export default function AchievementsPage() {
 return (
 <main className="relative min-h-screen bg-white text-brand-blue py-20 px-6 lg:px-12 overflow-hidden">
 {/* Background Ambient Glows */}
 <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] bg-brand-blue/10 blur-[180px]" />
 <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] bg-brand-blue/10 blur-[150px]" />

 <div className="relative mx-auto max-w-7xl">
 {/* Chapter Header Badge */}
 <div className="flex flex-col items-center text-center space-y-4 mb-12">

 <ScrollText as="h1" className="font-display text-4xl sm:text-7xl font-black tracking-tight text-brand-blue leading-tight">
 LAB <span>ACHIEVEMENTS</span>
 </ScrollText>

 <ScrollText as="p" className="text-brand-blue/80 font-light text-base sm:text-xl max-w-3xl" delay={0.2}>
 Celebrating national hackathon victories, research publications, patents, and milestones earned by IoT Lab KIIT members.
 </ScrollText>
 </div>

 {/* Tally Metrics Grid */}
 <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-4 font-mono">
 <div className=" border border-brand-blue bg-brand-blue/10 p-6 -2xl text-center space-y-1">
 <div className="text-3xl sm:text-4xl font-extrabold text-brand-blue">15+</div>
 <div className="text-[10px] text-brand-blue/80 uppercase tracking-widest">National Hackathon Titles</div>
 </div>
 <div className=" border border-brand-blue bg-brand-blue/10 p-6 -2xl text-center space-y-1">
 <div className="text-3xl sm:text-4xl font-extrabold text-brand-blue">05</div>
 <div className="text-[10px] text-brand-blue/80 uppercase tracking-widest">Patents &amp; Publications</div>
 </div>
 <div className=" border border-brand-blue bg-brand-blue/10 p-6 -2xl text-center space-y-1">
 <div className="text-3xl sm:text-4xl font-extrabold text-brand-blue">₹15L+</div>
 <div className="text-[10px] text-brand-blue/80 uppercase tracking-widest">Prize Monies Won</div>
 </div>
 <div className=" border border-brand-blue bg-brand-blue/10 p-6 -2xl text-center space-y-1">
 <div className="text-3xl sm:text-4xl font-extrabold text-brand-blue">100%</div>
 <div className="text-[10px] text-brand-blue/80 uppercase tracking-widest">Student Engineered</div>
 </div>
 </div>

 {/* Achievements Catalogue Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {achievements.map((ach, idx) => (
 <MagneticCard
 key={ach.url}
 className="group relative flex flex-col justify-between overflow-hidden border border-brand-blue bg-brand-blue/10 p-6 -2xl shadow-brutal transition-all duration-500 hover:border-brand-blue-400/50 hover:bg-brand-blue/10"
 >
 <div className="space-y-4">
 <div className="flex items-center justify-between">
 <div className="flex h-11 w-11 items-center justify-center border border-brand-blue bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue/10 group-hover:text-brand-blue transition-colors duration-300">
 <LinkedinIcon className="h-5 w-5" />
 </div>
 <span className="font-mono text-[10px] font-bold text-brand-blue uppercase bg-brand-blue/10 px-2.5 py-1 border border-brand-blue-400/20 flex items-center gap-1">
 <ShieldCheck className="h-3 w-3 text-brand-blue" />
 Verified Win 0{idx + 1}
 </span>
 </div>

 <h2 className="font-display text-xl font-bold text-brand-blue leading-snug group-hover:text-brand-blue transition-colors">
 {ach.title}
 </h2>

 <p className="text-xs font-light text-brand-blue/80 leading-relaxed">
 <span className="font-mono text-brand-blue font-bold">Achieved by:</span> {ach.author}
 </p>
 </div>

 <div className="mt-8 pt-4 border-t border-brand-blue">
 <a
 href={ach.url}
 target="_blank"
 rel="noopener noreferrer"
 className="w-full inline-flex items-center justify-between font-mono text-xs font-bold text-brand-blue hover:text-brand-blue transition-colors"
 >
 <span>View Post on LinkedIn</span>
 <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
 </a>
 </div>
 </MagneticCard>
 ))}
 </div>

 <div className="mt-16 text-center">
 <p className="font-mono text-xs text-brand-blue/80 tracking-widest uppercase">
 // MORE MILESTONES ON THE WAY. BUILDING DEEP TECH IN PUBLIC.
 </p>
 </div>
 </div>
 </main>
 );
}
