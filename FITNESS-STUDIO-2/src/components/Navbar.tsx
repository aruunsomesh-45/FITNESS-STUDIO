"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Classes", href: "/classes" },
    { name: "Membership", href: "/membership" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-background/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative h-12 w-12 group-hover:scale-110 transition-transform">
                        <Image
                            src="/zoku-logo.jpg"
                            alt="Zoku Fitness Logo"
                            fill
                            sizes="48px"
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="text-2xl font-bold tracking-tighter uppercase">Zoku</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium uppercase tracking-widest hover:text-primary transition-colors relative",
                                pathname === item.href ? "text-primary" : "text-foreground"
                            )}
                        >
                            {item.name}
                            {pathname === item.href && (
                                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary animate-in fade-in zoom-in" />
                            )}
                        </Link>
                    ))}
                    <Link href="/membership" className="bg-primary text-primary-foreground px-6 py-2 font-bold uppercase tracking-wider hover:bg-white transition-colors skew-x-[-10deg]">
                        <span className="block skew-x-[10deg]">Join Now</span>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                </button>            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "text-lg font-bold uppercase tracking-widest hover:text-primary transition-colors py-2 border-b border-white/5",
                                pathname === item.href ? "text-primary" : "text-foreground"
                            )}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link href="/membership" className="bg-primary text-primary-foreground w-full py-4 font-bold uppercase tracking-wider mt-2 text-center block" onClick={() => setIsOpen(false)}>
                        Join Now
                    </Link>
                </div>
            )}
        </nav>
    );
}
