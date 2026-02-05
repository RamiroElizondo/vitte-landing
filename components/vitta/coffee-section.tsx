"use client"

import Image from "next/image"

const coffeeItems = [
  {
    title: "Café Caliente",
    description: "Espresso, americano, cortado y más",
    image: "/images/cafe-caliente.jpg",
  },
  {
    title: "Café Frío",
    description: "Cold brew, frappé, iced latte",
    image: "/images/cafe-frio.jpg",
  },
  {
    title: "De Origen",
    description: "Granos especiales de cafetales selectos",
    image: "/images/cafe-origen.jpg",
  },
]

export function CoffeeSection() {
  return (
    <section id="cafe" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nuestro Café
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Cada preparación es un ritual. Descubrí los sabores que hacen de Vitta una experiencia única.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {coffeeItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-sm hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="font-display text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
