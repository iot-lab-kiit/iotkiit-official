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
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* mobile toggle */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={open}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
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
        enter="transition-all ease-in-out duration-300"
        enterFrom="h-0 opacity-0"
        enterTo="opacity-100"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="opacity-100"
        leaveTo="h-0 opacity-0"
      >
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={cls(l.href, 'block rounded-md px-3 py-2 text-base font-medium')}
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
