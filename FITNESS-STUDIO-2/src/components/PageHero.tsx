import { cn } from "@/lib/utils";
import Image from "next/image";

interface PageHeroProps {
    title: string;
    subtitle?: string;
    image: string;
    className?: string;
}

export function PageHero({ title, subtitle, image, className }: PageHeroProps) {
    return (
        <section className={cn("relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden", className)}>            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" />
                <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority
                />
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 md:px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-4 drop-shadow-2xl">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-xl md:text-2xl text-primary font-light tracking-wide uppercase">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}
