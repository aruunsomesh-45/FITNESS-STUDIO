"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Dumbbell, Heart, Zap, Target, Flame, Activity } from "lucide-react";
import { GlowCard } from "@/components/ui/spotlight-card";

const workoutTypes = [
    {
        icon: Dumbbell,
        title: "Strength Training",
        description: "Build muscle and increase power with our comprehensive strength programs.",
        color: "blue",
    },
    {
        icon: Heart,
        title: "Cardio",
        description: "Boost your endurance and heart health with high-energy cardio sessions.",
        color: "red",
    },
    {
        icon: Zap,
        title: "HIIT",
        description: "High-Intensity Interval Training for maximum calorie burn in minimal time.",
        color: "orange",
    },
    {
        icon: Target,
        title: "Functional Fitness",
        description: "Train movements that improve your everyday life and athletic performance.",
        color: "green",
    },
    {
        icon: Flame,
        title: "CrossFit",
        description: "Varied functional movements performed at high intensity for total fitness.",
        color: "purple",
    },
    {
        icon: Activity,
        title: "Yoga & Mobility",
        description: "Enhance flexibility, balance, and mental clarity through mindful movement.",
        color: "blue",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring" as const,
            stiffness: 100,
            damping: 12,
        },
    },
};

export function WorkoutTypes() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-20 md:py-32 bg-background relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-primary font-bold uppercase tracking-widest mb-4">
                        Our Programs
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-bold uppercase mb-6 leading-tight">
                        Workout <span className="text-primary">Types</span>
                    </h3>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Discover the perfect training style for your goals. From strength to flexibility,
                        we offer diverse programs designed to challenge and transform you.
                    </p>
                </motion.div>

                {/* Workout Cards Grid */}
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {workoutTypes.map((workout, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <GlowCard
                                glowColor={workout.color as any}
                                customSize={true}
                                className="p-0 rounded-2xl border border-white/10 overflow-hidden h-full"
                            >
                                <div className="group p-8 h-full bg-gradient-to-br from-white/5 via-white/2 to-transparent backdrop-blur-sm relative flex flex-col">
                                    {/* Hover effect overlay */}
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: "spring" as const, stiffness: 300 }}
                                            className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-all duration-300"
                                        >
                                            <workout.icon className="h-8 w-8 text-primary group-hover:text-black transition-colors" />
                                        </motion.div>

                                        {/* Title */}
                                        <h4 className="text-2xl font-bold text-white mb-3 uppercase tracking-tight">
                                            {workout.title}
                                        </h4>

                                        {/* Description */}
                                        <p className="text-muted-foreground leading-relaxed flex-grow">
                                            {workout.description}
                                        </p>

                                        {/* Decorative line */}
                                        <div className="mt-6 h-1 w-12 bg-primary/50 group-hover:w-full transition-all duration-500" />
                                    </div>
                                </div>
                            </GlowCard>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <p className="text-muted-foreground text-lg mb-6">
                        Not sure which program is right for you?
                    </p>
                    <Link href="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary text-black px-8 py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors rounded-sm"
                        >
                            Get a Free Consultation
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
