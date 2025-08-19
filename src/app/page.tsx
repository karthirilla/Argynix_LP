
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
    <svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <pattern id="hexPattern" patternUnits="userSpaceOnUse" width="100" height="86.6" viewBox="0 0 100 86.6">
            <g id="hexagon" fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.1" strokeWidth="1">
                <path d="M 25 0 L 75 0 L 100 43.3 L 75 86.6 L 25 86.6 L 0 43.3 Z" />
            </g>
        </pattern>
      </defs>

      {/* Background rotating hex grid */}
      <rect width="120%" height="120%" x="-10%" y="-10%" fill="url(#hexPattern)">
        <animateTransform attributeName="transform" type="rotate" from="0 400 300" to="360 400 300" dur="120s" repeatCount="indefinite" />
      </rect>

      {/* Main pulsating core */}
      <circle cx="400" cy="300" r="80" fill="url(#glowGradient)" opacity="0.5">
         <animate attributeName="r" values="80;90;80" dur="5s" repeatCount="indefinite" />
         <animate attributeName="opacity" values="0.5;0.7;0.5" dur="5s" repeatCount="indefinite" />
      </circle>
      <circle cx="400" cy="300" r="70" fill="hsl(var(--primary))" filter="url(#glow)" opacity="0.3"/>

      {/* Animated connection lines */}
      <g stroke="hsl(var(--primary))" strokeWidth="1.5" filter="url(#glow)">
        <path d="M 400 300 L 150 150" strokeDasharray="5 5" strokeOpacity="0.5">
           <animate attributeName="stroke-dashoffset" from="0" to="20" dur="3s" repeatCount="indefinite" />
        </path>
         <path d="M 400 300 L 650 450" strokeDasharray="5 5" strokeOpacity="0.5">
           <animate attributeName="stroke-dashoffset" from="20" to="0" dur="4s" repeatCount="indefinite" />
        </path>
        <path d="M 400 300 L 200 480" strokeOpacity="0.4">
           <animate attributeName="d" values="M 400 300 L 200 480; M 400 300 L 220 450; M 400 300 L 200 480" dur="7s" repeatCount="indefinite" />
        </path>
         <path d="M 400 300 L 680 220" strokeOpacity="0.4">
            <animate attributeName="d" values="M 400 300 L 680 220; M 400 300 L 650 240; M 400 300 L 680 220" dur="6s" repeatCount="indefinite" />
        </path>
      </g>

      {/* Nodes */}
      <g>
        <circle cx="150" cy="150" r="12" fill="hsl(var(--primary))">
          <animate attributeName="r" values="12;14;12" dur="4s" begin="-1s" repeatCount="indefinite" />
        </circle>
        <circle cx="650" cy="450" r="10" fill="hsl(var(--primary))">
           <animate attributeName="r" values="10;12;10" dur="3.5s" begin="-2s" repeatCount="indefinite" />
        </circle>
         <circle cx="200" cy="480" r="8" fill="hsl(var(--primary))">
           <animate attributeName="r" values="8;10;8" dur="4.5s" begin="-3s" repeatCount="indefinite" />
        </circle>
         <circle cx="680" cy="220" r="9" fill="hsl(var(--primary))">
           <animate attributeName="r" values="9;11;9" dur="3s" begin="-0.5s" repeatCount="indefinite" />
        </circle>
      </g>
      
       {/* Drifting particles */}
      <g fill="hsl(var(--primary))" opacity="0.6">
          <circle cx="0" cy="0" r="3">
              <animateMotion path="M100,50 C200,150 300,50 400,150 S500,250 600,150 S700,50 800,100" dur="25s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="0" r="2">
              <animateMotion path="M800,500 C700,400 600,500 500,400 S400,300 300,400 S200,500 100,450" dur="30s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="0" r="2.5">
               <animateMotion path="M50,600 C150,500 250,550 350,450 S450,350 550,400 S650,500 750,550" dur="28s" repeatCount="indefinite" />
          </circle>
      </g>
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
