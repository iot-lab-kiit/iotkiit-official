'use client';

import { Children, useEffect, useRef, useState } from 'react';

interface Props {
  children: React.ReactNode;
  /** ms between each child's reveal */
  step?: number;
  /** ms before the first child reveals */
  delay?: number;
  /** classes for the container (e.g. the grid/flex definition) */
  className?: string;
  /** classes for each per-child wrapper (e.g. "h-full" in a grid, "flex-1" in a row) */
  childClassName?: string;
}

// Zero-dependency staggered scroll reveal. Reveals its direct children in a
// gentle cascade the first time the group scrolls into view. Each child is
// wrapped in a lightweight div so the effect never fights the child's own
// styles; pass childClassName to keep grid/flex sizing intact. Honours
// prefers-reduced-motion and falls back to visible without IntersectionObserver.
const Stagger = ({ children, step = 80, delay = 0, className = '', childClassName = '' }: Props) => {
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
      // threshold: 0 fires as soon as any part of the container is visible,
      // rather than requiring a fixed % of its *own area* to be on-screen.
      // That % based threshold used to mean a very tall grid (e.g. 100+
      // member cards) needed way more scrolling before the reveal fired,
      // since 12% of a huge container is much more screen space than 12% of
      // a small one. rootMargin nudges the trigger point up slightly so
      // cards animate in just before they'd be fully in view, instead of
      // popping in right at the bottom edge of the screen.
      { threshold: 0, rootMargin: '0px 0px -10% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const items = Children.toArray(children);

  return (
    <div ref={ref} className={className}>
      {items.map((child, i) => (
        <div
          key={i}
          style={{ transitionDelay: `${delay + i * step}ms` }}
          className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:duration-0 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
          } ${childClassName}`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Stagger;