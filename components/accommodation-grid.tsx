"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Bed, Maximize, Eye } from "lucide-react"
import { roomDetailsData } from "@/lib/room-data"

export function AccommodationGrid() {
  const [filter, setFilter] = useState<"all" | "habitaciones" | "departamentos">("all")

  const filteredRooms = roomDetailsData.filter((room) => {
    if (filter === "all") return true
    return room.category === filter
  })

  const categories = [
    { key: "all", label: "Todos los Alojamientos", count: roomDetailsData.length },
    {
      key: "habitaciones",
      label: "Habitaciones",
      count: roomDetailsData.filter((r) => r.category === "habitaciones").length,
    },
    {
      key: "departamentos",
      label: "Departamentos y Casas",
      count: roomDetailsData.filter((r) => r.category === "departamentos").length,
    },
  ]

  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 md:px-6">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={filter === category.key ? "default" : "outline"}
              onClick={() => setFilter(category.key as any)}
              className={`transition-all duration-300 ${
                filter === category.key
                  ? "bg-amazonGreen-700 hover:bg-amazonGreen-800 text-white"
                  : "border-amazonGreen-300 text-amazonGreen-700 hover:bg-amazonGreen-50"
              }`}
            >
              {category.label}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Accommodation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={room.images[0] || "/placeholder.svg"}
                  alt={room.type}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay with hover effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category Badge */}
                <Badge
                  className={`absolute top-4 left-4 ${
                    room.category === "habitaciones"
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-purple-500 hover:bg-purple-600"
                  } text-white`}
                >
                  {room.category === "habitaciones" ? "Habitación" : "Departamento"}
                </Badge>

                {/* Price Badge */}
                <Badge className="absolute top-4 right-4 bg-amazonGreen-700 hover:bg-amazonGreen-800 text-white text-lg font-bold px-3 py-1">
                  {room.details.price}
                </Badge>

                {/* Hover Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <Link href={`/habitaciones/${room.slug}`} passHref>
                    <Button
                      size="lg"
                      className="bg-white text-amazonGreen-700 hover:bg-amazonGreen-50 shadow-lg transform hover:scale-105 transition-all duration-300"
                    >
                      <Eye className="mr-2 h-5 w-5" />
                      Ver Detalles
                    </Button>
                  </Link>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-amazonGreen-700 transition-colors duration-300">
                      {room.type}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">{room.description}</p>
                  </div>

                  {/* Room Features */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{room.details.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="h-4 w-4" />
                      <span>{room.details.beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Maximize className="h-4 w-4" />
                      <span>{room.details.size}</span>
                    </div>
                  </div>

                  {/* Amenities Preview */}
                  <div className="flex flex-wrap gap-2">
                    {room.details.amenities.slice(0, 3).map((amenity, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {amenity}
                      </Badge>
                    ))}
                    {room.details.amenities.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{room.details.amenities.length - 3} más
                      </Badge>
                    )}
                  </div>

                  {/* Action Button */}
                  <Link href={`/habitaciones/${room.slug}`} passHref>
                    <Button className="w-full mt-4 bg-amazonGreen-700 hover:bg-amazonGreen-800 text-white transition-all duration-300 transform hover:scale-105">
                      Ver Detalles y Reservar
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-amazonGreen-50 to-amazonGreen-100 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-amazonGreen-800 mb-4">¿No encuentras lo que buscas?</h3>
          <p className="text-amazonGreen-700 mb-6 max-w-2xl mx-auto">
            Nuestro equipo está aquí para ayudarte a encontrar el alojamiento perfecto para tu estancia. Contáctanos
            directamente y te asesoraremos de manera personalizada.
          </p>
          <Link href="/#reservar" passHref>
            <Button
              size="lg"
              className="bg-amazonGreen-700 hover:bg-amazonGreen-800 text-white transform hover:scale-105 transition-all duration-300"
            >
              Contactar por WhatsApp
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
