// Trainer data structure
export interface Trainer {
    id: string;
    name: string;
    primarySpecialty: string;
    trainingStyle: string;
    experienceLevel: string;
    bookingLinkURL: string;
    image?: string;
    bio?: string;
    specializations: string[];
}

// Sample trainer data (replace with real data)
export const trainers: Trainer[] = [
    {
        id: "1",
        name: "Alex Rivera",
        primarySpecialty: "Weight Loss",
        trainingStyle: "Motivational/High-Energy",
        experienceLevel: "Expert",
        bookingLinkURL: "https://calendly.com/alex-rivera",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop",
        bio: "With 10+ years of experience, Alex specializes in transformative weight loss journeys. His high-energy approach and personalized nutrition plans have helped hundreds achieve their dream physique.",
        specializations: ["Weight Loss", "HIIT", "Nutrition Coaching"],
    },
    {
        id: "2",
        name: "Sarah Chen",
        primarySpecialty: "Strength Training",
        trainingStyle: "Technical/Form-Focused",
        experienceLevel: "Expert",
        bookingLinkURL: "https://calendly.com/sarah-chen",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=400&auto=format&fit=crop",
        bio: "Sarah is a certified strength coach with a background in biomechanics. She focuses on perfect form and progressive overload to build real, lasting strength.",
        specializations: ["Strength Training", "Powerlifting", "Bodybuilding"],
    },
    {
        id: "3",
        name: "Marcus Johnson",
        primarySpecialty: "Rehabilitation",
        trainingStyle: "Holistic/Gentle",
        experienceLevel: "Expert",
        bookingLinkURL: "https://calendly.com/marcus-johnson",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=400&auto=format&fit=crop",
        bio: "Marcus combines physical therapy expertise with personal training to help clients recover from injuries. His patient, holistic approach focuses on mobility and pain-free movement.",
        specializations: ["Rehabilitation", "Injury Recovery", "Mobility"],
    },
    {
        id: "4",
        name: "Emily Watson",
        primarySpecialty: "Yoga & Flexibility",
        trainingStyle: "Holistic/Gentle",
        experienceLevel: "Expert",
        bookingLinkURL: "https://calendly.com/emily-watson",
        image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400&auto=format&fit=crop",
        bio: "Emily is a 500-hour certified yoga instructor who integrates mindfulness with physical practice. She helps clients improve flexibility, reduce stress, and find balance.",
        specializations: ["Yoga", "Flexibility", "Mindfulness", "Stress Relief"],
    },
    {
        id: "5",
        name: "David Kim",
        primarySpecialty: "Athletic Performance",
        trainingStyle: "Motivational/High-Energy",
        experienceLevel: "Expert",
        bookingLinkURL: "https://calendly.com/david-kim",
        image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=400&auto=format&fit=crop",
        bio: "Former collegiate athlete David specializes in explosive power and speed training. His dynamic programs are designed for athletes looking to dominate their sport.",
        specializations: ["Athletic Performance", "Speed Training", "Agility"],
    },
    {
        id: "6",
        name: "Jessica Martinez",
        primarySpecialty: "Functional Fitness",
        trainingStyle: "Technical/Form-Focused",
        experienceLevel: "Intermediate",
        bookingLinkURL: "https://calendly.com/jessica-martinez",
        image: "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=400&auto=format&fit=crop",
        bio: "Jessica brings CrossFit methodology to functional fitness, emphasizing proper technique. Her programs build real-world strength that translates to everyday life.",
        specializations: ["Functional Fitness", "CrossFit", "Core Strength"],
    },
];

// User response types
export interface UserResponses {
    primaryGoal: string;
    trainingStyle: string;
    fitnessLevel: string;
    specialNeeds: string;
}

// Matching logic
export function matchTrainer(responses: UserResponses): Trainer {
    if (trainers.length === 0) {
        throw new Error('No trainers available for matching');
    }
    let bestMatch = trainers[0]; let highestScore = 0;

    trainers.forEach((trainer) => {
        let score = 0;

        // Primary goal matching (highest priority)
        if (trainer.primarySpecialty.toLowerCase().includes(responses.primaryGoal.toLowerCase()) ||
            trainer.specializations.some(s => s.toLowerCase().includes(responses.primaryGoal.toLowerCase()))) {
            score += 50;
        }

        // Training style matching
        if (trainer.trainingStyle.toLowerCase().includes(responses.trainingStyle.toLowerCase())) {
            score += 30;
        }

        // Special needs matching (rehabilitation, injuries)
        if (responses.specialNeeds.toLowerCase().includes('injury') ||
            responses.specialNeeds.toLowerCase().includes('rehab') ||
            responses.specialNeeds.toLowerCase().includes('pain')) {
            if (trainer.primarySpecialty === 'Rehabilitation' ||
                trainer.trainingStyle === 'Holistic/Gentle') {
                score += 40;
            }
        }

        // Experience level bonus
        if (trainer.experienceLevel === 'Expert') {
            score += 10;
        }

        if (score > highestScore) {
            highestScore = score;
            bestMatch = trainer;
        }
    });

    return bestMatch;
}
