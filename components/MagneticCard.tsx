"use client";

import { useRef, ReactNode, MouseEvent as ReactMouseEvent } from "react";
import gsap from "gsap";

interface MagneticCardProps {
 children: ReactNode;
 className?: string;
 tiltAmount?: number;
}

export default function MagneticCard({ children, className = "", tiltAmount = 15 }: MagneticCardProps) {
 const cardRef = useRef<HTMLDivElement>(null);

 const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
 const card = cardRef.current;
 if (!card) return;

 const rect = card.getBoundingClientRect();
 const x = e.clientX - rect.left;
 const y = e.clientY - rect.top;

 const centerX = rect.width / 2;
 const centerY = rect.height / 2;

 const rotateX = ((y - centerY) / centerY) * -tiltAmount;
 const rotateY = ((x - centerX) / centerX) * tiltAmount;

 // Update CSS Variables for spotlight gradient
 card.style.setProperty("--mouse-x", `${x}px`);
 card.style.setProperty("--mouse-y", `${y}px`);

 gsap.to(card, {
 rotateX: rotateX,
 rotateY: rotateY,
 scale: 1.02,
 duration: 0.4,
 ease: "power2.out",
 transformPerspective: 1000,
 });
 };

 const handleMouseLeave = () => {
 const card = cardRef.current;
 if (!card) return;

 gsap.to(card, {
 rotateX: 0,
 rotateY: 0,
 scale: 1,
 duration: 0.6,
 ease: "power3.out",
 });
 };

 return (
 <div
 ref={cardRef}
 onMouseMove={handleMouseMove}
 onMouseLeave={handleMouseLeave}
 className={`spotlight-card will-change-transform ${className}`}
 style={{ transformStyle: "preserve-3d" }}
 >
 {children}
 </div>
 );
}
