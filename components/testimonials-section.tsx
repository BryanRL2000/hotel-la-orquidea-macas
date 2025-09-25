"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const testimonials = [
    {
      name: "Ana G.",
      location: "Madrid, España",
      rating: 5,
      review:
        "Una experiencia inolvidable. El personal es increíblemente amable y las habitaciones son muy cómodas. La ubicación es perfecta para explorar la naturaleza. ¡Volveremos sin duda!",
      avatar: "/smiling-woman-avatar.png",
    },
    {
      name: "Carlos R.",
      location: "Bogotá, Colombia",
      rating: 5,
      review:
        "Los tours que ofrecen son fantásticos y el servicio de transporte puerta a puerta es un salvavidas. Me sentí como en casa en el departamento que alquilé. ¡Altamente recomendado!",
      avatar: "/smiling-man-avatar.png",
    },
    {
      name: "María P.",
      location: "Lima, Perú",
      rating: 4,
      review:
        "El hotel es hermoso y muy tranquilo. Disfruté mucho de los jardines. La reserva por WhatsApp fue un poco diferente, pero muy eficiente. Solo un pequeño detalle con el Wi-Fi, pero en general, excelente.",
      avatar: "/young-woman-avatar.png",
    },
    {
      name: "Juan D.",
      location: "Ciudad de México, México",
      rating: 5,
      review:
        "La casa de renta fue perfecta para mi familia. Tuvimos mucha privacidad y todas las comodidades. La atención al detalle del personal es admirable. ¡Un lugar para desconectar y disfrutar!",
      avatar: "/senior-man-avatar.png",
    },
  ]

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
      id="testimonios"
      className="py-12 md:py-20 bg-gradient-to-br from-amazonGreen-50 to-white relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 left-16 w-36 h-36 bg-amazonGreen-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 right-16 w-24 h-24 bg-amazonGreen-400 rounded-full animate-bounce"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-amazonGreen-100 text-amazonGreen-800 hover:bg-amazonGreen-200 transition-colors duration-300">
            Testimonios Reales
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amazonGreen-800 to-amazonGreen-600 bg-clip-text text-transparent">
            Lo que Dicen Nuestros Huéspedes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Experiencias reales de quienes han disfrutado del Hotel La Orquídea.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              data-index={index}
              className={`group flex flex-col h-full transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg relative overflow-hidden ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Quote className="h-12 w-12 text-amazonGreen-600" />
              </div>

              <CardHeader className="flex flex-row items-center gap-4 pb-4 relative z-10">
                <div className="relative">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={`Avatar de ${testimonial.name}`}
                    width={60}
                    height={60}
                    className="rounded-full object-cover transition-transform duration-300 group-hover:scale-110 ring-2 ring-amazonGreen-200 group-hover:ring-amazonGreen-400"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-amazonGreen-500 rounded-full p-1">
                    <Star className="h-3 w-3 text-white fill-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-lg group-hover:text-amazonGreen-700 transition-colors duration-300">
                    {testimonial.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <div className="flex items-center mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 transition-all duration-300 ${
                          i < testimonial.rating
                            ? "text-yellow-500 fill-yellow-500 group-hover:scale-110"
                            : "text-gray-300"
                        }`}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="flex-1 relative z-10">
                <p className="text-muted-foreground italic leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  &quot;{testimonial.review}&quot;
                </p>
              </CardContent>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amazonGreen-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block p-8 bg-gradient-to-r from-amazonGreen-100 to-amazonGreen-50 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl font-bold text-amazonGreen-800 mb-2">¿Quieres ser el próximo?</h3>
            <p className="text-amazonGreen-700">¡Reserva tu estancia y crea tu propia historia!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
