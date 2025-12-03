import { Trophy, Award, Star, TrendingUp } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const achievements = [
    {
        icon: Trophy,
        title: "Best Luxury Gym",
        year: "2024",
        description: "Awarded by Fitness Excellence Awards for outstanding facility and service."
    },
    {
        icon: TrendingUp,
        title: "10,000+ Transformations",
        year: "Since 2020",
        description: "Helping members achieve their personal fitness goals with proven results."
    },
    {
        icon: Award,
        title: "Top Rated Facility",
        year: "5-Star",
        description: "Consistently rated #1 for cleanliness, equipment quality, and atmosphere."
    },
    {
        icon: Star,
        title: "Community Choice",
        year: "2023",
        description: "Voted the most welcoming and supportive fitness community in the city."
    }
];

export function Achievements() {
    return (
        <section className="py-20 bg-secondary/30 border-y border-white/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="mb-16 text-center">
                    <div className="mb-6">
                        <h2 className="text-primary font-bold uppercase tracking-widest mb-4">Our Legacy</h2>
                        <h3 className="text-4xl md:text-5xl font-bold uppercase text-white">
                            Awards & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Achievements</span>
                        </h3>
                    </div>
                    <div className="max-w-md mx-auto text-muted-foreground">
                        <p>We don't just set standards; we redefine them. Our commitment to excellence has been recognized globally.</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {achievements.map((item, index) => (
                        <GlowCard key={index} glowColor="purple" customSize={true} className="group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent border border-white/10">
                            <div className="bg-black/80 backdrop-blur-sm rounded-xl p-8 h-full flex flex-col items-center text-center group-hover:bg-black/60 transition-colors duration-300">
                                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                                    <item.icon className="h-8 w-8" />
                                </div>                                <span className="text-primary font-bold text-sm uppercase tracking-wider mb-2">{item.year}</span>
                                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
