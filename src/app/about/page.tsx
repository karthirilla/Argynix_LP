import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, Eye } from "lucide-react";

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

export default function AboutPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-card/50 py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">About Argynix</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            We are a team of passionate engineers, designers, and problem-solvers dedicated to shaping the future of technology through innovative electronics and automation solutions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our Mission</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                To empower businesses across industries by providing intelligent, connected, and automated solutions that drive efficiency, productivity, and growth. We believe in leveraging technology to solve real-world problems and create a smarter, more connected world.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Our Vision</h2>
              <p className="mt-4 text-lg text-muted-foreground">
                To be a global leader in IoT and automation technology, recognized for our innovation, quality, and commitment to client success. We envision a future where our solutions are integral to the seamless functioning of industries and everyday life.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="bg-card/50 py-16 md:py-24">
         <div className="container mx-auto max-w-7xl px-4">
            <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Core Values</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg">
                    The principles that guide our work and culture.
                </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
                {values.map((value) => (
                    <Card key={value.title} className="text-center">
                        <CardHeader>
                            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                {value.icon}
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-2">
                        <h3 className="text-xl font-semibold">{value.title}</h3>
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
          <div className="mt-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center overflow-hidden group">
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
