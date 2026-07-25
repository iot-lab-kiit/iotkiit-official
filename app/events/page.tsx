"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Trophy, Users, ArrowUpRight, Sparkles, MapPin, X, Clock, Terminal, Zap, CheckCircle2 } from "lucide-react";
import MagneticCard from "@/components/MagneticCard";
import ScrollText from "@/components/ScrollText";

interface EventItem {
  id: string;
  title: string;
  type: "National Hackathon" | "Hands-on Workshop" | "Webinars & Firesides" | "Tech Summit";
  date: string;
  status: "Upcoming Season" | "Registration Open" | "Active Series" | "Completed";
  desc: string;
  detailedSchedule: string;
  prizesOrPerks: string[];
  speakers: string[];
  img: string;
  editionChapter: string;
}

const flagshipEvents: EventItem[] = [
  {
    id: "innovate-iot-2026",
    title: "InnovateIoT National Hackathon 2026",
    type: "National Hackathon",
    date: "March 15 - 17, 2026",
    status: "Registration Open",
    editionChapter: "EDITION FLAGSHIP // HACKATHON 01",
    desc: "A 36-hour continuous hardware and software hackathon uniting 500+ student developers nationwide to solve real-world industrial IoT problems.",
    detailedSchedule: "Day 1: Opening keynote & Hardware Kit distribution. Day 2: 36-hour sprint with mid-point mentor reviews. Day 3: Pitching & Live Demo to jury.",
    prizesOrPerks: ["₹2,50,000 Total Prize Pool", "Direct Seed Funding Opportunity", "Fast-track Internship Interviews"],
    speakers: ["Dr. Achyuta Samanta (Founder, KIIT)", "Senior IoT Architects from Intel & Qualcomm"],
    img: "/images/event.png",
  },
  {
    id: "tech-bootcamp",
    title: "Deep Tech & Embedded Systems Bootcamp",
    type: "Hands-on Workshop",
    date: "Bi-annual Session",
    status: "Upcoming Season",
    editionChapter: "EDITION WORKSHOP // BOOTCAMP 02",
    desc: "Intensive 3-day training on ESP32 microcontrollers, ROS2 robotics, full-stack Next.js applications, and machine learning models.",
    detailedSchedule: "Day 1: Microcontroller flashing & C++ embedded basics. Day 2: ROS2 robotics & OpenCV. Day 3: Cloud web dashboard integration.",
    prizesOrPerks: ["Hardware Starter Kits Provided", "IoT Lab Certification", "Access to Hardware Benches"],
    speakers: ["Sujal Raj (Lab Lead)", "Aaryan Sharma (IoT Architect)"],
    img: "/images/event.png",
  },
  {
    id: "webinar-series",
    title: "Global Tech Speaker Series",
    type: "Webinars & Firesides",
    date: "Monthly Stream",
    status: "Active Series",
    editionChapter: "EDITION FIRESIDE // WEBINAR 03",
    desc: "Interactive webinars featuring industry leaders, research scientists, and IoT Lab alumni sharing insights on career and technology.",
    detailedSchedule: "1-hour fireside chat followed by 30-minute live Q&A session with attendees on YouTube Live & Discord.",
    prizesOrPerks: ["Live Q&A Access", "Exclusive Resource Slides", "Networking Discord Channel"],
    speakers: ["Alumni at Google, Meta, & Tesla"],
    img: "/images/event.png",
  },
];

const EVENT_TYPES = ["All", "National Hackathon", "Hands-on Workshop", "Webinars & Firesides"] as const;

