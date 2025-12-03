"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
    const [particles, setParticles] = useState<Array<{ left: number; top: number; delay: number; duration: number; size: number }>>([]);

    useEffect(() => {
        // Generate particles only on client side to avoid hydration mismatch
        const newParticles = Array.from({ length: 30 }, () => ({
            left: Math.random() * 100,
            top: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 10 + Math.random() * 20,
            size: Math.random() * 3 + 1
        }));
        setParticles(newParticles);
    }, []);

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 z-0">
                {/* Base gradient with animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-black to-black animate-gradient" />

                {/* Multiple animated overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-green-900/30 animate-gradient-slow" />
                <div className="absolute inset-0 bg-gradient-to-bl from-green-900/20 via-transparent to-primary/10 animate-gradient-reverse" />

                {/* Diagonal stripes effect - Increased Visibility */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-800/30 via-transparent to-transparent transform -skew-y-12 animate-slide-slow" />
                    <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-primary/20 via-transparent to-transparent transform skew-y-12 animate-slide-reverse" />
                </div>

                {/* Shooting Lines - New Effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-[20%] w-[1px] h-[200px] bg-gradient-to-b from-transparent via-primary/50 to-transparent animate-shooting-line" style={{ animationDelay: '0s' }} />
                    <div className="absolute top-0 left-[50%] w-[1px] h-[200px] bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-shooting-line" style={{ animationDelay: '2s' }} />
                    <div className="absolute top-0 left-[80%] w-[1px] h-[200px] bg-gradient-to-b from-transparent via-primary/40 to-transparent animate-shooting-line" style={{ animationDelay: '4s' }} />
                </div>

                {/* Floating orbs - Enhanced blur and opacity */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-green-900/30 rounded-full blur-[100px] animate-float-1" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] animate-float-2" />

                {/* Animated particles - client-side only */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {particles.map((particle, i) => (
                        <div
                            key={i}
                            className="absolute bg-primary/40 rounded-full animate-pulse-slow"
                            style={{
                                left: `${particle.left}%`,
                                top: `${particle.top}%`,
                                width: `${particle.size}px`,
                                height: `${particle.size}px`,
                                animation: `float-${(i % 4) + 1} ${particle.duration}s ease-in-out infinite`,
                                opacity: 0.4 + Math.random() * 0.5
                            }}
                        />
                    ))}
                </div>

                {/* Grid overlay - More Visible */}
                <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(rgba(204, 255, 0, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(204, 255, 0, 0.3) 1px, transparent 1px)',
                        backgroundSize: '60px 60px'
                    }} />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6 pt-20 pb-20">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-5 py-2 mb-8 hover:bg-white/10 transition-colors cursor-default"
                    >
                        <Star className="h-4 w-4 text-primary fill-primary" />
                        <span className="text-sm font-medium text-white/90 tracking-wide">Trusted by industry leaders</span>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter text-white mb-6 leading-[0.9]"
                    >
                        UNLEASH YOUR
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-green-200 to-primary animate-gradient-text drop-shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                            POTENTIAL
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed"
                    >
                        Experience the next <span className="text-primary font-semibold">evolution</span> of fitness. Premium equipment, expert
                        trainers, and a community that drives you forward.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <Link href="/membership">
                            <Button className="text-lg font-bold">
                                Start Creating
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/about">
                            <Button variant="outline" className="text-lg font-bold">
                                Learn More
                            </Button>
                        </Link>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
                    >
                        <div className="text-center group cursor-default">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">2000+</div>
                            <div className="text-sm text-gray-500 uppercase tracking-widest font-medium">Members</div>
                        </div>
                        <div className="text-center border-x border-white/5 group cursor-default">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">50+</div>
                            <div className="text-sm text-gray-500 uppercase tracking-widest font-medium">Trainers</div>
                        </div>
                        <div className="text-center group cursor-default">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">24/7</div>
                            <div className="text-sm text-gray-500 uppercase tracking-widest font-medium">Access</div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        </section>
    );
}
