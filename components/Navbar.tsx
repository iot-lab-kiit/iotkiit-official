'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRef, useEffect } from 'react';
const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/team', label: 'Team' },
  { href: '/alumni', label: 'Alumni' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    if (detailsRef.current) {
      detailsRef.current.removeAttribute('open');
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="nav-shell">
      <nav className="floating-nav" aria-label="Primary navigation">
        <Link className="nav-brand" href="/">
          <Image
            className="nav-brand-logo"
            src="/images/logo_small.webp"
            alt=""
            width={36}
            height={36}
            priority
          />
          <span>IoT LAB</span>
        </Link>

        <div className="nav-links">
          {links.map((link) => (
            <Link
              className={pathname === link.href ? 'active' : undefined}
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <details className="mobile-menu" ref={detailsRef}>
          <summary aria-label="Toggle menu">
            <span />
            <span />
            <span />
          </summary>
          <div>
            {links.map((link) => (
              <Link
                className={pathname === link.href ? 'active' : undefined}
                href={link.href}
                key={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}