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
    <section className="relative overflow-hidden bg-[#030712] py-24 px-6 lg:px-12 text-white border-t border-white/5">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 right-1/4 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 backdrop-blur-xl">
            <Zap className="h-3.5 w-3.5 text-cyan-300" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Core Capabilities
            </span>
          </div>

          <ScrollText as="h2" className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            What We Architect & Build
          </ScrollText>

          <ScrollText as="p" className="text-gray-400 font-light text-base sm:text-lg max-w-2xl" delay={0.2}>
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
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl shadow-glass transition-all duration-500 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:-translate-y-2 flex flex-col justify-between"
              >
                {/* Glow Accent */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/15 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-tr from-blue-600/30 to-cyan-400/20 text-cyan-300 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-[11px] font-bold text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-400/20">
                      {srv.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-sm text-gray-300/90 font-light leading-relaxed">
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
