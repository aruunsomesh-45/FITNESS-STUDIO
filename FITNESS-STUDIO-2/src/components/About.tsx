import { Users, Trophy, Clock, Zap } from "lucide-react";
import Image from "next/image";
import { GlowCard } from "@/components/ui/spotlight-card";

const stats = [
    { icon: Users, value: "2000+", label: "Members" },
    { icon: Trophy, value: "50+", label: "Expert Trainers" },
    { icon: Clock, value: "24/7", label: "Access" },
    { icon: Zap, value: "100+", label: "Weekly Classes" },
];

export function About() {
    return (
        <section id="about" className="py-20 md:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative p-2 border-2 border-primary/30 rounded-sm">
                        <div className="relative z-10 rounded-sm overflow-hidden border border-white/10 aspect-[4/3]">
                            <Image
                                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop"
                                alt="Gym Interior"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-primary font-bold uppercase tracking-widest mb-4">Our Philosophy</h2>
                        <h3 className="text-4xl md:text-5xl font-bold uppercase mb-6 leading-tight">
                            More Than Just <br /> A Gym
                        </h3>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            At Zoku, we believe fitness is a lifestyle, not a chore. We&apos;ve created a sanctuary for those who demand excellence in every rep. Our state-of-the-art facility combines cutting-edge technology with raw, industrial aesthetics to inspire your best performance.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <GlowCard key={index} glowColor="green" customSize={true} className="p-4 rounded-lg bg-secondary/50 border border-white/5">
                                    <div className="flex flex-col gap-2 relative z-10">
                                        <div className="flex items-center gap-2 text-primary">
                                            <stat.icon className="h-6 w-6" />
                                            <span className="text-3xl font-bold">{stat.value}</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                                    </div>
                                </GlowCard>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
