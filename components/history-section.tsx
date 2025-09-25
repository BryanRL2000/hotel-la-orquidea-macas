"use client"

import Image from "next/image"
import { Heart, Award, Users, TreePine, Shield } from "lucide-react"

// Import Swiper
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"

export function HistorySection() {
  const currentYear = new Date().getFullYear()
  const foundingYear = 1995
  const yearsOfExperience = currentYear - foundingYear

  // 🖼️ Imágenes del carrusel (ajusta las rutas según tu carpeta /public)
  const carouselImages = [
    {
      src: "/hotel.jpg",
      alt: "Exterior del Hotel La Orquídea, rodeado de naturaleza amazónica",
    },
    {
      src: "/entrada.jpg",
      alt: "Vista panorámica de la selva amazónica desde el hotel",
    },
    {
      src: "/recepcion.jpg",
      alt: "Huéspedes participando en actividades culturales con la comunidad Shuar",
    },
    {
      src: "/vista.jpg",
      alt: "Cabañas sostenibles integradas en la selva, construidas con materiales locales",
    },
    {
      src: "/parqueadero.jpg",
      alt: "Cabañas sostenibles integradas en la selva, construidas con materiales locales",
    },
  ]

  // 🎯 Características (mantenidas, pero con colores más naturales)
  const features = [
    {
      icon: TreePine,
      title: "Sostenibilidad",
      description: "Comprometidos con la preservación del medio ambiente y el desarrollo sostenible.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      iconBg: "bg-emerald-100",
    },
    {
      icon: Heart,
      title: "Hospitalidad",
      description: "Servicio cálido y personalizado que hace sentir a cada huésped como en casa.",
      color: "text-sky-600",
      bg: "bg-sky-50",
      iconBg: "bg-sky-100",
    },
    {
      icon: Award,
      title: "Excelencia",
      description: "Estándares de calidad internacional en cada detalle de nuestro servicio.",
      color: "text-amber-600",
      bg: "bg-amber-50",
      iconBg: "bg-amber-100",
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Apoyo constante a las comunidades locales y preservación cultural.",
      color: "text-violet-600",
      bg: "bg-violet-50",
      iconBg: "bg-violet-100",
    },
  ]

  return (
    <section
      id="historia"
      className="py-12 sm:py-16 md:py-20 bg-muted"
      aria-labelledby="history-heading"
    >
      <div className="container px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Encabezado */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2
            id="history-heading"
            className="text-3xl sm:text-4xl md:text-4xl font-bold text-foreground"
          >
            Nuestra Historia
          </h2>
          <p className="text-base sm:text-lg md:text-lg text-muted-foreground mt-3 max-w-3xl mx-auto px-2">
            Una historia de pasión por la hospitalidad y el compromiso con la preservación de la naturaleza ecuatoriana.
          </p>
        </div>

        {/* Contenido principal: Texto + Carrusel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center max-w-5xl lg:max-w-6xl mx-auto mb-16 md:mb-20">
          {/* Columna de Texto */}
          <div className="space-y-5 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <h3 className="text-2xl sm:text-3xl md:text-3xl font-bold text-primary">
              Desde {foundingYear}, Conectando Corazones con la Naturaleza
            </h3>
            <p>
              Hotel La Orquídea nació con el propósito de conectar a los viajeros con la auténtica Amazonía. Fundado por
              una familia local apasionada por la naturaleza y la cultura Shuar, hoy ofrecemos no solo un lugar para
              dormir, sino una experiencia humana y natural profunda.
            </p>
            <div className="space-y-1.5">
              <p className="font-medium text-primary flex items-start gap-2">
                <Shield className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span><strong>Misión:</strong> Turismo sostenible que beneficie a la comunidad y respete el entorno.</span>
              </p>
              <p className="font-medium text-primary flex items-start gap-2">
                <TreePine className="h-5 w-5 mt-0.5 text-emerald-600 flex-shrink-0" />
                <span><strong>Visión:</strong> Ser un puente entre el mundo y la sabiduría ancestral de la selva.</span>
              </p>
            </div>
            
          </div>

          {/* 🖼️ CARRUSEL DE IMÁGENES — 100% RESPONSIVO */}
          <div className="relative w-full aspect-[4/3] sm:aspect-video md:aspect-video rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl group">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
                el: ".custom-pagination",
              }}
              loop={true}
              className="w-full h-full"
            >
              {carouselImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 sm:duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

            {/* Badge de experiencia — responsivo */}
            <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-amazonGreen-700 text-white px-3 sm:px-4 py-2 rounded-lg shadow-md text-sm sm:text-base font-semibold flex items-center gap-1.5 sm:gap-2 z-10 transform transition-transform duration-300">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">{yearsOfExperience} Años de Experiencia</span>
              <span className="sm:hidden">{yearsOfExperience} Años</span>
            </div>

            {/* Paginación personalizada */}
            <div className="custom-pagination absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10 flex gap-1.5 sm:gap-2"></div>
          </div>
        </div>

        {/* Sección de Características — Grid responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-8 px-2 max-w-5xl lg:max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center text-center p-5 sm:p-6 rounded-xl sm:rounded-2xl
                ${feature.bg} border border-transparent hover:border-gray-200
                shadow-md hover:shadow-lg transition-all duration-300
                group hover:-translate-y-1 sm:hover:-translate-y-2
              `}
              role="region"
              aria-labelledby={`feature-title-${index}`}
            >
              <div className={`p-3 sm:p-4 rounded-full ${feature.iconBg} mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300`}>
                <feature.icon className={`h-8 w-8 sm:h-10 sm:w-10 ${feature.color}`} aria-hidden="true" />
              </div>
              <h3
                id={`feature-title-${index}`}
                className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-primary transition-colors"
              >
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed px-1">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}