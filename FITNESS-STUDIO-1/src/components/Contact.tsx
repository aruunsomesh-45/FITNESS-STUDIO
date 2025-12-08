"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { InlineWidget } from "react-calendly";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || "Something went wrong");

            setStatus("success");
            setFormData({ name: "", email: "", subject: "General Inquiry", message: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error: any) {
            setStatus("error");
            setErrorMessage(error.message);
        }
    };

    return (
        <section id="contact" className="py-20 md:py-32 bg-background relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column: Contact Info & Calendly */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-primary font-bold uppercase tracking-widest mb-4">Contact Us</h2>
                            <h3 className="text-4xl md:text-5xl font-bold uppercase mb-8 leading-tight">
                                Ready To <br /> Level Up?
                            </h3>
                            <p className="text-muted-foreground text-lg mb-8">
                                Have questions? We're here to help. Reach out to us or drop by the studio for a tour.
                            </p>

                            <div className="space-y-6">
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

                        {/* Calendly Widget */}
                        <div className="bg-secondary/50 p-4 rounded-sm border border-white/5">
                            <h4 className="text-xl font-bold uppercase mb-4 text-center">Schedule a Visit</h4>
                            <div className="h-[400px] overflow-hidden">
                                <InlineWidget
                                    url="https://calendly.com/zoku-fitness"
                                    styles={{ height: '100%', width: '100%' }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-secondary p-6 md:p-8 rounded-sm border border-white/5 h-fit">
                        <h3 className="text-2xl font-bold uppercase mb-6">Send us a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-background border border-white/10 rounded-sm p-3 focus:border-primary focus:outline-none transition-colors text-white placeholder:text-white/20"
                                    placeholder="Your full name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-background border border-white/10 rounded-sm p-3 focus:border-primary focus:outline-none transition-colors text-white placeholder:text-white/20"
                                    placeholder="john@example.com"
                                />
                            </div>

                            {/* Subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-muted-foreground">Subject *</label>
                                <select
                                    id="subject"
                                    required
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                    className="w-full bg-background border border-white/10 rounded-sm p-3 focus:border-primary focus:outline-none transition-colors text-white"
                                >
                                    <option value="General Inquiry">General Inquiry</option>
                                    <option value="Membership">Membership</option>
                                    <option value="Personal Training">Personal Training</option>
                                    <option value="Careers">Careers</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">Message *</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-background border border-white/10 rounded-sm p-3 focus:border-primary focus:outline-none transition-colors resize-none text-white placeholder:text-white/20"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            {/* Status Messages */}
                            {status === "error" && (
                                <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-sm flex items-center gap-2">
                                    <AlertCircle className="h-5 w-5" />
                                    <span>{errorMessage}</span>
                                </div>
                            )}

                            {status === "success" && (
                                <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-4 rounded-sm flex items-center gap-2">
                                    <CheckCircle className="h-5 w-5" />
                                    <span>Message sent successfully! We'll get back to you soon.</span>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === "loading" || status === "success"}
                                className="w-full bg-primary text-primary-foreground font-bold uppercase tracking-wider py-4 rounded-sm hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
