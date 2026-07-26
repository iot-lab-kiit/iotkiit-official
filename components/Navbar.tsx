'use client';
import { Transition } from '@headlessui/react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/team', label: 'Team' },
  { href: '/alumni', label: 'Alumni' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/projects', label: 'Projects' },
  { href: '/achievements', label: 'Achievements' },
  { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();

  const cls = (href: string, base: string) =>
    `${
      path === href
        ? 'bg-gray-900 text-white'
        : 'text-gray-300 hover:bg-gray-700 hover:text-white'
    } ${base}`;

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-gray-800/95 backdrop-blur supports-[backdrop-filter]:bg-gray-800/80">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* mobile toggle */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 transition-colors hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={open}
              aria-label={open ? "Close main menu" : "Open main menu"}
            >
              <span className="sr-only">Toggle main menu</span>
              {/* Animated hamburger: three bars morph into an X */}
              <span className="relative block h-5 w-6" aria-hidden="true">
                <span
                  className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${
                    open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-1'
                  }`}
                />
                <span
                  className={`absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded-full bg-current transition-all duration-200 ease-in-out ${
                    open ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-6 rounded-full bg-current transition-all duration-300 ease-in-out ${
                    open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-1'
                  }`}
                />
              </span>
            </button>
          </div>

          {/* logo + links */}
          <div className="flex flex-1 items-center justify-center sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" title="homepage-link">
                <Image className="h-10 w-auto" src="/images/logo_small.webp" alt="IoT Lab KIIT" width={400} height={410} />
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center">
              <div className="flex space-x-4">
                {links.map((l) => (
                  <Link key={l.href} href={l.href} className={cls(l.href, 'rounded-md px-3 py-2 text-sm font-medium')}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <Transition
        show={open}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <div className="border-t border-white/10 bg-gray-800 sm:hidden">
          <div className="space-y-1 px-3 pb-4 pt-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`${
                  path === l.href
                    ? 'border-primary-400 bg-gray-900 text-white'
                    : 'border-transparent text-gray-300 hover:bg-gray-700 hover:text-white'
                } block rounded-lg border-l-2 px-4 py-3 text-base font-medium transition-colors`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;