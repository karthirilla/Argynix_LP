
import Link from "next/link"
import Image from "next/image"
import { Bot, Factory, Sprout, Wifi, HomeIcon, Briefcase, Layers, Rocket, ShieldCheck, Zap, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const services = [
  {
    icon: <Wifi className="h-8 w-8 text-primary" />,
    title: "IOT Development",
    href: "/services/iot-development",
  },
  {
    icon: <Factory className="h-8 w-8 text-primary" />,
    title: "Industrial Automation",
    href: "/services/industrial-automation",
  },
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "Robotics & AI",
    href: "/services/robotics-ai",
  },
  {
    icon: <Sprout className="h-8 w-8 text-primary" />,
    title: "Electronics R&D",
    href: "/services/electronics-rd",
  },
   {
    icon: <HomeIcon className="h-8 w-8 text-primary" />,
    title: "Smart Home Systems",
    href: "/services/smart-home",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Agriculture Tech",
    href: "/services/agri-tech",
  },
];

const benefits = [
    {
        icon: <Lightbulb className="h-8 w-8 text-primary" />,
        title: "Pioneering Spirit",
        description: "We thrive on innovation and constantly explore new frontiers in technology."
    },
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Agile & Adaptive",
        description: "We respond quickly to change and tailor solutions to fit your exact needs."
    },
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        title: "Quality First",
        description: "We are committed to delivering robust and reliable high-quality solutions."
    },
    {
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        title: "Client-Centric",
        description: "Your success is our priority. We build partnerships based on trust and results."
    },
    {
        icon: <Rocket className="h-8 w-8 text-primary" />,
        title: "Future-Focused",
        description: "We build solutions that are scalable, sustainable, and ready for tomorrow."
    },
    {
        icon: <Layers className="h-8 w-8 text-primary" />,
        title: "End-to-End Solutions",
        description: "From concept to deployment, we manage every step of the product lifecycle."
    },
]

