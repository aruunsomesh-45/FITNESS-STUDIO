import { NextResponse } from "next/server";
import Stripe from "stripe";
import { env } from "@/lib/env";

// Initialize Stripe lazily
const getStripe = () => {
    if (!env.stripe.secretKey) {
        throw new Error("Missing STRIPE_SECRET_KEY");
    }
    return new Stripe(env.stripe.secretKey, {
        apiVersion: "2025-11-17.clover",
    });
};

const PLANS = {
    starter: {
        name: "Starter Plan",
        monthly: 900, // in cents
        yearly: 9000,
    },
    basic: {
        name: "Basic Plan",
        monthly: 2900,
        yearly: 29000,
    },
    team: {
        name: "Team Plan",
        monthly: 9900,
        yearly: 99000,
    },
    enterprise: {
        name: "Enterprise Plan",
        monthly: 19900,
        yearly: 199000,
    },
};

export async function POST(req: Request) {
    try {
        const { planId, interval } = await req.json();

        if (!planId || !interval) {
            return NextResponse.json({ error: "Missing planId or interval" }, { status: 400 });
        }

        const plan = PLANS[planId as keyof typeof PLANS];

        if (!plan) {
            return NextResponse.json({ error: "Invalid plan ID" }, { status: 400 });
        }

        const amount = interval === "year" ? plan.yearly : plan.monthly;
        const intervalCount = 1;

        const stripe = getStripe();
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: plan.name,
                        },
                        unit_amount: amount,
                        recurring: {
                            interval: interval === "year" ? "year" : "month",
                        },
                    },
                    quantity: 1,
                },
            ],
            mode: "subscription",
            success_url: `${env.site.url}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${env.site.url}/membership`,
        });

        return NextResponse.json({ url: session.url });
    } catch (error) {
        console.error("Stripe checkout error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
