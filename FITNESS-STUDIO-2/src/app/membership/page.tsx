"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingModule } from "@/components/ui/pricing-module";
import { TestimonialsGallery } from "@/components/TestimonialsGallery";
import { Dumbbell, Zap, Crown, Calendar } from "lucide-react";

import { MembershipHero } from "@/components/MembershipHero";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { ErrorBoundary } from "@/components/ErrorBoundary";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/zoku-fitness";

export default function MembershipPage() {
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setRootElement(document.body);
    }, []);
    const plans = [
        {
            id: "drop-in",
            name: "Drop-In",
            description: "Perfect for travelers or commitment-phobes",
            icon: <Calendar className="w-8 h-8 text-primary" />,
            priceMonthly: 25,
            priceYearly: 250,
            users: "Per class access",
            features: [
                { label: "Access to any class", included: true },
                { label: "Towel service", included: true },
                { label: "Locker access", included: true },
                { label: "Sauna access", included: false },
                { label: "Guest passes", included: false },
            ],
        },
        {
            id: "unlimited",
            name: "Unlimited",
            description: "The ultimate Zoku experience without limits",
            icon: <Zap className="w-8 h-8 text-primary" />,
            priceMonthly: 149,
            priceYearly: 1490,
            users: "Unlimited access",
            features: [
                { label: "Unlimited classes", included: true },
                { label: "Priority booking", included: true },
                { label: "Guest passes (2/month)", included: true },
                { label: "Sauna access", included: true },
                { label: "Merch discount", included: true },
            ],
            recommended: true,
        },
        {
            id: "annual",
            name: "Annual",
            description: "Commit to your best self and save",
            icon: <Crown className="w-8 h-8 text-primary" />,
            priceMonthly: 129,
            priceYearly: 1290,
            users: "All-inclusive access",
            features: [
                { label: "All Unlimited perks", included: true },
                { label: "Free personal training (1/month)", included: true },
                { label: "Nutrition consultation", included: true },
                { label: "Exclusive workshops", included: true },
                { label: "Priority equipment access", included: true },
            ],
        },
        {
            id: "premium",
            name: "Premium",
            description: "Ultimate experience with personal training",
            icon: <Dumbbell className="w-8 h-8 text-primary" />,
            priceMonthly: 249,
            priceYearly: 2490,
            users: "VIP access",
            features: [
                { label: "All Annual perks", included: true },
                { label: "Unlimited personal training", included: true },
                { label: "Custom meal plans", included: true },
                { label: "24/7 facility access", included: true },
                { label: "Dedicated trainer", included: true },
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <MembershipHero />
            <div className="pt-10">
                <PricingModule
                    title="Membership Plans"
                    subtitle="Choose the plan that fits your fitness journey. No hidden fees, just pure results."
                    annualBillingLabel="Pay annually and save"
                    buttonLabel="Join Now"
                    plans={plans}
                    defaultAnnual={false}
                    onPlanSelect={() => setIsCalendlyOpen(true)}
                />
                <TestimonialsGallery />
            </div>
            <Footer />

            {rootElement && (
                <ErrorBoundary
                    fallback={
                        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                            <div className="bg-background p-8 rounded-sm border border-white/10 max-w-md">
                                <h2 className="text-2xl font-bold mb-4">Unable to load scheduling</h2>
                                <p className="text-muted-foreground mb-6">
                                    Please try refreshing the page or contact us directly.
                                </p>
                                <a
                                    href={CALENDLY_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary text-primary-foreground px-6 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-white transition-colors inline-block"
                                >
                                    Open in New Tab
                                </a>
                            </div>
                        </div>
                    }
                >
                    <PopupModal
                        url={CALENDLY_URL}
                        onModalClose={() => setIsCalendlyOpen(false)}
                        open={isCalendlyOpen}
                        rootElement={rootElement}
                    />
                </ErrorBoundary>
            )}
        </main>
    );
}
