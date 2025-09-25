import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { FloatingWhatsappButton } from "@/components/floating-whatsapp-button"
import { TopContactBar } from "@/components/top-contact-bar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hotel La Orquídea - Tu Oasis en la Amazonía",
  description:
    "Descubre el Hotel La Orquídea en Macas, Morona Santiago. Tu refugio de tranquilidad y aventura en el corazón de la Amazonía ecuatoriana. Habitaciones cómodas, tours emocionantes y una experiencia inolvidable.",
  keywords: [
    "Hotel La Orquídea",
    "Macas",
    "Morona Santiago",
    "Amazonía",
    "Ecuador",
    "hotel",
    "reservas",
    "turismo",
    "naturaleza",
    "aventura",
    "alojamiento",
  ],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <TopContactBar />
        {children}
        <FloatingWhatsappButton />
      </body>
    </html>
  )
}
