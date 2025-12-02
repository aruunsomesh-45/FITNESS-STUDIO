"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="text-center space-y-8 max-w-lg">
                <div className="space-y-4">
                    <h1 className="text-9xl font-bold text-primary">404</h1>
                    <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
                        Page Not Found
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Link href="/">
                        <Button
                            size="lg"
                            className="bg-primary text-black hover:bg-white"
                        >
                            <Home className="mr-2 h-5 w-5" />
                            Go Home
                        </Button>
                    </Link>
                    <Button
                        onClick={() => window.history.back()}
                        variant="outline"
                        size="lg"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Go Back
                    </Button>
                </div>

                <div className="pt-8 border-t border-white/10">
                    <p className="text-sm text-muted-foreground">
                        Looking for something specific? Visit our{' '}
                        <Link href="/contact" className="text-primary hover:text-white transition-colors underline">
                            contact page
                        </Link>
                        {' '}to get in touch.
                    </p>
                </div>
            </div>
        </div>
    )
}
