'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Target, Lightbulb, CheckCircle2, Sparkles, Layers } from 'lucide-react';

const pillars = [
  {
    id: 'mission',
    title: 'Our Mission',
    icon: Target,
    desc: 'To empower students with state-of-the-art infrastructure, expert faculty mentorship, and hands-on exposure to solve real-world complex problems through technology.',
    points: ['Interdisciplinary Research', 'Student-Led Prototypes', 'Industry Standard Mentorship'],
  },
  {
    id: 'ecosystem',
    title: 'Lab Ecosystem',
    icon: Layers,
    desc: 'A vibrant multi-domain ecosystem bridging hardware edge computing, AI algorithms, cloud deployment, product design, and community leadership.',
    points: ['11 Specialized Guilds', 'State-of-the-art Hardware Bench', '24/7 Innovation Sandbox'],
  },
  {
    id: 'vision',
    title: 'Our Vision',
    icon: Lightbulb,
    desc: 'To emerge as a premier technology research incubator that produces global leaders, patentable inventions, and industry-grade solutions.',
    points: ['Hackathon Supremacy', 'Patentable Innovations', 'Global Alumni Placements'],
  },
];

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.3, ease: 'easeIn' } },
};

// Type-safe local ScrollText component that matches design patterns
const ScrollText = ({
  as = 'h2',
  children,
  className,
  delay = 0,
}: {
  as?: 'h2' | 'p' | 'div';
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  const animationProps = {
    initial: { opacity: 0, y: 25 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  };

  if (as === 'h2') {
    return (
      <motion.h2 {...animationProps} className={className}>
        {children}
      </motion.h2>
    );
  }
  if (as === 'p') {
    return (
      <motion.p {...animationProps} className={className}>
        {children}
      </motion.p>
    );
  }
  return (
    <motion.div {...animationProps} className={className}>
      {children}
    </motion.div>
  );
};

export default function AboutUs() {
  const [activePillar, setActivePillar] = useState('mission');

  // Auto-transition logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePillar((current) => {
        const currentIndex = pillars.findIndex((p) => p.id === current);
        const nextIndex = (currentIndex + 1) % pillars.length;
        return pillars[nextIndex].id;
      });
    }, 5000); // Transitions every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const selectedPillar = pillars.find((p) => p.id === activePillar) || pillars[0];

  return (
    <section id="about-us" className="relative overflow-hidden bg-blue-50/40 py-36 md:py-48 px-6 lg:px-16 text-slate-800 border-y border-blue-100/50">
      {/* Background Ambient Glows adapted to light website theme */}
      <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 h-[550px] w-[550px] rounded-full bg-blue-300/20 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-sky-200/20 blur-[130px]" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-24 space-y-4">
          <ScrollText as="h2" className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#060d29] max-w-4xl leading-tight">
            Nurturing Excellence. Building the Future.
          </ScrollText>

          <ScrollText as="p" className="text-slate-600 font-light text-base sm:text-lg lg:text-xl max-w-3xl" delay={0.2}>
            IoT Lab KIIT unites passionate student minds and visionary mentors to create impact-driven technology that matters.
          </ScrollText>
        </div>

        {/* Main 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Left Column: Interactive Image Glass Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden rounded-3xl border border-white bg-white/60 p-4 shadow-2xl group backdrop-blur-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/lab-life.jpeg"
                  alt="IoT Lab members collaborating"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent opacity-80" />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/60 bg-white/95 p-4 backdrop-blur-xl flex items-center justify-between shadow-lg">
                  <div>
                    <span className="font-sans text-xs text-blue-600 font-bold uppercase tracking-wider block">
                      Technical Society
                    </span>
                    <span className="text-xs text-slate-500 font-light">
                      School of Computer Engineering
                    </span>
                  </div>
                  <Sparkles className="h-5 w-5 text-blue-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tabbed Pillar System */}
          <div className="lg:col-span-6 space-y-8">

            {/* Tabs */}
            <div className="flex items-center gap-2 p-2 rounded-2xl border border-slate-200/50 bg-white/70 shadow-sm backdrop-blur-sm">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                const isActive = pillar.id === activePillar;
                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(pillar.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl text-xs sm:text-sm lg:text-base font-bold transition-all duration-300 ${isActive
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/50'
                      }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{pillar.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Pillar Content Card */}
            <div className="rounded-3xl border border-white bg-white/75 p-10 md:p-12 shadow-2xl min-h-[340px] sm:min-h-[280px] overflow-hidden relative flex flex-col justify-center backdrop-blur-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedPillar.id}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  variants={{
                    hidden: {},
                    show: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                    exit: {
                      transition: {
                        staggerChildren: 0.05,
                      },
                    },
                  }}
                  className="space-y-6"
                >
                  <motion.h3 variants={itemVariants} className="font-sans text-2xl font-bold text-[#060d29] flex items-center gap-3">
                    <span className="text-blue-600 font-sans font-black">0{pillars.findIndex(p => p.id === activePillar) + 1}.</span>
                    {selectedPillar.title}
                  </motion.h3>
                  
                  <motion.p variants={itemVariants} className="text-slate-600 text-base font-light leading-relaxed">
                    {selectedPillar.desc}
                  </motion.p>
                  
                  <div className="space-y-3 pt-2">
                    {selectedPillar.points.map((pt, i) => (
                      <motion.div variants={itemVariants} key={i} className="flex items-center gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                        <span className="font-medium">{pt}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
