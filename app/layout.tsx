import './globals.css';
import './landing.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://iotkiit.in/'),
  title: 'IoT Lab KIIT',
  description:
    'IoT Lab KIIT — Centre of Excellence. A multidisciplinary lab where software, hardware, design, and storytelling meet to build technology that matters.',
  icons: '/images/logo_small.png',
  openGraph: {
    type: 'website',
    url: 'https://iotkiit.in/',
    title: 'IoT Lab KIIT',
    description:
      'IoT Lab KIIT — Centre of Excellence. A multidisciplinary lab where software, hardware, design, and storytelling meet to build technology that matters.',
    images: '/images/logo_small.png', // or webp
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://iotkiit.in/',
    title: 'IoT Lab KIIT',
    description:
      'IoT Lab KIIT — Centre of Excellence. A multidisciplinary lab where software, hardware, design, and storytelling meet to build technology that matters.',
    images: '/images/logo_small.png', // or webp
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
