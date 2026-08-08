"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import TerminalIcon from "@mui/icons-material/Terminal";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LanguageIcon from "@mui/icons-material/Language";
import MemoryIcon from "@mui/icons-material/Memory";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SecurityIcon from "@mui/icons-material/Security";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PaletteIcon from "@mui/icons-material/Palette";
import VideocamIcon from "@mui/icons-material/Videocam";
import CampaignIcon from "@mui/icons-material/Campaign";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { domains, type Domain } from "@/data/domains";

const ICONS: Record<string, typeof TerminalIcon> = {
  Terminal: TerminalIcon,
  PhoneAndroid: PhoneAndroidIcon,
  Language: LanguageIcon,
  Memory: MemoryIcon,
  Psychology: PsychologyIcon,
  Security: SecurityIcon,
  EditNote: EditNoteIcon,
  Palette: PaletteIcon,
  Videocam: VideocamIcon,
  Campaign: CampaignIcon,
  BusinessCenter: BusinessCenterIcon,
};

// A single kinetic sliver. The active card grows (flex-[8]); the rest collapse
// (flex-[1]). The whole thing is a pure CSS flex transition — no motion library.
const DomainCard = ({
  domain,
  isActive,
  onActivate,
}: {
  domain: Domain;
  isActive: boolean;
  onActivate: () => void;
}) => {
  const Icon = ICONS[domain.icon] ?? TerminalIcon;

  return (
    <div
      onClick={onActivate}
      onMouseEnter={onActivate}
      className={clsx(
        "group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-white/10 md:rounded-3xl",
        "transition-[flex-grow] duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]",
        isActive ? "flex-[8]" : "flex-[1]"
      )}
    >
      {/* Background image: sharp + brighter when active, blurred + dim otherwise */}
      <div
        className={clsx(
          "absolute inset-0 transition-all duration-700 ease-out",
          isActive ? "scale-105 brightness-[0.55] blur-0" : "scale-110 brightness-[0.3] blur-[2px]"
        )}
      >
        <Image
          src={domain.img}
          alt={domain.title}
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
          className="object-cover"
        />
      </div>

      {/* Legibility gradient */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-black/40 to-black/90" />

      {/* Active accent glow */}
      <div
        className={clsx(
          "absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t transition-opacity duration-500",
          domain.color,
          isActive ? "opacity-25" : "opacity-0"
        )}
      />

      {/* Expanded content */}
      <div
        className={clsx(
          "absolute inset-0 z-20 flex flex-col justify-end p-4 transition-all duration-500 md:p-8 lg:p-10",
          isActive ? "opacity-100 delay-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="space-y-3 md:space-y-4">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-md">
            <AutoAwesomeIcon sx={{ fontSize: 14 }} className="text-yellow-300" />
            Domain
          </span>
          <h3 className="text-3xl font-black uppercase leading-[0.9] tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {domain.title}
          </h3>
          <p className="max-w-md text-sm text-gray-200/90 md:text-base lg:text-lg">
            {domain.desc}
          </p>
        </div>
      </div>

      {/* Collapsed content: icon + vertical label */}
      <div
        className={clsx(
          "absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 py-8 transition-opacity duration-300 md:gap-8",
          isActive ? "pointer-events-none opacity-0" : "opacity-100"
        )}
      >
        <Icon
          className="text-white/50 transition-colors duration-300 group-hover:text-white/90"
          sx={{ fontSize: { xs: 24, md: 30 } }}
        />
        <h3 className="rotate-180 whitespace-nowrap text-lg font-bold uppercase tracking-[0.2em] text-white/50 transition-colors duration-300 [writing-mode:vertical-rl] group-hover:text-white/90 md:text-2xl">
          {domain.title}
        </h3>
      </div>

      {/* Hover / active border */}
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 z-30 rounded-2xl border-2 transition-opacity duration-500 md:rounded-3xl",
          isActive ? "border-white/15 opacity-100" : "border-white/10 opacity-0 group-hover:opacity-30"
        )}
      />
    </div>
  );
};

// Mobile tile: a static, fully-readable card (icon + horizontal title + desc).
// The kinetic accordion doesn't work on a narrow column — collapsed slivers
// crush the vertical labels — so on phones we show this clear grid instead.
const DomainTile = ({ domain }: { domain: Domain }) => {
  const Icon = ICONS[domain.icon] ?? TerminalIcon;

  return (
    <div className="group relative flex min-h-[172px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10">
      {/* Background image, dimmed for legibility */}
      <div className="absolute inset-0">
        <Image
          src={domain.img}
          alt={domain.title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover brightness-[0.4]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/20" />
      <div
        className={clsx(
          "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t opacity-30",
          domain.color
        )}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-1.5 p-4">
        <Icon sx={{ fontSize: 26 }} className="text-white/90" />
        <h3 className="text-lg font-black uppercase leading-tight tracking-tight text-white">
          {domain.title}
        </h3>
        <p className="text-xs leading-snug text-gray-300/90 line-clamp-3">
          {domain.desc}
        </p>
      </div>
    </div>
  );
};

const Domains = () => {
  const [activeId, setActiveId] = useState<string>(domains[0].id);

  return (
    <section id="domains" className="relative overflow-hidden bg-[#060d29] px-4 py-16 text-white md:px-8 md:py-24">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-full max-w-3xl -translate-x-1/2 rounded-full bg-primary-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[100px]" />

      {/* Header */}
      <div className="relative z-10 mb-8 text-center md:mb-14">
        <h2 className="bg-gradient-to-b from-white to-white/40 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl">
          Our Domains
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-gray-400 sm:text-base md:mt-4 md:text-lg">
          The specialized guilds powering our innovation engine.
          <span className="hidden md:inline"> Hover to explore.</span>
        </p>
      </div>

      {/* Desktop: kinetic accordion (hidden on phones) */}
      <div className="relative z-10 hidden h-[650px] w-full max-w-[1500px] gap-3 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-2xl md:mx-auto md:flex md:flex-row lg:h-[700px]">
        {domains.map((domain) => (
          <DomainCard
            key={domain.id}
            domain={domain}
            isActive={activeId === domain.id}
            onActivate={() => setActiveId(domain.id)}
          />
        ))}
      </div>

      {/* Mobile: readable static grid (hidden from md up) */}
      <div className="relative z-10 grid grid-cols-1 gap-3 min-[420px]:grid-cols-2 md:hidden">
        {domains.map((domain) => (
          <DomainTile key={domain.id} domain={domain} />
        ))}
      </div>
    </section>
  );
};

export default Domains;
