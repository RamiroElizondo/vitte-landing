import { Header } from "@/components/vitta/header"
import { Hero } from "@/components/vitta/hero"
import { AboutSection } from "@/components/vitta/about-section"
import { CoffeeSection } from "@/components/vitta/coffee-section"
import { BrandSection } from "@/components/vitta/brand-section"
import { GallerySection } from "@/components/vitta/gallery-section"
import { LocationSection } from "@/components/vitta/location-section"
import { Footer } from "@/components/vitta/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutSection />
      <CoffeeSection />
      <BrandSection />
      <GallerySection />
      <LocationSection />
      <Footer />
    </main>
  )
}
