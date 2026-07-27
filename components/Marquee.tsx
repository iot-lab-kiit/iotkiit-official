"use client";

interface MarqueeProps {
 texts: string[];
 speed?: number;
}

export default function Marquee({ texts, speed = 25 }: MarqueeProps) {
 // Duplicate array to ensure seamless infinite looping
 const repeated = Array(4).fill(texts).flat();

 return (
 <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-900/10 via-cyan-900/10 to-blue-900/10 border-y border-brand-blue py-6 my-12 ">
 <div
 className="flex whitespace-nowrap gap-16 animate-marquee-loop"
 style={{
 animationDuration: `${speed}s`,
 }}
 >
 {repeated.map((text, i) => (
 <div key={i} className="flex items-center gap-16">
 <span className="font-display text-4xl sm:text-5xl tracking-widest text-brand-blue uppercase font-black">
 {text}
 </span>
 <span className="font-display text-4xl sm:text-5xl tracking-widest text-transparent stroke-text font-black uppercase">
 {text}
 </span>
 <span className="text-brand-blue text-3xl">✦</span>
 </div>
 ))}
 </div>

 <style jsx global>{`
 .stroke-text {
 -webkit-text-stroke: 1px rgba(255, 255, 255, 0.25);
 }
 @keyframes marquee {
 0% {
 transform: translateX(0%);
 }
 100% {
 transform: translateX(-50%);
 }
 }
 .animate-marquee-loop {
 animation: marquee linear infinite;
 }
 `}</style>
 </div>
 );
}
