"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollText from "@/components/ScrollText";
import { Trophy, Cpu, FileCheck, Rocket, Sparkles, Award } from "lucide-react";

if (typeof window !== "undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

const milestones = [
 {
 year: "2018",
 title: "Lab Genesis",
 desc: "Established as KIIT's flagship research hub for embedded hardware & IoT software development.",
 icon: Cpu,
 stat: "FOUNDING YEAR",
 },
 {
 year: "2020",
 title: "First Patent Filed",
 desc: "Published original research and filed national hardware patents in smart energy grid sensors.",
 icon: FileCheck,
 stat: "PATENT GRANTED",
 },
 {
 year: "2022",
 title: "Hackathon Domination",
 desc: "Secured 15+ top positions across Smart India Hackathon, ETH India, and IEEE international summits.",
 icon: Trophy,
 stat: "15+ VICTORIES",
 },
 {
 year: "2024",
 title: "Next-Gen AI & Edge Mesh",
 desc: "Deployed distributed LoRaWAN campus mesh and AI edge vision gatekeeper systems.",
 icon: Rocket,
 stat: "100+ ACTIVE NODES",
 },
];

export default function InteractiveTimeline() {
 const sectionRef = useRef<HTMLDivElement>(null);
 const containerRef = useRef<HTMLDivElement>(null);

 useEffect(() => {
 const ctx = gsap.context(() => {
 const section = sectionRef.current;
 const container = containerRef.current;
 if (!section || !container) return;

 const totalScroll = container.scrollWidth - window.innerWidth + 120;

 gsap.to(container, {
 x: -totalScroll,
 ease: "none",
 scrollTrigger: {
 trigger: section,
 pin: true,
 scrub: 1,
 end: () => `+=${totalScroll}`,
 invalidateOnRefresh: true,
 },
 });
 }, sectionRef);

 return () => ctx.revert();
 }, []);

 return (
 <section
 ref={sectionRef}
 className="relative overflow-hidden bg-white py-24 text-brand-blue border-t border-brand-blue"
 >
 {/* Background Ambient Glow */}
 <div className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 h-[500px] w-[500px] bg-brand-blue/10 blur-[160px]" />

 <div className="mx-auto max-w-7xl px-6 lg:px-12 mb-12">

 <ScrollText as="h2" className="font-display text-4xl sm:text-6xl font-black tracking-tight text-brand-blue leading-tight">
 LAB EVOLUTION & MILESTONES
 </ScrollText>
 <ScrollText as="p" className="text-brand-blue/80 font-light text-base sm:text-lg max-w-xl mt-2" delay={0.2}>
 Scroll down to explore how IoT Lab KIIT grew from a student initiative into an industry-recognized deep tech incubator.
 </ScrollText>
 </div>

 {/* Horizontal Pinned Track Container */}
 <div className="w-full overflow-hidden">
 <div
 ref={containerRef}
 className="flex gap-8 px-6 lg:px-12 w-max items-center py-6"
 >
 {milestones.map((m, i) => {
 const Icon = m.icon;
 return (
 <div
 key={i}
 className="group relative w-[320px] sm:w-[420px] shrink-0 overflow-hidden border border-brand-blue bg-brand-blue/10 p-8 -2xl shadow-brutal transition-all duration-500 hover:border-brand-blue-400/50 hover:bg-brand-blue/10 hover:-translate-y-2"
 >
 {/* Top Header */}
 <div className="flex items-center justify-between mb-8">
 <span className="font-display text-5xl font-black text-brand-blue">
 {m.year}
 </span>
 <div className="flex h-12 w-12 items-center justify-center border border-brand-blue bg-brand-blue/10 text-brand-blue">
 <Icon className="h-6 w-6" />
 </div>
 </div>

 <div className="space-y-3">
 <h3 className="font-display text-2xl font-bold text-brand-blue tracking-tight group-hover:text-brand-blue transition-colors">
 {m.title}
 </h3>
 <p className="text-sm font-light text-brand-blue/80/90 leading-relaxed">
 {m.desc}
 </p>
 </div>

 <div className="mt-8 pt-4 border-t border-brand-blue flex items-center justify-between font-mono text-xs text-brand-blue">
 <span>{m.stat}</span>
 <span className="text-brand-blue/80">0{i + 1} / 04</span>
 </div>
 </div>
 );
 })}
 </div>
 </div>
 </section>
 );
}
