
"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, CircuitBoard, Phone, RadioTower, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const servicesLinks = [
    { href: "/services/iot-development", title: "IOT Development", description: "End-to-end IoT solutions.", image: "https://placehold.co/40x40.png" },
    { href: "/services/industrial-automation", title: "Industrial Automation", description: "Advanced automation.", image: "https://placehold.co/40x40.png" },
    { href: "/services/robotics-ai", title: "Robotics & AI", description: "Streamline operations.", image: "https://placehold.co/40x40.png" },
    { href: "/services/electronics-rd", title: "Electronics R&D", description: "Custom electronics design.", image: "https://placehold.co/40x40.png" },
    { href: "/services/smart-home", title: "Smart Home", description: "Solutions for modern living.", image: "https://placehold.co/40x40.png" },
    { href: "/services/agri-tech", title: "Agriculture Tech", description: "Improve yield and sustainability.", image: "https://placehold.co/40x40.png" },
]

const productsLinks = [
    { href: "/products/argynix-iot", title: "Argynix IoT", description: "Remote control platform.", image: "https://placehold.co/40x40.png" },
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
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    onMouseEnter={() => setServicesMenuOpen(true)}
                    onMouseLeave={() => setServicesMenuOpen(false)}
                  >
                    <Link href="/services" className="font-semibold text-base flex items-center gap-1">Our Services</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent 
                    onMouseEnter={() => setServicesMenuOpen(true)} 
                    onMouseLeave={() => setServicesMenuOpen(false)}
                    >
                    <ul className="grid w-[300px] gap-3 p-4">
                      {servicesLinks.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                          image={component.image}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                     onMouseEnter={() => setProductsMenuOpen(true)}
                     onMouseLeave={() => setProductsMenuOpen(false)}
                  >
                     <Link href="/products" className="font-semibold text-base flex items-center gap-1">Our Products</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent
                     onMouseEnter={() => setProductsMenuOpen(true)}
                     onMouseLeave={() => setProductsMenuOpen(false)}
                  >
                     <ul className="grid w-[300px] gap-3 p-4">
                      {productsLinks.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                          image={component.image}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

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
            <SheetContent side="right" className="w-full max-w-sm p-0">
               <ScrollArea className="h-full">
                  <div className="flex flex-col p-6">
                    <SheetHeader className="border-b pb-4 mb-4 text-left">
                        <SheetTitle className="sr-only">Mobile Navigation Menu</SheetTitle>
                        <Link href="/" className="flex items-center gap-2" onClick={() => setIsSheetOpen(false)}>
                        <CircuitBoard className="h-8 w-8 text-primary" />
                        <span className="font-bold text-2xl">Argynix</span>
                        </Link>
                    </SheetHeader>
                    <nav className="flex flex-col gap-2">
                      <Link href="/" onClick={() => setIsSheetOpen(false)} className="py-2 text-lg font-medium transition-colors hover:text-primary">Home</Link>
                      <Link href="/about" onClick={() => setIsSheetOpen(false)} className="py-2 text-lg font-medium transition-colors hover:text-primary">About</Link>
                      <Link href="/portfolio" onClick={() => setIsSheetOpen(false)} className="py-2 text-lg font-medium transition-colors hover:text-primary">Portfolio</Link>
                      
                       <Accordion type="multiple" className="w-full">
                        <AccordionItem value="services">
                           <AccordionTrigger className="py-2 text-lg font-medium hover:no-underline">
                             <Link href="/services" onClick={() => setIsSheetOpen(false)}>Our Services</Link>
                           </AccordionTrigger>
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
                           <AccordionTrigger className="py-2 text-lg font-medium hover:no-underline">
                             <Link href="/products" onClick={() => setIsSheetOpen(false)}>Our Products</Link>
                           </AccordionTrigger>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { image: string }
>(({ className, title, children, image, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-4">
             <Image 
                src={image} 
                alt={title || "list item image"}
                width={40}
                height={40}
                className="rounded-md"
             />
            <div>
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
