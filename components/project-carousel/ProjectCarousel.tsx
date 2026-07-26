"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Inter, JetBrains_Mono } from "next/font/google";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const inter = Inter({
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
});

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "IoT Dashboard",
    category: "Analytics",
    description:
      "Real-time analytics dashboard with modern UI and responsive monitoring.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Industrial IoT",
    category: "Automation",
    description:
      "Industrial monitoring powered by AI and predictive analytics.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Embedded Project",
    category: "Embedded",
    description:
      "Embedded hardware engineered with precision and reliability.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "Robotics",
    category: "AI",
    description:
      "Autonomous robotics with computer vision and intelligent control.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
  {
    id: 5,
    title: "Smart Campus",
    category: "IoT",
    description:
      "Connected campus infrastructure with live monitoring.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
    link: "#",
  },
];

const COLORS = {
  surface: "#FFFFFF",
  border: "rgba(94, 100, 210, 0.15)",
  accent: "#5E64D2",
  textPrimary: "#1D1D1F",
  textSecondary: "#6E6E73",
};

export default function ProjectCarousel3D() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoplay = useRef<NodeJS.Timeout>();

  const next = () => setActive((p) => (p + 1) % projects.length);
  const prev = () => setActive((p) => (p - 1 + projects.length) % projects.length);

  useEffect(() => {
    autoplay.current = setInterval(next, 4500);
    return () => {
      if (autoplay.current) clearInterval(autoplay.current);
    };
  }, []);

  const ordered = useMemo(() => {
    return projects.map((item, index) => {
      let offset = index - active;
      if (offset > 2) offset -= projects.length;
      if (offset < -2) offset += projects.length;
      return { ...item, offset };
    });
  }, [active]);

  return (
    <section
      ref={containerRef}
      className={`${inter.className} relative overflow-hidden py-20 md:py-32`}
      style={{
        backgroundImage: "linear-gradient(135deg, #EAEFFA 0%, #D8DEF5 100% )",
      }}
    >
      {/* Soft Ambient Glow Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full blur-[150px] opacity-60 bg-indigo-300/40" />
        <div className="absolute right-[-10%] top-[20%] h-[600px] w-[600px] rounded-full blur-[180px] opacity-40 bg-blue-300/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-6 md:px-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 border border-[#5E64D2]/30 bg-white/90 backdrop-blur-md shadow-sm">
            <Sparkles size={14} className="text-[#5E64D2]" />
            <p
              className={`${mono.className} text-xs uppercase tracking-[0.35em] font-semibold`}
              style={{ color: COLORS.accent }}
            >
              FEATURED PROJECTS
            </p>
          </div>

          <h2
            className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl"
            style={{ color: COLORS.textPrimary }}
          >
            Crafted for{" "}
            <span className="inline-block bg-gradient-to-r from-[#5E64D2] to-[#8086ef] bg-clip-text text-transparent">
              Innovation
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base md:text-lg font-normal" style={{ color: COLORS.textSecondary }}>
            A high-performance showcase of engineering prowess, smart automation, and connected ecosystems.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div
          className="relative mx-auto flex h-[580px] md:h-[720px] items-center justify-center overflow-hidden md:overflow-visible"
          style={{ perspective: "2500px", transformStyle: "preserve-3d" }}
        >
          <AnimatePresence>
            {ordered.map((project) => {
              const isCenter = project.offset === 0;
              const spacing = typeof window !== "undefined" && window.innerWidth < 768 ? 280 : 360;
              const x = project.offset * spacing;
              const rotate = project.offset * -20;
              const scale = isCenter ? 1 : 0.8;
              const opacity = Math.abs(project.offset) > 1 ? 0 : 1;
              const z = isCenter ? 100 : 50 - Math.abs(project.offset);

              return (
                <motion.div
                  key={project.id}
                  animate={{ x, rotateY: rotate, scale, opacity, zIndex: z }}
                  transition={{ type: "spring", stiffness: 130, damping: 20 }}
                  className="absolute"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    whileHover={isCenter ? { y: -10, scale: 1.02 } : {}}
                    transition={{ type: "spring", stiffness: 250, damping: 18 }}
                    className="group relative h-[520px] md:h-[600px] w-[310px] sm:w-[350px] md:w-[380px] overflow-hidden rounded-[32px]"
                    style={{
                      background: COLORS.surface,
                      border: `1px solid ${COLORS.border}`,
                      boxShadow: isCenter
                        ? "0 30px 80px rgba(94,100,210,0.18), 0 0 40px rgba(94,100,210,0.1)"
                        : "0 15px 40px rgba(0,0,0,0.05)",
                    }}
                  >
                    {/* Project Image */}
                    <div className="relative h-3/5 w-full overflow-hidden bg-gray-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    </div>

                    {/* Content Section */}
                    <div className="absolute bottom-0 left-0 right-0 h-2/5 p-6 flex flex-col justify-between bg-white">
                      <div>
                        <p
                          className={`${mono.className} mb-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-semibold`}
                          style={{ color: COLORS.accent }}
                        >
                          {project.category}
                        </p>

                        <h3
                          className="text-xl md:text-2xl font-bold tracking-tight"
                          style={{ color: COLORS.textPrimary }}
                        >
                          {project.title}
                        </h3>

                        <p className="mt-2 text-xs md:text-sm leading-relaxed line-clamp-2" style={{ color: COLORS.textSecondary }}>
                          {project.description}
                        </p>
                      </div>

                      <motion.a
                        whileHover={{ x: 4 }}
                        href={project.link}
                        className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold pt-2"
                        style={{ color: COLORS.accent }}
                      >
                        Explore Project
                        <ExternalLink size={14} />
                      </motion.a>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="mt-10 md:mt-16 flex items-center justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prev}
            className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white shadow-md border border-indigo-200 transition-all hover:bg-gray-50"
            aria-label="Previous project"
          >
            <ChevronLeft size={22} className="text-gray-800" />
          </motion.button>

          {/* Indicators */}
          <div className="flex items-center gap-3">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className="focus:outline-none py-2"
                aria-label={`Go to slide ${index + 1}`}
              >
                <motion.div
                  animate={{
                    width: active === index ? 36 : 8,
                    backgroundColor: active === index ? COLORS.accent : "#A8AFC2",
                  }}
                  transition={{ duration: 0.35 }}
                  className="h-2 rounded-full"
                />
              </button>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={next}
            className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white shadow-md border border-indigo-200 transition-all hover:bg-gray-50"
            aria-label="Next project"
          >
            <ChevronRight size={22} className="text-gray-800" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}