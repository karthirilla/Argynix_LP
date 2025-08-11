
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, Eye, Building, Star, Users, Phone, Briefcase, CheckSquare } from "lucide-react";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "https://placehold.co/400x400.png",
    hint: "professional portrait",
  },
  {
    name: "Jane Smith",
    role: "CTO & Lead Engineer",
    image: "https://placehold.co/400x400.png",
    hint: "woman engineer",
  },
  {
    name: "Peter Jones",
    role: "Head of Automation",
    image: "https://placehold.co/400x400.png",
    hint: "man in office",
  },
  {
    name: "Mary Williams",
    role: "Lead Product Designer",
    image: "https://placehold.co/400x400.png",
    hint: "woman designer",
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
        icon: <Building className="h-8 w-8 text-primary" />,
        title: "Innovators' Hub",
    },
    {
        icon: <Star className="h-8 w-8 text-primary" />,
        title: "Your Time, Your Flow",
    },
    {
        icon: <CheckSquare className="h-8 w-8 text-primary" />,
        title: "Hands-On Lab Access",
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Comfort First",
    },
    {
        icon: <Briefcase className="h-8 w-8 text-primary" />,
        title: "Skill Acceleration",
    },
    {
        icon: <Phone className="h-8 w-8 text-primary" />,
        title: "Future Builders",
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

       <section id="how-we-are" className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="hidden md:block">
                     <Image src="https://placehold.co/600x400.png" alt="How We Are" width={600} height={400} data-ai-hint="team working" className="rounded-lg" />
                </div>
                 <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12">How We Are</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {benefits.map((benefit) => (
                            <div key={benefit.title} className="text-center">
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-background text-primary mb-3">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-base font-semibold">{benefit.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
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
          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center overflow-hidden group border-0 shadow-lg">
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
