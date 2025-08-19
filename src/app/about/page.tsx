"use client"

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, Users } from "lucide-react";

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

const ParticleAnimation = () => {
    const particles = Array.from({ length: 30 });
    return (
        <div className="absolute inset-0 overflow-hidden">
            {particles.map((_, i) => {
                const style = {
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 3 + 1}px`,
                    height: `${Math.random() * 3 + 1}px`,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${Math.random() * 10 + 10}s`,
                };
                return (
                    <div
                        key={i}
                        className="absolute rounded-full bg-primary/40 animate-particle"
                        style={style}
                    />
                );
            })}
            <style jsx>{`
                @keyframes particle {
                    0% {
                        transform: translate(0, 0) scale(1);
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                    100% {
                        transform: translate(
                            ${(Math.random() - 0.5) * 200}px,
                            ${(Math.random() - 0.5) * 200}px
                        ) scale(${Math.random() * 0.5 + 0.5});
                        opacity: 0;
                    }
                }
                .animate-particle {
                    animation-name: particle;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }
            `}</style>
        </div>
    );
};

export default function AboutPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="relative bg-secondary py-20 md:py-28 overflow-hidden">
        <ParticleAnimation />
        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Argynix</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We are a team of passionate engineers, designers, and problem-solvers dedicated to shaping the future of technology through innovative electronics and automation solutions.
          </p>
        </div>
      </section>
      
      <section className="py-16 md:py-24">
         <div className="container mx-auto max-w-7xl px-4">
             <div className="text-center md:text-left">
                 <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        About
                    </h2>
                    <div className="mt-4 text-muted-foreground space-y-4 text-lg">
                        <p>Argynix is a pioneer in delivering IoT solutions, industrial automation, robotics integration, and electronics product development. We specialize in creating customizable, high-performance systems that help industries automate processes, improve efficiency, and stay connected through the latest technology.</p>
                        <p>Our expertise spans smart device design, embedded systems, electronics prototyping, PCB development, and full-scale automation solutions. With a strong focus on innovation, reliability, and scalability, we work closely with our clients to develop solutions that meet their exact requirements.</p>
                    </div>
                 </div>
            </div>
        </div>
      </section>

       <section id="values" className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Core Values</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              The principles that guide our work and define our culture.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
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
      
      <section className="py-16 md:py-24 bg-background">
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
