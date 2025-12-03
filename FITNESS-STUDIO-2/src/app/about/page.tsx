import { Navbar } from "@/components/Navbar";
import { AboutMarqueeHero } from "@/components/AboutMarqueeHero";
import { About } from "@/components/About";
import { WorkoutTypes } from "@/components/WorkoutTypes";
import { Footer } from "@/components/Footer";
import { Trainers } from "@/components/Trainers";
import { Achievements } from "@/components/Achievements";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Zoku Fitness",
    description: "Learn about Zoku Fitness - where vision meets reality. Meet our expert trainers, discover our philosophy, and join a community redefining fitness through technology and premium experiences.",
    openGraph: {
        title: "About Us | Zoku Fitness",
        description: "Learn about Zoku Fitness - where vision meets reality. Meet our expert trainers and discover our philosophy.",
        url: "https://zokufitness.com/about",
        type: "website",
        images: [
            {
                url: "/redefining-fitness.jpg",
                width: 1200,
                height: 630,
                alt: "Zoku Fitness - About Us",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | Zoku Fitness",
        description: "Learn about Zoku Fitness - where vision meets reality.",
        images: ["/redefining-fitness.jpg"],
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <AboutMarqueeHero />
            <About />
            <Achievements />
            <Trainers />
            <WorkoutTypes />
            <Footer />
        </main>
    );
}
