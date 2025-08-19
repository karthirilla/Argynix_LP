
import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agriculture Technology Solutions",
  description: "Empowering farmers with data-driven Agri-Tech solutions. Argynix provides automated irrigation, crop health monitoring, and farm management platforms to increase yield and promote sustainability.",
};

const features = [
  "Soil and Environmental Sensing",
  "Automated Irrigation and Fertigation Systems",
  "Crop Health Monitoring with Drones and AI",
  "Yield Prediction and Optimization",
  "Livestock Monitoring and Management",
  "Farm Management Software Platforms",
]

export default function AgriTechPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Agriculture Tech</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We empower farmers with data-driven technology to increase yields, reduce waste, and promote sustainable practices.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in-left duration-700">
              <Image src="/assets/our-services/agriculture-tech.png" alt="Agri-Tech" width={600} height={400} data-ai-hint="smart farming" className="rounded-lg shadow-lg grayscale hover:grayscale-0 focus:grayscale-0 transition-all duration-300" />
            </div>
            <div className="animate-in fade-in-right duration-700">
              <h2 className="text-3xl font-bold tracking-tight mb-4">The Digital Green Revolution</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our Agri-Tech solutions bring precision farming to your fingertips. We deploy sensors, drones, and AI to give you a real-time understanding of your fields. From automated irrigation that saves water to AI that detects crop disease early, we provide the tools you need to make smarter decisions and grow your business sustainably.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Modernize Your Farm</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Agri-Tech Solutions</h2>
            <p className="mt-2 text-lg text-muted-foreground">How we're helping to build the farm of the future.</p>
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
