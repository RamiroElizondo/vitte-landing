"use client"

import { MessageCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CoffeeBeans } from "./coffee-beans"
import Link from "next/link"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <CoffeeBeans />
      
      {/* Decorative leaves */}
      <div className="absolute top-20 left-10 w-20 h-20 opacity-20 text-accent animate-float" style={{ animationDelay: "0s" }}>
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10C30 30 20 50 25 70C30 90 50 95 70 80C90 65 85 35 70 20C55 5 50 10 50 10Z" />
        </svg>
      </div>
      <div className="absolute bottom-40 right-10 w-16 h-16 opacity-15 text-primary animate-float" style={{ animationDelay: "2s" }}>
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10C30 30 20 50 25 70C30 90 50 95 70 80C90 65 85 35 70 20C55 5 50 10 50 10Z" />
        </svg>
      </div>
      <div className="absolute top-1/3 right-20 w-12 h-12 opacity-10 text-accent animate-float" style={{ animationDelay: "4s" }}>
        <svg viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 10C30 30 20 50 25 70C30 90 50 95 70 80C90 65 85 35 70 20C55 5 50 10 50 10Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* Logo */}
          <div className="mb-8 animate-fade-in-up">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
              <div className="text-center">
                <span className="font-display text-primary-foreground font-bold text-3xl md:text-4xl block">Vitta</span>
                <span className="font-sans text-primary-foreground/80 text-xs uppercase tracking-widest">café</span>
              </div>
            </div>
          </div>

          {/* Main headline */}
          <h1 
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-balance">Café que se vive</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-muted-foreground text-lg md:text-xl mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            café · encuentro · experiencia
          </p>

          {/* CTAs */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button 
              asChild 
              size="lg" 
              className="rounded-full gap-2 text-base px-8 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30"
            >
              <a
                href="https://wa.me/5492646236181"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                Escribinos por WhatsApp
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="rounded-full text-base px-8 border-primary/30 text-foreground hover:bg-secondary bg-transparent"
            >
              <Link href="#vitta">
                Conocé Vitta
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#vitta" aria-label="Ir a la siguiente sección">
          <ChevronDown className="w-8 h-8 text-primary/60" />
        </Link>
      </div>
    </section>
  )
}
