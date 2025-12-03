"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ArrowRight, CheckCircle, User } from "lucide-react";
import { matchTrainer, type UserResponses, type Trainer } from "@/lib/trainerData";

type Step = "greeting" | "goal" | "style" | "level" | "needs" | "result";

const questions = {
    goal: {
        title: "What's your #1 fitness goal?",
        options: [
            "Weight Loss",
            "Build Muscle",
            "Strength Training",
            "Athletic Performance",
            "Flexibility & Mobility",
            "Rehabilitation",
        ],
    },
    style: {
        title: "What coaching style do you prefer?",
        options: [
            "Motivational/High-Energy",
            "Technical/Form-Focused",
            "Holistic/Gentle",
        ],
    },
    level: {
        title: "What's your current fitness level?",
        options: ["Beginner", "Intermediate", "Advanced"],
    },
    needs: {
        title: "Any injuries or special health considerations?",
        type: "text",
        placeholder: "e.g., Lower back pain, knee injury, or type 'None'",
    },
};

export function ConsultationChatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState<Step>("greeting");
    const [responses, setResponses] = useState<UserResponses>({
        primaryGoal: "",
        trainingStyle: "",
        fitnessLevel: "",
        specialNeeds: "",
    });
    const [recommendedTrainer, setRecommendedTrainer] = useState<Trainer | null>(null);
    const [textInput, setTextInput] = useState("");

    const handleOptionSelect = (field: keyof UserResponses, value: string) => {
        setResponses({ ...responses, [field]: value });

        // Auto-advance to next step
        setTimeout(() => {
            if (step === "goal") setStep("style");
            else if (step === "style") setStep("level");
            else if (step === "level") setStep("needs");
        }, 300);
    };

    const handleTextSubmit = () => {
        if (!textInput.trim()) return;

        setResponses({ ...responses, specialNeeds: textInput });
        setTextInput("");

        // Calculate match and show result
        const match = matchTrainer({ ...responses, specialNeeds: textInput });
        setRecommendedTrainer(match);
        setStep("result");
    };

    const resetChat = () => {
        setStep("greeting");
        setResponses({
            primaryGoal: "",
            trainingStyle: "",
            fitnessLevel: "",
            specialNeeds: "",
        });
        setRecommendedTrainer(null);
        setTextInput("");
    };

    return (
        <>
            {/* Floating Chat Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 bg-primary text-black p-4 rounded-full shadow-2xl hover:shadow-primary/50 transition-shadow"
                    >
                        <MessageCircle className="h-6 w-6" />
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 100, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 100, scale: 0.8 }}
                        className="fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-3rem)] bg-secondary border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary to-primary/80 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <User className="h-5 w-5 text-black" />
                                <h3 className="font-bold text-black">Find Your Perfect Trainer</h3>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-black hover:bg-black/10 p-1 rounded transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Chat Content */}
                        <div className="h-[500px] overflow-y-auto p-6 space-y-4">
                            <AnimatePresence mode="wait">
                                {/* Greeting */}
                                {step === "greeting" && (
                                    <motion.div
                                        key="greeting"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="space-y-4"
                                    >
                                        <div className="bg-white/5 p-4 rounded-lg">
                                            <p className="text-white mb-4">
                                                👋 Hi! I'm here to help you find the perfect personal trainer for your fitness journey.
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                I'll ask you a few quick questions to match you with the best trainer for your needs.
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => setStep("goal")}
                                            className="w-full bg-primary text-black py-3 px-4 rounded-lg font-semibold hover:bg-white transition-colors flex items-center justify-center gap-2"
                                        >
                                            Get Started <ArrowRight className="h-4 w-4" />
                                        </button>
                                    </motion.div>
                                )}

                                {/* Goal Question */}
                                {step === "goal" && (
                                    <motion.div
                                        key="goal"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="space-y-3"
                                    >
                                        <p className="text-white font-semibold">{questions.goal.title}</p>
                                        {questions.goal.options.map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => handleOptionSelect("primaryGoal", option)}
                                                className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary transition-all"
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}

                                {/* Style Question */}
                                {step === "style" && (
                                    <motion.div
                                        key="style"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="space-y-3"
                                    >
                                        <div className="flex items-center gap-2 text-primary text-sm mb-2">
                                            <CheckCircle className="h-4 w-4" />
                                            <span>Goal: {responses.primaryGoal}</span>
                                        </div>
                                        <p className="text-white font-semibold">{questions.style.title}</p>
                                        {questions.style.options.map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => handleOptionSelect("trainingStyle", option)}
                                                className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary transition-all"
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}

                                {/* Level Question */}
                                {step === "level" && (
                                    <motion.div
                                        key="level"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="space-y-3"
                                    >
                                        <div className="space-y-1 mb-2">
                                            <div className="flex items-center gap-2 text-primary text-sm">
                                                <CheckCircle className="h-4 w-4" />
                                                <span>Goal: {responses.primaryGoal}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-primary text-sm">
                                                <CheckCircle className="h-4 w-4" />
                                                <span>Style: {responses.trainingStyle}</span>
                                            </div>
                                        </div>
                                        <p className="text-white font-semibold">{questions.level.title}</p>
                                        {questions.level.options.map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => handleOptionSelect("fitnessLevel", option)}
                                                className="w-full text-left p-3 rounded-lg bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary transition-all"
                                            >
                                                {option}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}

                                {/* Special Needs Question */}
                                {step === "needs" && (
                                    <motion.div
                                        key="needs"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="space-y-3"
                                    >
                                        <p className="text-white font-semibold">{questions.needs.title}</p>
                                        <textarea
                                            value={textInput}
                                            onChange={(e) => setTextInput(e.target.value)}
                                            placeholder={questions.needs.placeholder}
                                            className="w-full p-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:outline-none text-white resize-none"
                                            rows={3}
                                        />
                                        <button
                                            onClick={handleTextSubmit}
                                            disabled={!textInput.trim()}
                                            className="w-full bg-primary text-black py-3 px-4 rounded-lg font-semibold hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                        >
                                            Find My Trainer <ArrowRight className="h-4 w-4" />
                                        </button>
                                    </motion.div>
                                )}

                                {/* Result */}
                                {step === "result" && recommendedTrainer && (
                                    <motion.div
                                        key="result"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        className="space-y-4"
                                    >
                                        {/* Success Message */}
                                        <div className="bg-gradient-to-br from-primary/20 to-primary/5 p-4 rounded-lg border border-primary/30 text-center">
                                            <p className="text-primary font-semibold text-lg">
                                                🎯 Perfect Match Found!
                                            </p>
                                        </div>

                                        {/* Trainer Profile Card */}
                                        <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                                            {/* Trainer Photo */}
                                            {recommendedTrainer.image && (
                                                <div className="relative h-48 w-full overflow-hidden">
                                                    <img
                                                        src={recommendedTrainer.image}
                                                        alt={recommendedTrainer.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                                    <div className="absolute bottom-4 left-4">
                                                        <h4 className="text-2xl font-bold text-white">
                                                            {recommendedTrainer.name}
                                                        </h4>
                                                        <p className="text-primary text-sm font-semibold">
                                                            {recommendedTrainer.experienceLevel} Trainer
                                                        </p>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Trainer Details */}
                                            <div className="p-4 space-y-3">
                                                {/* Specialty & Style */}
                                                <div className="flex items-center gap-2 text-sm">
                                                    <span className="text-muted-foreground">Specialty:</span>
                                                    <span className="text-white font-semibold">
                                                        {recommendedTrainer.primarySpecialty}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2 text-sm">
                                                    <span className="text-muted-foreground">Style:</span>
                                                    <span className="text-white font-semibold">
                                                        {recommendedTrainer.trainingStyle}
                                                    </span>
                                                </div>

                                                {/* Bio */}
                                                {recommendedTrainer.bio && (
                                                    <div className="pt-2">
                                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                                            {recommendedTrainer.bio}
                                                        </p>
                                                    </div>
                                                )}

                                                {/* Specializations Tags */}
                                                <div className="flex flex-wrap gap-2 pt-2">
                                                    {recommendedTrainer.specializations.map((spec) => (
                                                        <span
                                                            key={spec}
                                                            className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30"
                                                        >
                                                            {spec}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* CTA Buttons */}
                                        <a
                                            href={recommendedTrainer.bookingLinkURL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full bg-primary text-black py-3 px-4 rounded-lg font-semibold hover:bg-white transition-colors text-center"
                                        >
                                            Book Free Consult with {recommendedTrainer.name}
                                        </a>

                                        <button
                                            onClick={resetChat}
                                            className="w-full text-primary hover:text-white text-sm transition-colors"
                                        >
                                            ← Start over & see other trainers
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
