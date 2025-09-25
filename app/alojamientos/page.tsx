import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { AccommodationGrid } from "@/components/accommodation-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Habitaciones y Alojamientos - Hotel Heliconia",
  description:
    "Descubre nuestras cómodas habitaciones, departamentos y casa de renta en el corazón de la Amazonía. Encuentra el alojamiento perfecto para tu estancia.",
  keywords: ["habitaciones", "departamentos", "casa de renta", "alojamiento", "Hotel Heliconia", "Amazonía", "Ecuador"],
}

export default function AlojamientosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-amazonGreen-50 to-amazonGreen-100">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amazonGreen-800 mb-6">
              Habitaciones y Alojamientos
            </h1>
            <p className="text-lg md:text-xl text-amazonGreen-700 max-w-3xl mx-auto mb-8">
              Encuentra el espacio perfecto para tu estancia en la Amazonía. Desde acogedoras habitaciones hasta amplios
              departamentos y nuestra exclusiva casa de renta.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-amazonGreen-600">
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">✓ Wi-Fi Gratuito</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">✓ Aire Acondicionado</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">✓ Estacionamiento Gratuito</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">✓ Habitaciones Familiares o con Camas Extra</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">✓ Baño Privado</span>
            </div>
          </div>
        </section>

        {/* Accommodation Grid */}
        <AccommodationGrid />
      </main>
      <Footer />
    </div>
  )
}
