import Image from "next/image"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  "Custom Robot Integration (AGVs, Robotic Arms)",
  "Machine Vision and Inspection Systems",
  "AI-Powered Process Optimization",
  "Warehouse Automation",
  "Human-Robot Collaboration",
  "Machine Learning Model Development",
]

export default function RoboticsAiPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Robotics & AI</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We integrate intelligent robotics and AI to automate complex tasks and drive unprecedented efficiency.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in-left duration-700">
              <Image src="https://placehold.co/600x400.png" alt="Robotics & AI" width={600} height={400} data-ai-hint="robotic arm" className="rounded-lg shadow-lg" />
            </div>
            <div className="animate-in fade-in-right duration-700">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Intelligent Automation</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our Robotics & AI solutions bring the power of intelligent automation to your operations. We design and deploy systems that can see, learn, and adapt. From robotic arms in manufacturing to AI-driven logistics in warehouses, we build smart systems that work alongside your team to boost productivity.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Discuss Your AI Project</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Our Robotics & AI Expertise</h2>
            <p className="mt-2 text-lg text-muted-foreground">Core components of our intelligent automation services.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4 animate-in fade-in-up" style={{ animationDelay: `${index * 150}ms`}}>
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-6 w-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{feature}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
