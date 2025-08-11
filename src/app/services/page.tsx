import Image from "next/image"
import { Cpu, Cog, Bot, Rocket, ShieldCheck, AreaChart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    title: "IoT Solutions & Product Development",
    description: "We provide end-to-end IoT solutions, from hardware design and firmware development to cloud integration and data analytics. Our team can turn your idea into a market-ready smart product.",
    icon: <Cpu className="w-10 h-10" />,
    image: "https://placehold.co/600x400.png",
    hint: "iot devices",
    features: [
      { name: "Custom Hardware Design", icon: <Cog className="w-5 h-5 text-primary" /> },
      { name: "Firmware & Embedded Systems", icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
      { name: "Cloud Platform Integration", icon: <AreaChart className="w-5 h-5 text-primary" /> },
    ],
  },
  {
    title: "Industrial Automation",
    description: "Our industrial automation solutions enhance operational efficiency, reduce costs, and improve safety. We implement PLC, SCADA, and HMI systems tailored to your specific industrial needs.",
    icon: <Cog className="w-10 h-10" />,
    image: "https://placehold.co/600x400.png",
    hint: "industrial machinery",
    features: [
      { name: "PLC Programming & Control", icon: <Cog className="w-5 h-5 text-primary" /> },
      { name: "SCADA & HMI Development", icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
      { name: "Process Optimization", icon: <AreaChart className="w-5 h-5 text-primary" /> },
    ],
  },
  {
    title: "Robotics Integration",
    description: "We integrate advanced robotics into your workflows to automate repetitive tasks, improve precision, and boost productivity. Our expertise covers robotic arms, AGVs, and custom robotic solutions.",
    icon: <Bot className="w-10 h-10" />,
    image: "https://placehold.co/600x400.png",
    hint: "robotic arm",
    features: [
      { name: "Robotic Arm Integration", icon: <Cog className="w-5 h-5 text-primary" /> },
      { name: "Automated Guided Vehicles (AGVs)", icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
      { name: "Custom Robotics Solutions", icon: <AreaChart className="w-5 h-5 text-primary" /> },
    ],
  },
   {
    title: "End-to-End Product Development",
    description: "From initial concept and prototyping to mass manufacturing and deployment, we manage the entire product lifecycle. We ensure your electronics product is reliable, scalable, and ready for the market.",
    icon: <Rocket className="w-10 h-10" />,
    image: "https://placehold.co/600x400.png",
    hint: "circuit board",
    features: [
      { name: "Prototyping & DFM", icon: <Cog className="w-5 h-5 text-primary" /> },
      { name: "Supply Chain Management", icon: <ShieldCheck className="w-5 h-5 text-primary" /> },
      { name: "Certification & Compliance", icon: <AreaChart className="w-5 h-5 text-primary" /> },
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-card/50 py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We offer a wide range of services to bring your technological vision to life.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-16">
            {services.map((service, index) => (
              <div key={service.title} className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 !== 0 ? "md:grid-flow-col-dense" : ""}`}>
                <div className={`${index % 2 !== 0 ? "md:col-start-2" : ""}`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">{service.icon}</div>
                    <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                  </div>
                  <p className="mt-4 text-muted-foreground text-lg">{service.description}</p>
                  <ul className="mt-6 space-y-4">
                    {service.features.map(feature => (
                      <li key={feature.name} className="flex items-center gap-3">
                        {feature.icon}
                        <span className="font-medium">{feature.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`overflow-hidden rounded-lg ${index % 2 !== 0 ? "md:col-start-1" : ""}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    data-ai-hint={service.hint}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="w-full py-16 md:py-24 bg-card/50">
        <div className="container mx-auto max-w-7xl px-4">
            <div className="rounded-lg bg-accent p-8 text-center text-accent-foreground md:p-12">
                <h2 className="text-3xl font-bold">Have a project in mind?</h2>
                <p className="mt-4 max-w-xl mx-auto text-lg">
                    Our team is ready to collaborate with you.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg" variant="secondary">
                        <Link href="/contact">Let's Talk</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
