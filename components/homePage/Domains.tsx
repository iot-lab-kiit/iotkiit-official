"use client";

import { useState, useRef, MouseEvent as ReactMouseEvent } from "react";
import Image from "next/image";
import ScrollText from "@/components/ScrollText";
import { domains } from "@/data/domains";
import {
 Code,
 Smartphone,
 Globe,
 Cpu,
 Brain,
 Shield,
 FileText,
 Palette,
 Video,
 Megaphone,
 Briefcase,
 Sparkles,
 ArrowUpRight,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
 Terminal: Code,
 PhoneAndroid: Smartphone,
 Language: Globe,
 Memory: Cpu,
 Psychology: Brain,
 Security: Shield,
 EditNote: FileText,
 Palette: Palette,
 Videocam: Video,
 Campaign: Megaphone,
 BusinessCenter: Briefcase,
};

import MagneticCard from "@/components/MagneticCard";

export default function Domains() {
 const [activeCategory, setActiveCategory] = useState<"all" | "tech" | "non-tech">("all");

 const filteredDomains = domains.filter((d) => {
 if (activeCategory === "tech") {
 return ["cp", "app", "web", "iot", "ml", "cyber"].includes(d.id);
 }
 if (activeCategory === "non-tech") {
 return ["content", "gd", "video", "marketing", "admin"].includes(d.id);
 }
 return true;
 });

 return (
 <section id="domains" className="relative overflow-hidden bg-white py-28 px-6 lg:px-12 text-brand-blue border-t border-brand-blue">
 {/* Ambient Background Glows */}
 <div className="pointer-events-none absolute top-1/3 right-0 h-[600px] w-[600px] bg-brand-blue/10 blur-[150px]" />
 <div className="pointer-events-none absolute bottom-10 left-1/3 h-[500px] w-[500px] bg-brand-blue/10 blur-[140px]" />

 <div className="relative mx-auto max-w-7xl">
 {/* Header */}
 <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
 <div className="space-y-4 max-w-2xl">
 <ScrollText as="h2" className="text-4xl sm:text-6xl font-extrabold tracking-tight text-brand-blue leading-tight font-display">
 TECHNICAL & CREATIVE DOMAINS
 </ScrollText>
 <ScrollText as="p" className="text-brand-blue/80 font-light text-base sm:text-lg max-w-xl" delay={0.2}>
 Explore our 11 specialized divisions driving software development, research, and community outreach.
 </ScrollText>
 </div>

 {/* Category Filter Pills */}
 <div className="flex items-center gap-2 p-1.5 border border-brand-blue bg-brand-blue/10 shrink-0">
 <button
 onClick={() => setActiveCategory("all")}
 className={`px-5 py-2.5 text-xs font-bold transition-all duration-300 ${
 activeCategory === "all"
 ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-brand-blue shadow-brutal"
 : "text-brand-blue/80 hover:text-brand-blue"
 }`}
 >
 All ({domains.length})
 </button>
 <button
 onClick={() => setActiveCategory("tech")}
 className={`px-5 py-2.5 text-xs font-bold transition-all duration-300 ${
 activeCategory === "tech"
 ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-brand-blue shadow-brutal"
 : "text-brand-blue/80 hover:text-brand-blue"
 }`}
 >
 Technical (6)
 </button>
 <button
 onClick={() => setActiveCategory("non-tech")}
 className={`px-5 py-2.5 text-xs font-bold transition-all duration-300 ${
 activeCategory === "non-tech"
 ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-brand-blue shadow-brutal"
 : "text-brand-blue/80 hover:text-brand-blue"
 }`}
 >
 Creative & Ops (5)
 </button>
 </div>
 </div>

 {/* Bento-like Asymmetric Layout Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {filteredDomains.map((domain, index) => {
 const IconComponent = ICON_MAP[domain.icon] || Code;
 // Make every 3rd card take larger span or custom visual weight in bento layout
 const isLarge = index % 3 === 0;

 return (
 <MagneticCard
 key={domain.id}
 className={`p-6 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between ${
 isLarge ? "lg:col-span-2" : "lg:col-span-1"
 }`}
 >
 <div>
 {/* Background Domain Image Preview with Gradient Overlay */}
 <div className={`relative mb-6 w-full overflow-hidden border border-brand-blue ${
 isLarge ? "h-64" : "h-48"
 }`}>
 <Image
 src={domain.img}
 alt={domain.title}
 fill
 className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-[#030712]/45 to-transparent" />
 
 {/* Floating Icon Badge */}
 <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center border border-brand-blue bg-brand-blue/10 text-brand-blue ">
 <IconComponent className="h-5 w-5" />
 </div>
 </div>

 {/* Text Details */}
 <div className="space-y-3 relative z-10">
 <div className="flex items-center justify-between">
 <h3 className="text-2xl font-bold text-brand-blue tracking-tight font-display">
 {domain.title}
 </h3>
 <ArrowUpRight className="h-5 w-5 text-brand-blue/80 transition-all duration-300 group-hover:text-brand-blue group-hover:translate-x-1 group-hover:-translate-y-1" />
 </div>
 <p className="text-sm text-brand-blue/80/80 font-light leading-relaxed max-w-2xl">
 {domain.desc}
 </p>
 </div>
 </div>

 <div className="mt-6 flex items-center justify-between border-t border-brand-blue pt-4 text-xs font-mono text-brand-blue/70">
 <span>SYSTEM_NODE: D-0{index + 1}</span>
 <span className="uppercase tracking-wider">active</span>
 </div>
 </MagneticCard>
 );
 })}
 </div>
 </div>
 </section>
 );
}
