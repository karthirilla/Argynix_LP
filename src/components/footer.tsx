import Link from "next/link"
import { CircuitBoard, Github, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="flex items-center gap-2">
              <CircuitBoard className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Argynix</span>
            </Link>
            <p className="max-w-md text-center text-muted-foreground md:text-left">
              Pioneering Tomorrow's Technology, Today. Your partner in IoT, Automation, and Electronics.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 md:items-end">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium md:justify-end">
              <Link href="/about" className="hover:text-primary">About Us</Link>
              <Link href="/services" className="hover:text-primary">Services</Link>
              <Link href="/portfolio" className="hover:text-primary">Portfolio</Link>
              <Link href="/contact" className="hover:text-primary">Contact</Link>
            </nav>
            <div className="flex items-center gap-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Argynix Digital Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
