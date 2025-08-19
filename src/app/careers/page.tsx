
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, ArrowRight, Building, Users, Award, Coffee, Heart, Lightbulb } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Argynix | Join Our Team",
  description: "Explore career opportunities at Argynix. We're looking for passionate and innovative individuals to join our team and help us build the future of technology. View our open positions.",
};

const jobOpenings = [
  {
    title: "Senior IoT Engineer",
    location: "Erode, TamilNadu (On-site)",
    type: "Full-time",
    category: "Engineering",
    href: "#",
  },
  {
    title: "Embedded Systems Developer",
    location: "Erode, TamilNadu (On-site)",
    type: "Full-time",
    category: "Engineering",
    href: "#",
  },
  {
    title: "React Native Developer",
    location: "Remote",
    type: "Contract",
    category: "Software",
    href: "#",
  },
   {
    title: "Marketing Manager",
    location: "Erode, TamilNadu (Hybrid)",
    type: "Full-time",
    category: "Marketing",
    href: "#",
  },
];

const benefits = [
    {
        icon: <Award className="h-8 w-8 text-primary" />,
        title: "Competitive Salary",
        description: "We offer competitive compensation packages to attract and retain top talent."
    },
    {
        icon: <Heart className="h-8 w-8 text-primary" />,
        title: "Health & Wellness",
        description: "Comprehensive health insurance and programs to support your well-being."
    },
    {
        icon: <Lightbulb className="h-8 w-8 text-primary" />,
        title: "Continuous Learning",
        description: "Opportunities for professional development, workshops, and courses."
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Collaborative Culture",
        description: "A supportive and inclusive environment where every voice is heard."
    },
     {
        icon: <Coffee className="h-8 w-8 text-primary" />,
        title: "Flexible Work",
        description: "We support flexible work arrangements to help you find work-life balance."
    },
    {
        icon: <Building className="h-8 w-8 text-primary" />,
        title: "Modern Workplace",
        description: "A state-of-the-art office designed for creativity and collaboration."
    },
]

export default function CareersPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Join Our Team</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We're looking for passionate, innovative individuals to help us build the future of technology. Explore our open positions and find your next opportunity.
          </p>
        </div>
      </section>

      <section id="open-positions" className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-12">Current Openings</h2>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <Card key={job.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                      <h3 className="text-xl font-semibold hover:text-primary transition-colors">
                        <Link href={job.href}>{job.title}</Link>
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-4 sm:mt-0">
                       <Badge variant="secondary">{job.category}</Badge>
                       <Button asChild>
                         <Link href={job.href}>Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                       </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
       <section id="benefits" className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Work With Us?</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We invest in our people. Here are some of the benefits of joining Argynix.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="text-center p-6 border-0 shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      {benefit.icon}
                  </div>
                  <CardHeader>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
           <div className="rounded-lg bg-primary p-8 text-center text-primary-foreground md:p-12">
                <h2 className="text-3xl font-bold">Don't See a Fit?</h2>
                <p className="mt-4 max-w-xl mx-auto text-lg">
                    We're always looking for talented people. Send us your resume and we'll keep you in mind for future roles.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg" variant="secondary">
                        <Link href="mailto:careers@argynix.com">Submit Your Resume</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}
