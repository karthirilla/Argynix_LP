import { ContactForm } from "@/components/contact-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="relative bg-secondary pt-20 pb-28">
         <div className="cs-shape cs-shape-bottom cs-shape-curve bg-background">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
               <path fill="currentColor" d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z"></path>
            </svg>
         </div>
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Contact Us</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We'd love to hear from you. Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-7xl px-4 -mt-20">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="card h-full border-0 shadow-lg py-4 bg-card">
                  <div className="card-body text-center p-6">
                     <MapPin className="mb-4 text-primary mx-auto h-10 w-10" />
                     <h3 className="text-lg font-semibold mb-2">Address, Location</h3>
                     <p className="text-sm text-muted-foreground mb-2">1/167 Attavanith Thottam, Grey Nagar, Erode, TamilNadu-638 056.</p>
                     <a className="text-primary text-sm font-medium hover:underline" href="https://maps.google.com" target="_blank" rel="noopener noreferrer">See on the map</a>
                  </div>
               </div>
               <div className="card h-full border-0 shadow-lg py-4 bg-card">
                  <div className="card-body text-center p-6">
                     <Clock className="mb-4 text-primary mx-auto h-10 w-10" />
                     <h3 className="text-lg font-semibold mb-2">Working hours</h3>
                     <ul className="list-none text-sm text-muted-foreground m-0 p-0">
                        <li>Monday - Sunday</li>
                        <li>9.30am - 6.00pm </li>
                     </ul>
                  </div>
               </div>
               <div className="card h-full border-0 shadow-lg py-4 bg-card">
                  <div className="card-body text-center p-6">
                     <Phone className="mb-4 text-primary mx-auto h-10 w-10" />
                     <h3 className="text-lg font-semibold mb-2">Phone numbers</h3>
                     <ul className="list-none text-sm text-muted-foreground m-0 p-0">
                        <li><a className="text-primary hover:underline" href="tel:+917708580558">77085 80558</a></li>
                        <li><a className="text-primary hover:underline" href="tel:+917708883764">77088 83764</a></li>
                     </ul>
                  </div>
               </div>
               <div className="card h-full border-0 shadow-lg py-4 bg-card">
                  <div className="card-body text-center p-6">
                     <Mail className="mb-4 text-primary mx-auto h-10 w-10" />
                     <h3 className="text-lg font-semibold mb-2">Email address</h3>
                     <ul className="list-none text-sm text-muted-foreground m-0 p-0">
                        <li><a className="text-primary hover:underline" href="mailto:contact@argynix.com">contact@argynix.com</a></li>
                     </ul>
                  </div>
               </div>
         </div>
      </section>
      
      <section className="container mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="h-full">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.6916881708808!2d77.48626177477209!3d11.28405914962583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba91338ec44a113%3A0x3447cb1cd57f6d8d!2sAttavanith%20Thottam!5e0!3m2!1sen!2sin!4v1754694241331!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, minHeight: '400px' }}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-lg"
                ></iframe>
            </div>
            
            <div className="rounded-lg border bg-card p-8 shadow-sm">
                <h2 className="text-3xl font-bold mb-6">Drop us a line</h2>
                <ContactForm />
            </div>

          </div>
      </section>
    </div>
  )
}
