"use client"

import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2 mb-6">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
              <div className="text-center">
                <span className="font-display text-primary-foreground font-bold text-xl block">V</span>
              </div>
            </div>
          </Link>

          <p className="font-display text-xl md:text-2xl font-medium mb-8 text-primary-foreground/90">
            Vitta Café
          </p>

          {/* Social links */}
          <div className="flex items-center gap-6 mb-8">
            <a
              href="https://www.instagram.com/vittacafe.sj/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/50 transition-colors"
              aria-label="Instagram de Vitta Café"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5492646236181"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary/50 transition-colors"
              aria-label="WhatsApp de Vitta Café"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>

          {/* Brand phrase */}
          <p className="text-primary-foreground/60 text-sm mb-8">
            "Donde cada taza es una pausa que vale la pena"
          </p>

          {/* Copyright */}
          <p className="text-primary-foreground/40 text-xs">
            © {new Date().getFullYear()} Vitta Café. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
