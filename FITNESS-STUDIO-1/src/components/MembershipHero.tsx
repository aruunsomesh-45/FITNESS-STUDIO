import InfiniteGallery from "@/components/ui/3d-gallery-photography";

const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop', alt: 'Gym Interior' },
    { src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop', alt: 'Weight Training' },
    { src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1469&auto=format&fit=crop', alt: 'Cardio Zone' },
    { src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1375&auto=format&fit=crop', alt: 'Yoga Studio' },
    { src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1469&auto=format&fit=crop', alt: 'Personal Training' },
    { src: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&w=1470&auto=format&fit=crop', alt: 'Crossfit Area' },
    { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop', alt: 'Group Class' },
    { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop', alt: 'Dumbbells' },
];

export function MembershipHero() {
    return (
        <section className="relative h-[60vh] w-full overflow-hidden bg-black">
            <InfiniteGallery
                images={galleryImages}
                speed={1.5}
                zSpacing={3}
                visibleCount={10}
                falloff={{ near: 0.8, far: 14 }}
                className="h-full w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-black/40">
                <div className="text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-4 drop-shadow-lg">
                        Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Path</span>
                    </h1>
                    <p className="text-xl text-white/90 font-light tracking-wide max-w-2xl mx-auto drop-shadow-md">
                        Flexible plans designed for every fitness journey.
                    </p>
                </div>
            </div>
            {/* Gradient Overlay for smooth transition */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
        </section>
    );
}
