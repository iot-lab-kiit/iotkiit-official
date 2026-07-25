import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';
import InteractiveTerminal from '@/components/InteractiveTerminal';

export const metadata: Metadata = {
  metadataBase: new URL('https://iotkiit.in/'),
  title: 'IoT Lab KIIT | Centre of Excellence',
  description:
    'IoT Lab, KIIT is a premier research, deep tech innovation, and software development centre of excellence at KIIT University.',
  icons: '/images/logo_small.webp',
  openGraph: {
    type: 'website',
    url: 'https://iotkiit.in/',
    title: 'IoT Lab KIIT | Centre of Excellence',
    description:
      'Premier student-faculty research hub, hackathon incubator, and multidisciplinary deep tech laboratory at KIIT University.',
    images: '/images/logo_small.webp',
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://iotkiit.in/',
    title: 'IoT Lab KIIT | Centre of Excellence',
    description:
      'Premier student-faculty research hub, hackathon incubator, and multidisciplinary deep tech laboratory at KIIT University.',
    images: '/images/logo_small.webp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#030712] text-white antialiased selection:bg-blue-600/40 selection:text-white">
        <div className="noise-overlay" />
        <CustomCursor />
        <InteractiveTerminal />
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
