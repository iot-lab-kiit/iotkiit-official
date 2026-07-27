import { Video, Calendar, UserCheck, ArrowUpRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
 title: 'Webinars & Firesides | IoT Lab KIIT',
 description: 'Join live tech webinars, expert talks, and fireside chats with industry leaders and research scholars.',
};

export default function WebinarPage() {
 return (
 <main className="relative min-h-screen bg-white text-brand-blue py-20 px-6 lg:px-12 overflow-hidden">
 {/* Ambient Glows */}
 <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[650px] bg-brand-blue/10 blur-[160px]" />

 <div className="relative mx-auto max-w-7xl">
 {/* Header */}
 <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">

 <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-brand-blue">
 GLOBAL TECH <span>WEBINAR SERIES</span>
 </h1>

 <p className="text-base font-light text-brand-blue/80 sm:text-lg">
 Connecting students with distinguished researchers, industry software architects, and IoT alumni sharing wisdom on cutting-edge technologies.
 </p>
 </div>

 {/* Featured Webinar Banner */}
 <div className="relative overflow-hidden border border-brand-blue bg-brand-blue/10 p-8 md:p-12 -2xl shadow-brutal mb-16">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
 
 <div className="lg:col-span-7 space-y-6">
 <span className="font-mono text-xs font-bold text-brand-blue bg-brand-blue/10 px-3 py-1 border border-brand-blue-400/20">
 UPCOMING LIVE SESSION
 </span>

 <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue leading-tight">
 Architecting Edge AI & Scalable IoT Systems for Industry 4.0
 </h2>

 <p className="text-brand-blue/80 text-sm sm:text-base font-light leading-relaxed">
 Learn how cloud-native MQTT brokers, neural compression on microcontrollers, and real-time telemetry pipelines empower modern smart infrastructure.
 </p>

 <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-brand-blue/80">
 <span>🗓 Saturday, 6:00 PM IST</span>
 <span>📍 Online Google Meet</span>
 <span>🎟 Free Registration</span>
 </div>
 </div>

 <div className="lg:col-span-5 flex justify-center">
 <div className=" border border-brand-blue bg-brand-blue/10 p-6 w-full max-w-sm text-center space-y-4">
 <div className="mx-auto flex h-16 w-16 items-center justify-center bg-gradient-to-tr from-blue-600 to-cyan-400 text-brand-blue">
 <UserCheck className="h-8 w-8" />
 </div>
 <h3 className="text-lg font-bold text-brand-blue">Reserve Your Virtual Spot</h3>
 <input
 type="email"
 placeholder="Enter your email"
 className="w-full border border-brand-blue bg-white/5 px-4 py-3 text-xs text-brand-blue placeholder-gray-500 focus:border-brand-blue-400 focus:outline-none"
 />
 <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-xs font-bold text-brand-blue shadow-brutal hover:scale-105 transition-all">
 Register Now
 </button>
 </div>
 </div>
 </div>
 </div>
 </div>
 </main>
 );
}
