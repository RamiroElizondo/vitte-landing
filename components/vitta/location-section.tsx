"use client"

import { MapPin, Clock, MessageCircle, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

export function LocationSection() {
  return (
    <section id="ubicacion" className="py-20 md:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Visitanos
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Te esperamos con una taza lista para vos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Dirección
                  </h3>
                  <p className="text-muted-foreground">
                    San Juan, Argentina
                    <br />
                    <span className="text-sm">(Dirección completa próximamente)</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    Horarios
                  </h3>
                  <p className="text-muted-foreground">
                    Lunes a Viernes: 8:00 - 20:00
                    <br />
                    Sábados: 9:00 - 14:00
                    <br />
                    Domingos: Cerrado
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="rounded-full gap-2 bg-primary hover:bg-primary/90"
                >
                  <a
                    href="https://wa.me/5492646236181"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Escribinos
                  </a>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg" 
                  className="rounded-full gap-2 border-primary/30 text-foreground hover:bg-secondary bg-transparent"
                >
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-5 h-5" />
                    Cómo llegar
                  </a>
                </Button>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden bg-secondary">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground">
                    Mapa próximamente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
