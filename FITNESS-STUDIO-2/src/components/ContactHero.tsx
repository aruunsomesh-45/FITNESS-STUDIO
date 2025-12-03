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
        // Only run on client side
        if (typeof window === 'undefined') return;

        const loadUnicornStudio = async () => {
            // Check if script is already loaded
            if (scriptLoadedRef.current) return;

            try {
                // Create and load the script
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.36/dist/unicornStudio.umd.js';
                script.async = true;

                script.onload = () => {
                    if (process.env.NODE_ENV === 'development') {
                        console.log('Unicorn Studio script loaded successfully');
                    }
                    scriptLoadedRef.current = true;
                    // Initialize after a short delay to ensure DOM is ready
                    setTimeout(() => {
                        if ((window as any).UnicornStudio) {
                            try {
                                (window as any).UnicornStudio.init();
                                if (process.env.NODE_ENV === 'development') {
                                    console.log('Unicorn Studio initialized');
                                }
                            } catch (error) {
                                // Only log errors in development to avoid exposing issues
                                if (process.env.NODE_ENV === 'development') {
                                    console.error('Error initializing Unicorn Studio:', error);
                                }
                            }
                        }
                    }, 500);
                };

                script.onerror = (error) => {
                    // Always log script loading errors as they indicate real issues
                    if (process.env.NODE_ENV === 'development') {
                        console.error('Failed to load Unicorn Studio script:', error);
                    }
                    scriptLoadedRef.current = false;
                };

                document.head.appendChild(script);
            } catch (error) {
                // Only log in development
                if (process.env.NODE_ENV === 'development') {
                    console.error('Error loading Unicorn Studio:', error);
                }
            }
        };

        loadUnicornStudio();

        // Cleanup function
        return () => {
            // Remove watermark if present
            const watermarks = document.querySelectorAll('a[href*="unicorn"]');
            watermarks.forEach(el => el.remove());
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
