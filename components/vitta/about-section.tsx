"use client"

import { Coffee, Users, Sparkles } from "lucide-react"

const features = [
  {
    icon: Coffee,
    title: "Café de calidad",
    description: "Granos seleccionados y preparados con pasión para darte la mejor experiencia.",
  },
  {
    icon: Users,
    title: "Punto de encuentro",
    description: "Un espacio pensado para conectar, trabajar o simplemente disfrutar.",
  },
  {
    icon: Sparkles,
    title: "Ambiente relajado",
    description: "Diseñado para que te sientas cómodo desde el primer momento.",
  },
]

export function AboutSection() {
  return (
    <section id="vitta" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Qué es Vitta
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Vitta es más que un café. Es un lugar donde cada taza cuenta una historia, 
            donde los encuentros cobran vida y donde tu pausa se convierte en un momento especial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group text-center p-8 rounded-2xl bg-card hover:bg-secondary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
