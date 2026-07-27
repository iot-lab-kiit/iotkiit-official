import Link from 'next/link';
import { ArrowUpRight, Layers } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

export const metadata = {
 title: 'Projects & Work | IoT Lab KIIT',
 description: 'Explore research prototypes, hardware nodes, software applications, and deep tech projects built at IoT Lab KIIT.',
};

const projects = [
 {
 id: "smart-campus",
 title: "Smart Campus IoT Mesh Network",
 category: "IoT & Hardware",
 status: "Deployed",
 desc: "A distributed wireless sensor network monitoring ambient temperature, air quality, and occupancy in real-time across KIIT campus buildings.",
 tags: ["ESP32", "LoRaWAN", "MQTT", "Grafana", "Node-RED"],
 github: "https://github.com/iotkiit",
 },
 {
 id: "ai-vision-gate",
 title: "AI Edge Vision Gate System",
 category: "Machine Learning",
 status: "Active Prototype",
 desc: "Real-time edge computer vision model for automated license plate recognition and access logging running on Raspberry Pi microcomputers.",
 tags: ["Python", "OpenCV", "YOLOv8", "PyTorch", "Raspberry Pi"],
 github: "https://github.com/iotkiit",
 },
 {
 id: "lab-portal",
 title: "IoT Lab Official Digital Portal",
 category: "Web & Mobile",
 status: "Production Live",
 desc: "An Awwwards-grade glassmorphic Next.js portal featuring domain directories, alumni networks, event tracking, and member showcases.",
 tags: ["Next.js 13", "TypeScript", "Tailwind CSS", "GSAP", "Lenis"],
 github: "https://github.com/iotkiit",
 },
 {
 id: "cp-tracker",
 title: "CP Codeforces Bench & Tracker",
 category: "Competitive Programming",
 status: "Live Tool",
 desc: "Internal analytics engine tracking competitive programming ratings, problem contest streaks, and leaderboard standing of lab members.",
 tags: ["React", "Express", "Codeforces API", "PostgreSQL"],
 github: "https://github.com/iotkiit",
 },
];

export default function WorkPage() {
 return (
 <main className="relative min-h-screen bg-white text-brand-blue py-20 px-6 lg:px-12 overflow-hidden">
 {/* Background Ambient Glows */}
 <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[650px] bg-brand-blue/10 blur-[160px]" />
 <div className="pointer-events-none absolute bottom-10 left-10 h-80 w-80 bg-brand-blue/10 blur-[130px]" />

 <div className="relative mx-auto max-w-7xl">
 {/* Header */}
 <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">

 <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-brand-blue">
 PROJECTS & <span>RESEARCH</span>
 </h1>

 <p className="text-base font-light text-brand-blue/80 sm:text-lg">
 Discover hardware prototypes, software solutions, machine learning models, and deep tech innovations engineered at IoT Lab KIIT.
 </p>
 </div>

 {/* Project Cards Grid */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {projects.map((project) => (
 <div
 key={project.id}
 className="group relative overflow-hidden border border-brand-blue bg-brand-blue/10 p-8 -2xl shadow-brutal transition-all duration-500 hover:border-brand-blue-400/40 hover:bg-brand-blue/10 hover:-translate-y-2 flex flex-col justify-between"
 >
 {/* Card Corner Glow */}
 <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 bg-brand-blue/10 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />

 <div className="space-y-4">
 <div className="flex items-center justify-between">
 <span className="font-mono text-xs text-brand-blue font-bold bg-brand-blue/10 px-3 py-1 border border-brand-blue-400/20">
 {project.category}
 </span>
 <span className="font-mono text-[11px] text-green-400 font-medium flex items-center gap-1.5">
 <span className="h-1.5 w-1.5 bg-green-400" />
 {project.status}
 </span>
 </div>

 <h2 className="text-2xl font-bold text-brand-blue tracking-tight group-hover:text-brand-blue transition-colors">
 {project.title}
 </h2>

 <p className="text-sm text-brand-blue/80/90 font-light leading-relaxed">
 {project.desc}
 </p>

 {/* Tech Stack Badges */}
 <div className="flex flex-wrap gap-2 pt-2">
 {project.tags.map((t, idx) => (
 <span
 key={idx}
 className=" border border-brand-blue bg-white/5 px-3 py-1 font-mono text-[11px] text-brand-blue/80"
 >
 #{t}
 </span>
 ))}
 </div>
 </div>

 {/* Bottom Card Actions */}
 <div className="mt-8 flex items-center justify-between pt-4 border-t border-brand-blue">
 <a
 href={project.github}
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue/80 hover:text-brand-blue transition-colors"
 >
 <GithubIcon className="h-4 w-4" />
 <span>View Repository</span>
 </a>

 <Link
 href="/contact"
 className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:text-brand-blue transition-colors"
 >
 <span>Inquire / Collaborate</span>
 <ArrowUpRight className="h-3.5 w-3.5" />
 </Link>
 </div>
 </div>
 ))}
 </div>
 </div>
 </main>
 );
}
