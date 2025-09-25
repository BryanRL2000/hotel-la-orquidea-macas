import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { ReservationPageSection } from "@/components/reservation-page-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reservas - Hotel La Orquídea",
  description:
    "Reserva tu estancia en Hotel La Orquídea, Macas. Formulario de reservas, contacto directo por WhatsApp y ubicación en Google Maps.",
  keywords: ["reservas", "Hotel La Orquídea", "Macas", "Morona Santiago", "Amazonía", "Ecuador", "WhatsApp"],
}

export default function ReservasPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1">
        <ReservationPageSection />
      </main>
      <Footer />
    </div>
  )
}
