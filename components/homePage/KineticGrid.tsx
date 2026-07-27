"use client";

import { useEffect, useRef } from "react";

export default function KineticGrid() {
 const canvasRef = useRef<HTMLCanvasElement>(null);
 const mouseRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 });

 useEffect(() => {
 const canvas = canvasRef.current;
 if (!canvas) return;

 const ctx = canvas.getContext("2d");
 if (!ctx) return;

 let animationFrameId: number;
 let width = (canvas.width = window.innerWidth);
 let height = (canvas.height = window.innerHeight);

 // Grid configuration
 const gap = 36;
 let dots: { x: number; y: number; ox: number; oy: number; vx: number; vy: number }[] = [];

 const initGrid = () => {
 width = canvas.width = window.innerWidth;
 height = canvas.height = window.innerHeight;
 dots = [];
 for (let x = gap / 2; x < width; x += gap) {
 for (let y = gap / 2; y < height; y += gap) {
 dots.push({ x, y, ox: x, oy: y, vx: 0, vy: 0 });
 }
 }
 };

 initGrid();

 const handleMouseMove = (e: MouseEvent) => {
 mouseRef.current.tx = e.clientX;
 mouseRef.current.ty = e.clientY;
 };

 const handleResize = () => {
 initGrid();
 };

 window.addEventListener("mousemove", handleMouseMove);
 window.addEventListener("resize", handleResize);

 // Spring physics & render loop
 const render = () => {
 // Smooth mouse coordinates interpolation
 const mouse = mouseRef.current;
 mouse.x += (mouse.tx - mouse.x) * 0.1;
 mouse.y += (mouse.ty - mouse.y) * 0.1;

 ctx.clearRect(0, 0, width, height);

 dots.forEach((dot) => {
 const dx = mouse.x - dot.ox;
 const dy = mouse.y - dot.oy;
 const dist = Math.sqrt(dx * dx + dy * dy);
 
 // Push force radius
 const radius = 180;
 let forceX = 0;
 let forceY = 0;

 if (dist < radius) {
 const force = (radius - dist) / radius;
 // Push dots away from cursor
 const angle = Math.atan2(dy, dx);
 forceX = -Math.cos(angle) * force * 16;
 forceY = -Math.sin(angle) * force * 16;
 }

 // Spring back force to original position
 const spring = 0.08;
 const friction = 0.85;

 dot.vx += (dot.ox - dot.x) * spring + forceX;
 dot.vy += (dot.oy - dot.y) * spring + forceY;

 dot.vx *= friction;
 dot.vy *= friction;

 dot.x += dot.vx;
 dot.y += dot.vy;

 // Draw dot
 const currentDistToMouse = Math.sqrt((dot.x - mouse.x) ** 2 + (dot.y - mouse.y) ** 2);
 
 // Highlight dots near cursor
 const size = currentDistToMouse < 100 ? 2 : 1.1;
 const alpha = Math.max(0.04, 1 - currentDistToMouse / 280);

 ctx.fillStyle = `rgba(37, 99, 235, ${alpha * 0.5})`;
 ctx.beginPath();
 ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
 ctx.fill();
 });

 animationFrameId = requestAnimationFrame(render);
 };

 render();

 return () => {
 window.removeEventListener("mousemove", handleMouseMove);
 window.removeEventListener("resize", handleResize);
 cancelAnimationFrame(animationFrameId);
 };
 }, []);

 return (
 <canvas
 ref={canvasRef}
 className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70"
 />
 );
}
