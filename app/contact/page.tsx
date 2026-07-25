import { Mail, MapPin, MessageSquare, Send, Navigation } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '@/components/Icons';
import { site } from '@/data/site';

export const metadata = {
  title: 'Contact | IoT Lab KIIT',
  description: 'Get in touch with IoT Lab KIIT for collaborations, inquiries, research, and recruitment.',
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-[#030712] text-white py-20 px-6 lg:px-12 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-blue-600/15 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-10 right-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 backdrop-blur-xl">
            <MessageSquare className="h-4 w-4 text-cyan-300" />
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Get In Touch
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            LET&apos;S BUILD SOMETHING <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
              EXTRAORDINARY TOGETHER
            </span>
          </h1>

          <p className="text-base font-light text-gray-300 sm:text-lg">
            Have a project idea, research proposal, hackathon inquiry, or recruitment question? Drop us a message or visit our campus laboratory.
          </p>
        </div>

        {/* 2-Column Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Info Card */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl shadow-glass space-y-6">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <MapPin className="h-6 w-6 text-cyan-400 shrink-0" />
                <span>Laboratory Location</span>
              </h2>
              
              <div className="space-y-4 text-sm text-gray-300 font-light leading-relaxed">
                <p className="text-white font-medium text-base">
                  School of Computer Engineering, KIIT University
                </p>
                <p>
                  Room A-004, Campus 25, Patia, Bhubaneswar, Odisha — 751024
                </p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="https://maps.app.goo.gl/wuBhh7PJVyAbosY28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-2.5 text-xs font-bold text-cyan-300 hover:bg-cyan-500/20 transition-all"
                >
                  <Navigation className="h-4 w-4" />
                  <span>Navigate on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Email & Contact Info */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl shadow-glass space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span>Direct Inquiries</span>
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-3 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <span className="text-gray-400 font-mono text-xs">Official Email</span>
                  <a href={`mailto:${site.email}`} className="text-cyan-300 font-semibold hover:underline">
                    {site.email}
                  </a>
                </div>
                <div className="flex items-center justify-between p-3 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <span className="text-gray-400 font-mono text-xs">Website</span>
                  <span className="text-white font-mono text-xs">iotkiit.in</span>
                </div>
              </div>
            </div>

            {/* Social handles */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl shadow-glass space-y-4">
              <h3 className="text-base font-bold text-white">Connect On Social Media</h3>
              <div className="flex items-center gap-3">
                <a
                  href={site.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-3 text-xs font-semibold text-gray-300 hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:text-white transition-all"
                >
                  <GithubIcon className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={site.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-3 text-xs font-semibold text-gray-300 hover:border-blue-400/50 hover:bg-blue-500/20 hover:text-white transition-all"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={site.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-3 text-xs font-semibold text-gray-300 hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:text-white transition-all"
                >
                  <TwitterIcon className="h-4 w-4" />
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Message Form */}
          <div className="lg:col-span-7">
            <form className="rounded-3xl border border-white/15 bg-white/[0.03] p-8 sm:p-10 backdrop-blur-2xl shadow-glass space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl font-extrabold text-white">Send Us A Message</h2>
                <p className="text-xs text-gray-400 font-light">
                  Fill out the details below and our lab coordinators will get back to you within 24 hours.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 font-semibold uppercase">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-gray-300 font-semibold uppercase">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-300 font-semibold uppercase">
                  Subject / Inquiry Type
                </label>
                <select className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all">
                  <option value="research">Project Collaboration / Research</option>
                  <option value="webinar">Webinar / Guest Session</option>
                  <option value="recruitment">Recruitment / Membership</option>
                  <option value="other">General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-300 font-semibold uppercase">
                  Message *
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell us about your project, idea, or question..."
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder-gray-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 text-sm font-bold text-white shadow-glow-blue hover:shadow-glow-cyan hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
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