const AnimatedHero = () => {
  return (
    <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Grid background */}
      <g opacity="0.3">
        <path d="M100 0 V300 M200 0 V300 M300 0 V300 M0 100 H400 M0 200 H400" stroke="hsl(var(--border))" strokeWidth="1" />
      </g>

      {/* IoT Symbols */}
      <g fill="hsl(var(--primary))" opacity="0.7">
        {/* Factory Icon */}
        <g transform="translate(50, 50)">
          <path d="M20 10 L20 20 L0 20 L0 8 L10 0 L20 8Z">
             <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
          </path>
        </g>

        {/* Smart Home Icon */}
        <g transform="translate(320, 80)">
           <path d="M0 10 L10 0 L20 10 L18 10 L18 20 L12 20 L12 14 L8 14 L8 20 L2 20 L2 10 Z">
            <animateTransform attributeName="transform" type="scale" values="1;1.1;1" dur="5s" repeatCount="indefinite" />
           </path>
        </g>
        
        {/* Wifi Icon */}
        <g transform="translate(80, 220)">
          <path d="M0 10 C5 5, 15 5, 20 10 M3 7 C7 4, 13 4, 17 7 M6 4 C8 2, 12 2, 14 4" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round">
            <animate attributeName="stroke-dasharray" from="0, 20" to="20, 0" dur="3s" begin="1s" repeatCount="indefinite" />
          </path>
        </g>
      </g>


      <g opacity="0.8" filter="url(#glow)">
        {/* Lines */}
        <line x1="50" y1="150" x2="150" y2="50" stroke="url(#line-gradient)" strokeWidth="2">
           <animate attributeName="stroke-dasharray" from="0, 200" to="200, 0" dur="5s" repeatCount="indefinite" />
        </line>
        <line x1="50" y1="150" x2="150" y2="250" stroke="url(#line-gradient)" strokeWidth="2">
           <animate attributeName="stroke-dasharray" from="0, 200" to="200, 0" dur="5s" begin="1s" repeatCount="indefinite" />
        </line>
        <line x1="150" y1="50" x2="250" y2="50" stroke="url(#line-gradient)" strokeWidth="2">
            <animate attributeName="stroke-dasharray" from="0, 100" to="100, 0" dur="4s" repeatCount="indefinite" />
        </line>
        <line x1="150" y1="250" x2="250" y2="250" stroke="url(#line-gradient)" strokeWidth="2">
            <animate attributeName="stroke-dasharray" from="0, 100" to="100, 0" dur="4s" begin="0.5s" repeatCount="indefinite" />
        </line>
        <line x1="250" y1="50" x2="350" y2="150" stroke="url(#line-gradient)" strokeWidth="2">
            <animate attributeName="stroke-dasharray" from="0, 200" to="200, 0" dur="5s" begin="2s" repeatCount="indefinite" />
        </line>
        <line x1="250" y1="250" x2="350" y2="150" stroke="url(#line-gradient)" strokeWidth="2">
            <animate attributeName="stroke-dasharray" from="0, 200" to="200, 0" dur="5s" begin="2.5s" repeatCount="indefinite" />
        </line>
        <line x1="150" y1="50" x2="150" y2="250" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="4, 4">
             <animate attributeName="stroke-dashoffset" from="0" to="16" dur="1s" repeatCount="indefinite" />
        </line>
         <line x1="250" y1="50" x2="250" y2="250" stroke="url(#line-gradient)" strokeWidth="2" strokeDasharray="4, 4">
             <animate attributeName="stroke-dashoffset" from="16" to="0" dur="1s" repeatCount="indefinite" />
        </line>
      </g>

      {/* Nodes */}
      <circle cx="50" cy="150" r="8" fill="hsl(var(--primary))">
        <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" begin="0s" />
      </circle>
      <circle cx="150" cy="50" r="8" fill="hsl(var(--primary))">
        <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" begin="0.5s" />
      </circle>
       <circle cx="150" cy="250" r="8" fill="hsl(var(--primary))">
        <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" begin="0.7s" />
      </circle>
      <circle cx="250" cy="50" r="8" fill="hsl(var(--primary))">
        <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" begin="1s" />
      </circle>
      <circle cx="250" cy="250" r="8" fill="hsl(var(--primary))">
        <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" begin="1.2s" />
      </circle>
      <circle cx="350" cy="150" r="8" fill="hsl(var(--primary))">
        <animate attributeName="r" values="8;10;8" dur="2s" repeatCount="indefinite" begin="1.5s" />
      </circle>
    </svg>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col animate-in fade-in duration-500">
      <section className="relative w-full bg-secondary pt-24 pb-16">
        <div className="container mx-auto max-w-7xl px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left animate-in fade-in slide-in-from-left duration-700">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-foreground">
                        Building Tomorrow's Connected World
                    </h1>
                    <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                        We turn your innovative ideas into smart, connected solutions.
                    </p>
                </div>
                <div className="hidden md:block animate-in fade-in slide-in-from-right duration-700">
                  <AnimatedHero />
                </div>
            </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto max-w-7xl px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl md:text-4xl font-bold text-center">About Argynix</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground space-y-4 text-lg max-w-3xl mx-auto">
              <p>Argynix, we deliver innovative and customizable solutions in IoT, industrial automation, robotics integration, and electronics product development. We combine cutting-edge technology with practical engineering to help businesses automate, connect, and innovate efficiently.</p>
              <p>Our mission is to design and develop tailored solutions — whether starting from scratch or enhancing your existing systems — to meet your exact requirements.</p>
              <p>We believe in being adaptive, solution-driven, and approachable. No matter the challenge, our team stays cool, focused, and ready to provide the right answers and exceptional service at every stage of your project.</p>
            </CardContent>
          </Card>
        </div>
      </section>


      <section id="services" className="w-full py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="space-y-4 text-center mb-12 animate-in fade-in-up duration-700">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Do</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service, index) => (
              <Link href={service.href} key={service.title} className="block animate-in fade-in-up" style={{ animationDelay: `${index * 150}ms`}}>
                <Card className="text-center p-6 h-full hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                        {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 flex-grow">{service.title}</h3>
                    <div className="mt-auto">
                      <Button>Know more</Button>
                    </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="how-we-are" className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="hidden md:block animate-in fade-in-left duration-700">
                     <Image src="https://placehold.co/600x400.png" alt="How We Are" width={600} height={400} data-ai-hint="iot dashboard" className="rounded-lg" />
                </div>
                 <div className="animate-in fade-in-right duration-700 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">How We Are</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={benefit.title} className="text-center animate-in fade-in-up" style={{ animationDelay: `${index * 150}ms`}}>
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background text-primary mb-3">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-base font-semibold">{benefit.title}</h3>
                                <p className="text-sm text-muted-foreground mt-1">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
