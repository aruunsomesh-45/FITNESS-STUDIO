import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Mail, Phone, Dumbbell, Users, Clock } from "lucide-react";
import { HorizonHero } from "@/components/ui/horizon-hero-section";
import { GlowCard } from "@/components/ui/spotlight-card";
import { env } from "@/lib/env";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <HorizonHero />

      {/* About Preview Section */}
      <section className="py-20 md:py-32 bg-black relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white">
                Redefining <span className="text-primary">Fitness</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Zoku, we believe fitness is more than just a workout—it&apos;s a lifestyle.
                Our state-of-the-art facility combines cutting-edge technology with
                expert coaching to help you unlock your full potential.
              </p>
              <Link href="/about">
                <Button variant="outline" size="lg" className="mt-4">
                  About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <GlowCard glowColor="purple" customSize={true} className="flex-1 w-full h-[400px] rounded-2xl border border-white/10 p-0 overflow-hidden">
              <div className="w-full h-full relative group">
                <Image
                  src="/redefining-fitness.jpg"
                  alt="Redefining Fitness"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Classes Preview Section */}
      <section className="py-20 md:py-32 bg-secondary/30 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white mb-4">
                Our <span className="text-primary">Classes</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl">
                From high-intensity interval training to calming yoga flows,
                we have a class for every goal and fitness level.
              </p>
            </div>
            <Link href="/classes">
              <Button variant="ghost" className="hidden md:inline-flex">
                View Schedule <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "HIIT Burn", icon: Dumbbell, desc: "High intensity interval training to torch calories." },
              { name: "Power Yoga", icon: Users, desc: "Strength and flexibility combined in a flow." },
              { name: "Spin Cycle", icon: Clock, desc: "Endurance cycling with high-energy beats." }
            ].map((item, i) => (
              <GlowCard key={i} glowColor="blue" customSize={true} className="p-0 rounded-2xl border border-white/10 overflow-hidden">
                <div className="group p-8 h-full bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm relative">
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-black transition-colors">
                      <item.icon className="h-6 w-6 text-primary group-hover:text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                    <p className="text-muted-foreground mb-6">{item.desc}</p>
                    <Link href="/classes" className="text-sm font-bold uppercase tracking-wider text-primary hover:text-white transition-colors flex items-center">
                      Learn More <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/classes">
              <Button variant="outline" className="w-full">
                View Schedule <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Membership Preview Section */}
      <section className="py-20 md:py-32 bg-black relative">
        <div className="container mx-auto px-4 md:px-6">
          <GlowCard glowColor="green" customSize={true} className="p-0 rounded-3xl border border-white/10 overflow-hidden">
            <div className="p-8 md:p-16 relative bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm">
              <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white">
                    Join the <span className="text-primary">Movement</span>
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    Unlock exclusive access to our premium facilities, expert trainers,
                    and a community that supports your journey.
                  </p>
                  <ul className="space-y-3 mt-4">
                    {["Unlimited Class Access", "State-of-the-art Equipment", "Free Personal Training Session", "Sauna & Recovery Zone"].map((item, i) => (
                      <li key={i} className="flex items-center text-white/80">
                        <Check className="h-5 w-5 text-primary mr-3" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-none">
                  <Link href="/membership">
                    <Button size="lg" className="bg-primary text-black hover:bg-white text-lg px-8 py-6">
                      View Plans <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="py-20 bg-secondary/30 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white mb-6">
            Ready to <span className="text-primary">Start?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Visit us today or get in touch to schedule your tour.
            Your transformation begins here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us <Mail className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <div className="flex items-center gap-2 text-white/80">
              <Phone className="h-5 w-5 text-primary" />
              <span className="text-lg font-medium">{env.contact.phone}</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
