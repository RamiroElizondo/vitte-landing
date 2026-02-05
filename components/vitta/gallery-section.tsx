"use client"

import Image from "next/image"

const galleryImages = [
  { src: "/images/gallery-1.jpg", alt: "Interior del café Vitta" },
  { src: "/images/gallery-2.jpg", alt: "Preparación de café" },
  { src: "/images/gallery-3.jpg", alt: "Taza de café especial" },
  { src: "/images/gallery-4.jpg", alt: "Ambiente Vitta" },
  { src: "/images/gallery-5.jpg", alt: "Detalle del café" },
  { src: "/images/gallery-6.jpg", alt: "Barra de Vitta" },
]

export function GallerySection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            La Experiencia Vitta
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Cada rincón de nuestro espacio está pensado para hacerte sentir en casa.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-xl group ${
                index === 0 || index === 5 ? "md:col-span-1 md:row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
