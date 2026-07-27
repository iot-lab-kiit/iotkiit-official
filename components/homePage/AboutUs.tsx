"use client";

import { useState } from "react";
import Image from "next/image";
import ScrollText from "@/components/ScrollText";
import { Target, Compass, Lightbulb, CheckCircle2, Sparkles, Layers } from "lucide-react";

const pillars = [
 {
 id: "mission",
 title: "Our Mission",
 icon: Target,
 desc: "To empower students with state-of-the-art infrastructure, expert faculty mentorship, and hands-on exposure to solve real-world complex problems through technology.",
 points: ["Interdisciplinary Research", "Student-Led Prototypes", "Industry Standard Mentorship"],
 },
 {
 id: "ecosystem",
 title: "Lab Ecosystem",
 icon: Layers,
 desc: "A vibrant multi-domain ecosystem bridging hardware edge computing, AI algorithms, cloud deployment, product design, and community leadership.",
 points: ["11 Specialized Guilds", "State-of-the-art Hardware Bench", "24/7 Innovation Sandbox"],
 },
 {
 id: "vision",
 title: "Our Vision",
 icon: Lightbulb,
 desc: "To emerge as a premier technology research incubator that produces global leaders, patentable inventions, and industry-grade solutions.",
 points: ["Hackathon Supremacy", "Patentable Innovations", "Global Alumni Placements"],
 },
];

export default function AboutUs() {
 const [activePillar, setActivePillar] = useState("mission");
 const selectedPillar = pillars.find((p) => p.id === activePillar) || pillars[0];

 return (
 <section id="about-us" className="relative overflow-hidden bg-white py-24 px-6 lg:px-12 text-brand-blue border-t border-brand-blue">
 {/* Background Ambient Glow */}
 <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 h-[450px] w-[450px] bg-brand-blue/10 blur-[140px]" />
 <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 bg-brand-blue/10 blur-[120px]" />

 <div className="relative mx-auto max-w-7xl">
 {/* Section Header */}
 <div className="flex flex-col items-center text-center mb-16 space-y-4">

 <ScrollText as="h2" className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-brand-blue max-w-3xl leading-tight">
 Nurturing Engineering Excellence & Pioneering Ideas
 </ScrollText>

 <ScrollText as="p" className="text-brand-blue/80 font-light text-base sm:text-lg max-w-2xl" delay={0.2}>
 IoT Lab KIIT unites passionate student minds and visionary professors to create impact-driven technology that matters.
 </ScrollText>
 </div>

 {/* Main 2-Column Story Grid */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
 
 {/* Left Column: Interactive Image Glass Frame */}
 <div className="lg:col-span-6 relative">
 <div className="relative overflow-hidden border border-brand-blue bg-brand-blue/10 p-3 -2xl shadow-brutal group">
 <div className="relative aspect-[4/3] w-full overflow-hidden ">
 <Image
 src="/images/lab-life.jpeg"
 alt="IoT Lab members collaborating"
 fill
 className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
 
 {/* Floating Glass Badge */}
 <div className="absolute bottom-4 left-4 right-4 border border-brand-blue bg-brand-blue/10 p-4 flex items-center justify-between">
 <div>
 <span className="font-mono text-xs text-brand-blue font-bold block">
 CAMPUS RESEARCH INCUBATOR
 </span>
 <span className="text-xs text-brand-blue/80 font-light">
 School of Computer Engineering
 </span>
 </div>
 <Sparkles className="h-5 w-5 text-brand-blue" />
 </div>
 </div>
 </div>
 </div>

 {/* Right Column: Tabbed Pillar System */}
 <div className="lg:col-span-6 space-y-6">
 
 {/* Tabs */}
 <div className="flex items-center gap-2 p-1.5 border border-brand-blue bg-brand-blue/10 ">
 {pillars.map((pillar) => {
 const Icon = pillar.icon;
 const isActive = pillar.id === activePillar;
 return (
 <button
 key={pillar.id}
 onClick={() => setActivePillar(pillar.id)}
 className={`flex-1 flex items-center justify-center gap-2 py-3 text-xs sm:text-sm font-bold transition-all duration-300 ${
 isActive
 ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-brand-blue shadow-brutal"
 : "text-brand-blue/80 hover:text-brand-blue hover:bg-white/5"
 }`}
 >
 <Icon className="h-4 w-4" />
 <span>{pillar.title}</span>
 </button>
 );
 })}
 </div>

 {/* Pillar Content Card */}
 <div className=" border border-brand-blue bg-brand-blue/10 p-8 -2xl shadow-brutal space-y-6">
 <h3 className="text-2xl font-bold text-brand-blue flex items-center gap-3">
 <span className="text-brand-blue font-mono">0{pillars.findIndex(p => p.id === activePillar) + 1}.</span>
 {selectedPillar.title}
 </h3>
 <p className="text-brand-blue/80 text-base font-light leading-relaxed">
 {selectedPillar.desc}
 </p>
 
 <div className="space-y-3 pt-2">
 {selectedPillar.points.map((pt, i) => (
 <div key={i} className="flex items-center gap-3 text-sm text-gray-200">
 <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
 <span className="font-medium">{pt}</span>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
