import { Check } from "lucide-react";

const plans = [
    {
        name: "Drop-In",
        price: "$25",
        period: "/class",
        description: "Perfect for travelers or commitment-phobes.",
        features: ["Access to any class", "Towel service", "Locker access"],
        featured: false
    },
    {
        name: "Unlimited",
        price: "$149",
        period: "/month",
        description: "The ultimate Zoku experience without limits.",
        features: ["Unlimited classes", "Priority booking", "Guest passes (2/mo)", "Sauna access", "Merch discount"],
        featured: true
    },
    {
        name: "Annual",
        price: "$129",
        period: "/month",
        description: "Commit to your best self and save.",
        features: ["All Unlimited perks", "Free personal training (1/mo)", "Nutrition consultation", "Exclusive workshops"],
        featured: false
    }
];

export function Membership() {
    return (
        <section id="membership" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-primary font-bold uppercase tracking-widest mb-4">Membership</h2>
                    <h3 className="text-4xl md:text-6xl font-bold uppercase leading-none mb-6">
                        Join The <br /> Elite
                    </h3>
                    <p className="text-muted-foreground max-w-xl mx-auto text-lg">
                        Choose the plan that fits your lifestyle. No hidden fees, just pure fitness.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-sm border transition-all duration-300 hover:-translate-y-2 ${plan.featured
                                    ? "bg-white/5 border-primary shadow-2xl shadow-primary/10"
                                    : "bg-transparent border-white/10 hover:border-white/20"
                                }`}
                        >
                            {plan.featured && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 uppercase tracking-widest rounded-full">
                                    Most Popular
                                </div>
                            )}

                            <h4 className="text-2xl font-bold uppercase mb-2">{plan.name}</h4>
                            <p className="text-muted-foreground text-sm mb-6 h-10">{plan.description}</p>

                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-5xl font-bold text-white">{plan.price}</span>
                                <span className="text-muted-foreground">{plan.period}</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm">
                                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                                        <span className="text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 font-bold uppercase tracking-wider transition-all ${plan.featured
                                        ? "bg-primary text-primary-foreground hover:bg-white"
                                        : "border border-white/20 hover:bg-white hover:text-black"
                                    }`}
                            >
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
