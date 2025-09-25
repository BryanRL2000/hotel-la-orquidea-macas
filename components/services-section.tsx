"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Car, Globe, Phone, Users, Shield, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

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

  const services = [
    {
      icon: Car,
      title: "Transporte Puerta a Puerta",
      description:
        "Ofrecemos servicio de transporte cómodo y seguro a nivel nacional o local, llevándote directamente a tu destino. Olvídate de las preocupaciones de movilidad.",
      features: ["Servicio 24/7", "Vehículos cómodos", "Conductores experimentados", "Tarifas competitivas"],
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      hasLink: false, // Este servicio no tiene enlace externo, sino WhatsApp
    },
    {
      icon: Globe,
      title: "Tours y Excursiones",
      description:
        "Explora la belleza de la región con nuestros tours organizados. Colaboramos con expertos locales para ofrecerte experiencias inolvidables.",
      features: ["Guías especializados", "Grupos pequeños", "Experiencias auténticas", "Equipamiento incluido"],
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      hasLink: true,
    },
  ]

  const additionalServices = [
    {
      icon: Phone,
      title: "Atención 24/7",
      description: "Servicio al cliente disponible las 24 horas",
    },
    {
      icon: Shield,
      title: "Seguridad Garantizada",
      description: "Protocolos de seguridad en todos nuestros servicios",
    },
    {
      icon: Users,
      title: "Experiencia Personalizada",
      description: "Adaptamos cada servicio a tus necesidades",
    },
    {
      icon: Award,
      title: "Calidad Certificada",
      description: "Reconocimientos por excelencia en servicio",
    },
  ]

  // Mensaje predeterminado para WhatsApp
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría obtener información sobre sus servicios. Vi su sitio web y estoy interesado/a en saber más."
  )
  const whatsappUrl = `https://wa.me/593994979605?text=${whatsappMessage}`

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="py-12 md:py-20 bg-gradient-to-br from-white via-amazonGreen-50/30 to-amazonGreen-100/50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-amazonGreen-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-green-400 rounded-full animate-ping"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-amazonGreen-100 text-amazonGreen-800 hover:bg-amazonGreen-200 transition-colors duration-300">
            Servicios Premium
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amazonGreen-800 to-blue-600 bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Más allá del alojamiento, te ofrecemos experiencias completas y servicios de primera clase.
          </p>
        </motion.div>

        {/* Main Services */}
        <div className="grid gap-8 md:grid-cols-2 mb-16 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              data-index={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`transition-all duration-700 ${
                visibleCards.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <Card
                className={`group h-full transition-all duration-500 hover:shadow-2xl border-0 shadow-lg overflow-hidden ${service.bgColor} relative`}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                      className={`p-4 rounded-2xl bg-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    >
                      <service.icon className={`h-8 w-8 ${service.iconColor} transition-colors duration-300`} />
                    </motion.div>
                    <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-amazonGreen-800 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 space-y-6">
                  <CardDescription className="text-gray-700 text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>

                  {/* Features List */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                      <Award className="h-4 w-4 text-amazonGreen-600" />
                      Características destacadas:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  {service.hasLink ? (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="https://tsuirimtravel.com/tour-de-ciudad-selva-y-rio/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg text-white transition-all duration-300 group`}
                        >
                          Ver Tours Disponibles
                          <Globe className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                        </Button>
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button
                        asChild
                        variant="outline"
                        className={`w-full border-2 hover:bg-gradient-to-r ${service.color} hover:text-white hover:border-transparent transition-all duration-300 group`}
                      >
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          Solicitar Información
                          <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                        </a>
                      </Button>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-amazonGreen-800">
            Servicios Adicionales
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-amazonGreen-100"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amazonGreen-500 to-amazonGreen-600 rounded-2xl mb-4 shadow-lg"
                >
                  <service.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h4 className="font-semibold text-lg text-gray-800 mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-r from-amazonGreen-100 via-blue-50 to-amazonGreen-100 rounded-3xl shadow-xl transform hover:scale-105 transition-all duration-500">
            <h3 className="text-2xl md:text-3xl font-bold text-amazonGreen-800 mb-4">
              ¿Necesitas un servicio personalizado?
            </h3>
            <p className="text-amazonGreen-700 mb-6 max-w-2xl mx-auto">
              Nuestro equipo está listo para crear experiencias únicas adaptadas a tus necesidades específicas.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amazonGreen-700 to-blue-600 hover:from-amazonGreen-800 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 shadow-xl group"
              >
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Contactar Ahora
                  <Phone className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}