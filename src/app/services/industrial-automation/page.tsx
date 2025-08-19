
import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  "PLC and SCADA System Integration",
  "Process Automation and Control",
  "Predictive Maintenance Solutions",
  "Industrial IoT (IIoT) Implementation",
  "Custom HMI/UI Development",
  "Data Logging and Reporting",
]

export default function IndustrialAutomationPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Industrial Automation</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We deliver robust automation solutions that enhance productivity, efficiency, and safety in industrial environments.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in-left duration-700">
              <Image src="/assets/our-services/industrial-automation.png" alt="Industrial Automation" width={600} height={400} data-ai-hint="factory automation" className="rounded-lg shadow-lg" />
            </div>
            <div className="animate-in fade-in-right duration-700">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Modernizing Your Operations</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our industrial automation services help you modernize your factory floor. We integrate PLCs, SCADA systems, and IIoT devices to create a connected, data-driven manufacturing environment. From process control to predictive maintenance, we build solutions that reduce downtime and increase output.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Automate Your Factory</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Automation Services</h2>
            <p className="mt-2 text-lg text-muted-foreground">Key aspects of our industrial automation solutions.</p>
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
