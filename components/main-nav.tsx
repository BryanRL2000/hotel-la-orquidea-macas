"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon, Home, Bed, BookOpen, Mountain, ImageIcon, MessageSquare, Phone, Hotel, Sparkles } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export function MainNav() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "/", label: "Inicio", icon: Home },
    { href: "/alojamientos", label: "Habitaciones", icon: Bed },
    { href: "/sobre-nosotros", label: "Sobre Nosotros", icon: BookOpen },
    { href: "/#atracciones", label: "Atracciones", icon: Mountain },
    { href: "/#galeria", label: "Galería", icon: ImageIcon },
    { href: "/#testimonios", label: "Testimonios", icon: MessageSquare },
    { href: "/reservas", label: "Reservas", icon: Phone, isSpecial: true },
  ]

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    if (href === "/reservas") return pathname === "/reservas"
    if (href === "/alojamientos") return pathname === "/alojamientos"
    if (href === "/sobre-nosotros") return pathname === "/sobre-nosotros"
    return false
  }

  const handleNavClick = (href: string) => {
    if (href.startsWith("/#")) {
      // Para enlaces de ancla, navegar a la página principal primero si no estamos ahí
      if (pathname !== "/") {
        window.location.href = href
      } else {
        // Si ya estamos en la página principal, hacer scroll suave
        const elementId = href.substring(2)
        const element = document.getElementById(elementId)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border-amazonGreen-200"
          : "bg-amazonGreen-100/95 backdrop-blur-sm border-amazonGreen-300"
      }`}
    >
      <div className="container flex h-20 items-center px-4 md:px-6">
        {/* Logo */}
        <div className="mr-6 flex items-center group">
          <Link href="/" className="flex items-center space-x-3" prefetch={false}>
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amazonGreen-600 to-amazonGreen-700 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Hotel className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold transition-all duration-300 group-hover:scale-105 ${
                  isScrolled ? "text-amazonGreen-800" : "text-amazonGreen-800"
                }`}
              >
                Hotel La Orquídea
              </span>
              <span className="text-xs text-amazonGreen-600 font-medium">Macas, Morona Santiago</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-1 justify-end items-center space-x-2">
          {navItems.map((item, index) => (
            <div key={item.href}>
              {item.href.startsWith("/#") ? (
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={`relative group flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl hover:scale-105 transform ${
                    item.isSpecial
                      ? "bg-gradient-to-r from-amazonGreen-700 to-amazonGreen-800 text-white shadow-lg hover:shadow-xl hover:from-amazonGreen-800 hover:to-amazonGreen-900"
                      : `${
                          isScrolled ? "text-amazonGreen-700" : "text-amazonGreen-700"
                        } hover:text-amazonGreen-800 hover:bg-amazonGreen-50 hover:shadow-md`
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="hidden xl:inline">{item.label}</span>
                  {item.isSpecial && <Sparkles className="h-4 w-4 ml-1 animate-spin" />}
                </button>
              ) : (
                <Link
                  href={item.href}
                  className={`relative group flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-all duration-300 rounded-xl hover:scale-105 transform ${
                    item.isSpecial
                      ? "bg-gradient-to-r from-amazonGreen-700 to-amazonGreen-800 text-white shadow-lg hover:shadow-xl hover:from-amazonGreen-800 hover:to-amazonGreen-900"
                      : isActive(item.href)
                        ? `${
                            isScrolled
                              ? "text-amazonGreen-800 bg-amazonGreen-200/80"
                              : "text-amazonGreen-800 bg-amazonGreen-200/60"
                          } shadow-md`
                        : `${
                            isScrolled ? "text-amazonGreen-700" : "text-amazonGreen-700"
                          } hover:text-amazonGreen-800 hover:bg-amazonGreen-50 hover:shadow-md`
                  }`}
                  prefetch={false}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="hidden xl:inline">{item.label}</span>
                  {item.isSpecial && <Sparkles className="h-4 w-4 ml-1 animate-spin" />}
                  {isActive(item.href) && !item.isSpecial && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-amazonGreen-700 rounded-full" />
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto lg:hidden hover:bg-amazonGreen-50 transition-all duration-300"
            >
              <MenuIcon
                className={`h-6 w-6 transition-colors duration-300 ${
                  isScrolled ? "text-amazonGreen-800" : "text-amazonGreen-700"
                }`}
              />
              <span className="sr-only">Abrir menú de navegación</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-80 bg-gradient-to-br from-white via-amazonGreen-50/50 to-amazonGreen-100/30"
          >
            <div className="flex flex-col gap-6 py-6">
              {/* Mobile Header */}
              <div className="px-4 pb-6 border-b border-amazonGreen-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amazonGreen-600 to-amazonGreen-700 rounded-xl shadow-lg">
                    <Hotel className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-amazonGreen-800">Hotel La Orquídea</h2>
                    <p className="text-sm text-amazonGreen-600">Tu oasis en la Amazonía</p>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Items */}
              {navItems.map((item, index) => (
                <div key={item.href}>
                  {item.href.startsWith("/#") ? (
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`flex items-center space-x-4 px-4 py-4 text-base font-medium rounded-xl mx-2 transition-all duration-300 transform hover:scale-105 hover:translate-x-2 w-full text-left ${
                        item.isSpecial
                          ? "bg-gradient-to-r from-amazonGreen-700 to-amazonGreen-800 text-white shadow-lg"
                          : "text-amazonGreen-700 hover:text-amazonGreen-800 hover:bg-amazonGreen-100/60"
                      }`}
                    >
                      <item.icon className="h-6 w-6" />
                      <span>{item.label}</span>
                      {item.isSpecial && <Sparkles className="h-5 w-5 ml-auto animate-spin" />}
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`flex items-center space-x-4 px-4 py-4 text-base font-medium rounded-xl mx-2 transition-all duration-300 transform hover:scale-105 hover:translate-x-2 ${
                        item.isSpecial
                          ? "bg-gradient-to-r from-amazonGreen-700 to-amazonGreen-800 text-white shadow-lg"
                          : isActive(item.href)
                            ? "text-amazonGreen-800 bg-amazonGreen-200/80 shadow-md"
                            : "text-amazonGreen-700 hover:text-amazonGreen-800 hover:bg-amazonGreen-100/60"
                      }`}
                      prefetch={false}
                    >
                      <item.icon className="h-6 w-6" />
                      <span>{item.label}</span>
                      {item.isSpecial && <Sparkles className="h-5 w-5 ml-auto animate-spin" />}
                      {isActive(item.href) && !item.isSpecial && (
                        <div className="ml-auto w-2 h-2 bg-amazonGreen-600 rounded-full animate-pulse"></div>
                      )}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Footer */}
              <div className="mt-8 px-4 pt-6 border-t border-amazonGreen-200 text-center">
                <div className="flex items-center justify-center gap-2 text-amazonGreen-600">
                  <Sparkles className="h-4 w-4 animate-pulse" />
                  <p className="text-xs">Experiencias auténticas en la Amazonía</p>
                  <Sparkles className="h-4 w-4 animate-pulse" />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
