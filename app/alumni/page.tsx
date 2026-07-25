"use client";

import Image from "next/image";
import { GraduationCap, Award, ShieldCheck, HeartHandshake, MapPin } from "lucide-react";
import { alumni, type Alum } from "@/data/alumni";
import { LinkedinIcon, GithubIcon } from "@/components/Icons";
import MagneticCard from "@/components/MagneticCard";
import ScrollText from "@/components/ScrollText";
import Stagger from "@/components/Stagger";

const coordinators = alumni.filter((a) => a.tier === "coordinator");
const leads = alumni.filter((a) => a.tier === "lead");
const mentors = alumni.filter((a) => a.tier === "mentor");
const members = alumni.filter((a) => a.tier === "member");

const getAvatarFallback = (name: string) => {
  const parts = name.split(" ");
  if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  return name.slice(0, 2).toUpperCase();
};

const SocialLink = ({ url, icon: Icon }: { url: string; icon: any }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-7 w-7 items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors"
  >
    <Icon className="h-3.5 w-3.5" />
  </a>
);

const AlumShowcaseCard = ({ alum, featured = false }: { alum: Alum; featured?: boolean }) => (
  <MagneticCard
    className={`group flex flex-col items-center gap-3 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-5 text-center transition-all duration-500 hover:border-cyan-400/40 hover:bg-white/[0.05] ${
      featured ? "shadow-glass" : ""
    }`}
  >
    <div
      className={`relative overflow-hidden rounded-full border-2 border-white/10 transition-colors group-hover:border-cyan-400/50 ${
        featured ? "h-24 w-24" : "h-16 w-16"
      }`}
    >
      {alum.image ? (
        <Image src={alum.image} alt={alum.name} fill className="object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800 to-black text-xl font-bold text-gray-500">
          {getAvatarFallback(alum.name)}
        </div>
      )}
    </div>
    
    <div className="space-y-1 w-full">
      <h4 className={`font-display font-bold text-white truncate px-1 ${featured ? "text-lg" : "text-sm"}`}>
        {alum.name}
      </h4>
      <p className="font-mono text-[9px] text-cyan-400 uppercase tracking-widest truncate">
        {alum.role || "Alumni"}
      </p>
      {alum.currentCompany && (
        <p className="text-[10px] text-gray-400 truncate mt-1 flex items-center justify-center gap-1">
          <MapPin className="h-2.5 w-2.5" />
          {alum.currentCompany}
        </p>
      )}
    </div>

    {(alum.linkedin || alum.github) && (
      <div className="flex items-center justify-center gap-1.5 pt-2 border-t border-white/10 w-full">
        {alum.linkedin && <SocialLink url={alum.linkedin} icon={LinkedinIcon} />}
        {alum.github && <SocialLink url={alum.github} icon={GithubIcon} />}
      </div>
    )}
  </MagneticCard>
);

export default function AlumniPage() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-white py-20 px-6 lg:px-12 overflow-hidden">
      {/* Ambient Radial Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-blue-600/10 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header Badge */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1.5 backdrop-blur-2xl shadow-glow-cyan">
            <GraduationCap className="h-4 w-4 text-cyan-300" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
              CHAPTER 07 // THE ALUMNI NETWORK
            </span>
          </div>

          <ScrollText as="h1" className="font-display text-4xl sm:text-7xl font-black tracking-tight text-white leading-tight">
            LEGACY &amp; <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">NETWORK</span>
          </ScrollText>

          <ScrollText as="p" className="text-gray-300 font-light text-base sm:text-xl max-w-3xl" delay={0.2}>
            The visionary minds who helped build and shape IoT Lab KIIT, now leading innovations across top global companies and research institutions.
          </ScrollText>
        </div>

        {/* Coordinators Tier */}
        {coordinators.length > 0 && (
          <div className="mb-20">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                PAST COORDINATORS
              </h3>
              <span className="font-mono text-xs text-cyan-400 uppercase">Legacy Leaders</span>
            </div>
            <Stagger
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
              childClassName="h-full"
              step={60}
            >
              {coordinators.map((a) => (
                <AlumShowcaseCard key={a.name} alum={a} featured />
              ))}
            </Stagger>
          </div>
        )}

        {/* Leads Tier */}
        {leads.length > 0 && (
          <div className="mb-20">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                PAST DOMAIN LEADS
              </h3>
              <span className="font-mono text-xs text-cyan-400 uppercase">Guild Masters</span>
            </div>
            <Stagger
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"
              childClassName="h-full"
              step={50}
            >
              {leads.map((a) => (
                <AlumShowcaseCard key={a.name} alum={a} featured />
              ))}
            </Stagger>
          </div>
        )}

        {/* Mentors Tier */}
        {mentors.length > 0 && (
          <div className="mb-20">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                MENTORS &amp; ADVISORS
              </h3>
              <span className="font-mono text-xs text-cyan-400 uppercase">Guidance</span>
            </div>
            <Stagger
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4"
              childClassName="h-full"
              step={40}
            >
              {mentors.map((a) => (
                <AlumShowcaseCard key={a.name} alum={a} />
              ))}
            </Stagger>
          </div>
        )}

        {/* Members Tier */}
        {members.length > 0 && (
          <div className="mb-12">
            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
              <h3 className="font-display text-2xl font-bold text-white tracking-tight">
                GRADUATED MEMBERS
              </h3>
              <span className="font-mono text-xs text-cyan-400 uppercase">The Network ({members.length})</span>
            </div>
            <Stagger
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4"
              childClassName="h-full"
              step={30}
            >
              {members.map((a, i) => (
                <AlumShowcaseCard key={`${a.name}-${i}`} alum={a} />
              ))}
            </Stagger>
          </div>
        )}
        
        <div className="text-center pt-8 border-t border-white/10">
          <p className="font-mono text-xs text-gray-500 uppercase tracking-widest">
            // ONCE A PART OF THE IOT FAMILY, ALWAYS A PART OF THE IOT FAMILY.
          </p>
        </div>
      </div>
    </main>
  );
}
