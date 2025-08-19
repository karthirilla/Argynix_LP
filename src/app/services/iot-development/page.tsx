
import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  "Custom Hardware Design & Prototyping",
  "Firmware and Embedded Software Development",
  "Cloud Platform Integration (AWS, Azure, Google Cloud)",
  "Real-time Data Processing and Analytics",
  "Secure OTA (Over-the-Air) Updates",
  "Mobile App Development for IoT Control",
]

export default function IotDevelopmentPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">IoT Development</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We build end-to-end Internet of Things solutions that connect your devices, collect data, and deliver actionable insights.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in-left duration-700">
              <Image src="/assets/our-services/iot-development.png" alt="IoT Development" width={600} height={400} data-ai-hint="iot devices" className="rounded-lg shadow-lg" />
            </div>
            <div className="animate-in fade-in-right duration-700">
              <h2 className="text-3xl font-bold tracking-tight mb-4">From Sensor to Cloud</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our comprehensive IoT development services cover every aspect of your project, from designing custom hardware and firmware to building scalable cloud infrastructure and intuitive mobile applications. We help you unlock the full potential of connected devices to optimize processes, create new revenue streams, and enhance user experiences.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Start Your IoT Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our IoT Capabilities</h2>
            <p className="mt-2 text-lg text-muted-foreground">Key features of our IoT development services.</p>
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
