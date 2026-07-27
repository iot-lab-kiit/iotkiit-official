"use client";

import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles, Code } from "lucide-react";
import { useEffect, useMemo, useRef, useState, memo, useCallback } from "react";

const inter = Inter({ subsets: ["latin"] });
const mono = JetBrains_Mono({ subsets: ["latin"] });

import { Project } from "@/data/projects";

// --- Components ---

/**
 * Interactive Particle Canvas Background
 * Wrapped in React.memo so the canvas doesn't re-render and reset particles 
 * every time the user clicks 'next' on the carousel.
 */
const CanvasBackground = memo(function CanvasBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Respect system settings: disable motion if the user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let animationFrameId: number;
    let logicalWidth = 0;
    let logicalHeight = 0;
    let particles: Array<{ x: number; y: number; vx: number; vy: number; radius: number }> = [];

    // Store mouse position relative to canvas
    const mouse = { x: -1000, y: -1000, radius: 180 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      // Move interaction out of bounds when mouse leaves
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // ResizeObserver ensures the canvas stays sharp on retina displays and resizes properly
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

        // Re-calculate particle density based on new screen size
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

    // Main animation loop
    const render = () => {
      ctx.clearRect(0, 0, logicalWidth, logicalHeight);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > logicalWidth) p.vx *= -1;
        if (p.y < 0 || p.y > logicalHeight) p.vy *= -1;

        // Mouse repulsion logic
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && !prefersReducedMotion) {
          const angle = Math.atan2(dy, dx);
          // Gentle pull TOWARDS the cursor
          p.x += Math.cos(angle) * 0.5;
          p.y += Math.sin(angle) * 0.5;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(94, 100, 210, 0.4)";
        ctx.fill();

        // Draw interconnecting lines if particles are close enough
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            // Opacity fades out as distance increases
            ctx.strokeStyle = `rgba(37, 99, 235, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Draw connecting line from particle to MOUSE cursor
        if (dist < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(79, 70, 229, ${0.35 * (1 - dist / mouse.radius)})`; // Indigo line
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Cleanup listeners and observer on unmount
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

/**
 * Individual 3D Hover Card
 */
type ProjectCardProps = {
  project: Project;
  isActive: boolean;
  onClick: () => void;
};

const ProjectCard = memo(function ProjectCard({ project, isActive, onClick }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Track normalized mouse position inside the card (0 to 1)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // Apply spring physics so the tilt feels natural, not rigid
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Map mouse position to rotation degrees (max 12 deg tilt)
  const rotateX = useTransform(smoothY, [0, 1], [12, -12]);
  const rotateY = useTransform(smoothX, [0, 1], [-12, 12]);

  // Map vertical mouse position to glare intensity
  const glareOpacity = useTransform(smoothY, [0, 0.5, 1], [0.2, 0, 0.2]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isActive || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    // Normalize coordinates to 0 - 1
    mouseX.set(Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)));
    mouseY.set(Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height)));
  };

  const handleMouseLeaveWrapper = () => {
    // Reset to center on exit
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
      className={`relative h-[480px] w-[340px] rounded-[32px] cursor-pointer will-change-transform ${isActive ? "z-50" : "z-10"
        }`}
      aria-hidden={!isActive} // Hide non-active cards from screen readers
    >
      <motion.div
        animate={{
          scale: isActive ? 1 : 0.95,
          boxShadow: isActive
            ? "0 30px 80px rgba(94, 100, 210, 0.25), 0 0 0 1px rgba(94, 100, 210, 0.2)"
            : "0 10px 30px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255,255,255,0.5)"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="absolute inset-0 bg-white rounded-[32px] overflow-hidden flex flex-col"
      >
        {/* The moving light glare effect */}
        <motion.div
          className="absolute inset-0 z-[60] pointer-events-none rounded-[32px]"
          style={{
            background: "linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.8) 50%, transparent 80%)",
            opacity: isActive ? glareOpacity : 0,
            mixBlendMode: "overlay"
          }}
        />

        {/* Hover Morph Overlay */}
        <AnimatePresence>
          {isActive && isHovered && (
            <motion.div
              initial={{ opacity: 0, y: '100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="absolute inset-0 z-50 flex flex-col bg-slate-900/95 backdrop-blur-xl text-white p-8 overflow-hidden rounded-[32px]"
            >
              {/* Animated background accent */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/30 blur-[50px] rounded-full pointer-events-none"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/30 blur-[50px] rounded-full pointer-events-none"
              />

              <div className="relative z-10 flex flex-col h-full">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className={`${mono.className} mb-2 text-[11px] uppercase tracking-[0.3em] font-semibold text-indigo-400`}
                >
                  {project.category}
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-2xl font-bold tracking-tight mb-4"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm leading-relaxed text-slate-300 mb-6"
                >
                  {project.description}
                  {" "}This project showcases advanced integration of hardware and software, designed with a focus on scalability, real-time performance, and a seamless user experience.
                </motion.p>

                <div className="mt-auto flex flex-col gap-3">
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
                      <Code size={18} /> View on Github
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
            <p className={`${mono.className} mb-1.5 text-[11px] uppercase tracking-[0.3em] font-semibold text-indigo-600`}>
              {project.category}
            </p>
            <h3 className="text-xl font-bold tracking-tight text-slate-900">
              {project.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-500 line-clamp-2">
              {project.description}
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

  const next = useCallback(() => setActive((p) => (p + 1) % projects.length), [projects]);
  const prev = useCallback(() => setActive((p) => (p - 1 + projects.length) % projects.length), [projects]);

  // Handle auto-advance
  useEffect(() => {
    if (!isPaused) {
      autoplayRef.current = setInterval(next, 6000);
    }
    return () => clearInterval(autoplayRef.current);
  }, [next, isPaused]);

  // Handle keyboard navigation for the carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") { next(); setIsPaused(true); }
      if (e.key === "ArrowLeft") { prev(); setIsPaused(true); }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  // Calculate positions relative to the currently active item
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

      {/* Screen reader live region ensures visually impaired users know when the slide changes */}
      <div aria-live="polite" className="sr-only">
        Currently displaying project {active + 1} of {projects.length}: {projects[active]?.title}.
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8 w-full flex-grow flex flex-col justify-center">

        {/* Header content */}
        <header className="mb-12 md:mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 border border-indigo-200/50 bg-white/80 backdrop-blur-md shadow-sm">
            <Sparkles size={14} className="text-indigo-600" aria-hidden="true" />
            <p className={`${mono.className} text-xs uppercase tracking-[0.3em] font-semibold text-indigo-600`}>
              Featured Projects
            </p>
          </div>
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-slate-900">
            {/* UPDATED GRADIENT: Highly saturated, vibrant blue/cyan for maximum pop on light backgrounds */}
            Crafted for <span className="inline-block bg-gradient-to-r from-[#0062FF] to-[#00B3FF] bg-clip-text text-transparent">Innovation</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed">
            A high-performance showcase of engineering prowess, smart automation, and connected ecosystems.
          </p>
        </header>

        {/* 3D Carousel container (preserve-3d is critical here) */}
        <div
          className="relative mx-auto h-[520px] flex items-center justify-center w-full"
          style={{ perspective: "2500px", transformStyle: "preserve-3d" }}
          role="region"
          aria-roledescription="carousel"
        >
          {orderedItems.map((project) => {
            const isActive = project.offset === 0;
            const x = project.offset * 320;
            const rotateY = project.offset * -12;
            const scale = isActive ? 1 : 0.85;

            // Push inactive cards further back on the Z-axis
            const z = isActive ? 100 : 50 - Math.abs(project.offset) * 20;

            // Only show the active card and its direct neighbors
            const opacity = Math.abs(project.offset) > 2 ? 0 : 1;

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
                    setActive(projects.findIndex(p => p.id === project.id));
                    setIsPaused(true);
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <nav className="mt-12 flex items-center justify-center gap-6 z-20" aria-label="Carousel Pagination">
          <button
            onClick={() => { prev(); setIsPaused(true); }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-indigo-100 text-slate-700 transition-all hover:bg-slate-50 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex items-center gap-3">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => { setActive(i); setIsPaused(true); }}
                className="py-3 px-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md transition-transform active:scale-95"
                aria-label={`Go to project ${i + 1}`}
                aria-current={active === i ? "true" : "false"}
              >
                <motion.div
                  animate={{
                    width: active === i ? 36 : 8,
                    backgroundColor: active === i ? "#4F46E5" : "#C7D2FE"
                  }}
                  className="h-2 rounded-full"
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => { next(); setIsPaused(true); }}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-indigo-100 text-slate-700 transition-all hover:bg-slate-50 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </button>
        </nav>

      </div>
    </section>
  );
}