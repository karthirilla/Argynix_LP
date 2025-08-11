
"use client"

import Link from "next/link"
import { Menu, CircuitBoard, Phone, Wifi, Factory, Bot, Sprout, HomeIcon, Briefcase, RadioTower } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const servicesLinks = [
    { href: "/services/iot-development", title: "IOT Development", description: "IOT Connect", icon: <Wifi className="h-5 w-5" /> },
    { href: "/services/industrial-automation", title: "Industrial Automation", description: "Embedded Programming", icon: <Factory className="h-5 w-5" /> },
    { href: "/services/robotics-ai", title: "Robotics & AI", description: "PCB Design", icon: <Bot className="h-5 w-5" /> },
    { href: "/services/electronics-rd", title: "Electronics R&D", description: "Product Development", icon: <Sprout className="h-5 w-5" /> },
    { href: "/services/smart-home", title: "Smart Home", description: "Modern Living", icon: <HomeIcon className="h-5 w-5" /> },
    { href: "/services/agri-tech", title: "Agriculture Tech", description: "Smart Farming", icon: <Briefcase className="h-5 w-5" /> },
]

const productsLinks = [
    { href: "/products/argynix-iot", title: "Argynix IOT", description: "Remote Control v1.0", icon: <RadioTower className="h-5 w-5" /> },
]

export function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  const NavLink = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => (
    <Link
      href={href}
      className={cn("font-semibold text-base text-foreground/80 transition-colors hover:text-primary", className)}
    >
      {children}
    </Link>
  )

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center gap-2">
                <CircuitBoard className="h-8 w-8 text-primary" />
                <span className="font-bold text-2xl">Argynix</span>
            </Link>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center gap-6 text-sm font-medium">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 font-semibold text-base text-foreground/80 transition-colors hover:text-primary">
                  Our Services
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {servicesLinks.map((link) => (
                    <DropdownMenuItem key={link.title} asChild>
                         <Link href={link.href} className="w-full flex items-center gap-2">
                            {link.icon}
                            <div className="flex flex-col">
                                <span className="font-semibold">{link.title}</span>
                                <span className="text-sm text-muted-foreground">{link.description}</span>
                            </div>
                        </Link>
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 font-semibold text-base text-foreground/80 transition-colors hover:text-primary">
                  Our Products
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {productsLinks.map((link) => (
                    <DropdownMenuItem key={link.title} asChild>
                         <Link href={link.href} className="w-full flex items-center gap-2">
                            {link.icon}
                            <div className="flex flex-col">
                                <span className="font-semibold">{link.title}</span>
                                <span className="text-sm text-muted-foreground">{link.description}</span>
                            </div>
                        </Link>
                    </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink href="/documents">Documents</NavLink>
            <NavLink href="/innovations">Innovations</NavLink>

        </nav>

        <div className="flex items-center justify-end gap-4">
          <Button asChild variant="ghost" className="hidden md:flex items-center gap-2">
            <Link href="/contact">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">Contact</span>
            </Link>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsSheetOpen(false)}>
                  <CircuitBoard className="h-8 w-8 text-primary" />
                  <span className="font-bold text-2xl">Argynix</span>
                </Link>
                <nav className="grid gap-4">
                  <Link href="/" onClick={() => setIsSheetOpen(false)} className="text-lg font-medium transition-colors hover:text-primary">Home</Link>
                  <Link href="/about" onClick={() => setIsSheetOpen(false)} className="text-lg font-medium transition-colors hover:text-primary">About</Link>
                  <Link href="/portfolio" onClick={() => setIsSheetOpen(false)} className="text-lg font-medium transition-colors hover:text-primary">Portfolio</Link>
                  
                  <h3 className="font-bold text-lg mt-2">Our Services</h3>
                   {servicesLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      onClick={() => setIsSheetOpen(false)}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {link.title}
                    </Link>
                  ))}

                  <h3 className="font-bold text-lg mt-2">Our Products</h3>
                   {productsLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      onClick={() => setIsSheetOpen(false)}
                      className="text-lg font-medium transition-colors hover:text-primary"
                    >
                      {link.title}
                    </Link>
                  ))}
                  
                  <Link href="/documents" onClick={() => setIsSheetOpen(false)} className="text-lg font-medium transition-colors hover:text-primary mt-2">Documents</Link>
                  <Link href="/innovations" onClick={() => setIsSheetOpen(false)} className="text-lg font-medium transition-colors hover:text-primary">Innovations</Link>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
