"use client";

import { useState } from "react";
import Image from "next/image";
import {
 Layers,
 ArrowUpRight,
 Search,
 X,
 Cpu,
 ExternalLink,
 Sparkles,
 Filter,
 Code2,
 Terminal,
 Zap,
 CheckCircle2,
 ShieldAlert,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import MagneticCard from "@/components/MagneticCard";
import ScrollText from "@/components/ScrollText";

export interface ProjectItem {
 id: string;
 title: string;
 category: "IoT & Hardware" | "AI & ML" | "Web & Cloud" | "Mobile Apps" | "Cybersecurity";
 status: "Deployed & Live" | "Active Prototype" | "Research Paper" | "Beta Phase";
 desc: string;
 detailedDesc: string;
 metrics: { label: string; value: string }[];
 tags: string[];
 team: string[];
 github: string;
 img: string;
 editionChapter: string;
 featured?: boolean;
}

const projectsData: ProjectItem[] = [
 {
 id: "smart-campus-mesh",
 title: "Smart Campus Ambient IoT Mesh Network",
 category: "IoT & Hardware",
 status: "Deployed & Live",
 editionChapter: "CHAPTER 01 // HARDWARE & AMBIENT MESH",
 desc: "A distributed LoRaWAN mesh network monitoring indoor air quality, ambient noise, temperature, and occupancy across Campus 25 buildings.",
 detailedDesc: "Constructed using ESP32 nodes embedded with BME280 environmental sensors and LoRa transceivers. Telemetry data is pushed to a central Grafana dashboard over MQTT brokers for predictive HVAC optimization.",
 metrics: [
 { label: "Active Sensor Nodes", value: "120+" },
 { label: "Protocol", value: "LoRaWAN 915MHz" },
 { label: "Latency", value: "<150ms" },
 ],
 tags: ["ESP32", "LoRaWAN", "MQTT", "Grafana", "Node-RED", "C++"],
 team: ["Sujal Raj", "Aaryan Sharma", "Priyam Vatsa"],
 github: "https://github.com/iotkiit/smart-campus-mesh",
 img: "/images/hero.webp",
 featured: true,
 },
 {
 id: "ai-edge-gatekeeper",
 title: "AI Edge Vision Gatekeeper System",
 category: "AI & ML",
 status: "Active Prototype",
 editionChapter: "CHAPTER 02 // EDGE VISION & EMBEDDED AI",
 desc: "Real-time edge computer vision model for automated license plate recognition and vehicle access control running on Raspberry Pi microcomputers.",
 detailedDesc: "Employs a custom YOLOv8 model quantized to ONNX runtime for sub-50ms inference on Raspberry Pi 4 nodes. Automatically logs vehicle entry timestamps into an encrypted SQLite ledger.",
 metrics: [
 { label: "Inference Speed", value: "38ms" },
 { label: "Accuracy Rate", value: "98.4%" },
 { label: "Hardware Node", value: "Raspberry Pi 4" },
 ],
 tags: ["Python", "OpenCV", "YOLOv8", "PyTorch", "Raspberry Pi"],
 team: ["Aditya Kumar", "Sneha Roy", "Vikramaditya"],
 github: "https://github.com/iotkiit/edge-gatekeeper",
 img: "/images/hero.webp",
 featured: true,
 },
 {
 id: "lab-portal-awwwards",
 title: "IoT Lab Next-Gen Digital Portal",
 category: "Web & Cloud",
 status: "Deployed & Live",
 editionChapter: "CHAPTER 03 // CLOUD & DIGITAL EXPERIENCE",
 desc: "An Awwwards-grade glassmorphic Next.js portal featuring domain directories, alumni networks, event tracking, and interactive project showcases.",
 detailedDesc: "Engineered with Next.js 13 App Router, GSAP ScrollTrigger timeline animations, and Lenis smooth momentum scrolling to provide a world-class WebGL feel.",
 metrics: [
 { label: "Lighthouse Score", value: "99/100" },
 { label: "Page Load Time", value: "0.4s" },
 { label: "Framework", value: "Next.js 13" },
 ],
 tags: ["Next.js 13", "TypeScript", "Tailwind CSS", "GSAP", "Lenis Scroll"],
 team: ["IoT Tech Guild", "Design Squad"],
 github: "https://github.com/iotkiit/iotkiit-official",
 img: "/images/hero.webp",
 featured: true,
 },
 {
 id: "cp-streak-tracker",
 title: "Codeforces Bench & Analytics Engine",
 category: "Web & Cloud",
 status: "Deployed & Live",
 editionChapter: "CHAPTER 03 // CLOUD & DIGITAL EXPERIENCE",
 desc: "Internal performance tracking engine measuring problem-solving velocity, rating progression, and contest streaks of lab competitive programmers.",
 detailedDesc: "Pulls real-time submission data via official APIs, calculates rating volatility, and generates predictive rank projections with automated Slack bot notifications.",
 metrics: [
 { label: "Active Profiles", value: "250+" },
 { label: "Sync Interval", value: "Realtime" },
 ],
 tags: ["React", "Express", "Codeforces API", "PostgreSQL", "Docker"],
 team: ["Divyanshu Patel", "Rohan Das"],
 github: "https://github.com/iotkiit/cp-analytics",
 img: "/images/hero.webp",
 },
 {
 id: "drone-swarm-telemetry",
 title: "Autonomous Drone Swarm Telemetry Protocol",
 category: "IoT & Hardware",
 status: "Research Paper",
 editionChapter: "CHAPTER 01 // HARDWARE & AMBIENT MESH",
 desc: "Multi-UAV mesh protocol allowing synchronized formation flying and aerial mapping without relying on centralized ground station GPS.",
 detailedDesc: "Integrates ROS2 micro-XRCE-DDS agents on PX4 flight controllers for intra-drone peer-to-peer telemetry exchange with collision avoidance vectors.",
 metrics: [
 { label: "Swarm Nodes", value: "8 Drones" },
 { label: "Mesh Sync Rate", value: "100Hz" },
 ],
 tags: ["ROS2", "PX4 Autopilot", "Raspberry Pi Zero", "Python", "C++"],
 team: ["Kavya Singh", "Harsh Vardhan"],
 github: "https://github.com/iotkiit/drone-swarm",
 img: "/images/hero.webp",
 },
 {
 id: "secure-firmware-ota",
 title: "Zero-Trust Over-The-Air Firmware Updater",
 category: "Cybersecurity",
 status: "Beta Phase",
 editionChapter: "CHAPTER 04 // SECURITY & ZERO TRUST",
 desc: "Cryptographically signed firmware updates for microcontrollers preventing malicious code injection over public Wi-Fi networks.",
 detailedDesc: "Implements Ed25519 digital signatures and AES-256-GCM payload encryption over FreeRTOS memory regions for hardware-enforced rollback protection.",
 metrics: [
 { label: "Encryption Standard", value: "AES-256-GCM" },
 { label: "Signature Check", value: "Ed25519" },
 ],
 tags: ["Ed25519", "C", "FreeRTOS", "Security Protocol"],
 team: ["Abhinav Tripathy", "Sujal Raj"],
 github: "https://github.com/iotkiit/secure-ota",
 img: "/images/hero.webp",
 },
 {
 id: "smart-health-wearable",
 title: "Continuous Biosensor Health Monitor",
 category: "Mobile Apps",
 status: "Active Prototype",
 editionChapter: "CHAPTER 05 // MOBILE & WEARABLE TECH",
 desc: "Flutter-based mobile companion app parsing real-time ECG and pulse oximeter data transmitted over BLE from custom smart wristbands.",
 detailedDesc: "Streams PPG waveform packets into a local SQLite buffer with FFT peak detection algorithms warning users of cardiac anomalies in under 2 seconds.",
 metrics: [
 { label: "BLE Throughput", value: "2.4 Mbps" },
 { label: "Anomaly Alert", value: "<2.0s" },
 ],
 tags: ["Flutter", "Bluetooth LE", "Dart", "Firebase", "C++"],
 team: ["Ananya Mehta", "Siddharth Verma"],
 github: "https://github.com/iotkiit/health-wearable",
 img: "/images/hero.webp",
 },
];

const CATEGORIES = [
 "All",
 "IoT & Hardware",
 "AI & ML",
 "Web & Cloud",
 "Mobile Apps",
 "Cybersecurity",
] as const;

export default function ProjectsPage() {
 const [selectedCategory, setSelectedCategory] = useState<string>("All");
 const [searchQuery, setSearchQuery] = useState<string>("");
 const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

 const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];

 const filteredProjects = projectsData.filter((project) => {
 const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
 const matchesSearch =
 project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
 project.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
 project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
 return matchesCategory && matchesSearch;
 });

 return (
 <main className="relative min-h-screen bg-white text-brand-blue py-20 px-6 lg:px-12 overflow-hidden">
 {/* Ambient Radial Glows */}
 <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] bg-brand-blue/10 blur-[180px]" />
 <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] bg-brand-blue/10 blur-[150px]" />

 <div className="relative mx-auto max-w-7xl">
 {/* Header Badge */}
 <div className="flex flex-col items-center text-center space-y-4 mb-12">

 <ScrollText as="h1" className="font-display text-4xl sm:text-7xl font-black tracking-tight text-brand-blue leading-tight">
 LAB PROJECTS &amp; RESEARCH
 </ScrollText>

 <ScrollText as="p" className="text-brand-blue/80 font-light text-base sm:text-xl max-w-3xl" delay={0.2}>
 Explore our latest hardware engineering nodes, edge AI deployments, full-stack digital architectures, and research publications.
 </ScrollText>
 </div>

 {/* Category Navigation Bar */}
 <div className="sticky top-20 z-30 mb-16 border border-brand-blue bg-white p-3 -2xl shadow-brutal flex flex-wrap items-center justify-between gap-4">
 <div className="flex flex-wrap items-center gap-2">
 {CATEGORIES.map((cat) => {
 const count = cat === "All" ? projectsData.length : projectsData.filter((p) => p.category === cat).length;
 const isActive = selectedCategory === cat;
 return (
 <button
 key={cat}
 onClick={() => setSelectedCategory(cat)}
 className={`flex items-center gap-2 px-4 py-2 text-xs font-mono transition-all duration-300 ${
 isActive
 ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-brand-blue font-bold shadow-brutal scale-105"
 : "bg-brand-blue/10 text-brand-blue/80 hover:bg-white/[0.1] hover:text-brand-blue"
 }`}
 >
 <span>{cat}</span>
 <span className={` px-1.5 py-0.5 text-[10px] ${isActive ? "bg-brand-blue/10 text-brand-blue" : "bg-brand-blue/10 text-brand-blue/80"}`}>
 {count}
 </span>
 </button>
 );
 })}
 </div>

 {/* Search Input */}
 <div className="relative w-full sm:w-72">
 <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-blue" />
 <input
 type="text"
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 placeholder="Search tech stack or title..."
 className="w-full border border-brand-blue bg-brand-blue/10 pl-10 pr-4 py-2 font-mono text-xs text-brand-blue placeholder-gray-500 outline-none focus:border-brand-blue-400 focus:bg-brand-blue/10 transition-all"
 />
 {searchQuery && (
 <button
 onClick={() => setSearchQuery("")}
 className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-blue/80 hover:text-brand-blue"
 >
 <X className="h-3.5 w-3.5" />
 </button>
 )}
 </div>
 </div>

 {/* Featured Edition Hero Spotlight */}
 {selectedCategory === "All" && !searchQuery && (
 <div className="mb-20">

 <div className="relative overflow-hidden border border-brand-blue-500/30 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent p-8 lg:p-12 -2xl shadow-brutal">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
 <div className="lg:col-span-7 space-y-6">
 <div className="flex flex-wrap items-center gap-3">
 <span className=" border border-brand-blue-400/30 bg-brand-blue/10 px-3 py-1 font-mono text-xs text-brand-blue">
 {featuredProject.category}
 </span>
 <span className=" border border-green-500/30 bg-green-500/10 px-3 py-1 font-mono text-xs text-green-300 flex items-center gap-1.5">
 <span className="h-2 w-2 bg-green-400" />
 {featuredProject.status}
 </span>
 </div>

 <h2 className="font-display text-3xl sm:text-5xl font-black text-brand-blue tracking-tight leading-tight">
 {featuredProject.title}
 </h2>

 <p className="text-brand-blue/80 font-light text-base sm:text-lg leading-relaxed">
 {featuredProject.detailedDesc}
 </p>

 {/* Metrics Bar */}
 <div className="grid grid-cols-3 gap-4 border-y border-brand-blue py-4 font-mono">
 {featuredProject.metrics.map((m, i) => (
 <div key={i} className="space-y-1">
 <div className="text-xl sm:text-2xl font-bold text-brand-blue">{m.value}</div>
 <div className="text-[10px] text-brand-blue/80 uppercase tracking-wider">{m.label}</div>
 </div>
 ))}
 </div>

 <div className="flex flex-wrap items-center gap-4 pt-2">
 <button
 onClick={() => setActiveModalProject(featuredProject)}
 className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-mono text-xs font-bold text-brand-blue shadow-brutal hover:scale-105 transition-all"
 >
 <span>Explore Technical Specs</span>
 <ArrowUpRight className="h-4 w-4" />
 </button>
 <a
 href={featuredProject.github}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 border border-brand-blue bg-brand-blue/10 px-6 py-3 font-mono text-xs font-medium text-brand-blue hover:bg-brand-blue/10 hover:border-brand-blue-400 transition-all"
 >
 <GithubIcon className="h-4 w-4 text-brand-blue" />
 <span>Source Repository</span>
 </a>
 </div>
 </div>

 <div className="lg:col-span-5 relative h-72 sm:h-96 w-full overflow-hidden border border-brand-blue">
 <Image
 src={featuredProject.img}
 alt={featuredProject.title}
 fill
 className="object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
 </div>
 </div>
 </div>
 </div>
 )}

 {/* Projects Grid Catalogue */}
 <div className="space-y-16">
 <div className="flex items-center justify-between border-b border-brand-blue pb-4">
 <h3 className="font-display text-2xl font-bold text-brand-blue tracking-tight">
 CATALOGUE ARCHIVE ({filteredProjects.length})
 </h3>
 <span className="font-mono text-xs text-brand-blue">STATUS: ALL SYSTEMS LIVE</span>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {filteredProjects.map((project) => (
 <MagneticCard
 key={project.id}
 className="group relative flex flex-col justify-between overflow-hidden border border-brand-blue bg-brand-blue/10 p-6 -2xl shadow-brutal transition-all duration-500 hover:border-brand-blue-400/50 hover:bg-brand-blue/10"
 >
 <div>
 <div className="flex items-center justify-between mb-4">
 <span className="font-mono text-[10px] font-semibold text-brand-blue uppercase tracking-widest">
 {project.editionChapter}
 </span>
 <span className=" border border-brand-blue-400/30 bg-brand-blue/10 px-2.5 py-0.5 font-mono text-[10px] text-brand-blue">
 {project.category}
 </span>
 </div>

 <div className="relative mb-6 h-48 w-full overflow-hidden border border-brand-blue">
 <Image
 src={project.img}
 alt={project.title}
 fill
 className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/90 via-transparent to-transparent" />
 </div>

 <h4 className="font-display text-xl font-bold text-brand-blue tracking-tight group-hover:text-brand-blue transition-colors mb-3">
 {project.title}
 </h4>

 <p className="text-xs font-light text-brand-blue/80/90 leading-relaxed mb-6">
 {project.desc}
 </p>
 </div>

 <div>
 <div className="flex flex-wrap gap-1.5 mb-6">
 {project.tags.map((tag, tIdx) => (
 <span
 key={tIdx}
 className=" border border-brand-blue bg-brand-blue/10 px-2 py-0.5 font-mono text-[10px] text-brand-blue/80"
 >
 #{tag}
 </span>
 ))}
 </div>

 <div className="flex items-center justify-between border-t border-brand-blue pt-4">
 <button
 onClick={() => setActiveModalProject(project)}
 className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-brand-blue hover:text-brand-blue transition-colors"
 >
 <span>VIEW SPECS</span>
 <ArrowUpRight className="h-3.5 w-3.5" />
 </button>
 <a
 href={project.github}
 target="_blank"
 rel="noopener noreferrer"
 className="text-brand-blue/80 hover:text-brand-blue transition-colors"
 title="GitHub Repository"
 >
 <GithubIcon className="h-4 w-4" />
 </a>
 </div>
 </div>
 </MagneticCard>
 ))}
 </div>
 </div>

 {/* Wide-Mode Modal Spec Drawer */}
 {activeModalProject && (
 <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-blue/10 ">
 <div className="relative w-full max-w-3xl overflow-hidden border border-brand-blue-500/40 bg-white text-brand-blue shadow-brutal max-h-[90vh] overflow-y-auto scrollbar-thin">
 <div className="sticky top-0 z-10 flex items-center justify-between border-b border-brand-blue bg-white px-8 py-4 -2xl">
 <div className="flex items-center gap-3">
 <Terminal className="h-5 w-5 text-brand-blue" />
 <span className="font-mono text-xs font-semibold text-brand-blue uppercase tracking-widest">
 DEEP SPECIFICATION // {activeModalProject.id}
 </span>
 </div>
 <button
 onClick={() => setActiveModalProject(null)}
 className=" bg-brand-blue/10 p-2 text-brand-blue/80 hover:bg-white/20 hover:text-brand-blue transition-colors"
 >
 <X className="h-5 w-5" />
 </button>
 </div>

 <div className="p-8 space-y-8">
 <div className="space-y-4">
 <div className="flex items-center gap-3">
 <span className=" border border-brand-blue-400/30 bg-brand-blue/10 px-3 py-1 font-mono text-xs text-brand-blue">
 {activeModalProject.category}
 </span>
 <span className=" border border-green-500/30 bg-green-500/10 px-3 py-1 font-mono text-xs text-green-300">
 {activeModalProject.status}
 </span>
 </div>

 <h3 className="font-display text-3xl font-bold text-brand-blue tracking-tight">
 {activeModalProject.title}
 </h3>

 <p className="text-brand-blue/80 font-light text-base leading-relaxed">
 {activeModalProject.detailedDesc}
 </p>
 </div>

 <div className=" border border-brand-blue bg-brand-blue/10 p-6 space-y-3 font-mono">
 <div className="text-xs text-brand-blue uppercase tracking-widest font-bold">SYSTEM METRICS &amp; TELEMETRY</div>
 <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
 {activeModalProject.metrics.map((m, idx) => (
 <div key={idx} className="space-y-1">
 <div className="text-lg font-bold text-brand-blue">{m.value}</div>
 <div className="text-[10px] text-brand-blue/80 uppercase">{m.label}</div>
 </div>
 ))}
 </div>
 </div>

 <div className="space-y-3">
 <div className="font-mono text-xs text-brand-blue/80 uppercase tracking-wider">PROJECT LEADERS &amp; ENGINEERS</div>
 <div className="flex flex-wrap gap-2">
 {activeModalProject.team.map((member, mIdx) => (
 <span key={mIdx} className=" border border-brand-blue-400/30 bg-brand-blue/10 px-3 py-1 font-mono text-xs text-brand-blue">
 ⚡ {member}
 </span>
 ))}
 </div>
 </div>

 <div className="flex items-center justify-between border-t border-brand-blue pt-6">
 <a
 href={activeModalProject.github}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 font-mono text-xs font-bold text-brand-blue shadow-brutal hover:scale-105 transition-all"
 >
 <GithubIcon className="h-4 w-4" />
 <span>View GitHub Repository</span>
 <ExternalLink className="h-3.5 w-3.5" />
 </a>
 <button
 onClick={() => setActiveModalProject(null)}
 className="font-mono text-xs text-brand-blue/80 hover:text-brand-blue"
 >
 Close Specs
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
