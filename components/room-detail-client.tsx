"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Users,
  Bed,
  Ruler,
  Eye,
  DollarSign,
  CheckCircle,
  GalleryVerticalEnd,
  Video,
  Info,
  MapIcon,
} from "lucide-react"
import { useRouter } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { roomDetailsData } from "@/lib/room-data"

interface RoomDetailClientProps {
  slug: string
}

export function RoomDetailClient({ slug }: RoomDetailClientProps) {
  const router = useRouter()
  const room = roomDetailsData.find((r) => r.slug === slug)

  const handleRoomChange = (selectedSlug: string) => {
    router.push(`/habitaciones/${selectedSlug}`)
  }

  if (!room) {
    return (
      <div className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="text-center max-w-md">
          <h1 className="text-3xl md:text-4xl font-bold text-amber-600 mb-4">Habitación no encontrada</h1>
          <p className="text-muted-foreground mb-6">
            Lo sentimos, no pudimos encontrar la habitación que buscas.
          </p>
          <Link href="/#alojamientos">
            <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
              Volver a Habitaciones
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 md:py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-700 to-green-800 bg-clip-text text-transparent">
            {room.type}
          </h1>
          <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto leading-relaxed">
            {room.description}
          </p>
          <div className="mt-8 max-w-xs mx-auto">
            <Select onValueChange={handleRoomChange} value={room.slug}>
              <SelectTrigger className="w-full border-amber-300 focus:ring-amber-500 focus:border-amber-500">
                <SelectValue placeholder="Selecciona otro alojamiento" />
              </SelectTrigger>
              <SelectContent>
                {roomDetailsData.map((roomOption) => (
                  <SelectItem key={roomOption.slug} value={roomOption.slug}>
                    {roomOption.type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* 🔹 1. Detalles y Características — con iconos */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
              <Info className="text-amber-600" /> Detalles y Características
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Información General */}
            <div className="bg-white rounded-2xl p-7 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-amber-700 mb-5 flex items-center gap-2">
                <Info className="h-5 w-5" /> Información General
              </h3>
              <ul className="space-y-4">
                {[
                  { label: "Capacidad", value: room.details.capacity, icon: Users },
                  { label: "Camas", value: room.details.beds, icon: Bed },
                  {label: "Ubicación", value: "Macas - Morona Santiago", icon: MapIcon},
                  { label: "Vista", value: room.details.view, icon: Eye },
                  { label: "Precio Estimado", value: room.details.price, icon: DollarSign },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-gray-700">{item.label}:</span>{" "}
                      <span className="text-gray-600">{item.value}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Comodidades */}
            <div className="bg-white rounded-2xl p-7 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-bold text-amber-700 mb-5 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" /> Comodidades Incluidas
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.details.amenities.map((amenity, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-600">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 🔹 2. Galería */}
        <section className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
              <GalleryVerticalEnd className="text-amber-600" /> Galería de Imágenes
            </h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {room.images.map((imgSrc, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <Image
                  src={imgSrc || "/placeholder.svg"}
                  alt={`${room.type} - Imagen ${index + 1}`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-105"
                  priority={index === 0}
                />
                
              </div>
            ))}
          </div>
        </section>

        {/* 🔹 3. Video Tour */}
        {room.videoUrl && (
          <section className="mb-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-3">
                <Video className="text-amber-600" /> Video Tour
              </h2>
              <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full mt-4"></div>
            </div>
            <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl ring-1 ring-amber-200">
              <iframe
                src={room.videoUrl}
                title={`${room.type} Video Tour`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              *Video ilustrativo. El contenido real puede variar ligeramente.
            </p>
          </section>
        )}

        {/* CTA Final */}
        <section className="text-center py-16 bg-gradient-to-r from-amber-600 to-amber-800 rounded-3xl shadow-xl text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para reservar tu estancia?</h2>
          <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
            Vive una experiencia inolvidable en el corazón de la Amazonía ecuatoriana.
          </p>
          <Link href="/reservas">
            <Button
              size="lg"
              className="bg-white text-amber-700 hover:bg-amber-50 font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Reservar Ahora
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}