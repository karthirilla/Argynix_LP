
import Image from "next/image"
import { RadioTower } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card"

const products = [
  {
    icon: <RadioTower className="h-8 w-8 text-primary" />,
    title: "Argynix IoT - V 4.1",
    description: "A powerful, flexible, and easy-to-use platform for remote monitoring and control of your critical assets.",
    href: "/products/argynix-iot",
  },
];

export default function ProductsPage() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Products</h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our range of innovative products designed to bring your projects to life, from IoT solutions to custom hardware.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl px-4">
           <div className="grid gap-8 sm:grid-cols-1">
            {products.map((product) => (
              <Card key={product.title} className="text-center p-6 h-full hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                      {product.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                  </div>
                  <div className="mt-auto flex justify-center gap-4">
                    <Button asChild variant="link">
                        <Link href={product.href}>View Product</Link>
                    </Button>
                    <Button asChild>
                        <Link href="https://iot.argynix.in/" target="_blank">Live Demo</Link>
                    </Button>
                  </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="w-full py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-7xl px-4">
            <div className="rounded-lg bg-primary p-8 text-center text-primary-foreground md:p-12">
                <h2 className="text-3xl font-bold">Have a custom product in mind?</h2>
                <p className="mt-4 max-w-xl mx-auto text-lg">
                    Our team is ready to collaborate with you to build it from the ground up.
                </p>
                <div className="mt-8">
                    <Button asChild size="lg" variant="secondary">
                        <Link href="/contact">Let's Talk</Link>
                    </Button>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
