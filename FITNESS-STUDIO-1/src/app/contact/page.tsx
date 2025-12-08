import { Navbar } from "@/components/Navbar";
import { ContactHero } from "@/components/ContactHero";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

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
