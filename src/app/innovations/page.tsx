
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innovation Showcase | Argynix AI & R&D",
  description: "Explore the latest innovations from Argynix, including breakthroughs in AI-powered predictive maintenance, self-learning home automation, and next-generation IoT protocols.",
};

const innovations = [
  {
    title: "AI-Powered Predictive Maintenance for Industrial IoT",
    description: "Our new AI model analyzes real-time sensor data to predict machinery failures with 95% accuracy, drastically reducing downtime and maintenance costs. This system is now being deployed with our key manufacturing partners.",
    image: "/assets/Innovation/ai-powered-predictive-maintenance-for-industrial-iot.png",
    hint: "AI dashboard",
    tags: ["AI", "Machine Learning", "IoT", "Industry 4.0"],
    date: "October 17, 2023",
  },
  {
    title: "Self-Learning Home Automation Systems",
    description: "We're moving beyond simple commands. Our latest home automation hubs learn user habits and preferences to proactively adjust lighting, climate, and security settings for optimal comfort and energy efficiency.",
    image: "/assets/Innovation/self-learning-home-automation-systems.png",
    hint: "futuristic home",
    tags: ["AI", "Smart Home", "Energy Efficiency"],
    date: "September 05, 2023",
  },
  {
    title: "Next-Gen LoRaWAN Protocol for Ultra-Low Power IoT",
    description: "Our R&D team has contributed to a new communication protocol that extends battery life for remote IoT devices to over 10 years, unlocking possibilities for long-term environmental and agricultural monitoring.",
    image: "/assets/Innovation/next-gen-lorawan-protocol-for-ultra-low-power-iot.png",
    hint: "communication tower",
    tags: ["LoRaWAN", "R&D", "Low Power"],
    date: "August 21, 2023",
  },
];

const featuredInnovation = innovations[0];
const otherInnovations = innovations.slice(1);

export default function InnovationsPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-card/50 py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <Lightbulb className="h-5 w-5" />
            <span className="font-medium">Powered by Argynix AI</span>
          </div>
          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">Innovation Showcase</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover the cutting-edge research and breakthroughs from our labs.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="grid md:grid-cols-2 overflow-hidden shadow-lg">
            <div className="relative h-64 md:h-auto">
              <Image
                src={featuredInnovation.image}
                alt={featuredInnovation.title}
                layout="fill"
                objectFit="cover"
                data-ai-hint={featuredInnovation.hint}
                className="grayscale hover:grayscale-0 focus:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <CardHeader>
                <p className="text-sm text-muted-foreground">{featuredInnovation.date}</p>
                <CardTitle className="text-3xl font-bold">{featuredInnovation.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg mb-6">{featuredInnovation.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredInnovation.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <Button asChild>
                  <Link href="#">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {otherInnovations.map((item) => (
              <Card key={item.title} className="flex flex-col group hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-56 overflow-hidden rounded-t-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={400}
                    data-ai-hint={item.hint}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0 focus:grayscale-0"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                  <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground flex-grow">{item.description}</p>
                   <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
