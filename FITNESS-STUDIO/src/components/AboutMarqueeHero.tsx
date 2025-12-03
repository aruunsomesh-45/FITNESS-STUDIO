"use client";

import { AnimatedMarqueeHero } from "@/components/ui/hero-3";

const FITNESS_IMAGES = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1469&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1375&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1469&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop",
];

export function AboutMarqueeHero() {
    return (
        <AnimatedMarqueeHero
            tagline="Welcome to Zoku"
            title={
                <>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">Redefining</span>{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">Movement</span>
                </>
            }
            description="Join a community dedicated to pushing boundaries. Experience world-class training, state-of-the-art facilities, and an atmosphere that ignites your potential."
            ctaText="Start Your Journey"
            ctaHref="/membership"
            images={FITNESS_IMAGES}
        />
    );
}
