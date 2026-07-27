"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
 const cursorRef = useRef<HTMLDivElement>(null);
 const followerRef = useRef<HTMLDivElement>(null);
 const [hidden, setHidden] = useState(true);

 useEffect(() => {
 const cursor = cursorRef.current;
 const follower = followerRef.current;
 if (!cursor || !follower) return;

 const onMouseMove = (e: MouseEvent) => {
 setHidden(false);
 gsap.to(cursor, {
 x: e.clientX,
 y: e.clientY,
 duration: 0.1,
 ease: "power2.out",
 });
 gsap.to(follower, {
 x: e.clientX,
 y: e.clientY,
 duration: 0.4,
 ease: "power3.out",
 });
 };

 const onMouseLeave = () => {
 setHidden(true);
 };

 const onMouseEnterInteractive = () => {
 gsap.to(cursor, { scale: 1.5, backgroundColor: "rgba(6, 182, 212, 0.8)", duration: 0.3 });
 gsap.to(follower, { scale: 2, borderColor: "rgba(6, 182, 212, 0.8)", duration: 0.3 });
 };

 const onMouseLeaveInteractive = () => {
 gsap.to(cursor, { scale: 1, backgroundColor: "#06B6D4", duration: 0.3 });
 gsap.to(follower, { scale: 1, borderColor: "rgba(6, 182, 212, 0.4)", duration: 0.3 });
 };

 window.addEventListener("mousemove", onMouseMove);
 document.addEventListener("mouseleave", onMouseLeave);

 const refreshListeners = () => {
 const interactives = document.querySelectorAll("a, button, [role='button'], .interactive-hover");
 interactives.forEach((el) => {
 el.addEventListener("mouseenter", onMouseEnterInteractive);
 el.addEventListener("mouseleave", onMouseLeaveInteractive);
 });
 };

 refreshListeners();

 // Re-bind listener on mutation (page changes / navigation)
 const observer = new MutationObserver(refreshListeners);
 observer.observe(document.body, { childList: true, subtree: true });

 return () => {
 window.removeEventListener("mousemove", onMouseMove);
 document.removeEventListener("mouseleave", onMouseLeave);
 observer.disconnect();
 };
 }, []);

 return (
 <>
 <div
 ref={cursorRef}
 className={`fixed top-0 left-0 w-2.5 h-2.5 bg-brand-blue/10 pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 hidden md:block ${
 hidden ? "opacity-0" : "opacity-100"
 }`}
 />
 <div
 ref={followerRef}
 className={`fixed top-0 left-0 w-8 h-8 border border-brand-blue-400/40 pointer-events-none z-[99998] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 hidden md:block ${
 hidden ? "opacity-0" : "opacity-100"
 }`}
 />
 </>
 );
}