export default function EventsPage() {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [activeModalEvent, setActiveModalEvent] = useState<EventItem | null>(null);

  const filteredEvents = flagshipEvents.filter(
    (e) => selectedType === "All" || e.type === selectedType
  );

  return (
    <main className="relative min-h-screen bg-[#030712] text-white py-20 px-6 lg:px-12 overflow-hidden">
      {/* Background Radial Glows */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-blue-600/10 blur-[180px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Chapter Header Badge */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1.5 backdrop-blur-2xl shadow-glow-cyan">
            <Zap className="h-4 w-4 text-cyan-300" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
              SUMMITS &amp; HACKATHONS
            </span>
          </div>

          <ScrollText as="h1" className="font-display text-4xl sm:text-7xl font-black tracking-tight text-white leading-tight">
            FLAGSHIP EVENTS &amp; <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">HACKATHONS</span>
          </ScrollText>

          <ScrollText as="p" className="text-gray-300 font-light text-base sm:text-xl max-w-3xl" delay={0.2}>
            Immerse yourself in national 36-hour hackathons, deep tech bootcamps, expert webinars, and hands-on hardware workshops.
          </ScrollText>
        </div>

        {/* Live Countdown Banner for Flagship Event */}
        <div className="mb-16 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-blue-900/30 via-[#070F2B]/90 to-black p-8 backdrop-blur-2xl shadow-glass flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center justify-center md:justify-start gap-2">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              UPCOMING FLAGSHIP HACKATHON
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
              InnovateIoT National Hackathon &apos;26
            </h2>
            <p className="text-sm font-light text-gray-300">
              Registration closes soon! ₹2,50,000 in total prizes + hardware prototyping kits.
            </p>
          </div>

          <button
            onClick={() => setActiveModalEvent(flagshipEvents[0])}
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 font-mono text-xs font-bold text-black shadow-glow-cyan hover:scale-105 transition-all"
          >
            <span>VIEW BRIEF &amp; REGISTER</span>
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        {/* Category Filter Bar */}
        <div className="sticky top-20 z-30 mb-12 rounded-2xl border border-white/15 bg-[#070F2B]/90 p-3 backdrop-blur-2xl shadow-glass flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {EVENT_TYPES.map((type) => {
              const isActive = selectedType === type;
              return (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`rounded-xl px-4 py-2 font-mono text-xs transition-all duration-300 ${isActive
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-glow-blue scale-105"
                      : "bg-white/[0.04] text-gray-400 hover:bg-white/[0.1] hover:text-white"
                    }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
          <span className="font-mono text-xs text-cyan-400 px-2">EVENTS CALENDAR &apos;26</span>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <MagneticCard
              key={event.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/15 bg-white/[0.03] p-6 backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:border-cyan-400/50 hover:bg-white/[0.07]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold text-cyan-300 uppercase tracking-widest">
                    {event.editionChapter}
                  </span>
                  <span className="rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-0.5 font-mono text-[10px] text-green-300">
                    {event.status}
                  </span>
                </div>

                <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={event.img}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
                </div>

                <div className="flex items-center justify-between font-mono text-xs text-cyan-400">
                  <span>📅 {event.date}</span>
                </div>

                <h3 className="font-display text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {event.title}
                </h3>

                <p className="text-xs font-light text-gray-300/90 leading-relaxed">
                  {event.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <button
                  onClick={() => setActiveModalEvent(event)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-mono text-xs font-bold text-white shadow-glow-blue hover:shadow-glow-cyan transition-all"
                >
                  <span>EVENT BRIEF &amp; PARTICIPATE</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
            </MagneticCard>
          ))}
        </div>

        {/* Wide-Mode Event Brief Modal Drawer */}
        {activeModalEvent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl">
            <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-cyan-500/40 bg-[#030712]/95 text-white shadow-2xl max-h-[90vh] overflow-y-auto scrollbar-thin">
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-[#070F2B]/90 px-8 py-4 backdrop-blur-2xl">
                <div className="flex items-center gap-3">
                  <Terminal className="h-5 w-5 text-cyan-400" />
                  <span className="font-mono text-xs font-semibold text-cyan-300 uppercase tracking-widest">
                    EVENT SPECIFICATION // {activeModalEvent.id}
                  </span>
                </div>
                <button
                  onClick={() => setActiveModalEvent(null)}
                  className="rounded-full bg-white/10 p-2 text-gray-300 hover:bg-white/20 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-8 space-y-8">
                <div className="space-y-4">
                  <span className="rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 font-mono text-xs text-green-300">
                    {activeModalEvent.status}
                  </span>

                  <h3 className="font-display text-3xl font-bold text-white tracking-tight">
                    {activeModalEvent.title}
                  </h3>

                  <p className="text-gray-300 font-light text-base leading-relaxed">
                    {activeModalEvent.desc}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 space-y-3 font-mono">
                  <div className="text-xs text-cyan-400 uppercase tracking-widest font-bold">AGENDA &amp; SCHEDULE</div>
                  <p className="text-sm font-light text-gray-300 leading-relaxed">
                    {activeModalEvent.detailedSchedule}
                  </p>
                </div>

                <div className="space-y-3 font-mono">
                  <div className="text-xs text-cyan-400 uppercase tracking-widest font-bold">PRIZES &amp; PERKS</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalEvent.prizesOrPerks.map((perk, idx) => (
                      <div key={idx} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-xs text-gray-200">
                        <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-mono text-xs font-bold text-white shadow-glow-blue hover:scale-105 transition-all"
                  >
                    <span>Proceed to Registration</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <button
                    onClick={() => setActiveModalEvent(null)}
                    className="font-mono text-xs text-gray-400 hover:text-white"
                  >
                    Close Brief
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
