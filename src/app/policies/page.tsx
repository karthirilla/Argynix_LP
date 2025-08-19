
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Shield, FileText, Cookie } from "lucide-react";

const policies = [
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Privacy Policy",
    lastUpdated: "2024-09-12",
    content: [
      {
        question: "1. Information We Collect",
        answer: "We collect information you provide directly to us, such as when you create an account, fill out a form, or communicate with us. This may include personal information such as your name, email address, phone number, and any other information you choose to provide. We may also collect information automatically when you use our services, such as your IP address, browser type, and operating system."
      },
      {
        question: "2. How We Use Your Information",
        answer: "We use the information we collect to provide, maintain, and improve our services, to process transactions, to send you technical notices, updates, and support messages, and to communicate with you about products, services, offers, and events offered by Argynix and others."
      },
      {
        question: "3. Sharing of Information",
        answer: "We do not share your personal information with third parties except as described in this Privacy Policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf."
      }
    ]
  },
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Terms of Service",
    lastUpdated: "2024-09-12",
    content: [
      {
        question: "1. Agreement to Terms",
        answer: "By using our Services, you agree to be bound by these Terms. If you don’t agree to be bound by these Terms, do not use the Services. If you are accessing and using the Services on behalf of a company (such as your employer) or other legal entity, you represent and warrant that you have the authority to bind that entity to these Terms."
      },
      {
        question: "2. Changes to Terms or Services",
        answer: "We may modify the Terms at any time, in our sole discretion. If we do so, we’ll let you know either by posting the modified Terms on the Site or through other communications. It’s important that you review the Terms whenever we modify them because if you continue to use the Services after we have posted modified Terms on the Site, you are indicating to us that you agree to be bound by the modified Terms."
      },
      {
        question: "3. User Conduct",
        answer: "You agree not to use the Services for any purpose that is illegal or prohibited by these Terms. You agree not to use the Services in any manner that could damage, disable, overburden, or impair any Argynix server, or the network(s) connected to any Argynix server."
      }
    ]
  },
  {
    icon: <Cookie className="h-8 w-8 text-primary" />,
    title: "Cookie Policy",
    lastUpdated: "2024-09-12",
    content: [
      {
        question: "1. What Are Cookies?",
        answer: "Cookies are small data files stored on your hard drive or in device memory that help us improve our Services and your experience, see which areas and features of our Services are popular, and count visits. We use cookies to provide and improve our services."
      },
      {
        question: "2. Your Choices",
        answer: "Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove or reject browser cookies. Please note that if you choose to remove or reject cookies, this could affect the availability and functionality of our Services."
      }
    ]
  }
];

export default function PoliciesPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Company Policies</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our commitment to transparency, security, and trust.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="space-y-12">
            {policies.map((policy) => (
              <Card key={policy.title} className="shadow-lg border-0">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div className="flex items-center gap-4 mb-4 sm:mb-0">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                        {policy.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl md:text-3xl">{policy.title}</CardTitle>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 whitespace-nowrap">
                      Last Updated: {policy.lastUpdated}
                    </p>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {policy.content.map((item, index) => (
                      <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-lg font-semibold text-left">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground pt-2">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
