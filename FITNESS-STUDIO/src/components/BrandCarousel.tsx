"use client";

import { cn } from "@/lib/utils";

const brands = [
    "MuscleBlaze",
    "Nutrabay",
    "Optimum Nutrition (ON)",
    "5XL Nutrition",
    "MyProtein",
    "Dymatize",
    "BigMuscles Nutrition",
    "Himalaya Wellness"
];

export function BrandCarousel() {
    return (
        <section className="py-12 bg-black border-y border-white/10 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Trusted Partners</p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-16">
                    {/* First set of brands */}
                    {brands.map((brand, index) => (
                        <span
                            key={index}
                            className="text-2xl md:text-4xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20 hover:from-primary hover:to-primary/50 transition-all duration-300 cursor-default"
                        >
                            {brand}
                        </span>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {brands.map((brand, index) => (
                        <span
                            key={`duplicate-${index}`}
                            className="text-2xl md:text-4xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20 hover:from-primary hover:to-primary/50 transition-all duration-300 cursor-default"
                        >
                            {brand}
                        </span>
                    ))}
                    {/* Triplicate set for wide screens */}
                    {brands.map((brand, index) => (
                        <span
                            key={`triplicate-${index}`}
                            className="text-2xl md:text-4xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20 hover:from-primary hover:to-primary/50 transition-all duration-300 cursor-default"
                        >
                            {brand}
                        </span>
                    ))}
                </div>

            </div>
        </section>
    );
}
