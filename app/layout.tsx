import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Comfortaa } from "next/font/google";

const comfo = Comfortaa({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={comfo.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
