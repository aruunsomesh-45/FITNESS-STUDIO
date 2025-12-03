'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log error to error reporting service
        console.error('Application error:', error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="text-center space-y-6 max-w-md">
                <div className="space-y-2">
                    <h1 className="text-6xl font-bold text-primary">Oops!</h1>
                    <h2 className="text-2xl font-bold text-white uppercase tracking-tight">
                        Something Went Wrong
                    </h2>
                </div>

                <p className="text-muted-foreground text-lg">
                    {error.message || 'An unexpected error occurred. Our team has been notified.'}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        onClick={reset}
                        size="lg"
                        className="bg-primary text-black hover:bg-white"
                    >
                        Try Again
                    </Button>
                    <Button
                        onClick={() => window.location.href = '/'}
                        variant="outline"
                        size="lg"
                    >
                        Go Home
                    </Button>
                </div>

                {process.env.NODE_ENV === 'development' && error.digest && (
                    <p className="text-xs text-muted-foreground mt-4">
                        Error ID: {error.digest}
                    </p>
                )}
            </div>
        </div>
    )
}
