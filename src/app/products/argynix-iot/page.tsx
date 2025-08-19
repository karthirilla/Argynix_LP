
import Image from "next/image"
import { Check, RadioTower, Wifi, Smartphone, Cloud } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Argynix IoT - V 4.1 | Remote Monitoring & Control Platform",
  description: "Discover Argynix IoT - V 4.1, our powerful and flexible platform for remote monitoring and control. Features long-range communication, multi-sensor support, and cloud-powered data analytics.",
};

const features = [
  {
    icon: <RadioTower className="h-6 w-6" />,
    title: "Long-Range Communication",
    description: "Utilizes LoRaWAN for reliable, low-power communication over several kilometers.",
  },
  {
    icon: <Wifi className="h-6 w-6" />,
    title: "Multi-Sensor Ready",
    description: "Easily connect a wide variety of sensors for temperature, humidity, GPS, and more.",
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile App Control",
    description: "Monitor and control your devices from anywhere with our intuitive mobile app.",
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud-Powered",
    description: "Securely store, visualize, and analyze your data on our scalable cloud platform.",
  },
]

export default function ArgynixIotPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Argynix IoT - V 4.1</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A powerful, flexible, and easy-to-use platform for remote monitoring and control of your critical assets.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in-left duration-700">
              <Image src="/assets/products/argynix-iot/argynix.png" alt="Argynix IoT Device" width={600} height={400} data-ai-hint="iot device" className="rounded-lg shadow-lg grayscale hover:grayscale-0 focus:grayscale-0 transition-all duration-300" />
            </div>
            <div className="animate-in fade-in-right duration-700">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Total Control, Anywhere</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Argynix IoT is our flagship product for remote device management. Whether you need to monitor water pumps in a remote field, track vehicles in a fleet, or control industrial machinery, our platform provides the hardware, software, and cloud infrastructure you need to stay connected and in control.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href="/contact">Request a Demo</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="https://iot.argynix.in/" target="_blank">Live Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Key Features</h2>
            <p className="mt-2 text-lg text-muted-foreground">Everything you need for robust remote control.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 animate-in fade-in-up" style={{ animationDelay: `${index * 150}ms`}}>
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
