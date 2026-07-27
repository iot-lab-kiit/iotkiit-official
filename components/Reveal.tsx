'use client';

import { useEffect, useRef, useState } from 'react';

interface Props {
 children: React.ReactNode;
 delay?: number;
 className?: string;
}

// Lightweight, zero-dependency scroll reveal: fades + lifts its children into
// view once, the first time they enter the viewport. Falls back to visible if
// IntersectionObserver isn't available so content is never stuck hidden.
const Reveal = ({ children, delay = 0, className = '' }: Props) => {
 const ref = useRef<HTMLDivElement>(null);
 const [visible, setVisible] = useState(false);

 useEffect(() => {
 const el = ref.current;
 if (!el || typeof IntersectionObserver === 'undefined') {
 setVisible(true);
 return;
 }
 const io = new IntersectionObserver(
 ([entry]) => {
 if (entry.isIntersecting) {
 setVisible(true);
 io.disconnect();
 }
 },
 { threshold: 0.12 },
 );
 io.observe(el);
 return () => io.disconnect();
 }, []);

 return (
 <div
 ref={ref}
 style={{ transitionDelay: `${delay}ms` }}
 className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
 visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
 } ${className}`}
 >
 {children}
 </div>
 );
};

export default Reveal;
