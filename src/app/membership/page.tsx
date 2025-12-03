
"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingModule } from "@/components/ui/pricing-module";
import { TestimonialsGallery } from "@/components/TestimonialsGallery";
import { Layers, Monitor, Users, Building2 } from "lucide-react";

import { MembershipHero } from "@/components/MembershipHero";

import { useState, useEffect } from "react";
import { PopupModal } from "react-calendly";
import { env } from "@/lib/env";

export default function MembershipPage() {
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
    const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setRootElement(document.body);
    }, []);
    const plans = [
        {
            id: "starter",
            name: "Starter",
            description: "For individuals and small projects",
            icon: <Layers className="w-8 h-8 text-primary" />,
            priceMonthly: 9,
            priceYearly: 90,
            users: "Up to 3 users",
            features: [
                { label: "Basic analytics", included: true },
                { label: "Community access", included: true },
                { label: "Priority support", included: false },
            ],
        }, {
            id: "basic",
            name: "Basic",
            description: "For small teams getting started",
            icon: <Monitor className="w-8 h-8 text-primary" />,
            priceMonthly: 29,
            priceYearly: 290,
            users: "Up to 10 users",
            features: [
                { label: "Advanced analytics", included: true },
                { label: "Priority support", included: true },
                { label: "Team collaboration tools", included: false },
            ],
        },
        {
            id: "team",
            name: "Team",
            description: "For growing startups and agencies",
            icon: <Users className="w-8 h-8 text-primary" />,
            priceMonthly: 99,
            priceYearly: 990,
            users: "Up to 50 users",
            features: [
                { label: "Dedicated success manager", included: true },
                { label: "Custom integrations", included: true },
                { label: "AI-powered insights", included: true },
            ],
            recommended: true,
        },
        {
            id: "enterprise",
            name: "Enterprise",
            description: "For large organizations with custom needs",
            icon: <Building2 className="w-8 h-8 text-primary" />,
            priceMonthly: 199,
            priceYearly: 1990,
            users: "Unlimited users",
            features: [
                { label: "24/7 priority support", included: true },
                { label: "Custom SLAs", included: true },
                { label: "Private cloud hosting", included: true },
            ],
        },
    ];

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />
            <MembershipHero />
            <div className="pt-10">
                <PricingModule
                    title="Simple, Transparent Pricing"
                    subtitle="Switch between monthly and yearly billing anytime."
                    annualBillingLabel="Pay annually and save 20%"
                    buttonLabel="Start Now"
                    plans={plans}
                    defaultAnnual={false}
                    onPlanSelect={() => setIsCalendlyOpen(true)}
                />
                <TestimonialsGallery />
            </div>
            <Footer />

            {rootElement && (
                <PopupModal
                    url={env.calendly.url}
                    onModalClose={() => setIsCalendlyOpen(false)}
                    open={isCalendlyOpen}
                    rootElement={rootElement}
                />
            )}
        </main>
    );
}
