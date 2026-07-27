"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Cpu, Code2, Users, Network, ExternalLink } from "lucide-react";
import { coordinators, leads, members, type Person } from "@/data/team";
import { LinkedinIcon, GithubIcon, TwitterIcon } from "@/components/Icons";
import MagneticCard from "@/components/MagneticCard";
import ScrollText from "@/components/ScrollText";
import Stagger from "@/components/Stagger";

const DOMAIN_ORDER = [
 "All Guilds",
 "Competitive Programming",
 "App Dev",
 "Web Dev",
 "IoT",
 "Machine Learning",
 "Cyber Security",
 "Content",
 "GD & UI/UX",
 "Video",
 "Marketing",
 "Administration",
];

const normalizeDomain = (domain?: string) => (domain === "Creative" ? "GD & UI/UX" : domain);

// Helper for generic fallback avatar if no image provided
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
 className="flex h-8 w-8 items-center justify-center bg-white/5 text-brand-blue/80 hover:bg-brand-blue/10 hover:text-brand-blue transition-colors"
 >
 <Icon className="h-4 w-4" />
 </a>
);

export default function TeamPage() {
 const [selectedDomain, setSelectedDomain] = useState<string>("All Guilds");

 const filteredMembers =
 selectedDomain === "All Guilds"
 ? members
 : members.filter((m) => normalizeDomain(m.domain) === selectedDomain);

 return (
 <main className="relative min-h-screen bg-white text-brand-blue py-20 px-6 lg:px-12 overflow-hidden">
 {/* Ambient Radial Glows */}
 <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] bg-brand-blue/10 blur-[180px]" />
 <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] bg-brand-blue/10 blur-[150px]" />

 <div className="relative mx-auto max-w-7xl">
 {/* Chapter Header Badge */}
 <div className="flex flex-col items-center text-center space-y-4 mb-12">

 <ScrollText as="h1" className="font-display text-4xl sm:text-7xl font-black tracking-tight text-brand-blue leading-tight">
 ENGINEERING <span>COLLECTIVE</span>
 </ScrollText>

 <ScrollText as="p" className="text-brand-blue/80 font-light text-base sm:text-xl max-w-3xl" delay={0.2}>
 Meet the architects, researchers, and developers driving deep tech innovation at IoT Lab KIIT.
 </ScrollText>
 </div>

 {/* Mentor / Faculty Section */}
 <div className="mb-20">
 <div className="mb-4 font-mono text-xs font-bold text-brand-blue uppercase tracking-widest flex items-center gap-2">
 <ShieldCheck className="h-4 w-4 text-brand-blue" />
 <span>FACULTY ADVISOR // MENTORSHIP</span>
 </div>
 
 <div className="group relative overflow-hidden border border-brand-blue-500/30 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent p-8 md:p-12 -2xl shadow-brutal">
 <div className="flex flex-col md:flex-row items-center gap-8">
 <div className="flex h-32 w-32 shrink-0 items-center justify-center border border-brand-blue-400/40 bg-gradient-to-tr from-blue-600 to-cyan-400 text-4xl font-black text-brand-blue shadow-brutal">
 SN
 </div>
 <div className="space-y-4 text-center md:text-left">
 <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-blue tracking-tight">
 Mr. Sankalp Nayak
 </h2>
 <span className=" border border-brand-blue-400/30 bg-brand-blue/10 px-3 py-1 font-mono text-xs text-brand-blue">
 Faculty Mentor &amp; Advisor
 </span>
 <p className="text-brand-blue/80 font-light text-base sm:text-lg italic leading-relaxed max-w-2xl">
 “A mentor helps you notice the strengths you already have, and gives you the push to use them well. Guiding technical vision and research endeavors.”
 </p>
 </div>
 </div>
 </div>
 </div>

 {/* Core Coordinators */}
 <div className="mb-24">
 <div className="mb-6 flex items-center justify-between border-b border-brand-blue pb-4">
 <h3 className="font-display text-2xl font-bold text-brand-blue tracking-tight">
 LAB COORDINATORS
 </h3>
 <span className="font-mono text-xs text-brand-blue">COMMAND &amp; CONTROL</span>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
 {coordinators.map((person) => (
 <MagneticCard
 key={person.name}
 className="group flex flex-col sm:flex-row items-center gap-6 overflow-hidden border border-brand-blue bg-brand-blue/10 p-6 -2xl shadow-brutal transition-all duration-500 hover:border-brand-blue-400/50 hover:bg-brand-blue/10"
 >
 <div className="relative h-28 w-28 shrink-0 overflow-hidden border border-brand-blue">
 {person.photo ? (
 <Image src={person.photo} alt={person.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
 ) : (
 <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800 to-black text-2xl font-black text-brand-blue/80">
 {getAvatarFallback(person.name)}
 </div>
 )}
 </div>
 <div className="flex-1 space-y-3 text-center sm:text-left">
 <h4 className="font-display text-2xl font-bold text-brand-blue group-hover:text-brand-blue transition-colors">
 {person.name}
 </h4>
 <span className="inline-block border border-brand-blue-400/30 bg-brand-blue/10 px-2 py-0.5 font-mono text-[10px] text-brand-blue uppercase tracking-widest">
 {person.role || person.domain}
 </span>
 <div className="flex items-center justify-center sm:justify-start gap-2 pt-2">
 {person.linkedin && <SocialLink url={person.linkedin} icon={LinkedinIcon} />}
 {person.github && <SocialLink url={person.github} icon={GithubIcon} />}
 {person.twitter && <SocialLink url={person.twitter} icon={TwitterIcon} />}
 </div>
 </div>
 </MagneticCard>
 ))}
 </div>
 </div>

 {/* Domain Leads */}
 <div className="mb-24">
 <div className="mb-6 flex items-center justify-between border-b border-brand-blue pb-4">
 <h3 className="font-display text-2xl font-bold text-brand-blue tracking-tight">
 DOMAIN LEADS
 </h3>
 <span className="font-mono text-xs text-brand-blue">GUILD MASTERS</span>
 </div>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {leads.map((person) => (
 <MagneticCard
 key={person.name}
 className="group flex flex-col items-center gap-4 overflow-hidden border border-brand-blue bg-brand-blue/10 p-6 text-center -2xl shadow-brutal transition-all duration-500 hover:border-brand-blue-400/50 hover:bg-brand-blue/10"
 >
 <div className="relative h-24 w-24 shrink-0 overflow-hidden border-2 border-brand-blue group-hover:border-brand-blue-400/50 transition-colors">
 {person.photo ? (
 <Image src={person.photo} alt={person.name} fill className="object-cover" />
 ) : (
 <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800 to-black text-xl font-bold text-brand-blue/80">
 {getAvatarFallback(person.name)}
 </div>
 )}
 </div>
 <div className="space-y-1 w-full">
 <h4 className="font-display text-lg font-bold text-brand-blue truncate px-2">{person.name}</h4>
 <p className="font-mono text-[10px] text-brand-blue uppercase tracking-widest truncate">{person.role || person.domain}</p>
 </div>
 <div className="flex items-center gap-2 pt-2 border-t border-brand-blue w-full justify-center">
 {person.linkedin && <SocialLink url={person.linkedin} icon={LinkedinIcon} />}
 {person.github && <SocialLink url={person.github} icon={GithubIcon} />}
 </div>
 </MagneticCard>
 ))}
 </div>
 </div>

 {/* General Members Directory with Chapter Filtering */}
 <div className="space-y-8">
 <div className="flex items-center justify-between border-b border-brand-blue pb-4">
 <h3 className="font-display text-2xl font-bold text-brand-blue tracking-tight">
 LAB MEMBERS DIRECTORY
 </h3>
 <span className="font-mono text-xs text-brand-blue">THE IOT FAMILY ({members.length})</span>
 </div>

 {/* Sticky Editions Chapter Bar / Category Navigation */}
 <div className="sticky top-20 z-30 mb-8 border border-brand-blue bg-white p-3 -2xl shadow-brutal flex flex-wrap items-center gap-2">
 {DOMAIN_ORDER.map((domain) => {
 const count =
 domain === "All Guilds"
 ? members.length
 : members.filter((m) => normalizeDomain(m.domain) === domain).length;
 
 if (count === 0 && domain !== "All Guilds") return null;
 
 const isActive = selectedDomain === domain;
 return (
 <button
 key={domain}
 onClick={() => setSelectedDomain(domain)}
 className={`flex items-center gap-2 px-4 py-2 text-xs font-mono transition-all duration-300 ${
 isActive
 ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-brand-blue font-bold shadow-brutal scale-105"
 : "bg-brand-blue/10 text-brand-blue/80 hover:bg-white/[0.1] hover:text-brand-blue"
 }`}
 >
 <span>{domain}</span>
 <span className={` px-1.5 py-0.5 text-[10px] ${isActive ? "bg-brand-blue/10 text-brand-blue" : "bg-brand-blue/10 text-brand-blue/80"}`}>
 {count}
 </span>
 </button>
 );
 })}
 </div>

 {/* Members Grid */}
 <Stagger
 className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
 childClassName="h-full"
 step={50}
 >
 {filteredMembers.map((person, idx) => (
 <div
 key={`${person.name}-${idx}`}
 className="group flex flex-col items-center gap-3 border border-brand-blue bg-brand-blue/10 p-4 text-center transition-all hover:bg-brand-blue/10 hover:border-brand-blue"
 >
 <div className="relative h-16 w-16 overflow-hidden border border-brand-blue bg-black">
 {person.photo ? (
 <Image src={person.photo} alt={person.name} fill className="object-cover" />
 ) : (
 <div className="flex h-full w-full items-center justify-center text-xs font-bold text-brand-blue/80">
 {getAvatarFallback(person.name)}
 </div>
 )}
 </div>
 <div className="w-full">
 <h5 className="font-display text-sm font-bold text-brand-blue truncate" title={person.name}>
 {person.name}
 </h5>
 <p className="font-mono text-[9px] text-brand-blue/80 uppercase tracking-widest mt-1">
 {person.domain}
 </p>
 </div>
 {person.linkedin && (
 <a
 href={person.linkedin}
 target="_blank"
 rel="noopener noreferrer"
 className="mt-1 text-brand-blue/80 hover:text-brand-blue transition-colors"
 >
 <LinkedinIcon className="h-3 w-3" />
 </a>
 )}
 </div>
 ))}
 </Stagger>
 
 {filteredMembers.length === 0 && (
 <div className="text-center py-20 font-mono text-sm text-brand-blue/80">
 No members found in this guild.
 </div>
 )}
 </div>
 </div>
 </main>
 );
}
