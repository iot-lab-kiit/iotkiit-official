"use client";

import ScrollText from "@/components/ScrollText";
import { GitBranch, Cpu, Rocket, Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Ideation & Feasibility",
    desc: "Problem identification, hardware constraint analysis, component selection, and mathematical modeling.",
    icon: GitBranch,
  },
  {
    num: "02",
    title: "Prototyping & Bench Testing",
    desc: "Breadboard validation, PCB routing, firmware programming, micro-controller flashing, and stress testing.",
    icon: Cpu,
  },
  {
    num: "03",
    title: "Deployment & Scaling",
    desc: "Edge cloud connection, MQTT pipeline setup, web dashboard UI integration, and hackathon presentation.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-[#030712] py-24 px-6 lg:px-12 text-white border-t border-white/5">
      <div className="pointer-events-none absolute top-1/2 left-10 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Lab Methodology
            </span>
          </div>

          <ScrollText as="h2" className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl leading-tight">
            How We Turn Ideas Into Impact
          </ScrollText>

          <ScrollText as="p" className="text-gray-400 font-light text-base sm:text-lg max-w-2xl" delay={0.2}>
            A disciplined engineering lifecycle for rapid prototyping and production delivery.
          </ScrollText>
        </div>

        {/* 3 Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl shadow-glass transition-all duration-500 hover:border-cyan-400/40 hover:bg-white/[0.07] hover:-translate-y-2"
              >
                <span className="font-mono text-5xl font-extrabold text-white/10 group-hover:text-cyan-400/20 transition-colors block mb-4">
                  {step.num}
                </span>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-cyan-300 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-300/90 font-light leading-relaxed">
                    {step.desc}
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
