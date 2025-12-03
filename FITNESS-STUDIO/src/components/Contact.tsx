"use client";

import { MapPin, Phone, Mail } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 md:py-32 bg-background relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-primary font-bold uppercase tracking-widest mb-4">Contact Us</h2>
                        <h3 className="text-4xl md:text-5xl font-bold uppercase mb-8 leading-tight">
                            Ready To <br /> Level Up?
                        </h3>
                        <p className="text-muted-foreground text-lg mb-12">
                            Have questions? We&apos;re here to help. Reach out to us or drop by the studio for a tour.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-secondary p-3 rounded-sm">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold uppercase mb-1">Location</h4>
                                    <p className="text-muted-foreground">123 Fitness Blvd, Metro City, ST 12345</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-secondary p-3 rounded-sm">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold uppercase mb-1">Phone</h4>
                                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-secondary p-3 rounded-sm">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold uppercase mb-1">Email</h4>
                                    <p className="text-muted-foreground">hello@zokufitness.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-secondary p-8 md:p-10 rounded-sm border border-white/5">
                        <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); /* Add submission logic */ }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        className="w-full bg-background border border-white/10 p-3 rounded-sm focus:border-primary focus:outline-none transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="w-full bg-background border border-white/10 p-3 rounded-sm focus:border-primary focus:outline-none transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full bg-background border border-white/10 p-3 rounded-sm focus:border-primary focus:outline-none transition-colors text-muted-foreground"
                                >
                                    <option>General Inquiry</option>
                                    <option>Membership</option>
                                    <option>Personal Training</option>
                                    <option>Careers</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full bg-background border border-white/10 p-3 rounded-sm focus:border-primary focus:outline-none transition-colors resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <button type="submit" className="w-full bg-primary text-primary-foreground py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors">
                                Send Message
                            </button>
                        </form>                    </div>
                </div>
            </div>
        </section>
    );
}
