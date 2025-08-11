import Image from "next/image"
import { Cog, ShieldCheck, AreaChart, Wifi, Factory, Bot, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
  {
    title: "IoT Solutions & Product Development",
    description: "We provide end-to-end IoT solutions, from hardware design and firmware development to cloud integration and data analytics. Our team can turn your idea into a market-ready smart product.",
    icon: <Wifi className="w-10 h-10" />,
    features: [
      { name: "Custom Hardware Design" },
      { name: "Firmware & Embedded Systems" },
      { name: "Cloud Platform Integration" },
      { name: "Data Analytics & Visualization" },
    ],
  },
  {
    title: "Industrial Automation",
    description: "Our industrial automation solutions enhance operational efficiency, reduce costs, and improve safety. We implement PLC, SCADA, and HMI systems tailored to your specific industrial needs.",
    icon: <Factory className="w-10 h-10" />,
     features: [
      { name: "PLC Programming & Control" },
      { name: "SCADA & HMI Development" },
      { name: "Process Optimization" },
      { name: "Predictive Maintenance" },
    ],
  },
  {
    title: "Robotics Integration",
    description: "We integrate advanced robotics into your workflows to automate repetitive tasks, improve precision, and boost productivity. Our expertise covers robotic arms, AGVs, and custom robotic solutions.",
    icon: <Bot className="w-10 h-10" />,
    features: [
      { name: "Robotic Arm Integration" },
      { name: "Automated Guided Vehicles (AGVs)" },
      { name: "Custom Robotics Solutions" },
      { name: "Machine Vision" },
    ],
  },
   {
    title: "End-to-End Product Development",
    description: "From initial concept and prototyping to mass manufacturing and deployment, we manage the entire product lifecycle. We ensure your electronics product is reliable, scalable, and ready for the market.",
    icon: <Rocket className="w-10 h-10" />,
    features: [
      { name: "Prototyping & DFM" },
      { name: "Supply Chain Management" },
      { name: "Certification & Compliance" },
      { name: "Mass Manufacturing" },
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We offer a comprehensive suite of services to bring your technological vision to life, from initial idea to final product.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-12 md:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="rounded-lg border bg-card p-8 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">{service.icon}</div>
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg">{service.description}</p>
                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-muted-foreground">
                    {service.features.map(feature => (
                      <li key={feature.name} className="flex items-center gap-2">
                        <CheckIcon className="w-4 h-4 text-primary" />
                        <span>{feature.name}</span>
                      </li>
                    ))}
                  </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
            <div className="rounded-lg bg-primary p-8 text-center text-primary-foreground md:p-12">
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

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
