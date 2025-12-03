import Link from "next/link";
import { Dumbbell, Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-secondary py-12 md:py-20 border-t border-white/10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-primary p-1 rounded-sm">
                                <Dumbbell className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <span className="text-2xl font-bold tracking-tighter uppercase">Zoku</span>
                        </Link>
                        <p className="text-muted-foreground max-w-xs">
                            Redefining fitness through community, technology, and premium experiences.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold uppercase mb-6 text-primary">Explore</h4>
                        <ul className="space-y-3 text-muted-foreground">
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/classes" className="hover:text-white transition-colors">Classes</Link></li>
                            <li><Link href="/membership" className="hover:text-white transition-colors">Membership</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold uppercase mb-6 text-primary">Support</h4>
                        <ul className="space-y-3 text-muted-foreground">
                            <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold uppercase mb-6 text-primary">Connect</h4>
                        <div className="flex gap-4 mb-6">
                            <Link href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="bg-white/5 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                                <Facebook className="h-5 w-5" />
                            </Link>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Subscribe to our newsletter for updates.
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Zoku Fitness. All rights reserved.</p>
                    <p>Designed for Excellence.</p>
                </div>
            </div>
        </footer>
    );
}
