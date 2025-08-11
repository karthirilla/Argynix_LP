import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-card/50 py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Get in Touch</h2>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-md bg-primary/10 p-3 text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-muted-foreground">Send us an email for inquiries.</p>
                  <a href="mailto:contact@argynix.com" className="font-medium text-primary hover:underline">
                    contact@argynix.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-md bg-primary/10 p-3 text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-muted-foreground">Give us a call during business hours.</p>
                  <a href="tel:+1234567890" className="font-medium text-primary hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-md bg-primary/10 p-3 text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Office</h3>
                  <p className="text-muted-foreground">123 Tech Avenue, Innovation City, 45678</p>
                </div>
              </div>
            </div>
            
            <div className="rounded-lg border bg-card p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
