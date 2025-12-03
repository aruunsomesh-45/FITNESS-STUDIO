"use client";

import { useState } from "react";
import Image from "next/image";
import { Instagram, Twitter, Linkedin, X } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

const trainers = [
    {
        name: "Alex Rivera",
        role: "Head Coach",
        specialty: "Strength & Conditioning",
        image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1887&auto=format&fit=crop",
        socials: { instagram: "#", twitter: "#" },
        story: "Alex is a former Olympic weightlifter who found his true calling in coaching. After a career-ending injury, he dedicated his life to understanding the mechanics of human movement. He believes in building strength from the ground up, focusing on form, discipline, and mental resilience. His training philosophy is simple: 'Strength is a skill, and like any skill, it must be practiced with intention.'"
    },
    {
        name: "Sarah Chen",
        role: "Yoga Instructor",
        specialty: "Mobility & Flow",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1887&auto=format&fit=crop",
        socials: { instagram: "#", linkedin: "#" },
        story: "With over a decade of experience in Ashtanga and Vinyasa yoga, Sarah helps students find balance and inner peace through movement. She traveled to India to study under traditional masters, bringing back a wealth of knowledge that she blends with modern mobility techniques. Her classes are designed to challenge the body while calming the mind."
    },
    {
        name: "Marcus Johnson",
        role: "HIIT Specialist",
        specialty: "Endurance & Power",
        image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1887&auto=format&fit=crop",
        socials: { instagram: "#", twitter: "#" },
        story: "A former collegiate track athlete, Marcus specializes in explosive power and endurance. Known for his high-energy sessions and infectious enthusiasm, he pushes his clients to break past their perceived limits. Marcus believes that the only bad workout is the one that didn't happen, and he's here to ensure every session counts."
    },
    {
        name: "Elena Rodriguez",
        role: "Wellness Coach",
        specialty: "Nutrition & Recovery",
        image: "/elena-rodriguez.jpg",
        socials: { instagram: "#", linkedin: "#" },
        story: "Elena is a certified nutritionist and wellness coach who focuses on a holistic approach to health. She understands that fitness is just one piece of the puzzle. By combining personalized nutrition plans with recovery strategies, she helps clients achieve sustainable, long-term health. Her motto: 'Nourish your body, fuel your soul.'"
    }
];

export function Trainers() {
    const [selectedTrainer, setSelectedTrainer] = useState<typeof trainers[0] | null>(null);

    return (
        <section className="py-20 bg-black relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold uppercase tracking-widest mb-4">Expert Guidance</h2>
                    <h3 className="text-4xl md:text-5xl font-bold uppercase text-white">Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Trainers</span></h3>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        Our elite team of certified professionals is dedicated to guiding you through every step of your fitness journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {trainers.map((trainer, index) => (
                        <div key={index} onClick={() => setSelectedTrainer(trainer)} className="cursor-pointer">
                            <GlowCard glowColor="blue" customSize={true} className="p-0 rounded-xl overflow-hidden border border-white/10 group h-full">
                                <div className="relative h-[400px] w-full">
                                    <Image
                                        src={trainer.image}
                                        alt={trainer.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

                                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <p className="text-primary text-sm font-bold uppercase tracking-wider mb-1">{trainer.role}</p>
                                        <h4 className="text-2xl font-bold text-white mb-2">{trainer.name}</h4>
                                        <p className="text-gray-400 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">{trainer.specialty}</p>

                                        <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                            {Object.entries(trainer.socials).map(([platform, link], i) => (
                                                <a key={i} href={link} onClick={(e) => e.stopPropagation()} className="text-white hover:text-primary transition-colors">
                                                    {platform === 'instagram' && <Instagram className="h-5 w-5" />}
                                                    {platform === 'twitter' && <Twitter className="h-5 w-5" />}
                                                    {platform === 'linkedin' && <Linkedin className="h-5 w-5" />}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </GlowCard>
                        </div>
                    ))}
                </div>
            </div>

            <Dialog open={!!selectedTrainer} onOpenChange={(open) => !open && setSelectedTrainer(null)}>
                <DialogContent className="bg-zinc-900 border-white/10 text-white sm:max-w-[600px] p-0 overflow-hidden">
                    {selectedTrainer && (
                        <div className="flex flex-col md:flex-row h-full">
                            <div className="relative w-full md:w-2/5 h-64 md:h-auto">
                                <Image
                                    src={selectedTrainer.image}
                                    alt={selectedTrainer.name}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:hidden" />
                            </div>
                            <div className="p-6 md:w-3/5 flex flex-col justify-center">
                                <DialogHeader>
                                    <p className="text-primary text-sm font-bold uppercase tracking-wider mb-1">{selectedTrainer.role}</p>
                                    <DialogTitle className="text-3xl font-bold text-white mb-2">{selectedTrainer.name}</DialogTitle>
                                    <DialogDescription className="text-gray-400 text-sm mb-4">
                                        {selectedTrainer.specialty}
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="space-y-4">
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        {selectedTrainer.story}
                                    </p>
                                    <div className="flex gap-4 pt-2">
                                        {Object.entries(selectedTrainer.socials).map(([platform, link], i) => (
                                            <a key={i} href={link} className="text-white hover:text-primary transition-colors">
                                                {platform === 'instagram' && <Instagram className="h-5 w-5" />}
                                                {platform === 'twitter' && <Twitter className="h-5 w-5" />}
                                                {platform === 'linkedin' && <Linkedin className="h-5 w-5" />}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
}
