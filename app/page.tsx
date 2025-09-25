import { MainNav } from "@/components/main-nav"
import { HeroSection } from "@/components/hero-section"
import { RoomsRentalsSection } from "@/components/rooms-rentals-section"
import { ServicesSection } from "@/components/services-section"
import { HistorySection } from "@/components/history-section"
import { LocalAttractionsSection } from "@/components/local-attractions-section"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ReservationFormSection } from "@/components/reservation-form-section"
import { BookingDashboardSection } from "@/components/booking-dashboard-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1">
        <HeroSection />
        <RoomsRentalsSection /> {/* id="alojamientos" */}
        <ServicesSection /> {/* id="servicios" */}
        <HistorySection /> {/* id="historia" */}
        <LocalAttractionsSection /> {/* Nueva sección de atracciones */}
        <GallerySection /> {/* id="galeria" */}
        <TestimonialsSection /> {/* id="testimonios" */}
        <ReservationFormSection /> {/* id="reservar" */}
        <BookingDashboardSection /> {/* id="mi-reserva" */}
      </main>
      <Footer />
    </div>
  )
}
