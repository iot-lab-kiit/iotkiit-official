'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/work', label: 'Projects' },
  { href: '/team', label: 'Team' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="nav-shell">
      <nav className="floating-nav" aria-label="Primary navigation">
        <Link className="nav-brand" href="/">
          IoT LAB
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

        <details className="mobile-menu">
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
