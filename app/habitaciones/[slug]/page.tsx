import type { Metadata } from "next"
import { roomDetailsData } from "@/lib/room-data"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { RoomDetailClient } from "@/components/room-detail-client"

type Props = {
  params: { slug: string }
}

// generateMetadata debe ser un Server Component
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const room = roomDetailsData.find((r) => r.slug === params.slug)

  if (!room) {
    return {
      title: "Habitación no encontrada - Hotel La Orquídea",
      description: "La página de la habitación que buscas no existe.",
    }
  }

  return {
    title: `${room.type} - Hotel La Orquídea`,
    description: room.description,
    keywords: [
      `${room.type}`,
      "Hotel La Orquídea",
      "Amazonía",
      "Ecuador",
      "alojamiento",
      "reservas",
      "habitaciones",
      room.details.capacity.toLowerCase().replace(" ", "-"),
    ],
  }
}

export default function RoomDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1">
        <RoomDetailClient slug={params.slug} />
      </main>
      <Footer />
    </div>
  )
}
