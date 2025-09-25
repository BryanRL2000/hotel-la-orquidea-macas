"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WhatsappIcon } from "./whatsapp-icon"

export function FloatingWhatsappButton() {
  const whatsappNumber = "+593994979605" // Número actualizado del hotel
  const whatsappMessage = encodeURIComponent("Hola, me gustaría consultar sobre una reserva en el Hotel La Orquídea.")

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chatear con nosotros en WhatsApp"
      >
        <Button
          size="icon"
          className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-transform duration-200 hover:scale-110 flex items-center justify-center"
        >
          <WhatsappIcon className="h-8 w-8" />
        </Button>
      </Link>
    </div>
  )
}
