
import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  "Custom PCB Design and Layout",
  "Component Selection and Sourcing",
  "Firmware Development (C/C++, MicroPython)",
  "Power Management Solutions",
  "Wireless Communication (Wi-Fi, Bluetooth, LoRa)",
  "Prototyping and Small-Batch Manufacturing",
]

export default function ElectronicsRdPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Electronics R&D</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            From concept to production, we provide expert electronics design, prototyping, and development services.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in-left duration-700">
              <Image src="/assets/our-services/electronics-rd.png" alt="Electronics R&D" width={600} height={400} data-ai-hint="circuit board" className="rounded-lg shadow-lg grayscale hover:grayscale-0 focus:grayscale-0 transition-all duration-300" />
            </div>
            <div className="animate-in fade-in-right duration-700">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Bringing Ideas to Life</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our electronics R&D team can turn your product idea into a reality. We specialize in designing custom PCBs, writing efficient firmware, and integrating the latest wireless technologies. Whether you need a new sensor node or a complex embedded system, we have the expertise to deliver a production-ready solution.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Develop Your Product</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our R&D Process</h2>
            <p className="mt-2 text-lg text-muted-foreground">Key stages in our electronics development lifecycle.</p>
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
