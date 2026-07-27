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
 className="flex h-7 w-7 items-center justify-center bg-white/5 text-brand-blue/80 hover:bg-brand-blue/10 hover:text-brand-blue transition-colors"
 >
 <Icon className="h-3.5 w-3.5" />
 </a>
);

const AlumShowcaseCard = ({ alum, featured = false }: { alum: Alum; featured?: boolean }) => (
 <MagneticCard
 className={`group flex flex-col items-center gap-3 overflow-hidden border border-brand-blue bg-brand-blue/10 p-5 text-center transition-all duration-500 hover:border-brand-blue-400/40 hover:bg-brand-blue/10 ${
 featured ? "shadow-brutal" : ""
 }`}
 >
 <div
 className={`relative overflow-hidden border-2 border-brand-blue transition-colors group-hover:border-brand-blue-400/50 ${
 featured ? "h-24 w-24" : "h-16 w-16"
 }`}
 >
 {alum.image ? (
 <Image src={alum.image} alt={alum.name} fill className="object-cover" />
 ) : (
 <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-800 to-black text-xl font-bold text-brand-blue/80">
 {getAvatarFallback(alum.name)}
 </div>
 )}
 </div>
 
 <div className="space-y-1 w-full">
 <h4 className={`font-display font-bold text-brand-blue truncate px-1 ${featured ? "text-lg" : "text-sm"}`}>
 {alum.name}
 </h4>
 <p className="font-mono text-[9px] text-brand-blue uppercase tracking-widest truncate">
 {alum.role || "Alumni"}
 </p>
 {alum.currentCompany && (
 <p className="text-[10px] text-brand-blue/80 truncate mt-1 flex items-center justify-center gap-1">
 <MapPin className="h-2.5 w-2.5" />
 {alum.currentCompany}
 </p>
 )}
 </div>

 {(alum.linkedin || alum.github) && (
 <div className="flex items-center justify-center gap-1.5 pt-2 border-t border-brand-blue w-full">
 {alum.linkedin && <SocialLink url={alum.linkedin} icon={LinkedinIcon} />}
 {alum.github && <SocialLink url={alum.github} icon={GithubIcon} />}
 </div>
 )}
 </MagneticCard>
);

export default function AlumniPage() {
 return (
 <main className="relative min-h-screen bg-white text-brand-blue py-20 px-6 lg:px-12 overflow-hidden">
 {/* Ambient Radial Glows */}
 <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] bg-brand-blue/10 blur-[180px]" />
 <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] bg-brand-blue/10 blur-[150px]" />

 <div className="relative mx-auto max-w-7xl">
 {/* Header Badge */}
 <div className="flex flex-col items-center text-center space-y-4 mb-16">

 <ScrollText as="h1" className="font-display text-4xl sm:text-7xl font-black tracking-tight text-brand-blue leading-tight">
 LEGACY &amp; <span>NETWORK</span>
 </ScrollText>

 <ScrollText as="p" className="text-brand-blue/80 font-light text-base sm:text-xl max-w-3xl" delay={0.2}>
 The visionary minds who helped build and shape IoT Lab KIIT, now leading innovations across top global companies and research institutions.
 </ScrollText>
 </div>

 {/* Coordinators Tier */}
 {coordinators.length > 0 && (
 <div className="mb-20">
 <div className="mb-6 flex items-center justify-between border-b border-brand-blue pb-4">
 <h3 className="font-display text-2xl font-bold text-brand-blue tracking-tight">
 PAST COORDINATORS
 </h3>
 <span className="font-mono text-xs text-brand-blue uppercase">Legacy Leaders</span>
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
 <div className="mb-6 flex items-center justify-between border-b border-brand-blue pb-4">
 <h3 className="font-display text-2xl font-bold text-brand-blue tracking-tight">
 PAST DOMAIN LEADS
 </h3>
 <span className="font-mono text-xs text-brand-blue uppercase">Guild Masters</span>
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
 <div className="mb-6 flex items-center justify-between border-b border-brand-blue pb-4">
 <h3 className="font-display text-2xl font-bold text-brand-blue tracking-tight">
 MENTORS &amp; ADVISORS
 </h3>
 <span className="font-mono text-xs text-brand-blue uppercase">Guidance</span>
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
 <div className="mb-6 flex items-center justify-between border-b border-brand-blue pb-4">
 <h3 className="font-display text-2xl font-bold text-brand-blue tracking-tight">
 GRADUATED MEMBERS
 </h3>
 <span className="font-mono text-xs text-brand-blue uppercase">The Network ({members.length})</span>
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
 
 <div className="text-center pt-8 border-t border-brand-blue">
 <p className="font-mono text-xs text-brand-blue/80 uppercase tracking-widest">
 // ONCE A PART OF THE IOT FAMILY, ALWAYS A PART OF THE IOT FAMILY.
 </p>
 </div>
 </div>
 </main>
 );
}
