
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, Eye, Lightbulb, Zap, ShieldCheck, Users, Rocket, Layers } from "lucide-react";

const teamMembers = [
  {
    name: "Karthi C",
    role: "CEO & Founder",
    image: "/assets/about/karthi.jpg",
  },
];

const values = [
    {
        icon: <Target className="h-8 w-8 text-primary" />,
        title: "Innovation",
        description: "We constantly push the boundaries of technology to create groundbreaking solutions."
    },
    {
        icon: <CheckCircle className="h-8 w-8 text-primary" />,
        title: "Quality",
        description: "We are committed to delivering robust, reliable, and high-quality products and services."
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Client-Centric",
        description: "Our clients' success is our top priority. We work closely to understand and meet their unique needs."
    }
]

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

export default function AboutPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">About Argynix</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We are a team of passionate engineers, designers, and problem-solvers dedicated to shaping the future of technology through innovative electronics and automation solutions.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
         <div className="container mx-auto max-w-7xl px-4">
             <div className="grid md:grid-cols-5 gap-12 items-center">
                <div className="md:col-span-2 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        A Little Bit About Argynix
                    </h2>
                </div>
                <div className="md:col-span-3 text-muted-foreground space-y-4 text-lg">
                    <p>Argynix is a pioneer in delivering IoT solutions, industrial automation, robotics integration, and electronics product development. We specialize in creating customizable, high-performance systems that help industries automate processes, improve efficiency, and stay connected through the latest technology.</p>
                    <p>Our expertise spans smart device design, embedded systems, electronics prototyping, PCB development, and full-scale automation solutions. With a strong focus on innovation, reliability, and scalability, we work closely with our clients to develop solutions that meet their exact requirements.</p>
                </div>
            </div>
        </div>
      </section>

       <section id="values" className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The principles that guide our work and define our culture.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="text-center p-6 h-full shadow-lg border-0 bg-background">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      {value.icon}
                  </div>
                  <CardHeader>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section id="why-choose-us" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We combine innovation with reliability to deliver solutions that drive success.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
               <div key={benefit.title} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground mt-1">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The brilliant minds behind our innovative solutions.
            </p>
          </div>
          <div className="mt-12 flex justify-center">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center overflow-hidden group border-0 shadow-lg max-w-sm">
                 <div className="h-64 w-full overflow-hidden">
                    <Image
                        src={member.image}
                        alt={member.name}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110 grayscale hover:grayscale-0 focus:grayscale-0"
                    />
                 </div>
                <CardHeader className="p-6">
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-semibold">{member.role}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
