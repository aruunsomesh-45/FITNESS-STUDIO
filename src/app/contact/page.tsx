import { Navbar } from "@/components/Navbar";
import { ContactHero } from "@/components/ContactHero";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Zoku Fitness",
    description: "Get in touch with Zoku Fitness. Schedule a tour, ask questions, or learn more about our membership plans. We're here to help you start your fitness journey.",
    openGraph: {
        title: "Contact Us | Zoku Fitness",
        description: "Get in touch with Zoku Fitness. Schedule a tour or learn more about our membership plans.",
        url: "https://zokufitness.com/contact",
        type: "website",
        images: [
            {
                url: "/redefining-fitness.jpg",
                width: 1200,
                height: 630,
                alt: "Zoku Fitness - Contact Us",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Us | Zoku Fitness",
        description: "Get in touch with Zoku Fitness. Schedule a tour or learn more about our membership plans.",
        images: ["/redefining-fitness.jpg"],
    },
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <ContactHero
                title="Get In Touch"
                subtitle="We'd Love To Hear From You"
            />
            <Contact />
            <Footer />
        </main>
    );
}
