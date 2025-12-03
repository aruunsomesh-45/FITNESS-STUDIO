import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { GlowCard } from "@/components/ui/spotlight-card";

const classes = [
    {
        title: "High Intensity",
        description: "Push your limits with our signature HIIT sessions designed to burn fat and build endurance. Experience explosive movements, metabolic conditioning, and interval training that delivers maximum results in minimum time. Perfect for those who want to torch calories and boost cardiovascular fitness.",
        image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=1925&auto=format&fit=crop",
        time: "45 Min"
    },
    {
        title: "Power Yoga",
        description: "Find balance and strength through dynamic flows that challenge both body and mind. This athletic approach to yoga combines traditional poses with strength-building sequences, breathwork, and mindfulness. Build lean muscle, improve flexibility, and cultivate mental clarity in every session.",
        image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2069&auto=format&fit=crop",
        time: "60 Min"
    },
    {
        title: "Strength Lab",
        description: "Master the big lifts with expert coaching in our dedicated strength training zone. Learn proper form for squats, deadlifts, bench press, and Olympic lifts. Our progressive programming focuses on building raw strength, muscle mass, and power through compound movements and periodized training.",
        image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&w=2070&auto=format&fit=crop",
        time: "50 Min"
    },
    {
        title: "Spin Cycle",
        description: "Immersive rhythm-based cycling experiences that will get your heart racing. Ride to the beat with motivating music, dynamic lighting, and expert instructors who push you to new limits. From hill climbs to sprints, each class is a full-body cardio party that burns serious calories.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
        time: "45 Min"
    },
    {
        title: "Boxing Bootcamp",
        description: "Channel your inner fighter with high-energy boxing drills and conditioning work. Learn proper punching technique, footwork, and defensive moves while getting an incredible full-body workout. Combine bag work, mitt drills, and bodyweight exercises for a knockout fitness experience.",
        image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070&auto=format&fit=crop",
        time: "50 Min"
    },
    {
        title: "Pilates Core",
        description: "Sculpt and strengthen your core with controlled movements and precise technique. This low-impact, high-intensity class focuses on building a strong foundation through core stability, proper alignment, and mindful movement. Improve posture, flexibility, and develop long, lean muscles.",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
        time: "55 Min"
    },
    {
        title: "CrossFit WOD",
        description: "Varied functional movements at high intensity. Scale to your level, compete with yourself. Each Workout of the Day combines weightlifting, gymnastics, and metabolic conditioning to build overall fitness. Develop strength, speed, endurance, and mental toughness in a supportive community environment.",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
        time: "60 Min"
    },
    {
        title: "Recovery Flow",
        description: "Gentle stretching and mobility work to help your body recover and prevent injury. This restorative class uses foam rolling, dynamic stretching, and breathwork to release tension, improve range of motion, and accelerate recovery. Essential for athletes and anyone looking to move better and feel better.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2070&auto=format&fit=crop",
        time: "40 Min"
    }
];

export function Classes() {
    return (
        <section id="classes" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold uppercase tracking-widest mb-4">Programs</h2>
                    <h3 className="text-4xl md:text-6xl font-bold uppercase leading-tight mb-6">
                        Find Your Flow
                    </h3>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        From high-energy cardio to mindful movement, we have a class for every goal and mood.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {classes.map((item, index) => (
                        <GlowCard
                            key={index}
                            glowColor="green"
                            customSize={true}
                            className="p-0 h-[400px] rounded-sm overflow-hidden"
                        >
                            <div className="group relative h-full w-full cursor-pointer">
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    priority={false}
                                />

                                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 uppercase tracking-wider">
                                                {item.time}
                                            </span>
                                            <ArrowUpRight className="text-white h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                        <h4 className="text-2xl font-bold uppercase text-white mb-2">{item.title}</h4>
                                        <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
