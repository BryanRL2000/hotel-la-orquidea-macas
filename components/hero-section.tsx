"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronDown, Sparkles, Star, Heart } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      className="relative w-full h-[100vh] flex items-center justify-center text-center bg-cover bg-center overflow-hidden"
      id="hero"
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-75 ease-out"
        style={{
          transform: `translateY(${scrollY * 0.5}px) scale(${1 + scrollY * 0.0005})`,
        }}
      >
        <Image
          src="/hotel_principal.jpeg"
          alt="Exterior del Hotel La Orquídea"
          fill
          className="object-cover transition-all duration-1000"
          priority
          sizes="100vw"
        />
      </div>

      {/* Animated Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-amazonGreen-900/20 to-transparent animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-15 pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4"
        >
          <Sparkles className="h-6 w-6 text-white/30" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -15, 0],
            rotate: [0, -180, -360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 right-1/3"
        >
          <Star className="h-4 w-4 text-white/20" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 90, 180],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 left-1/3"
        >
          <Heart className="h-5 w-5 text-white/25" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-white px-4 md:px-6 max-w-4xl space-y-6">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white via-amazonGreen-100 to-white bg-clip-text text-transparent animate-fade-in-up">
            Bienvenido al Hotel La Orquídea
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-300 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-xl md:text-2xl mb-8 text-amazonGreen-100 animate-fade-in-up delay-200">
            Tu oasis de tranquilidad y aventura en el corazón de la Amazonía ecuatoriana.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-500 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/reservas" passHref>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amazonGreen-600 to-amazonGreen-700 hover:from-amazonGreen-700 hover:to-amazonGreen-800 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up delay-300 group"
              >
                Reserva Ahora
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="ml-2"
                >
                  <Sparkles className="h-5 w-5" />
                </motion.div>
              </Button>
            </Link>
            <Link href="/alojamientos" passHref>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-amazonGreen-800 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:-translate-y-1 animate-fade-in-up delay-400 bg-transparent group"
              >
                Ver Habitaciones
                <motion.div
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="ml-2"
                >
                  <Star className="h-5 w-5" />
                </motion.div>
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm text-amazonGreen-100 mb-2">Descubre más</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              <ChevronDown className="h-6 w-6 text-white" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
