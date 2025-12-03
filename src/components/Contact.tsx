"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, CheckCircle2, AlertCircle, Loader2, Calendar } from "lucide-react";
import { env } from "@/lib/env";

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
}

export function Contact() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
    const [statusMessage, setStatusMessage] = useState("");

    // Email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        // Validate name
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        } else if (formData.name.trim().length > 100) {
            newErrors.name = "Name must be less than 100 characters";
        }

        // Validate email
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email.trim())) {
            newErrors.email = "Please enter a valid email address";
        } else if (formData.email.trim().length > 255) {
            newErrors.email = "Email must be less than 255 characters";
        }

        // Validate subject
        if (!formData.subject.trim()) {
            newErrors.subject = "Subject is required";
        }

        // Validate message
        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        } else if (formData.message.trim().length > 1000) {
            newErrors.message = "Message must be less than 1000 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Reset status
        setSubmitStatus("idle");
        setStatusMessage("");

        // Validate form
        if (!validateForm()) {
            setSubmitStatus("error");
            setStatusMessage("Please fix the errors in the form");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to send message");
            }

            // Success
            setSubmitStatus("success");
            setStatusMessage("Thank you! Your message has been sent successfully.");

            // Reset form
            setFormData({
                name: "",
                email: "",
                subject: "General Inquiry",
                message: "",
            });
            setErrors({});

            // Hide success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus("idle");
                setStatusMessage("");
            }, 5000);

        } catch (error) {
            console.error("Error submitting form:", error);
            setSubmitStatus("error");
            setStatusMessage(error instanceof Error ? error.message : "Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value,
        }));

        // Clear error for this field when user starts typing
        if (errors[id as keyof FormErrors]) {
            setErrors(prev => ({
                ...prev,
                [id]: undefined,
            }));
        }
    };

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
                                    <p className="text-muted-foreground">{env.contact.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-secondary p-3 rounded-sm">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold uppercase mb-1">Phone</h4>
                                    <p className="text-muted-foreground">{env.contact.phone}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-secondary p-3 rounded-sm">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold uppercase mb-1">Email</h4>
                                    <p className="text-muted-foreground">{env.contact.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-secondary p-8 md:p-10 rounded-sm border border-white/5">
                        {/* Status Message */}
                        {submitStatus !== "idle" && (
                            <div
                                className={`mb-6 p-4 rounded-sm border flex items-start gap-3 ${submitStatus === "success"
                                    ? "bg-green-500/10 border-green-500/20 text-green-500"
                                    : "bg-red-500/10 border-red-500/20 text-red-500"
                                    }`}
                            >
                                {submitStatus === "success" ? (
                                    <CheckCircle2 className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                ) : (
                                    <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                                )}
                                <p className="text-sm">{statusMessage}</p>
                            </div>
                        )}

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className={`w-full bg-background border p-3 rounded-sm focus:outline-none transition-colors ${errors.name
                                            ? "border-red-500 focus:border-red-500"
                                            : "border-white/10 focus:border-primary"
                                            }`}
                                        placeholder="John Doe"
                                        disabled={isSubmitting}
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                                    )}
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`w-full bg-background border p-3 rounded-sm focus:outline-none transition-colors ${errors.email
                                            ? "border-red-500 focus:border-red-500"
                                            : "border-white/10 focus:border-primary"
                                            }`}
                                        placeholder="john@example.com"
                                        disabled={isSubmitting}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                                    Subject <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    className={`w-full bg-background border p-3 rounded-sm focus:outline-none transition-colors ${errors.subject
                                        ? "border-red-500 focus:border-red-500 text-red-500"
                                        : "border-white/10 focus:border-primary text-muted-foreground"
                                        }`}
                                    disabled={isSubmitting}
                                >
                                    <option>General Inquiry</option>
                                    <option>Membership</option>
                                    <option>Personal Training</option>
                                    <option>Careers</option>
                                </select>
                                {errors.subject && (
                                    <p className="text-red-500 text-xs mt-1">{errors.subject}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className={`w-full bg-background border p-3 rounded-sm focus:outline-none transition-colors resize-none ${errors.message
                                        ? "border-red-500 focus:border-red-500"
                                        : "border-white/10 focus:border-primary"
                                        }`}
                                    placeholder="How can we help you?"
                                    disabled={isSubmitting}
                                />
                                <div className="flex justify-between items-center">
                                    {errors.message && (
                                        <p className="text-red-500 text-xs">{errors.message}</p>
                                    )}
                                    <p className="text-xs text-muted-foreground ml-auto">
                                        {formData.message.length}/1000
                                    </p>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-primary-foreground py-4 font-bold uppercase tracking-wider hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="h-5 w-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>

                            <a
                                href={env.calendly.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full bg-transparent border border-white/10 text-white py-4 font-bold uppercase tracking-wider hover:bg-white/5 transition-colors flex items-center justify-center gap-2 rounded-sm"
                            >
                                <Calendar className="h-5 w-5" />
                                Schedule a Meeting
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
