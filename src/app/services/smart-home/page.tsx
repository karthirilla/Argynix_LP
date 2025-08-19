
import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Home Automation Systems",
  description: "Create an intelligent living space with Argynix. We design and install smart home systems for seamless control over lighting, climate, security, and entertainment.",
};

const features = [
  "Centralized Lighting and Climate Control",
  "Smart Security and Surveillance Systems",
  "Voice Control Integration (Alexa, Google Assistant)",
  "Energy Consumption Monitoring",
  "Custom Automation Scenes and Routines",
  "Multi-Room Audio and Entertainment",
]

export default function SmartHomePage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Smart Home Systems</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We create intelligent living spaces with seamless control over lighting, security, and entertainment.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in-left duration-700">
              <Image src="/assets/our-services/smart-home-systems.png" alt="Smart Home" width={600} height={400} data-ai-hint="modern living room" className="rounded-lg shadow-lg grayscale hover:grayscale-0 focus:grayscale-0 transition-all duration-300" />
            </div>
            <div className="animate-in fade-in-right duration-700">
              <h2 className="text-3xl font-bold tracking-tight mb-4">The Future of Living</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Experience the ultimate in comfort, convenience, and security with our smart home solutions. We design and install integrated systems that let you control your entire home from a single app or with your voice. From automated lighting that matches your mood to security that gives you peace of mind, we make your home smarter.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Design Your Smart Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Smart Home Features</h2>
            <p className="mt-2 text-lg text-muted-foreground">What we can integrate into your intelligent home.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 animate-in fade-in-up" style={{ animationDelay: `${index * 150}ms`}}>
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
