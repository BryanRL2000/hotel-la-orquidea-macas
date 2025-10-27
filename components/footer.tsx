"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Home,
  Bed,
  BookOpen,
  Mountain,
  ImageIcon,
  MessageSquare,
  Hotel,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const quickLinks = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/alojamientos", label: "Habitaciones", icon: Bed },
    { href: "/#historia", label: "Historia", icon: BookOpen },
    { href: "/#atracciones", label: "Atracciones", icon: Mountain },
    { href: "/#galeria", label: "Galería", icon: ImageIcon },
    { href: "/reservas", label: "Reservas", icon: Phone },
    { href: "/#testimonios", label: "Testimonios", icon: MessageSquare },
  ]

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://facebook.com/hotellaorquidea",
      label: "Facebook",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500/20",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/hotellaorquidea",
      label: "Twitter",
      color: "hover:text-sky-400",
      bgColor: "hover:bg-sky-500/20",
    },
    {
      icon: Instagram,
      href: "https://instagram.com/hotellaorquidea",
      label: "Instagram",
      color: "hover:text-pink-400",
      bgColor: "hover:bg-pink-500/20",
    },
  ]

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/jaguar-selva-footer.jpg"
          alt="Jaguares en la selva amazónica"
          fill
          className="object-cover object-center opacity-60"
          quality={90}
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-transparent to-green-900/40"></div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container px-4 md:px-6 py-16 md:py-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1: About Hotel */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-700 rounded-2xl shadow-2xl">
                  <Hotel className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-1">Hotel La Orquídea</h3>
                  <p className="text-amber-200 text-sm font-medium">Macas, Morona Santiago</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <p className="text-white/90 leading-relaxed text-lg font-medium">
                  Tu destino ideal para una experiencia inolvidable en la Amazonía ecuatoriana.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-amber-200 flex items-center gap-3">
                  <Globe className="h-6 w-6 text-amber-300" />
                  Conecta con Nosotros
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-14 h-14 bg-white/15 backdrop-blur-md rounded-2xl transition-all duration-300 hover:bg-white/25 hover:shadow-2xl border border-white/20 ${social.color} ${social.bgColor} hover:scale-110`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-7 w-7" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <ExternalLink className="h-8 w-8 text-white" />
              Enlaces Rápidos
            </h3>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <nav className="grid gap-4">
                {quickLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center space-x-4 text-white/90 hover:text-white transition-all duration-300 group py-3 px-4 rounded-xl hover:bg-white/10 border border-transparent hover:border-white/20 hover:translate-x-2"
                    prefetch={false}
                  >
                    <div className="flex items-center justify-center w-8 h-8">
                      <link.icon className="h-6 w-6 text-white/80 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="font-medium text-lg">{link.label}</span>
                    <ExternalLink className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-all duration-300 ml-auto" />
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Column 3: Location & Contact */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white flex items-center gap-3">
              <MapPin className="h-8 w-8 text-white" />
              Ubicación y Contacto
            </h3>

            {/* Contact Cards */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 bg-white/15 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-xl">
                  <Phone className="h-6 w-6 text-green-300" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">WhatsApp</p>
                  <a
                    href="https://wa.me/593983517007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-200 text-lg hover:text-green-100 transition-colors"
                  >
                    +593 98 351 7007
                  </a>
                  <p className="text-sm text-green-300/80">Disponible 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white/15 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-xl">
                  <Mail className="h-6 w-6 text-blue-300" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Email</p>
                  <a
                    href="mailto:info@hotellaorquidea.com"
                    className="text-blue-200 text-lg hover:text-blue-100 transition-colors"
                  >
                    info@hotellaorquidea.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white/15 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-500/20 rounded-xl">
                  <MapPin className="h-6 w-6 text-amber-300" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Dirección</p>
                  <p className="text-amber-200 text-lg">Macas, Morona Santiago</p>
                  <p className="text-amber-200">Ecuador</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            {/* Google Maps - Ubicación Exacta */}
            <div className="w-full h-64 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-white/20 hover:scale-105">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1993.2976758738698!2d-78.11675039748383!3d-2.303129438858879!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d20f649acc32e7%3A0x1e462df3fce4c9c9!2sHotel%20La%20Orquidea!5e0!3m2!1ses-419!2sec!4v1758734962637!5m2!1ses-419!2sec"
                style={{ border: "0", width: "100%", height: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Hotel La Orquídea en Macas, Ecuador"
                className="transition-all duration-300 hover:brightness-110"
              ></iframe>
            </div>

            <Button
              asChild
              size="lg"
              className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg py-6 rounded-2xl border border-amber-500/30 hover:scale-105"
            >
              <a
                href="https://maps.app.goo.gl/U34QsXYCmpEWgUbY7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3"
              >
                <MapPin className="h-6 w-6" />
                Ver en Google Maps
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="text-center lg:text-left">
                <p className="text-white/90 text-lg font-medium">
                  &copy; {currentYear} Hotel La Orquídea. Todos los derechos reservados.
                </p>
              </div>
              <div className="text-center lg:text-right">
                <p className="text-amber-200 text-lg font-medium flex items-center justify-center lg:justify-end gap-3">
                  <span className="text-2xl">🌿</span>
                  Hecho con amor en la Amazonía ecuatoriana
                  <span className="text-2xl">🐆</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
