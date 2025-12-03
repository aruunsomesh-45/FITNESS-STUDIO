import { Navbar } from "@/components/Navbar";
import { ClassesHero } from "@/components/ClassesHero";
import { Classes } from "@/components/Classes";
import { BrandCarousel } from "@/components/BrandCarousel";
import { Footer } from "@/components/Footer";

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
