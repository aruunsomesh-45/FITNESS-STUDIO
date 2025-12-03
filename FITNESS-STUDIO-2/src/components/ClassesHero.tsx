import React from "react";
import { FullScreenScrollFX } from "@/components/ui/full-screen-scroll-fx";

const sections = [
    {
        leftLabel: "Strength",
        title: "Powerlifting",
        rightLabel: "Intensity",
        background: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop",
    },
    {
        leftLabel: "Endurance",
        title: "Cardio",
        rightLabel: "Stamina",
        background: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1469&auto=format&fit=crop",
    },
    {
        leftLabel: "Flexibility",
        title: "Yoga",
        rightLabel: "Balance",
        background: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1375&auto=format&fit=crop",
    },
    {
        leftLabel: "Agility",
        title: "Crossfit",
        rightLabel: "Speed",
        background: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1470&auto=format&fit=crop",
    },
];

export function ClassesHero() {
    return (
        <div className="relative w-full">
            <FullScreenScrollFX
                sections={sections}
                header={
                    <div className="text-center pt-8">
                        <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter text-white drop-shadow-lg">
                            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Classes</span>
                        </h1>
                        <p className="text-lg text-white/80 mt-2">Find your perfect workout</p>
                    </div>
                }
                footer={<div className="text-white/50 text-sm pb-4">Scroll to explore</div>}
                showProgress
                durations={{ change: 0.8, snap: 900 }}
                colors={{
                    text: "#ededed",
                    overlay: "rgba(0,0,0,0.5)",
                    pageBg: "#000000",
                    stageBg: "#000000"
                }}
            />
        </div>
    );
}
