"use client";

import ScrollText from "@/components/ScrollText";
import { MapPin, Navigation, Compass, ExternalLink } from "lucide-react";

export default function Showcase() {
 return (
 <section className="relative overflow-hidden bg-white py-24 px-6 lg:px-12 text-brand-blue border-t border-brand-blue">
 {/* Background Ambient Glow */}
 <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[450px] w-[650px] bg-brand-blue/10 blur-[160px]" />

 <div className="relative mx-auto max-w-7xl">
 <div className="relative overflow-hidden border border-brand-blue bg-brand-blue/10 p-8 md:p-12 -2xl shadow-brutal">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
 
 {/* Left Column: HQ Details */}
 <div className="lg:col-span-7 space-y-6">

 <ScrollText as="h2" className="font-display text-3xl sm:text-4xl font-extrabold text-brand-blue leading-tight">
 Visit Campus 25 Innovation Hub
 </ScrollText>

 <ScrollText as="p" className="text-brand-blue/80 font-light text-base leading-relaxed" delay={0.2}>
 Room A-004, School of Computer Engineering, KIIT University, Bhubaneswar, Odisha — 751024. Our physical laboratory is equipped with workstation nodes, hardware test benches, 3D printing equipment, and collaborative meeting areas.
 </ScrollText>

 <div className="pt-2">
 <a
 href="https://maps.app.goo.gl/wuBhh7PJVyAbosY28"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-xs font-bold text-brand-blue shadow-brutal hover:shadow-brutal-sm hover:scale-105 transition-all"
 >
 <Navigation className="h-4 w-4" />
 <span>Navigate on Google Maps</span>
 <ExternalLink className="h-3.5 w-3.5" />
 </a>
 </div>
 </div>

 {/* Right Column: High-tech Map Frame */}
 <div className="lg:col-span-5 flex justify-center">
 <div className="relative aspect-video w-full overflow-hidden border border-brand-blue bg-brand-blue/10 p-6 flex flex-col justify-between">
 <div className="flex items-center justify-between text-xs font-mono text-brand-blue">
 <span>📍 CAMPUS 25, ROOM A-004</span>
 <span className="text-green-400">● LAB OPEN</span>
 </div>
 <div className="my-4 text-center space-y-1">
 <span className="font-mono text-2xl font-extrabold text-brand-blue block">
 IoT LAB KIIT
 </span>
 <span className="text-xs text-brand-blue/80 font-light block">
 Patia, Bhubaneswar, Odisha
 </span>
 </div>
 <div className="text-center font-mono text-[10px] text-brand-blue/80">
 LAT: 20.3540° N · LONG: 85.8184° E
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
