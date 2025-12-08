"use client";

import { Scene } from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cpu, ShieldCheck, Layers, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
    {
        icon: Cpu,
        title: "High Performance",
        description: "Train with equipment engineered for elite athletes.",
    },
    {
        icon: ShieldCheck,
        title: "Expert Guidance",
        description: "Certified trainers dedicated to your safety and progress.",
    },
    {
        icon: Layers,
        title: "Holistic Approach",
        description: "Integrating strength, mobility, and recovery.",
    },
    {
        icon: Zap,
        title: "Dynamic Energy",
        description: "An atmosphere that fuels your drive to succeed.",
    },
];

export function AboutHero() {
    return (
        <div className="relative min-h-[90vh] w-full bg-black text-white flex flex-col items-center justify-center p-8 overflow-hidden">
            {/* 3D Scene Background */}
            <Scene />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black pointer-events-none z-0" />

            <div className="w-full max-w-6xl space-y-12 relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">
                    <Badge variant="secondary" className="backdrop-blur-md bg-white/10 border border-white/20 text-primary hover:bg-white/20 px-4 py-2 rounded-full">
                        ✨ Redefining Fitness
                    </Badge>

                    <div className="space-y-6 flex items-center justify-center flex-col">
                        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter max-w-4xl uppercase">
                            Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Power</span> Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-primary">Precision</span>
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed">
                            Zoku is more than a gym. It's a sanctuary for those who refuse to settle.
                            Experience the perfect fusion of aesthetics, performance, and community.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center pt-4">
                            <Link href="/membership">
                                <Button size="lg" className="text-base px-8 py-6 rounded-2xl">
                                    Join the Movement <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/classes">
                                <Button variant="outline" size="lg" className="text-base px-8 py-6 rounded-2xl">
                                    Explore Classes
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto pt-12">
                    {features.map((feature, idx) => (
                        <div
                            key={idx}
                            className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300 group"
                        >
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-black transition-colors">
                                <feature.icon size={24} className="text-primary group-hover:text-black" />
                            </div>
                            <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                            <p className="text-sm text-neutral-400 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
