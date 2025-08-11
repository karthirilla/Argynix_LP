import Link from "next/link"
import { CircuitBoard, Facebook, Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <CircuitBoard className="h-8 w-8 text-primary-foreground" />
              <span className="text-2xl font-bold">Argynix</span>
            </Link>
            <div className="flex items-center gap-4 mt-6">
              <Link href="#" aria-label="Facebook" className="text-primary-foreground/70 hover:text-primary-foreground">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-primary-foreground/70 hover:text-primary-foreground">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-primary-foreground/70 hover:text-primary-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="mailto:contact@argynix.com" aria-label="Mail" className="text-primary-foreground/70 hover:text-primary-foreground">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="lg:col-start-3">
            <h4 className="font-semibold mb-4 text-primary-foreground">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-primary-foreground/70 hover:text-primary-foreground">Home</Link></li>
              <li><Link href="/about" className="text-primary-foreground/70 hover:text-primary-foreground">About</Link></li>
              <li><Link href="/portfolio" className="text-primary-foreground/70 hover:text-primary-foreground">Portfolio</Link></li>
              <li><Link href="/services" className="text-primary-foreground/70 hover:text-primary-foreground">Products</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Our Services</h4>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-primary-foreground/70 hover:text-primary-foreground">IOT Solutions</Link></li>
              <li><Link href="/services" className="text-primary-foreground/70 hover:text-primary-foreground">Software</Link></li>
              <li><Link href="/services" className="text-primary-foreground/70 hover:text-primary-foreground">Hardware</Link></li>
              <li><Link href="/services" className="text-primary-foreground/70 hover:text-primary-foreground">Product</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">Quick Links</h4>
            <ul className="space-y-2">
               <li><Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground">Documents</Link></li>
               <li><Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground">Careers</Link></li>
               <li><Link href="#" className="text-primary-foreground/70 hover:text-primary-foreground">Policies</Link></li>
               <li><Link href="/contact" className="text-primary-foreground/70 hover:text-primary-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>
        <hr className="border-primary-foreground/20 my-8" />
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/70">
          <p>Copyrights © {new Date().getFullYear()} <Link href="/" className="hover:text-primary-foreground">Argynix</Link></p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
