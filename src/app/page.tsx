
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
        <radialGradient id="center-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Faint Background Grid */}
      <g opacity="0.1">
        <path d="M 0 75 H 400 M 0 150 H 400 M 0 225 H 400 M 100 0 V 300 M 200 0 V 300 M 300 0 V 300" stroke="hsl(var(--border))" strokeWidth="1" />
        <path d="M 50 0 L 400 350 M 0 150 L 400 -50" stroke="hsl(var(--border))" strokeWidth="0.5" />
      </g>

      {/* Central Orb */}
      <circle cx="200" cy="150" r="20" fill="url(#center-glow)" />
      <circle cx="200" cy="150" r="12" fill="hsl(var(--primary))" filter="url(#glow)">
        <animate attributeName="r" values="12;15;12" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Orbiting Particles */}
      <g>
        {/* Orbit Path 1 */}
        <ellipse cx="200" cy="150" rx="150" ry="80" fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.1" strokeWidth="1" />
        <circle cx="200" cy="150" r="4" fill="hsl(var(--primary))" filter="url(#glow)">
          <animateMotion dur="8s" repeatCount="indefinite" path="M50,150 a150,80 0 1,0 300,0 a150,80 0 1,0 -300,0" />
        </circle>
        
        {/* Orbit Path 2 */}
        <ellipse cx="200" cy="150" rx="120" ry="100" transform="rotate(25 200 150)" fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.1" strokeWidth="1" />
        <circle cx="200" cy="150" r="3" fill="hsl(var(--primary))" filter="url(#glow)">
            <animateMotion dur="10s" repeatCount="indefinite" begin="-2s">
                <mpath href="#orbit2" />
            </animateMotion>
        </circle>
        <path id="orbit2" d="M200,150 m-120,0 a120,100 0 1,0 240,0 a120,100 0 1,0 -240,0" transform="rotate(25 200 150)" style={{display: 'none'}} />

        {/* Orbit Path 3 */}
        <ellipse cx="200" cy="150" rx="180" ry="60" transform="rotate(-15 200 150)" fill="none" stroke="hsl(var(--primary))" strokeOpacity="0.1" strokeWidth="1" />
        <circle cx="200" cy="150" r="2" fill="hsl(var(--primary))" opacity="0.8">
            <animateMotion dur="12s" repeatCount="indefinite" begin="-4s">
                <mpath href="#orbit3" />
            </animateMotion>
        </circle>
        <path id="orbit3" d="M200,150 m-180,0 a180,60 0 1,0 360,0 a180,60 0 1,0 -360,0" transform="rotate(-15 200 150)" style={{display: 'none'}} />

        {/* Data pulse line */}
        <path d="M 200,150 L 350, 150" stroke="url(#path-gradient)" strokeWidth="2.5" filter="url(#glow)" strokeDasharray="50 150" strokeDashoffset="200">
             <animate attributeName="stroke-dashoffset" from="200" to="-150" dur="4s" begin="1s" repeatCount="indefinite" />
        </path>
         <path d="M 200,150 L 80, 220" stroke="url(#path-gradient)" strokeWidth="2" filter="url(#glow)" strokeDasharray="40 140" strokeDashoffset="180">
             <animate attributeName="stroke-dashoffset" from="180" to="-120" dur="5s" repeatCount="indefinite" />
        </path>
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
