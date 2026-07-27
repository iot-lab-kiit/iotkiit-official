"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
 gsap.registerPlugin(ScrollTrigger);
}

interface ScrollTextProps {
 children: React.ReactNode;
 className?: string;
 as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
 delay?: number;
 stagger?: number;
}

export default function ScrollText({
 children,
 className = "",
 as: Component = "h2",
 delay = 0,
 stagger = 0.04,
}: ScrollTextProps) {
 const containerRef = useRef<HTMLElement>(null);
 const isString = typeof children === "string";

 useEffect(() => {
 if (!containerRef.current) return;

 const ctx = gsap.context(() => {
 if (isString) {
 const words = containerRef.current?.querySelectorAll(".gsap-word");
 if (!words?.length) return;

 gsap.fromTo(
 words,
 {
 opacity: 0,
 y: 35,
 rotateX: -45,
 filter: "blur(6px)",
 },
 {
 opacity: 1,
 y: 0,
 rotateX: 0,
 filter: "blur(0px)",
 duration: 0.9,
 stagger: stagger,
 ease: "power3.out",
 delay: delay,
 scrollTrigger: {
 trigger: containerRef.current,
 start: "top 88%",
 toggleActions: "play none none reverse",
 },
 }
 );
 } else {
 gsap.fromTo(
 containerRef.current,
 {
 opacity: 0,
 y: 30,
 filter: "blur(6px)",
 },
 {
 opacity: 1,
 y: 0,
 filter: "blur(0px)",
 duration: 0.9,
 ease: "power3.out",
 delay: delay,
 scrollTrigger: {
 trigger: containerRef.current,
 start: "top 88%",
 toggleActions: "play none none reverse",
 },
 }
 );
 }
 }, containerRef);

 return () => ctx.revert();
 }, [children, delay, stagger, isString]);

 if (!isString) {
 return (
 <Component
 ref={containerRef as any}
 className={`perspective-1000 ${className}`}
 >
 {children}
 </Component>
 );
 }

 const wordsArray = (children as string).split(" ");

 return (
 <Component
 ref={containerRef as any}
 className={`perspective-1000 ${className}`}
 >
 {wordsArray.map((word, i) => (
 <span
 key={i}
 className="gsap-word inline-block mr-[0.25em] will-change-transform"
 >
 {word}
 </span>
 ))}
 </Component>
 );
}
