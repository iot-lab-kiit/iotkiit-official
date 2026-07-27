"use client";

import ScrollText from "@/components/ScrollText";
import { Cpu, Globe, Smartphone, ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";

const services = [
 {
 icon: Cpu,
 title: "Embedded & Hardware Prototyping",
 desc: "From ESP32, STM32, and LoRaWAN node architectures to PCB design, sensor arrays, and custom telemetry units.",
 badge: "Hardware Guild",
 },
 {
 icon: Globe,
 title: "Full-Stack Web Engineering",
 desc: "Awwwards-grade glassmorphic Web platforms, real-time web socket dashboards, and cloud API infrastructures.",
 badge: "Web Guild",
 },
 {
 icon: Smartphone,
 title: "Cross-Platform Mobile Apps",
 desc: "High-performance React Native and Flutter mobile applications connecting users to IoT hardware devices.",
 badge: "App Guild",
 },
 {
 icon: ShieldCheck,
 title: "Edge AI & Computer Vision",
 desc: "Deploying lightweight YOLOv8 models, OpenCV pipelines, and neural networks on Raspberry Pi microcomputers.",
 badge: "ML & AI Guild",
 },
];

export default function Services() {
 return (
 <section className="relative overflow-hidden bg-white py-24 px-6 lg:px-12 text-brand-blue border-t border-brand-blue">
 {/* Background Glow */}
 <div className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 h-[450px] w-[450px] bg-brand-blue/10 blur-[150px]" />

 <div className="relative mx-auto max-w-7xl">
 {/* Section Header */}
 <div className="flex flex-col items-center text-center mb-16 space-y-4">

 <ScrollText as="h2" className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-brand-blue max-w-3xl leading-tight">
 What We Architect & Build
 </ScrollText>

 <ScrollText as="p" className="text-brand-blue/80 font-light text-base sm:text-lg max-w-2xl" delay={0.2}>
 End-to-end technical execution ranging from custom physical hardware nodes to enterprise web apps.
 </ScrollText>
 </div>

 {/* 4-Card Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {services.map((srv, idx) => {
 const Icon = srv.icon;
 return (
 <div
 key={idx}
 className="group relative overflow-hidden border border-brand-blue bg-brand-blue/10 p-8 -2xl shadow-brutal transition-all duration-500 hover:border-brand-blue-400/40 hover:bg-brand-blue/10 hover:-translate-y-2 flex flex-col justify-between"
 >
 {/* Glow Accent */}
 <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 bg-brand-blue/10 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

 <div className="space-y-4">
 <div className="flex items-center justify-between">
 <div className="flex h-12 w-12 items-center justify-center border border-brand-blue bg-gradient-to-tr from-blue-600/30 to-cyan-400/20 text-brand-blue group-hover:scale-110 transition-transform duration-300">
 <Icon className="h-6 w-6" />
 </div>
 <span className="font-mono text-[11px] font-bold text-brand-blue bg-brand-blue/10 px-3 py-1 border border-brand-blue-400/20">
 {srv.badge}
 </span>
 </div>

 <h3 className="text-2xl font-bold text-brand-blue tracking-tight group-hover:text-brand-blue transition-colors">
 {srv.title}
 </h3>

 <p className="text-sm text-brand-blue/80/90 font-light leading-relaxed">
 {srv.desc}
 </p>
 </div>
 </div>
 );
 })}
 </div>
 </div>
 </section>
 );
}
