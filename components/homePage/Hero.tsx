"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, ChevronRight, Cpu } from "lucide-react";
import KineticGrid from "./KineticGrid";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ROTATING_TITLES = [
  { line1: "DEEP TECH &", line2: "INTERNET OF THINGS." },
  { line1: "EMBEDDED SYSTEMS &", line2: "EDGE COMPUTING." },
  { line1: "ARTIFICIAL INTELLIGENCE &", line2: "NEURAL NETWORKS." },
  { line1: "CYBERSECURITY &", line2: "CLOUD ARCHITECTURE." },
  { line1: "AUTONOMOUS ROBOTICS &", line2: "HARDWARE INNOVATION." },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial Entrance Animation
      gsap.fromTo(
        ".hero-title-line",
        { opacity: 0, y: 40, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        ".hero-subtext",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.3 }
      );

      gsap.fromTo(
        ".hero-cta-btn",
        { opacity: 0, y: 20, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power3.out", delay: 0.5, stagger: 0.1 }
      );

      // GSAP ScrollTrigger Parallax
      gsap.to(".hero-content-wrapper", {
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
        y: -60,
        opacity: 0.3,
        ease: "none",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // 5-Second Title Rotation Effect with GSAP Animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (!titleContainerRef.current) return;

      // Animate out current title
      gsap.to(titleContainerRef.current, {
        y: -20,
        opacity: 0,
        filter: "blur(8px)",
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
          // Animate in new title
          gsap.fromTo(
            titleContainerRef.current,
            { y: 20, opacity: 0, filter: "blur(8px)" },
            { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.6, ease: "power2.out" }
          );
        },
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentTitle = ROTATING_TITLES[titleIndex];

  return (
    <section
      ref={heroRef}
      className="relative min-h-[88vh] flex flex-col justify-center overflow-hidden px-6 lg:px-12 pt-10 pb-20 text-white bg-[#030712]"
    >
      {/* Interactive Kinetic Dot Grid Background */}
      <KineticGrid />

      {/* Dynamic Background Mesh & Glowing Orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-transparent blur-[160px]" />

      <div className="hero-content-wrapper relative mx-auto max-w-7xl w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-7">
            
            {/* Eyebrow Annotation + 5-Second Rotating Title */}
            <div className="space-y-3 min-h-[160px] sm:min-h-[180px] flex flex-col justify-center">
              <span className="hero-title-line font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-cyan-400 block">
                {"// ARCHITECTING THE FUTURE"}
              </span>
              
              <div ref={titleContainerRef} className="will-change-transform">
                <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
                  <span className="block bg-gradient-to-r from-white via-gray-100 to-cyan-200 bg-clip-text text-transparent">
                    {currentTitle.line1}
                  </span>
                  <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-white bg-clip-text text-transparent">
                    {currentTitle.line2}
                  </span>
                </h1>
              </div>
            </div>

            {/* Subtitle */}
            <p className="hero-subtext text-base sm:text-lg text-gray-300/90 font-light max-w-xl leading-relaxed">
              We are a high-octane engineering collective of student researchers, developers, and hardware creators pushing the frontiers of IoT, Embedded Systems, and AI/ML.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#domains"
                className="hero-cta-btn group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] px-7 py-3.5 text-sm font-bold text-white shadow-glow-blue transition-all duration-500 hover:bg-[position:right_center] hover:shadow-glow-cyan hover:scale-105 active:scale-95"
              >
                <span>Explore Lab Domains</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
              <Link
                href="/projects"
                className="hero-cta-btn inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-7 py-3.5 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 hover:scale-105 active:scale-95"
              >
                <span>View Projects</span>
                <ChevronRight className="h-4 w-4 text-cyan-400" />
              </Link>
            </div>
          </div>

          {/* Right Column: High-Tech Glass Visual Frame */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 blur-xl opacity-50" />
              
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-[#070F2B]/90 p-6 md:p-8 backdrop-blur-2xl shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono text-cyan-300">
                  <div className="flex items-center gap-2">
                    <Cpu className="h-4 w-4 text-cyan-400" />
                    <span>SYSTEM_INIT: SUCCESS</span>
                  </div>
                  <span className="flex h-2 w-2 rounded-full bg-green-400" />
                </div>

                <div className="relative my-4 aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 flex items-center justify-center p-6">
                  <Image
                    src="/images/logo_small.webp"
                    alt="IoT Lab Logo"
                    width={180}
                    height={180}
                    className="object-contain p-2 drop-shadow-[0_10px_35px_rgba(6,182,212,0.45)] animate-float"
                  />
                </div>

                <div className="rounded-xl border border-cyan-500/20 bg-cyan-950/30 p-4 font-mono text-xs text-gray-300 space-y-1.5">
                  <div className="flex items-center justify-between text-cyan-300">
                    <span>{`> iot_lab.init()`}</span>
                    <span className="text-[10px] text-green-400">● ONLINE</span>
                  </div>
                  <p className="text-gray-400 text-[11px]">
                    Connecting hardware sensors, edge nodes, and neural networks in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
