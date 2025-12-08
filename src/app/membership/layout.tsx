import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Membership Plans | Zoku Fitness",
    description: "Choose the perfect membership plan for your fitness journey. From Drop-In classes to Premium VIP access with unlimited personal training. No hidden fees, just pure results.",
    openGraph: {
        title: "Membership Plans | Zoku Fitness",
        description: "Choose the perfect membership plan for your fitness journey. From Drop-In to Premium VIP access.",
        url: "https://zokufitness.com/membership",
        type: "website",
        images: [
            {
                url: "/redefining-fitness.jpg",
                width: 1200,
                height: 630,
                alt: "Zoku Fitness - Membership Plans",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Membership Plans | Zoku Fitness",
        description: "Choose the perfect membership plan for your fitness journey.",
        images: ["/redefining-fitness.jpg"],
    },
};

export default function MembershipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

