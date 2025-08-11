
"use client"

import Link from "next/link"
import { Menu, CircuitBoard, Phone, Wifi, Factory, Bot, Sprout, HomeIcon, Briefcase, RadioTower } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false)
  const [productsMenuOpen, setProductsMenuOpen] = useState(false)

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
            
            <DropdownMenu open={servicesMenuOpen} onOpenChange={setServicesMenuOpen}>
              <DropdownMenuTrigger asChild>
                <button 
                    onMouseEnter={() => setServicesMenuOpen(true)}
                    onMouseLeave={() => setServicesMenuOpen(false)}
                    className="flex items-center gap-1 font-semibold text-base text-foreground/80 transition-colors hover:text-primary">
                  Our Services
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent onMouseEnter={() => setServicesMenuOpen(true)} onMouseLeave={() => setServicesMenuOpen(false)}>
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

            <DropdownMenu open={productsMenuOpen} onOpenChange={setProductsMenuOpen}>
              <DropdownMenuTrigger asChild>
                 <button 
                    onMouseEnter={() => setProductsMenuOpen(true)}
                    onMouseLeave={() => setProductsMenuOpen(false)}
                    className="flex items-center gap-1 font-semibold text-base text-foreground/80 transition-colors hover:text-primary">
                  Our Products
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent onMouseEnter={() => setProductsMenuOpen(true)} onMouseLeave={() => setProductsMenuOpen(false)}>
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
            <SheetContent side="right" className="w-full max-w-sm">
              <SheetHeader className="border-b pb-4">
                  <SheetTitle asChild>
                    <Link href="/" className="flex items-center gap-2" onClick={() => setIsSheetOpen(false)}>
                      <CircuitBoard className="h-8 w-8 text-primary" />
                      <span className="font-bold text-2xl">Argynix</span>
                    </Link>
                  </SheetTitle>
              </SheetHeader>
               <ScrollArea className="h-[calc(100vh-80px)]">
                  <div className="flex flex-col p-6">
                    <nav className="flex flex-col gap-2">
                      <Link href="/" onClick={() => setIsSheetOpen(false)} className="py-2 text-lg font-medium transition-colors hover:text-primary">Home</Link>
                      <Link href="/about" onClick={() => setIsSheetOpen(false)} className="py-2 text-lg font-medium transition-colors hover:text-primary">About</Link>
                      <Link href="/portfolio" onClick={() => setIsSheetOpen(false)} className="py-2 text-lg font-medium transition-colors hover:text-primary">Portfolio</Link>
                      
                       <Accordion type="multiple" className="w-full">
                        <AccordionItem value="services">
                           <AccordionTrigger className="py-2 text-lg font-medium hover:no-underline">Our Services</AccordionTrigger>
                           <AccordionContent className="pl-4">
                               <nav className="flex flex-col gap-2">
                                   {servicesLinks.map((link) => (
                                    <Link
                                      key={link.title}
                                      href={link.href}
                                      onClick={() => setIsSheetOpen(false)}
                                      className="py-2 text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                                    >
                                      {link.title}
                                    </Link>
                                  ))}
                               </nav>
                           </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="products">
                           <AccordionTrigger className="py-2 text-lg font-medium hover:no-underline">Our Products</AccordionTrigger>
                           <AccordionContent className="pl-4">
                               <nav className="flex flex-col gap-2">
                                {productsLinks.map((link) => (
                                    <Link
                                      key={link.title}
                                      href={link.href}
                                      onClick={() => setIsSheetOpen(false)}
                                      className="py-2 text-base font-medium text-muted-foreground transition-colors hover:text-primary"
                                    >
                                      {link.title}
                                    </Link>
                                  ))}
                               </nav>
                           </AccordionContent>
                        </AccordionItem>
                       </Accordion>
                      
                      <Link href="/documents" onClick={() => setIsSheetOpen(false)} className="py-2 text-lg font-medium transition-colors hover:text-primary mt-2">Documents</Link>
                      <Link href="/innovations" onClick={() => setIsSheetOpen(false)} className="py-2 text-lg font-medium transition-colors hover:text-primary">Innovations</Link>

                      <Button asChild variant="outline" className="mt-4">
                        <Link href="/contact" onClick={() => setIsSheetOpen(false)}>
                          <Phone className="h-5 w-5" />
                          <span className="font-semibold">Contact</span>
                        </Link>
                      </Button>
                    </nav>
                  </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
