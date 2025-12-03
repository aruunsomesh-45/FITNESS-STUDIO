"use client";

import { useEffect, useRef } from 'react';

interface ContactHeroProps {
    title: string;
    subtitle?: string;
}

export function ContactHero({ title, subtitle }: ContactHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptLoadedRef = useRef(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const existing = document.getElementById('unicornstudio-script') as HTMLScriptElement | null;
        if (existing) return;

        const script = document.createElement('script');
        script.id = 'unicornstudio-script';
        script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.36/dist/unicornStudio.umd.js';
        script.async = true;
        script.onload = () => {
            scriptLoadedRef.current = true;
            setTimeout(() => {
                const us: any = (window as any).UnicornStudio;
                if (us && typeof us.init === 'function') {
                    us.init();
                }
            }, 300);
        };
        document.head.appendChild(script);

        return () => {
            document.querySelectorAll('a[href*="unicorn"]').forEach(el => el.remove());
        };
    }, []);

    return (
        <section className="relative h-[60vh] md:h-screen min-h-[400px] md:min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Unicorn Studio Animation Container */}
            <div
                ref={containerRef}
                data-us-project="zaX62GkSq0WQT9FkDIjL"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0
                }}
            />

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 md:px-6 text-center">
                <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-4 drop-shadow-2xl">
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
