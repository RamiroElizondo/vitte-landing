import React from "react"
import type { Metadata } from 'next'
import { Quicksand, Poppins } from 'next/font/google'

import './globals.css'

const quicksand = Quicksand({ 
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vitta Café | Tu pausa, tu café',
  description: 'Café de especialidad en San Juan. Un espacio para disfrutar, encontrarte y vivir la experiencia del buen café.',
  keywords: ['café', 'coffee', 'San Juan', 'café de especialidad', 'Vitta'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${quicksand.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
