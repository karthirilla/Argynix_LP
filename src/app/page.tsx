
import Link from "next/link"
import { Bot, Factory, Sprout, Wifi, HomeIcon, Briefcase, Layers, Rocket, ShieldCheck, Zap, Lightbulb, MoveRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const services = [
  {
    icon: <Wifi className="h-8 w-8" />,
    title: "IOT Development",
    href: "/services/iot-development",
  },
  {
    icon: <Factory className="h-8 w-8" />,
    title: "Industrial Automation",
    href: "/services/industrial-automation",
  },
  {
    icon: <Bot className="h-8 w-8" />,
    title: "Robotics & AI",
    href: "/services/robotics-ai",
  },
  {
    icon: <Sprout className="h-8 w-8" />,
    title: "Electronics R&D",
    href: "/services/electronics-rd",
  },
   {
    icon: <HomeIcon className="h-8 w-8" />,
    title: "Smart Home Systems",
    href: "/services/smart-home",
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
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
        icon: <Users className="h-8 w-8 text-primary" />,
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

const GlobeAnimation = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute w-[600px] h-[600px] animate-pulse-slow">
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full"></div>
            <div className="absolute inset-10 border-2 border-primary/20 rounded-full"></div>
            <div className="absolute inset-20 border-2 border-primary/20 rounded-full"></div>
        </div>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
            className="w-full h-full animate-spin-slow"
        >
            <defs>
                <radialGradient id="globe-gradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </radialGradient>
            </defs>
            <circle cx="400" cy="400" r="300" fill="url(#globe-gradient)" />
            <g stroke="hsl(var(--primary))" strokeOpacity="0.3">
                <ellipse cx="400" cy="400" rx="300" ry="100" fill="none" strokeWidth="1" />
                <ellipse cx="400" cy="400" rx="300" ry="200" fill="none" strokeWidth="1" />
                <ellipse cx="400" cy="400" rx="300" ry="280" fill="none" strokeWidth="1" />
                <ellipse transform="rotate(90 400 400)" cx="400" cy="400" rx="300" ry="100" fill="none" strokeWidth="1" />
                <ellipse transform="rotate(90 400 400)" cx="400" cy="400" rx="300" ry="200" fill="none" strokeWidth="1" />
                <ellipse transform="rotate(90 400 400)" cx="400" cy="400" rx="300" ry="280" fill="none" strokeWidth="1" />
            </g>
        </svg>
    </div>
);

const AnimatedGrid = () => (
    <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]">
            <div className="absolute inset-[-10%] animate-pulse-slow">
                <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_300px,hsl(var(--primary-foreground)),transparent)] opacity-20"></div>
            </div>
        </div>
    </div>
);

const RotatingCube = () => (
    <div className="w-full h-full flex items-center justify-center [perspective:1000px]">
        <div className="w-48 h-48 md:w-64 md:h-64 relative [transform-style:preserve-3d] animate-spin-cube">
            {['front', 'back', 'left', 'right', 'top', 'bottom'].map((side, i) => {
                const rotation = [
                    'rotateY(0deg)', 'rotateY(180deg)',
                    'rotateY(-90deg)', 'rotateY(90deg)',
                    'rotateX(90deg)', 'rotateX(-90deg)'
                ][i];
                const translateZ = "128px";
                const mobileTranslateZ = "96px";
                return (
                    <div
                        key={side}
                        className={cn(
                            "absolute w-48 h-48 md:w-64 md:h-64 border border-primary/20 bg-background/50 backdrop-blur-sm flex items-center justify-center",
                            "flex items-center justify-center p-4"
                        )}
                        style={{ transform: `${rotation} translateZ(var(--translate-z))` }}
                    >
                         <style>{`:root { --translate-z: ${mobileTranslateZ}; } @media (min-width: 768px) { :root { --translate-z: ${translateZ}; } }`}</style>
                        <div className="text-center">
                            {benefits[i] && (
                                <>
                                    <div className="mx-auto flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
                                        {benefits[i].icon}
                                    </div>
                                    <h3 className="text-sm md:text-base font-semibold">{benefits[i].title}</h3>
                                </>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
);


export default function Home() {
  return (
    <div className="flex flex-col animate-in fade-in duration-500">
        <section className="relative w-full bg-background overflow-hidden">
            <AnimatedGrid />
            <div className="container mx-auto max-w-7xl px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-20">
                    <div className="flex flex-col items-center md:items-start space-y-6 text-center md:text-left animate-in fade-in slide-in-from-left duration-700">
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
                            Building Tomorrow's Connected World
                        </h1>
                        <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
                            We turn your innovative ideas into smart, connected solutions. From concept to deployment, we engineer the future of IoT and automation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg">
                                <Link href="/services">
                                    Explore Our Services <MoveRight className="ml-2" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline">
                                <Link href="/contact">Get in Touch</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center justify-center h-[500px] animate-in fade-in slide-in-from-right duration-700">
                        <GlobeAnimation />
                    </div>
                </div>
            </div>
        </section>
      
        <section id="about" className="w-full py-16 md:py-24 bg-secondary">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid lg:grid-cols-5 gap-12 items-center">
                    <div className="lg:col-span-2 text-center lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Argynix</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Adaptive, solution-driven, and approachable.
                        </p>
                    </div>
                    <div className="lg:col-span-3 text-muted-foreground space-y-4 text-lg text-center lg:text-left">
                        <p>At Argynix, we deliver innovative and customizable solutions in IoT, industrial automation, robotics integration, and electronics product development. We combine cutting-edge technology with practical engineering to help businesses automate, connect, and innovate efficiently.</p>
                        <p>Our mission is to design and develop tailored solutions — whether starting from scratch or enhancing your existing systems — to meet your exact requirements. No matter the challenge, our team stays focused and ready to provide the right answers and exceptional service at every stage of your project.</p>
                    </div>
                </div>
            </div>
        </section>


        <section id="services" className="w-full py-16 md:py-24 bg-background">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="space-y-4 text-center mb-12 animate-in fade-in-up duration-700">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What We Do</h2>
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                        We provide end-to-end services to transform your vision into reality.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <Link href={service.href} key={service.title} className="block group">
                            <Card className="text-center p-6 h-full border-2 border-transparent hover:border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col bg-secondary/50 overflow-hidden">
                                <CardHeader className="items-center">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                                        {service.icon}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex flex-col flex-grow">
                                    <h3 className="text-xl font-semibold mb-2 flex-grow">{service.title}</h3>
                                    <div className="mt-auto">
                                        <p className="text-primary font-semibold flex items-center justify-center gap-2">
                                            Know more <MoveRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

        <section id="why-choose-us" className="w-full py-16 md:py-24 bg-secondary overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-16">
                     <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us?</h2>
                     <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        We combine innovation with reliability to deliver solutions that drive success.
                    </p>
                </div>
                <div className="relative h-96 flex items-center justify-center">
                    <RotatingCube />
                </div>
            </div>
        </section>
    </div>
  )
}

    