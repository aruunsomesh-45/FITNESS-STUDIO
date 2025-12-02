export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center space-y-6">
                {/* Zoku branded loader */}
                <div className="relative">
                    <div className="h-20 w-20 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto" />
                    <div className="absolute inset-0 h-20 w-20 border-4 border-transparent border-r-primary/40 rounded-full animate-spin mx-auto"
                        style={{ animationDirection: 'reverse', animationDuration: '1s' }} />
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-bold uppercase tracking-tighter text-primary">
                        Loading
                    </h2>
                    <p className="text-muted-foreground">
                        Preparing your experience...
                    </p>
                </div>
            </div>
        </div>
    )
}
