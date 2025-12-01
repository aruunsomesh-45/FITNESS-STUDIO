import { Navbar } from "@/components/Navbar";
import { AboutMarqueeHero } from "@/components/AboutMarqueeHero";
import { About } from "@/components/About";
import { WorkoutTypes } from "@/components/WorkoutTypes";
import { Footer } from "@/components/Footer";
import { Trainers } from "@/components/Trainers";
import { Achievements } from "@/components/Achievements";

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
