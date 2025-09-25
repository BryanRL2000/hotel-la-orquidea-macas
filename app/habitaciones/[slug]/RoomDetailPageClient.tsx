"use client"

import { RoomDetailClient } from "@/components/room-detail-client"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"

export default function RoomDetailPageClient({ params }: { params: { slug: string } }) {
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
