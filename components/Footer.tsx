import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/data/site';

const iconClass = 'w-5 h-5';

const socialDefs: { key: keyof typeof site.socials; label: string; path: JSX.Element }[] = [
  {
    key: 'github',
    label: 'GitHub',
    path: (
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.39 1.24-3.23-.13-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    ),
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    path: (
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.53 1.72-2.53 3.49V23H8V8z" />
    ),
  },
  {
    key: 'instagram',
    label: 'Instagram',
    path: (
      <>
        <rect width={20} height={20} x={2} y={2} rx={5} ry={5} fill="none" stroke="currentColor" strokeWidth={2} />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" fill="none" stroke="currentColor" strokeWidth={2} />
      </>
    ),
  },
  {
    key: 'medium',
    label: 'Medium',
    path: (
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    ),
  },
];

const Footer = () => {
  const activeSocials = socialDefs.filter((s) => site.socials[s.key]);
  return (
    <footer className="border-t border-gray-100 bg-gray-50 text-gray-600">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image src="/images/logo_small.webp" alt="IoT Lab KIIT" width={40} height={40} />
              <span className="text-lg font-bold text-gray-900">IoT Lab, KIIT</span>
            </div>
            <p className="mt-3 text-sm font-light leading-relaxed text-gray-500">
              A Centre of Excellence, a student research forum exploring the Internet of Things
              and building across every domain of technology.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-900">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary-default">Home</Link></li>
              <li><Link href="/team" className="hover:text-primary-default">Team</Link></li>
              <li><Link href="/alumni" className="hover:text-primary-default">Alumni</Link></li>
              <li><Link href="/contact" className="hover:text-primary-default">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-gray-900">Reach us</h4>
            <a href={`mailto:${site.email}`} className="text-sm hover:text-primary-default">
              {site.email}
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-sm text-gray-500 transition-colors hover:text-primary-default"
            >
              📍 {site.location}
            </a>
            {activeSocials.length > 0 && (
              <div className="mt-4 flex items-center gap-4">
                {activeSocials.map((s) => (
                  <a
                    key={s.key}
                    href={site.socials[s.key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-gray-400 transition-colors hover:text-primary-default"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
                      {s.path}
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-gray-100 pt-6 text-xs text-gray-400 sm:flex-row">
          <p>© 2026 IOTLAB - @iotlabkiit</p>
          <p>Coded with ❤ and ☕ by IoT Lab</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
