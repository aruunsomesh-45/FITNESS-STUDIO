import { Navbar } from "@/components/Navbar";
import { ClassesHero } from "@/components/ClassesHero";
import { Classes } from "@/components/Classes";
import { BrandCarousel } from "@/components/BrandCarousel";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Classes & Programs | Zoku Fitness",
    description: "Discover our diverse range of fitness classes - HIIT, Power Yoga, Spin Cycle, Boxing Bootcamp, Pilates, CrossFit, and more. Expert-led classes for every fitness level.",
    openGraph: {
        title: "Classes & Programs | Zoku Fitness",
        description: "Discover our diverse range of fitness classes for every fitness level and goal.",
        url: "https://zokufitness.com/classes",
        type: "website",
        images: [
            {
                url: "/redefining-fitness.jpg",
                width: 1200,
                height: 630,
                alt: "Zoku Fitness - Classes",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Classes & Programs | Zoku Fitness",
        description: "Discover our diverse range of fitness classes for every fitness level.",
        images: ["/redefining-fitness.jpg"],
    },
};

export default function ClassesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <ClassesHero />
            <Classes />
            <BrandCarousel />
            <Footer />
        </main>
    );
}
