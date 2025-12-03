import React from 'react';
import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery';

const testimonials: GalleryItem[] = [
    {
        common: 'Sarah Jenkins',
        binomial: 'Lost 15kg in 6 months',
        photo: {
            url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=80',
            text: 'Portrait of Sarah',
            pos: 'center',
            by: 'Zoku Member'
        }
    },
    {
        common: 'Mike Ross',
        binomial: 'Marathon Ready',
        photo: {
            url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&auto=format&fit=crop&q=80',
            text: 'Portrait of Mike',
            pos: 'center',
            by: 'Zoku Member'
        }
    },
    {
        common: 'Emily Chen',
        binomial: 'Strength & Conditioning',
        photo: {
            url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=900&auto=format&fit=crop&q=80',
            text: 'Portrait of Emily',
            pos: 'center',
            by: 'Zoku Member'
        }
    },
    {
        common: 'David Kim',
        binomial: 'Bodybuilding Champion',
        photo: {
            url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=900&auto=format&fit=crop&q=80',
            text: 'Portrait of David',
            pos: 'center',
            by: 'Zoku Member'
        }
    },
    {
        common: 'Lisa Patel',
        binomial: 'Yoga Instructor',
        photo: {
            url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&auto=format&fit=crop&q=80',
            text: 'Portrait of Lisa',
            pos: 'center',
            by: 'Zoku Member'
        }
    },
    {
        common: 'James Wilson',
        binomial: 'Crossfit Athlete',
        photo: {
            url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=80',
            text: 'Portrait of James',
            pos: 'center',
            by: 'Zoku Member'
        }
    },
    {
        common: 'Anna Kowalski',
        binomial: 'Post-natal Recovery',
        photo: {
            url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=900&auto=format&fit=crop&q=80',
            text: 'Portrait of Anna',
            pos: 'center',
            by: 'Zoku Member'
        }
    },
    {
        common: 'Tom Baker',
        binomial: 'Powerlifting',
        photo: {
            url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=900&auto=format&fit=crop&q=80',
            text: 'Portrait of Tom',
            pos: 'center',
            by: 'Zoku Member'
        }
    }
];

export function TestimonialsGallery() {
    return (
        <section className="w-full bg-black text-foreground relative overflow-hidden py-20">
            <div className="container mx-auto px-4 text-center mb-10 relative z-10">
                <h2 className="text-primary font-bold uppercase tracking-widest mb-4">Success Stories</h2>
                <h3 className="text-4xl md:text-5xl font-bold uppercase text-white">
                    Member <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">Transformations</span>
                </h3>
                <p className="text-muted-foreground mt-4">Scroll to explore our community's journey</p>
            </div>

            <div className="h-[600px] w-full relative">
                <CircularGallery items={testimonials} radius={400} />
            </div>
        </section>
    );
}
