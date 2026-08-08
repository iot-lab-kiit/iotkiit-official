"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useEffect, useMemo, useRef, useState, memo, useCallback } from "react";

const inter = Inter({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });

import { Project } from "@/data/projects";

// Returns the current viewport width, re-rendering the consumer when it
// changes (e.g. rotation or resize) so carousel geometry can adapt to phones.
const useViewportWidth = () => {
  const [width, setWidth] = useState(
    typeof window === "undefined" ? 1024 : window.innerWidth,
  );

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

// --- Components ---

const GithubIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const CanvasBackground = memo(function CanvasBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId: number;
    let logicalWidth = 0;
    let logicalHeight = 0;
    let particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number }> = [];

    const mouse = { x: -1000, y: -1000, radius: 180 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        const dpr = window.devicePixelRatio || 1;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        ctx.scale(dpr, dpr);
        logicalWidth = width;
        logicalHeight = height;

        const particleCount = Math.floor((width * height) / 9000);
        particles = Array.from({ length: particleCount }).map(() => ({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.8,
          vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.8,
          radius: Math.random() * 2 + 1,
        }));
      }
    });

    resizeObserver.observe(container);

    const render = () => {
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > logicalWidth) p.vx *= -1;
        if (p.y < 0 || p.y > logicalHeight) p.vy *= -1;

        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && !prefersReducedMotion) {
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * 0.5;
          p.y += Math.sin(angle) * 0.5;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 98, 255, 0.4)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(0, 98, 255, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        if (dist < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(0, 98, 255, ${0.35 * (1 - dist / mouse.radius)})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <canvas ref={canvasRef} className="block pointer-events-auto" />
    </div>
  );
});

type ProjectCardProps = {
  project: Project;
  isActive: boolean;
  onClick: () => void;
};

