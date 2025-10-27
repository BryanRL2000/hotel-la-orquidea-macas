"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ExternalLink, MapPin, Clock, Star } from "lucide-react"
import Image from "next/image"

export function LocalAttractionsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const attractions = [
    {
      id: 1,
      title: "Gruta Purísima de Macas",
      description:
        "La Gruta de la Virgen Purísima de Macas es un importante destino de turismo religioso y natural, que atrae a peregrinos y visitantes en busca de fe y conexión con la naturaleza.",
      image: "/gruta.jpg",
      link: "https://macas.gob.ec/destino/140157mc020202037-gruta-purisima-de-macas/",
      category: "Sitio Natural",
      duration: "1-3 horas",
      difficulty: "Fácil",
      highlights: ["Espacios Naturales", "Aguas cristalinas", "Hermosa vegetación"],
    },
    {
      id: 2,
      title: "Mirador El Quilamo",
      description:
        "Un mirador espectacular que ofrece vistas panorámicas de la ciudad de Macas y la exuberante selva amazónica que la rodea.",
      image: "/mirador_quilamo.jpeg",
      link: "https://macas.gob.ec/destino/140150mc010703002-mirador-el-quilamo/",
      category: "Mirador",
      duration: "1-2 horas",
      difficulty: "Moderado",
      highlights: ["Vista panorámica", "Fotografía", "Atardeceres únicos"],
    },
    {
      id: 3,
      title: "Centro de Rescate Los Jaguares",
      description:
        "Un centro de conservación dedicado al rescate y rehabilitación de fauna amazónica, donde podrás conocer especies nativas en su hábitat.",
      image: "/centro_jaguares.jpg",
      link: "https://macas.gob.ec/destino/140153mc030403001-centro-de-rescate-los-jagu/",
      category: "Conservación",
      duration: "1-2 horas",
      difficulty: "Fácil",
      highlights: ["Fauna amazónica", "Educación ambiental", "Experiencia única"],
    },
    {
      id: 4,
      title: "Cueva de los Tayos",
      description:
        "Una misteriosa cueva llena de leyendas y formaciones geológicas únicas, hogar de los tayos, aves nocturnas que le dan su nombre.",
      image: "/cueva-de-los-tayos.jpg",
      link: "https://tsuirimtravel.com/tour-cueva-de-los-tayos-pastaza/",
      category: "Aventura",
      duration: "Día completo",
      difficulty: "Avanzado",
      highlights: ["Espeleología", "Aves tayos", "Formaciones únicas"],
    },
  ]

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % attractions.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, attractions.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % attractions.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + attractions.length) % attractions.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil": return "bg-green-500"
      case "Moderado": return "bg-yellow-500"
      case "Avanzado": return "bg-red-500"
      default: return "bg-gray-500"
    }
  }

  return (
    <section
      id="atracciones"
      className="py-10 md:py-16 lg:py-20 bg-gradient-to-br from-amazonGreen-50 to-white relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-5 w-16 h-16 md:w-32 md:h-32 bg-amazonGreen-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-5 w-12 h-12 md:w-24 md:h-24 bg-amazonGreen-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 left-1/4 w-8 h-8 md:w-16 md:h-16 bg-amazonGreen-500 rounded-full animate-ping"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <Badge className="mb-4 bg-amazonGreen-100 text-amazonGreen-800 hover:bg-amazonGreen-200 transition-colors">
            Descubre Macas
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-amazonGreen-800 to-amazonGreen-600 bg-clip-text text-transparent">
            Atracciones Locales
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto px-2">
            Explora los tesoros naturales y culturales que rodean el Hotel La Orquídea en Macas, Morona Santiago.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Card className="h-full border-0 shadow-none bg-transparent">
                  <div className="relative h-full">
                    <Image
                      src={attractions[currentSlide].image || "/placeholder.svg"}
                      alt={attractions[currentSlide].title}
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

                    <CardContent className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 lg:p-10 text-white">
                      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 items-end">
                        {/* Main Content */}
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge className="bg-amazonGreen-600 hover:bg-amazonGreen-700 text-white text-xs sm:text-sm">
                              {attractions[currentSlide].category}
                            </Badge>
                            <Badge className={`${getDifficultyColor(attractions[currentSlide].difficulty)} text-white text-xs sm:text-sm`}>
                              {attractions[currentSlide].difficulty}
                            </Badge>
                          </div>

                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                            {attractions[currentSlide].title}
                          </h3>

                          <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                            {attractions[currentSlide].description}
                          </p>

                          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-300 mt-4">
                            <div className="flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                              <span>{attractions[currentSlide].duration}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                              <span>Macas, Morona Santiago</span>
                            </div>
                          </div>

                          <motion.a
                            href={attractions[currentSlide].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-block mt-2"
                          >
                            <Button
                              size="lg"
                              className="bg-gradient-to-r from-amazonGreen-600 to-amazonGreen-700 hover:from-amazonGreen-700 hover:to-amazonGreen-800 text-white px-5 py-3 sm:px-6 sm:py-4 text-sm sm:text-base font-semibold shadow-lg group"
                            >
                              Explorar Destino
                              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                          </motion.a>
                        </div>

                        {/* Highlights */}
                        <div className="text-right lg:text-right">
                          <h4 className="text-base sm:text-lg font-semibold mb-3 text-amazonGreen-200">Lo más destacado:</h4>
                          <div className="space-y-2">
                            {attractions[currentSlide].highlights.map((highlight, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                className="flex items-center justify-end gap-2"
                              >
                                <Star className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-yellow-400 fill-yellow-400" />
                                <span className="text-xs sm:text-sm text-gray-200">{highlight}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows - Responsive Size */}
          <motion.button
            aria-label="Anterior atracción"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2.5 sm:p-3 rounded-full transition-all shadow-lg z-20"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.button>

          <motion.button
            aria-label="Siguiente atracción"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-2.5 sm:p-3 rounded-full transition-all shadow-lg z-20"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {attractions.map((_, index) => (
            <motion.button
              key={index}
              aria-label={`Ir a diapositiva ${index + 1}`}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-amazonGreen-600 w-6" : "bg-gray-300 hover:bg-amazonGreen-400"
              }`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="flex justify-center mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-colors ${
              isAutoPlaying
                ? "bg-amazonGreen-100 text-amazonGreen-800"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {isAutoPlaying ? "⏸️ Pausar" : "▶️ Reproducir"} auto-deslizamiento
          </motion.button>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="inline-block p-5 sm:p-6 md:p-8 bg-gradient-to-r from-amazonGreen-100 to-amazonGreen-50 rounded-2xl md:rounded-3xl shadow-lg transform hover:scale-[1.02] transition-transform duration-500">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-amazonGreen-800 mb-3 md:mb-4">
              ¿Listo para la aventura?
            </h3>
            <p className="text-amazonGreen-700 mb-5 max-w-md sm:max-w-xl mx-auto text-sm sm:text-base">
              Nuestro equipo puede ayudarte a organizar tours y excursiones a estos increíbles destinos.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amazonGreen-700 to-amazonGreen-800 hover:from-amazonGreen-800 hover:to-amazonGreen-900 text-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold shadow-lg"
              >
                Consultar Tours Disponibles
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}