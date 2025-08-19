
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, Eye, Building, Star, Users, Phone, Briefcase, CheckSquare, Lightbulb, Zap, ShieldCheck, Rocket, Layers } from "lucide-react";

const teamMembers = [
  {
    name: "Karthi C",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1531590878845-12627191e687?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMG1hbGV8ZW58MHx8fHwxNzU1MDYyNTYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    hint: "professional portrait",
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
        icon: <Eye className="h-8 w-8 text-primary" />,
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
             <Card className="bg-card shadow-lg p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold relative">
                            <span className="absolute -top-4 -left-4 text-8xl font-bold text-foreground/10 -z-10">Something</span>
                            About Us
                        </h2>
                    </div>
                    <div className="md:col-span-2 text-muted-foreground space-y-4 text-lg">
                        <p>Argynix is a pioneer in delivering IoT solutions, industrial automation, robotics integration, and electronics product development. We specialize in creating customizable, high-performance systems that help industries automate processes, improve efficiency, and stay connected through the latest technology. Our expertise spans smart device design, embedded systems, electronics prototyping, PCB development, and full-scale automation solutions. We integrate advanced robotics, intelligent sensors, and control systems to bring seamless automation into manufacturing, logistics, and other industrial sectors. With a strong focus on innovation, reliability, and scalability, we work closely with our clients to develop solutions that meet their exact requirements — whether it’s building a product from the ground up or upgrading existing systems. At Argynix, we believe in delivering precision-engineered products, on-time deployment, and unmatched technical support, making us the trusted partner for businesses seeking future-ready electronic and automation solutions.</p>
                    </div>
                </div>
            </Card>
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
              <Card key={value.title} className="text-center p-6 h-full shadow-lg border-0">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background text-primary mb-4">
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

      <section className="py-16 md:py-24">
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
                        data-ai-hint={member.hint}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                 </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-primary">{member.role}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
