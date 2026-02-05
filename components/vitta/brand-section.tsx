"use client"

export function BrandSection() {
  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-primary-foreground">
          <path d="M50 10C30 30 20 50 25 70C30 90 50 95 70 80C90 65 85 35 70 20C55 5 50 10 50 10Z" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 w-40 h-40 opacity-10">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-primary-foreground">
          <path d="M50 10C30 30 20 50 25 70C30 90 50 95 70 80C90 65 85 35 70 20C55 5 50 10 50 10Z" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 opacity-5">
        <svg viewBox="0 0 100 100" fill="currentColor" className="text-primary-foreground">
          <path d="M50 10C30 30 20 50 25 70C30 90 50 95 70 80C90 65 85 35 70 20C55 5 50 10 50 10Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            <span className="text-balance">"Tu pausa merece ser especial"</span>
          </blockquote>
          <p className="text-primary-foreground/80 text-lg md:text-xl mt-8">
            En Vitta creemos que cada momento con café es una oportunidad para conectar contigo mismo y con los demás.
          </p>
        </div>
      </div>
    </section>
  )
}
