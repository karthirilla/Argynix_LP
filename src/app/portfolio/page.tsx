import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Our Work at Argynix",
  description: "Explore the portfolio of Argynix. See our work in smart agriculture, home automation, industrial IoT, custom electronics, robotics, and wearable technology.",
};

const projects = [
  {
    title: "Smart Agriculture System",
    category: "Agri-Tech",
    description: "An IoT-based system for real-time monitoring of soil moisture, temperature, and nutrient levels, coupled with an automated irrigation system. Increased crop yield by 20%.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c3874440?q=80&w=2070&auto=format&fit=crop",
    hint: "agriculture technology",
    tags: ["IoT", "Sensors", "Cloud", "React"],
  },
  {
    title: "Home Automation Hub",
    category: "Smart Home",
    description: "A centralized hub to control lighting, climate, security systems, and entertainment devices in smart homes via a mobile app. Features voice control integration with Alexa and Google Assistant.",
    image: "https://images.unsplash.com/photo-1596205251936-a2d13b37c0fa?q=80&w=1974&auto=format&fit=crop",
    hint: "modern living room",
    tags: ["IoT", "Mobile App", "Voice Control"],
  },
  {
    title: "Industrial Monitoring Dashboard",
    category: "Industrial Automation",
    description: "Real-time monitoring of industrial machinery to predict maintenance needs, prevent downtime, and optimize performance. Implemented on the factory floor of a major manufacturing client.",
    image: "https://images.unsplash.com/photo-1547994883-71870a258416?q=80&w=2070&auto=format&fit=crop",
    hint: "industrial dashboard",
    tags: ["SCADA", "IoT", "Data Analytics", "Cloud"],
  },
  {
    title: "Custom IoT Sensor Node",
    category: "Electronics",
    description: "Designed and developed a low-power, multi-sensor node for environmental monitoring. The device has a battery life of over 5 years and communicates via LoRaWAN.",
    image: "https://images.unsplash.com/photo-1581452397-033737227444?q=80&w=2070&auto=format&fit=crop",
    hint: "circuit sensor",
    tags: ["PCB Design", "Firmware", "LoRaWAN"],
  },
  {
    title: "Warehouse AGV System",
    category: "Robotics",
    description: "An fleet of autonomous guided vehicles (AGVs) for automating material transport in a large warehouse, improving efficiency and reducing human error.",
    image: "https://images.unsplash.com/photo-1674059048324-5d8a4362e3d7?q=80&w=2070&auto=format&fit=crop",
    hint: "warehouse robot",
    tags: ["Robotics", "AGV", "Automation"],
  },
  {
    title: "Wearable Health Monitor",
    category: "Electronics",
    description: "A wearable device that tracks vital signs like heart rate, SpO2, and activity levels, syncing data to a mobile app for personal health insights.",
    image: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop",
    hint: "wearable technology",
    tags: ["Wearable", "IoT", "Bluetooth", "Mobile App"],
  },
]

export default function PortfolioPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Work</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A glimpse into the innovative solutions we've delivered.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link href="#" key={project.title}>
                 <Card className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      data-ai-hint={project.hint}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="mt-1 text-muted-foreground">{project.description}</p>
                     <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
               </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
