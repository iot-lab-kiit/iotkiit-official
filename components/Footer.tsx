"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, MapPin, Globe, Cpu } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/Icons";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#030712] pt-20 pb-10 border-t border-white/10 text-white">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-96 w-full max-w-7xl rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -top-40 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top Section: CTA Card */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-r from-blue-900/40 via-cyan-900/30 to-blue-950/50 p-8 md:p-12 backdrop-blur-2xl shadow-glass">
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-[80px]" />
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                <Cpu className="h-3.5 w-3.5" />
                Innovate With Us
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                Ready to explore the future of IoT & Deep Tech?
              </h2>
              <p className="mt-2 text-base text-gray-300 font-light">
                Discover our student research projects, embedded hardware prototypes, and open-source software tools.
              </p>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-sm font-bold text-white shadow-glow-blue transition-all duration-300 hover:shadow-glow-cyan hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <span>Explore Projects</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 p-0.5 shadow-glow-blue">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#030712]">
                  <Image
                    src="/images/logo_small.webp"
                    alt="IoT Lab KIIT"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="font-black text-xl tracking-tight text-white">
                IoT LAB <span className="text-cyan-400 font-mono text-sm ml-1">KIIT</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 font-light leading-relaxed max-w-sm">
              A Centre of Excellence at KIIT University dedicated to research, hardware prototyping, full-stack software development, AI models, and student innovation.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:text-white transition-all duration-300"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 hover:border-blue-400/50 hover:bg-blue-500/20 hover:text-white transition-all duration-300"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
              <a
                href={site.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:text-white transition-all duration-300"
              >
                <TwitterIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">Lab Projects</Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition-colors">Team Members</Link>
              </li>
              <li>
                <Link href="/alumni" className="hover:text-white transition-colors">Alumni Network</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">Lab Gallery</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Exploration */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <Link href="/achievements" className="hover:text-white transition-colors">Achievements</Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">Events & Hackathons</Link>
              </li>
              <li>
                <Link href="/webinar" className="hover:text-white transition-colors">Webinar Series</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Location Info */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-4">
              Location & Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="font-light leading-snug">
                  School of Computer Engineering, KIIT University, Bhubaneswar, Odisha
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 text-cyan-400 shrink-0" />
                <span className="font-mono text-xs">iotkiit.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <p>© {new Date().getFullYear()} IoT Lab KIIT. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Built with <span className="text-cyan-400">⚡</span> by IoT Lab Tech Guild
          </p>
        </div>
      </div>
    </footer>
  );
}
