import { MainNav } from "@/components/main-nav"
import { BookingDashboardSection } from "@/components/booking-dashboard-section"
import { Footer } from "@/components/footer"
import { ReservationFormSection } from "@/components/reservation-form-section" // Importar el nuevo componente

export default function ReservarPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1">
        <ReservationFormSection /> {/* Nuevo formulario de contacto y reserva */}
        <BookingDashboardSection /> {/* Dashboard de reservas */}
      </main>
      <Footer />
    </div>
  )
}
