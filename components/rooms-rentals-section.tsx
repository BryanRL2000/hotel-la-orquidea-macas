"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { slugify } from "@/lib/utils"
import { roomDetailsData } from "@/lib/room-data"
import { Eye, Users, Bed, Maximize, ArrowRight } from "lucide-react"

export function RoomsRentalsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const featuredRooms = roomDetailsData.slice(0, 3)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleCards((prev) => [...prev, cardIndex])
          }
        })
      },
      { threshold: 0.2 },
    )

    const cards = sectionRef.current?.querySelectorAll("[data-index]")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="alojamientos"
      className="py-12 md:py-20 bg-gradient-to-br from-muted to-amazonGreen-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-amazonGreen-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-amazonGreen-300 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-amazonGreen-500 rounded-full animate-ping"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <Badge className="mb-4 bg-amazonGreen-100 text-amazonGreen-800 hover:bg-amazonGreen-200 transition-colors duration-300">
              Alojamientos Premium
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amazonGreen-800 to-amazonGreen-600 bg-clip-text text-transparent">
            Nuestras Habitaciones y Alojamientos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Encuentra el espacio perfecto para tu estancia, desde acogedoras habitaciones hasta amplias casas.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {featuredRooms.map((room, index) => (
            <Card
              key={index}
              data-index={index}
              className={`group flex flex-col h-full transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg overflow-hidden ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <CardHeader className="p-0 relative overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={room.images[0] || "/placeholder.svg"}
                    alt={room.type}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category Badge */}
                  <Badge
                    className={`absolute top-4 left-4 ${
                      room.category === "habitaciones"
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-purple-500 hover:bg-purple-600"
                    } text-white transition-transform duration-300 group-hover:scale-110`}
                  >
                    {room.category === "habitaciones" ? "Habitación" : "Departamento"}
                  </Badge>

                  {/* Price Badge */}
                  <Badge className="absolute top-4 right-4 bg-amazonGreen-700 hover:bg-amazonGreen-800 text-white text-lg font-bold px-3 py-1 transition-transform duration-300 group-hover:scale-110">
                    {room.details.price}
                  </Badge>

                  {/* Hover Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <Link href={`/habitaciones/${room.slug}`} passHref>
                      <Button
                        size="lg"
                        className="bg-white text-amazonGreen-700 hover:bg-amazonGreen-50 shadow-xl transform hover:scale-110 transition-all duration-300"
                      >
                        <Eye className="mr-2 h-5 w-5" />
                        Ver Detalles
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="p-6">
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-amazonGreen-700 transition-colors duration-300 mb-2">
                    {room.type}
                  </CardTitle>
                </div>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between px-6 pb-6">
                <div className="space-y-4">
                  <CardDescription className="text-gray-600 line-clamp-3 leading-relaxed">
                    {room.description}
                  </CardDescription>

                  {/* Room Features */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1 transition-colors duration-300 hover:text-amazonGreen-600">
                      <Users className="h-4 w-4" />
                      <span>{room.details.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1 transition-colors duration-300 hover:text-amazonGreen-600">
                      <Bed className="h-4 w-4" />
                      <span>{room.details.beds}</span>
                    </div>
                    <div className="flex items-center gap-1 transition-colors duration-300 hover:text-amazonGreen-600">
                      <Maximize className="h-4 w-4" />
                      <span>{room.details.size}</span>
                    </div>
                  </div>

                  {/* Amenities Preview */}
                  <div className="flex flex-wrap gap-2">
                    {room.details.amenities.slice(0, 2).map((amenity, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="text-xs transition-transform duration-300 hover:scale-105"
                      >
                        {amenity}
                      </Badge>
                    ))}
                    {room.details.amenities.length > 2 && (
                      <Badge variant="outline" className="text-xs transition-transform duration-300 hover:scale-105">
                        +{room.details.amenities.length - 2} más
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Link href={`/habitaciones/${slugify(room.type)}`} passHref>
                  <Button className="w-full mt-6 bg-amazonGreen-700 hover:bg-amazonGreen-800 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg group">
                    Ver Detalles y Reservar
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action mejorado */}
        <div className="text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-amazonGreen-50 to-amazonGreen-100 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-amazonGreen-800 mb-4">
              ¿Quieres ver todas nuestras opciones?
            </h3>
            <p className="text-amazonGreen-700 mb-6 max-w-2xl mx-auto">
              Explora nuestra colección completa de habitaciones, departamentos y casas de renta.
            </p>
            <Link href="/alojamientos" passHref>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amazonGreen-700 to-amazonGreen-800 hover:from-amazonGreen-800 hover:to-amazonGreen-900 text-white transform hover:scale-110 transition-all duration-300 hover:shadow-xl px-8 py-4 text-lg font-semibold group"
              >
                Ver Todos los Alojamientos
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
