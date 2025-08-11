
"use client"

import Link from "next/link"
import { Menu, CircuitBoard, Phone, Wifi, Factory, Bot, Sprout, HomeIcon, Briefcase, RadioTower, ChevronDown } from "lucide-react"
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

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
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                    <Link href="/services" className="font-semibold text-base">Our Services</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {servicesLinks.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>
                     <Link href="/products" className="font-semibold text-base">Our Products</Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                     <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] ">
                      {productsLinks.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
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
                        <SheetTitle asChild>
                            <Link href="/" className="flex items-center gap-2" onClick={() => setIsSheetOpen(false)}>
                            <CircuitBoard className="h-8 w-8 text-primary" />
                            <span className="font-bold text-2xl">Argynix</span>
                            </Link>
                        </SheetTitle>
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
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
