"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface AnimatedMarqueeHeroProps {
    tagline: string;
    title: React.ReactNode;
    description: string;
    ctaText: string;
    ctaHref?: string;
    images: string[];
    className?: string;
}

export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
    tagline,
    title,
    description,
    ctaText,
    ctaHref = "#",
    images,
    className,
}) => {
    const FADE_IN_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    } as const;

    const duplicatedImages = [...images, ...images];

    return (
        <section
            className={cn(
                "relative w-full h-screen overflow-hidden bg-black flex flex-col items-center justify-center text-center px-4",
                className
            )}
        >
            <div className="z-10 flex flex-col items-center max-w-4xl mx-auto mt-[-10vh]">
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={FADE_IN_ANIMATION_VARIANTS}
                    className="mb-6 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm"
                >
                    {tagline}
                </motion.div>

                <motion.h1
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6 uppercase"
                >
                    {typeof title === 'string' ? (
                        title.split(" ").map((word, i) => (
                            <motion.span
                                key={i}
                                variants={FADE_IN_ANIMATION_VARIANTS}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word}
                            </motion.span>
                        ))
                    ) : (
                        title
                    )}
                </motion.h1>

                <motion.p
                    initial="hidden"
                    animate="show"
                    variants={FADE_IN_ANIMATION_VARIANTS}
                    transition={{ delay: 0.5 }}
                    className="mt-2 max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed"
                >
                    {description}
                </motion.p>

                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={FADE_IN_ANIMATION_VARIANTS}
                    transition={{ delay: 0.6 }}
                    className="mt-10"
                >
                    <Button
                        size="lg"
                        className="text-lg px-8 py-6 rounded-2xl"
                        asChild
                    >
                        <a href={ctaHref}>{ctaText}</a>
                    </Button>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[40vh] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
                <motion.div
                    className="flex gap-6"
                    animate={{
                        x: ["-100%", "0%"],
                        transition: {
                            ease: "linear",
                            duration: 40,
                            repeat: Infinity,
                        },
                    }}
                >
                    {duplicatedImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative aspect-[3/4] h-64 md:h-80 flex-shrink-0"
                            style={{
                                rotate: `${(index % 2 === 0 ? -2 : 2)}deg`,
                            }}
                        >
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover rounded-2xl shadow-2xl border border-white/10"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black pointer-events-none z-0" />
        </section>
    );
};
