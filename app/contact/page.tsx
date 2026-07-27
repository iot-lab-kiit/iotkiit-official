import { Mail, MapPin, MessageSquare, Send, Navigation } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/Icons';
import { site } from '@/data/site';

export const metadata = {
 title: 'Contact | IoT Lab KIIT',
 description: 'Get in touch with IoT Lab KIIT for collaborations, inquiries, research, and recruitment.',
};

export default function ContactPage() {
 return (
 <main className="relative min-h-screen bg-white text-brand-blue py-20 px-6 lg:px-12 overflow-hidden">
 {/* Background Ambient Glows */}
 <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] bg-brand-blue/10 blur-[160px]" />
 <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 bg-brand-blue/10 blur-[130px]" />

 <div className="relative mx-auto max-w-7xl">
 {/* Header */}
 <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">

 <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-brand-blue">
 LET&apos;S BUILD SOMETHING <br />
 <span>
 EXTRAORDINARY TOGETHER
 </span>
 </h1>

 <p className="text-base font-light text-brand-blue/80 sm:text-lg">
 Have a project idea, research proposal, hackathon inquiry, or recruitment question? Drop us a message or visit our campus laboratory.
 </p>
 </div>

 {/* 2-Column Contact Section */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
 
 {/* Left Column: Direct Contact Info & Social Cards */}
 <div className="lg:col-span-5 space-y-6">
 
 {/* Campus Info Card */}
 <div className=" border border-brand-blue bg-brand-blue/10 p-8 -2xl shadow-brutal space-y-6">
 <h2 className="text-2xl font-bold text-brand-blue flex items-center gap-3">
 <MapPin className="h-6 w-6 text-brand-blue shrink-0" />
 <span>Laboratory Location</span>
 </h2>
 
 <div className="space-y-4 text-sm text-brand-blue/80 font-light leading-relaxed">
 <p className="text-brand-blue font-medium text-base">
 School of Computer Engineering, KIIT University
 </p>
 <p>
 Room A-004, Campus 25, Patia, Bhubaneswar, Odisha — 751024
 </p>
 </div>

 <div className="pt-4 border-t border-brand-blue">
 <a
 href="https://maps.app.goo.gl/wuBhh7PJVyAbosY28"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-flex items-center gap-2 border border-brand-blue-400/30 bg-brand-blue/10 px-5 py-2.5 text-xs font-bold text-brand-blue hover:bg-brand-blue/10 transition-all"
 >
 <Navigation className="h-4 w-4" />
 <span>Navigate on Google Maps</span>
 </a>
 </div>
 </div>

 {/* Email & Contact Info */}
 <div className=" border border-brand-blue bg-brand-blue/10 p-8 -2xl shadow-brutal space-y-6">
 <h3 className="text-xl font-bold text-brand-blue flex items-center gap-3">
 <Mail className="h-5 w-5 text-brand-blue" />
 <span>Direct Inquiries</span>
 </h3>

 <div className="space-y-3 text-sm">
 <div className="flex items-center justify-between p-3 border border-brand-blue bg-brand-blue/10">
 <span className="text-brand-blue/80 font-mono text-xs">Official Email</span>
 <a href={`mailto:${site.email}`} className="text-brand-blue font-semibold hover:underline">
 {site.email}
 </a>
 </div>
 <div className="flex items-center justify-between p-3 border border-brand-blue bg-brand-blue/10">
 <span className="text-brand-blue/80 font-mono text-xs">Website</span>
 <span className="text-brand-blue font-mono text-xs">iotkiit.in</span>
 </div>
 </div>
 </div>

 {/* Social handles */}
 <div className=" border border-brand-blue bg-brand-blue/10 p-8 -2xl shadow-brutal space-y-4">
 <h3 className="text-base font-bold text-brand-blue">Connect On Social Media</h3>
 <div className="flex items-center gap-3">
 <a
 href={site.socials.github}
 target="_blank"
 rel="noopener noreferrer"
 className="flex flex-1 items-center justify-center gap-2 border border-brand-blue bg-white/5 py-3 text-xs font-semibold text-brand-blue/80 hover:border-brand-blue-400/50 hover:bg-brand-blue/10 hover:text-brand-blue transition-all"
 >
 <GithubIcon className="h-4 w-4" />
 <span>GitHub</span>
 </a>
 <a
 href={site.socials.linkedin}
 target="_blank"
 rel="noopener noreferrer"
 className="flex flex-1 items-center justify-center gap-2 border border-brand-blue bg-white/5 py-3 text-xs font-semibold text-brand-blue/80 hover:border-brand-blue-400/50 hover:bg-brand-blue/10 hover:text-brand-blue transition-all"
 >
 <LinkedinIcon className="h-4 w-4" />
 <span>LinkedIn</span>
 </a>
 <a
 href={site.socials.twitter}
 target="_blank"
 rel="noopener noreferrer"
 className="flex flex-1 items-center justify-center gap-2 border border-brand-blue bg-white/5 py-3 text-xs font-semibold text-brand-blue/80 hover:border-brand-blue-400/50 hover:bg-brand-blue/10 hover:text-brand-blue transition-all"
 >
 <TwitterIcon className="h-4 w-4" />
 <span>Twitter</span>
 </a>
 </div>
 </div>
 </div>

 {/* Right Column: Glassmorphic Message Form */}
 <div className="lg:col-span-7">
 <form className=" border border-brand-blue bg-brand-blue/10 p-8 sm:p-10 -2xl shadow-brutal space-y-6">
 <div className="space-y-2">
 <h2 className="text-2xl font-extrabold text-brand-blue">Send Us A Message</h2>
 <p className="text-xs text-brand-blue/80 font-light">
 Fill out the details below and our lab coordinators will get back to you within 24 hours.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
 <div className="space-y-2">
 <label className="text-xs font-mono text-brand-blue/80 font-semibold uppercase">
 Your Name *
 </label>
 <input
 type="text"
 required
 placeholder="John Doe"
 className="w-full border border-brand-blue bg-brand-blue/10 px-4 py-3 text-sm text-brand-blue placeholder-gray-500 focus:border-brand-blue-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
 />
 </div>
 <div className="space-y-2">
 <label className="text-xs font-mono text-brand-blue/80 font-semibold uppercase">
 Email Address *
 </label>
 <input
 type="email"
 required
 placeholder="john@example.com"
 className="w-full border border-brand-blue bg-brand-blue/10 px-4 py-3 text-sm text-brand-blue placeholder-gray-500 focus:border-brand-blue-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
 />
 </div>
 </div>

 <div className="space-y-2">
 <label className="text-xs font-mono text-brand-blue/80 font-semibold uppercase">
 Subject / Inquiry Type
 </label>
 <select className="w-full border border-brand-blue bg-brand-blue/10 px-4 py-3 text-sm text-brand-blue focus:border-brand-blue-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all">
 <option value="research">Project Collaboration / Research</option>
 <option value="webinar">Webinar / Guest Session</option>
 <option value="recruitment">Recruitment / Membership</option>
 <option value="other">General Inquiry</option>
 </select>
 </div>

 <div className="space-y-2">
 <label className="text-xs font-mono text-brand-blue/80 font-semibold uppercase">
 Message *
 </label>
 <textarea
 rows={5}
 required
 placeholder="Tell us about your project, idea, or question..."
 className="w-full border border-brand-blue bg-brand-blue/10 px-4 py-3 text-sm text-brand-blue placeholder-gray-500 focus:border-brand-blue-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
 />
 </div>

 <button
 type="submit"
 className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 py-4 text-sm font-bold text-brand-blue shadow-brutal hover:shadow-brutal-sm hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
 >
 <span>Send Message</span>
 <Send className="h-4 w-4" />
 </button>
 </form>
 </div>
 </div>
 </div>
 </main>
 );
}
