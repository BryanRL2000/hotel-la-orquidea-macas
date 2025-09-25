"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Eye, ZoomIn, X, ArrowLeft, ArrowRight } from "lucide-react"

export function GallerySection() {
  const [visibleImages, setVisibleImages] = useState<number[]>([])
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const galleryImages = [
    { src: "/hotel_principal.jpeg", title: "Hotel Orquidea", category: "Hosteria" },
    { src: "/piscina.jpg", title: "Área de Piscina", category: "Instalaciones" },
    { src: "/area_descanso.jpg", title: "Área de descanso y bebidas", category: "Gastronomía" },
    { src: "/servicio_transporte.jpg", title: "Servicios de transporte ", category: "Transporte" },
    { src: "/cocina.jpg", title: "Cocina", category: "Gastronomía" },
    { src: "/parqueadero.jpg", title: "Parqueadero Privado del hotel", category: "Parqueadero" },
    { src: "/dep1.jpg", title: "Habitación Individual", category: "Habitaciones" },
    { src: "/exterior_departamentos.jpg", title: "Exterior Departamento", category: "Departamentos" },
    { src: "/comedor.jpg", title: "Comedor de departamentos", category: "Gastronomía" },
    { src: "/vista_estadio.jpg", title: "Área del hotel ", category: "Instalaciones" },
    { src: "/cocina_casa.jpg", title: "Cocina de la Casa", category: "Casa de alquiler" },
    { src: "/jacuzzi.jpg", title: "Jacuzzi", category: "Departamentos" },
  ]

  // Abrir modal
  const openModal = useCallback((index: number) => {
    setCurrentImageIndex(index)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }, [])

  // Cerrar modal
  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }, [])

  // Imagen anterior
  const handlePrevImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1))
  }, [galleryImages.length])

  // Siguiente imagen
  const handleNextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0))
  }, [galleryImages.length])

  // Control por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return
      if (e.key === "Escape") closeModal()
      if (e.key === "ArrowLeft") handlePrevImage()
      if (e.key === "ArrowRight") handleNextImage()
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isModalOpen, closeModal, handlePrevImage, handleNextImage])

  // Animaciones al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imageIndex = Number.parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleImages((prev) => [...new Set([...prev, imageIndex])])
          }
        })
      },
      { threshold: 0.1 }
    )

    const images = sectionRef.current?.querySelectorAll("[data-index]")
    images?.forEach((image) => observer.observe(image))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="galeria"
      className="py-12 md:py-20 bg-gradient-to-br from-white to-amazonGreen-50 relative overflow-hidden"
    >
      {/* Decoraciones de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-amazonGreen-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-amazonGreen-400 rounded-full animate-bounce"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-amazonGreen-100 text-amazonGreen-800 hover:bg-amazonGreen-200 transition-colors duration-300">
            Galería Visual
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amazonGreen-800 to-amazonGreen-600 bg-clip-text text-transparent">
            Galería de Imágenes
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Un vistazo a la belleza y las instalaciones del Hotel La Orquídea.
          </p>
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              data-index={index}
              className={`relative group overflow-hidden rounded-2xl shadow-lg transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                visibleImages.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredImage(index)}
              onMouseLeave={() => setHoveredImage(null)}
              onClick={() => openModal(index)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.title}
                  width={600}
                  height={400}
                  className={`object-cover w-full h-full transition-all duration-700 ${
                    hoveredImage === index ? "scale-110 brightness-110" : "scale-100"
                  }`}
                  priority={false}
                />

                {/* Etiqueta de categoría */}
                <Badge
                  className={`absolute top-4 left-4 transition-all duration-300 ${
                    image.category === "Habitaciones"
                      ? "bg-blue-500 hover:bg-blue-600"
                      : image.category === "Instalaciones"
                        ? "bg-green-500 hover:bg-green-600"
                        : image.category === "Gastronomía"
                          ? "bg-orange-500 hover:bg-orange-600"
                          : "bg-purple-500 hover:bg-purple-600"
                  } text-white ${hoveredImage === index ? "scale-110" : "scale-100"}`}
                >
                  {image.category}
                </Badge>

                {/* Overlay con título */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                    hoveredImage === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3
                      className={`text-lg font-semibold mb-2 transition-all duration-500 ${
                        hoveredImage === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                      }`}
                    >
                      {image.title}
                    </h3>
                    <div
                      className={`flex items-center gap-2 transition-all duration-500 delay-100 ${
                        hoveredImage === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                      }`}
                    >
                      <ZoomIn className="h-4 w-4" />
                      <span className="text-sm">Haz clic para ampliar</span>
                    </div>
                  </div>
                </div>

                {/* Icono de ojo al hacer hover */}
                <div
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                    hoveredImage === index ? "opacity-100 scale-100" : "opacity-0 scale-50"
                  }`}
                >
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Efecto de anillo */}
                <div
                  className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                    hoveredImage === index ? "ring-4 ring-amazonGreen-400/50 ring-offset-2" : ""
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Llamado a la acción */}
        <div className="text-center mt-16">
          <div className="inline-block p-6 bg-gradient-to-r from-amazonGreen-100 to-amazonGreen-50 rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500">
            <p className="text-amazonGreen-700 font-medium">¿Te gusta lo que ves? ¡Ven y vívelo en persona!</p>
          </div>
        </div>
      </div>

      {/* Modal de imagen ampliada */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-6xl max-h-[90vh] w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cierre */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 shadow-lg"
              aria-label="Cerrar imagen"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Flecha izquierda */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 shadow-lg hover:scale-110"
              aria-label="Imagen anterior"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>

            {/* Flecha derecha */}
            <button
              onClick={handleNextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 shadow-lg hover:scale-110"
              aria-label="Siguiente imagen"
            >
              <ArrowRight className="h-6 w-6" />
            </button>

            {/* Contenedor de imagen */}
            <div className="flex justify-center items-center h-full">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={galleryImages[currentImageIndex].src}
                  alt={galleryImages[currentImageIndex].title}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-500 ease-in-out"
                  priority
                />
              </div>
            </div>

            {/* Título y contador */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-center">
              <p className="text-lg font-medium">{galleryImages[currentImageIndex].title}</p>
              <p className="text-sm text-gray-300 mt-1">
                {currentImageIndex + 1} de {galleryImages.length}
              </p>
            </div>

            {/* Puntos indicadores */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                    index === currentImageIndex
                      ? "bg-white scale-125 ring-2 ring-white/50"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Ir a la imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}