'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const NetworkBackground = dynamic(() => import('./NetworkBackground'), { ssr: false });

export default function Hero() {
  return (
    <>
      <section className="hero" id="home">
        {/* ── Left: hero copy ── */}
        <motion.div
          className="hero-body"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >

          <h1 className="hero-title">
            <span className="hero-title-main">IoT Lab</span>
            <span className="hero-title-accent">KIIT</span>
          </h1>

          <p className="hero-description">
            A multidisciplinary lab where software, hardware, design<br />
            and storytelling meet to build technology that matters.
          </p>

          <div className="hero-actions">
            <a className="primary-action" href="#domains">
              Explore our domains
              <span className="action-icon" aria-hidden="true">↓</span>
            </a>
            <a className="secondary-action" href="#about-us">
              About us
            </a>
          </div>

          <div className="hero-meta">
            <div className="hero-stat">
              <strong>11</strong>
              <span>Domains</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>∞</strong>
              <span>Projects</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <strong>01</strong>
              <span>Shared culture</span>
            </div>
          </div>
        </motion.div>

        {/* ── Right: 3D network animation ── */}
        <div className="hero-visual" aria-hidden>
          <NetworkBackground />
        </div>
      </section>
    </>
  );
}