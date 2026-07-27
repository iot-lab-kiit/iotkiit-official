"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Cpu } from "lucide-react";

const navLinks = [
 { href: "/", label: "Home" },
 { href: "/projects", label: "Projects" },
 { href: "/team", label: "Team" },
 { href: "/alumni", label: "Alumni" },
 { href: "/gallery", label: "Gallery" },
 { href: "/achievements", label: "Achievements" },
 { href: "/events", label: "Events" },
 { href: "/contact", label: "Contact" },
];

export default function Navbar() {
 const [scrolled, setScrolled] = useState(false);
 const [mobileOpen, setMobileOpen] = useState(false);
 const pathname = usePathname();

 useEffect(() => {
 const handleScroll = () => {
 setScrolled(window.scrollY > 20);
 };
 window.addEventListener("scroll", handleScroll);
 return () => window.removeEventListener("scroll", handleScroll);
 }, []);

 return (
 <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300">
 <div
 className={`mx-auto max-w-7xl transition-all duration-300 ${
 scrolled
 ? "bg-white border border-brand-blue shadow-brutal px-6 py-2.5"
 : "bg-white border border-brand-blue px-6 py-3"
 }`}
 >
 <div className="flex items-center justify-between">
 {/* Brand Logo */}
 <Link href="/" className="group flex items-center gap-3">
 <div className="relative flex h-10 w-10 items-center justify-center bg-brand-blue p-0.5 transition-transform duration-300 group-hover:scale-105">
 <div className="flex h-full w-full items-center justify-center bg-white">
 <Image
 src="/images/logo_small.webp"
 alt="IoT Lab KIIT"
 width={28}
 height={28}
 className="object-contain"
 />
 </div>
 </div>
 <span className="font-extrabold tracking-tight text-brand-blue text-base leading-none">
 IoT LAB <span className="text-brand-blue font-mono text-xs ml-1">KIIT</span>
 </span>
 </Link>

 {/* Desktop Navigation Links */}
 <nav className="hidden lg:flex items-center gap-1 bg-brand-blue/10 p-1.5 border border-brand-blue ">
 {navLinks.map((link) => {
 const isActive = pathname === link.href;
 return (
 <Link
 key={link.href}
 href={link.href}
 className={`relative px-4 py-1.5 text-xs font-mono tracking-wide transition-all duration-300 ${
 isActive
 ? "bg-brand-blue text-white"
 : "text-brand-blue hover:text-white hover:bg-brand-blue"
 }`}
 >
 {link.label}
 </Link>
 );
 })}
 </nav>

 {/* Mobile Menu Toggle Button */}
 <button
 onClick={() => setMobileOpen(!mobileOpen)}
 className="flex lg:hidden items-center justify-center h-10 w-10 border border-brand-blue bg-white text-brand-blue hover:bg-brand-blue hover:text-white focus:outline-none"
 aria-label="Toggle Navigation Menu"
 >
 {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
 </button>
 </div>
 </div>

 {/* Mobile Glass Menu Drawer */}
 {mobileOpen && (
 <div className="lg:hidden fixed inset-x-4 top-20 z-50 border border-brand-blue bg-white p-6 shadow-brutal animate-fade-up">
 <div className="flex flex-col gap-3">
 {navLinks.map((link) => {
 const isActive = pathname === link.href;
 return (
 <Link
 key={link.href}
 href={link.href}
 onClick={() => setMobileOpen(false)}
 className={`flex items-center justify-between px-5 py-3 text-sm font-mono transition-all duration-300 ${
 isActive
 ? "bg-brand-blue text-white"
 : "text-brand-blue hover:bg-brand-blue hover:text-white"
 }`}
 >
 <span>{link.label}</span>
 {isActive && <Cpu className="h-4 w-4 text-white" />}
 </Link>
 );
 })}
 </div>
 </div>
 )}
 </header>
 );
}