const ProjectCard = memo(function ProjectCard({ project, isActive, onClick }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [12, -12]);
  const rotateY = useTransform(smoothX, [0, 1], [-12, 12]);
  const glareOpacity = useTransform(smoothY, [0, 0.5, 1], [0.2, 0, 0.2]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)));
    mouseY.set(Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height)));
  };

  const handleMouseLeaveWrapper = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeaveWrapper}
      onClick={onClick}
      style={{
        rotateX: isActive ? rotateX : 0,
        rotateY: isActive ? rotateY : 0,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-[min(340px,78vw)] h-[min(480px,114vw)] rounded-[32px] cursor-pointer will-change-transform ${
        isActive ? "z-50" : "z-10"
      }`}
      aria-hidden={!isActive}
    >
      <motion.div
        animate={{
          scale: isActive ? 1 : 0.95,
          boxShadow: isActive
            ? "0 30px 80px rgba(0, 98, 255, 0.25), 0 0 0 1px rgba(0, 98, 255, 0.2)"
            : "0 10px 30px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255,255,255,0.5)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="absolute inset-0 bg-white rounded-[32px] overflow-hidden flex flex-col"
      >
        <motion.div
          className="absolute inset-0 z-[60] pointer-events-none rounded-[32px]"
          style={{
            background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.8) 50%, transparent 80%)",
            opacity: isActive ? glareOpacity : 0,
            mixBlendMode: "overlay",
          }}
        />

        <AnimatePresence>
          {isActive && isHovered && (
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="absolute inset-0 z-50 flex flex-col bg-slate-900/95 backdrop-blur-xl text-white p-8 overflow-hidden rounded-[32px]"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/30 blur-[50px] rounded-full pointer-events-none"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-400/30 blur-[50px] rounded-full pointer-events-none"
              />

              <div className="relative z-10 flex flex-col h-full">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-2xl font-bold tracking-tight mb-4 mt-2"
                >
                  {project.title}
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm leading-relaxed text-slate-300 mb-4 overflow-y-auto pr-2 flex-grow [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-indigo-500/50 [&::-webkit-scrollbar-thumb]:rounded-full"
                >
                  {project.description}{" "}
                  This project showcases advanced integration of hardware and software, designed with a focus on scalability, real-time performance, and a seamless user experience.
                </motion.div>

                <div className="mt-auto flex flex-col gap-3 shrink-0 pt-2">
                  {project.github && (
                    <motion.a
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white text-slate-900 rounded-xl font-bold transition-all hover:bg-slate-100 hover:scale-[1.02] active:bg-slate-900 active:text-white"
                      onClick={(e: any) => e.stopPropagation()}
                    >
                      <GithubIcon size={18} /> View on Github
                    </motion.a>
                  )}
                  <motion.a
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-white/10 text-white rounded-xl font-bold transition-all hover:bg-white/20 hover:scale-[1.02] border border-white/10 active:bg-white active:text-slate-900"
                    onClick={(e: any) => e.stopPropagation()}
                  >
                    <ExternalLink size={18} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative h-[55%] w-full bg-slate-100 overflow-hidden">
          <img
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="flex-grow p-6 flex flex-col justify-between bg-white">
          <div>
            <h3 className="text-xl font-bold tracking-tight text-slate-900 mt-2">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-2">
              {project.description}
            </p>
            <p className="mt-1 text-xs font-semibold text-indigo-500 hover:text-indigo-700 transition-colors cursor-pointer inline-flex items-center gap-1">
              Read more <ChevronRight size={14} className="inline" />
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

/**
 * Main Carousel Orchestrator Component
 */
export default function PolishedProjectShowcase({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout>();
  const viewportWidth = useViewportWidth();

  // Card width is min(340px, 78vw); the JS x-offset must mirror the CSS size
  // so neighbour cards tile beside the active one without leaving a gap.
  const cardWidth = Math.min(340, viewportWidth * 0.78);
  const step = cardWidth - 20;

  const next = useCallback(() => setActive((p) => (p + 1) % projects.length), [projects]);
  const prev = useCallback(() => setActive((p) => (p - 1 + projects.length) % projects.length), [projects]);

  useEffect(() => {
    if (!isPaused) {
      autoplayRef.current = setInterval(next, 6000);
    }
    return () => clearInterval(autoplayRef.current);
  }, [next, isPaused]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") { next(); setIsPaused(true); }
      if (e.key === "ArrowLeft") { prev(); setIsPaused(true); }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  const orderedItems = useMemo(() => {
    return projects.map((item, index) => {
      let offset = index - active;
      // Handle the wrapping logic for infinite loop
      if (offset > 2) offset -= projects.length;
      if (offset < -2) offset += projects.length;
      return { ...item, offset };
    });
  }, [active, projects]);

  return (
    <section
      className={`${inter.className} relative w-full min-h-screen py-16 md:py-24 flex flex-col justify-between overflow-hidden bg-slate-50`}
      style={{ backgroundImage: "linear-gradient(135deg, #E0EBFF 0%, #C7DCFF 100%)" }}
      aria-label="Featured Projects Showcase"
    >
      <CanvasBackground />

      <div aria-live="polite" className="sr-only">
        Currently displaying project {active + 1} of {projects.length}: {projects[active]?.title}.
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 w-full flex-grow flex flex-col justify-center">

        {/* Minimalist, Cinematic Header */}
        <header className="mb-12 md:mb-16 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-blue-500/50" />
            <p className={`${mono.className} text-xs uppercase tracking-[0.3em] font-semibold text-blue-600/80`}>
              Featured Projects
            </p>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-blue-500/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-slate-900"
          >
            Crafted for <span className="inline-block bg-gradient-to-r from-[#0062FF] to-[#00B3FF] bg-clip-text text-transparent">Innovation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed"
          >
            A high-performance showcase of engineering prowess, smart automation, and connected ecosystems.
          </motion.p>
        </header>

        <div
          className="relative mx-auto h-[520px] flex items-center justify-center w-full"
          style={{ perspective: "2500px", transformStyle: "preserve-3d" }}
          role="region"
          aria-roledescription="carousel"
        >
          {/* Ambient Floor Glow: Grounds the 3D cards so they don't look like they are floating in nowhere */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-3/4 max-w-[600px] h-24 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none" />

          {orderedItems.map((project) => {
            const isActive = project.offset === 0;
            const x = project.offset * step;
            const rotateY = project.offset * -12;
            const scale = isActive ? 1 : 0.85;
            const z = isActive ? 100 : 50 - Math.abs(project.offset) * 20;
            // On phones the neighbours drift far enough off-screen that the
            // ambient stack only adds distraction; hide them beyond ±1.
            const maxOffset = viewportWidth < 640 ? 1 : 2;
            const opacity = Math.abs(project.offset) > maxOffset ? 0 : 1;

            return (
              <motion.div
                key={project.id}
                animate={{ x, rotateY, scale, zIndex: z, opacity }}
                transition={{ type: "spring", stiffness: 150, damping: 22 }}
                className="absolute"
                style={{ transformStyle: "preserve-3d", transformOrigin: "center center" }}
              >
                <ProjectCard
                  project={project}
                  isActive={isActive}
                  onClick={() => {
                    setActive(projects.findIndex((p) => p.id === project.id));
                    setIsPaused(true);
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        <nav className="mt-12 flex items-center justify-center gap-6 z-20" aria-label="Carousel Pagination">
          <button
            onClick={() => { prev(); setIsPaused(true); }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-blue-100 text-slate-700 transition-all hover:bg-slate-50 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-3">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActive(i); setIsPaused(true); }}
                className="py-3 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md transition-transform active:scale-95"
                aria-label={`Go to project ${i + 1}`}
                aria-current={active === i ? "true" : "false"}
              >
                <motion.div
                  animate={{
                    width: active === i ? 36 : 8,
                    backgroundColor: active === i ? "#0062FF" : "rgba(0, 98, 255, 0.25)",
                  }}
                  className="h-2 rounded-full"
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => { next(); setIsPaused(true); }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-blue-100 text-slate-700 transition-all hover:bg-slate-50 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </button>
        </nav>

      </div>
    </section>
  );
}