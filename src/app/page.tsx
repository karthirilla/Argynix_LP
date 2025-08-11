import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Bot, Factory, Sprout, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const services = [
  {
    icon: <Wifi className="h-8 w-8 text-primary" />,
    title: "IoT Solutions",
    description: "End-to-end IoT product development, from sensor integration to cloud platforms.",
  },
  {
    icon: <Factory className="h-8 w-8 text-primary" />,
    title: "Industrial Automation",
    description: "Enhancing efficiency and productivity with our advanced automation systems.",
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "Robotics Integration",
    description: "Seamlessly integrating robotic solutions to automate and streamline your operations.",
  },
  {
    icon: <Sprout className="h-8 w-8 text-primary" />,
    title: "Agri-Tech Solutions",
    description: "Smart farming solutions to improve yield and sustainability in agriculture.",
  },
];

const projects = [
    {
        title: "Smart Agriculture System",
        description: "An IoT-based system for monitoring soil moisture, temperature, and automated irrigation.",
        image: "https://placehold.co/600x400.png",
        hint: "agriculture farm",
        link: "/portfolio",
    },
    {
        title: "Home Automation Hub",
        description: "A centralized hub to control lighting, climate, and security systems in smart homes.",
        image: "https://placehold.co/600x400.png",
        hint: "smart home",
        link: "/portfolio",
    },
    {
        title: "Industrial Monitoring Dashboard",
        description: "Real-time monitoring of industrial machinery to predict maintenance needs and prevent downtime.",
        image: "https://placehold.co/600x400.png",
        hint: "factory dashboard",
        link: "/portfolio",
    },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative w-full py-24 md:py-32 lg:py-40 bg-card/50">
        <div className="container mx-auto max-w-7xl px-4 text-center">
            <div className="flex flex-col items-center space-y-4 animate-in fade-in duration-700">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
                    Pioneering Tomorrow's Technology, Today
                </h1>
                <p className="max-w-2xl text-lg text-muted-foreground md:text-xl">
                    We build innovative IoT products, automation solutions, and robotics integrations to power the future of every industry.
                </p>
                <div className="flex gap-4">
                    <Button asChild size="lg">
                        <Link href="/contact">Get Started</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="/services">Our Services</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>

      <section id="services" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Expertise</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
              From concept to reality, we provide comprehensive electronics solutions across various domains.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {service.icon}
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="w-full py-16 md:py-24 bg-card/50">
        <div className="container mx-auto max-w-7xl px-4">
           <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
              See how our innovative solutions are making an impact.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
                 <Card key={project.title} className="overflow-hidden group">
                     <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        data-ai-hint={project.hint}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <Button variant="link" asChild className="p-0">
                            <Link href={project.link}>
                                View Project <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
             <Button asChild size="lg" variant="outline">
                <Link href="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
            <div className="rounded-lg bg-primary p-8 text-center text-primary-foreground md:p-12">
                <h2 className="text-3xl font-bold">Ready to build the future?</h2>
                <p className="mt-4 max-w-xl mx-auto text-lg">
                    Let's discuss how Argynix can help you achieve your technological goals.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg" variant="secondary">
                        <Link href="/contact">Contact Us Today</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
