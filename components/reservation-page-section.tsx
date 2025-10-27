"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon, MapPin, Phone, Mail, Clock, MessageCircle, Users, Bed } from "lucide-react"
import { WhatsappIcon } from "@/components/whatsapp-icon"
import type { DateRange } from "react-day-picker"
import { roomDetailsData } from "@/lib/room-data"

export function ReservationPageSection() {
  const whatsappNumber = "+593983517007"

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  })
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  })
  const [guests, setGuests] = useState("1")
  const [roomType, setRoomType] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const checkInDate = dateRange?.from ? format(dateRange.from, "dd/MM/yyyy", { locale: es }) : "No especificado"
    const checkOutDate = dateRange?.to ? format(dateRange.to, "dd/MM/yyyy", { locale: es }) : "No especificado"
    const selectedRoom = roomDetailsData.find((room) => room.slug === roomType)
    const roomTypeName = selectedRoom ? selectedRoom.type : "No especificado"

    const whatsappMessage = encodeURIComponent(
      `🏨 *RESERVA HOTEL LA ORQUÍDEA* 🏨\n\n` +
        `👤 *Datos del huésped:*\n` +
        `Nombre: ${formData.fullName}\n` +
        `Email: ${formData.email}\n` +
        `Teléfono: ${formData.phone}\n\n` +
        `📅 *Detalles de la reserva:*\n` +
        `Check-in: ${checkInDate}\n` +
        `Check-out: ${checkOutDate}\n` +
        `Huéspedes: ${guests} persona${guests !== "1" ? "s" : ""}\n` +
        `Habitación: ${roomTypeName}\n\n` +
        `💬 *Mensaje adicional:*\n${formData.message || "Ninguno"}\n\n` +
        `¡Esperamos confirmar su reserva pronto! 🌿`,
    )

    // ✅ Abre WhatsApp con el mensaje
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")

    // ✅ LIMPIA TODOS LOS CAMPOS DEL FORMULARIO
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    })
    setDateRange({ from: undefined, to: undefined })
    setGuests("1")
    setRoomType("")
  }

  const availableRoomTypes = roomDetailsData.map((room) => ({
    value: room.slug,
    label: room.type,
    price: room.details.price,
    capacity: room.details.capacity,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-b from-amazonGreen-50 via-white to-amazonGreen-50">
      {/* Hero Section mejorado */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-amazonGreen-700 to-amazonGreen-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-emerald-400 rounded-full blur-xl"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-md">
            Reserva tu Estancia en la Amazonía
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90">
            Completa el formulario y te contactaremos por WhatsApp para confirmar tu estadía en Hotel La Orquídea, tu refugio entre ríos, selva y paz.
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-5 text-sm">
            {[
              { icon: Phone, text: "Confirmación inmediata" },
              { icon: MessageCircle, text: "Atención personalizada" },
              { icon: MapPin, text: "Ubicación privilegiada" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full flex items-center gap-2 border border-white/20"
              >
                <item.icon className="h-4 w-4" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl mx-auto">
            {/* Formulario con estilo premium */}
            <Card className="shadow-xl border border-amazonGreen-100 bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden">
              <CardHeader className="text-center pb-8 pt-8 bg-gradient-to-r from-amazonGreen-50 to-white">
                <CardTitle className="text-3xl font-bold text-amazonGreen-800">Reserva tu Habitación</CardTitle>
                <CardDescription className="text-amazonGreen-600 mt-2">
                  Te responderemos en minutos vía WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 md:p-8 space-y-7">
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Datos Personales */}
                  <div className="space-y-5">
                    <h3 className="text-xl font-semibold text-amazonGreen-800 flex items-center gap-2.5">
                      <Users className="h-5 w-5 text-amazonGreen-600" />
                      Tus Datos
                    </h3>
                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-amazonGreen-700 font-medium">
                          Nombre Completo *
                        </Label>
                        <Input
                          id="fullName"
                          placeholder="Ej. María López"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="border-amazonGreen-200 focus:ring-2 focus:ring-amazonGreen-300 focus:border-amazonGreen-500 transition"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-amazonGreen-700 font-medium">
                          Correo Electrónico *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="maria@example.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-amazonGreen-200 focus:ring-2 focus:ring-amazonGreen-300 focus:border-amazonGreen-500 transition"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-amazonGreen-700 font-medium">
                        WhatsApp *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+593 99 123 4567"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="border-amazonGreen-200 focus:ring-2 focus:ring-amazonGreen-300 focus:border-amazonGreen-500 transition"
                      />
                    </div>
                  </div>

                  {/* Detalles de la Reserva */}
                  <div className="space-y-5">
                    <h3 className="text-xl font-semibold text-amazonGreen-800 flex items-center gap-2.5">
                      <Bed className="h-5 w-5 text-amazonGreen-600" />
                      Tu Estadía
                    </h3>
                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="check-in" className="text-amazonGreen-700 font-medium">
                          Check-in *
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal border-amazonGreen-200 hover:bg-amazonGreen-50 transition",
                                !dateRange?.from && "text-muted-foreground",
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4 text-amazonGreen-600" />
                              {dateRange?.from ? format(dateRange.from, "dd/MM/yyyy", { locale: es }) : "Seleccionar"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              initialFocus
                              mode="range"
                              selected={dateRange}
                              onSelect={setDateRange}
                              numberOfMonths={1}
                              locale={es}
                              disabled={(date) => date < new Date()}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="check-out" className="text-amazonGreen-700 font-medium">
                          Check-out *
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal border-amazonGreen-200 hover:bg-amazonGreen-50 transition",
                                !dateRange?.to && "text-muted-foreground",
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4 text-amazonGreen-600" />
                              {dateRange?.to ? format(dateRange.to, "dd/MM/yyyy", { locale: es }) : "Seleccionar"}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              initialFocus
                              mode="range"
                              selected={dateRange}
                              onSelect={setDateRange}
                              numberOfMonths={1}
                              locale={es}
                              disabled={(date) => date < new Date()}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="guests" className="text-amazonGreen-700 font-medium">
                          Huéspedes *
                        </Label>
                        <Select onValueChange={setGuests} value={guests}>
                          <SelectTrigger className="border-amazonGreen-200 focus:ring-2 focus:ring-amazonGreen-300">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                              <SelectItem key={num} value={String(num)}>
                                {num} {num === 1 ? "Huésped" : "Huéspedes"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="roomType" className="text-amazonGreen-700 font-medium">
                          Habitación
                        </Label>
                        <Select onValueChange={setRoomType} value={roomType}>
                          <SelectTrigger className="border-amazonGreen-200 focus:ring-2 focus:ring-amazonGreen-300">
                            <SelectValue placeholder="Selecciona" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableRoomTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                <div>
                                  <span className="font-medium">{type.label}</span>
                                  <span className="block text-xs text-muted-foreground">{type.capacity} • {type.price}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-amazonGreen-700 font-medium">
                      ¿Algo especial que debamos saber?
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Ej. Celebramos un aniversario, necesitamos cuna, etc."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="border-amazonGreen-200 focus:ring-2 focus:ring-amazonGreen-300 focus:border-amazonGreen-500 transition"
                    />
                  </div>

                  {/* Botón destacado */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-700 hover:from-green-700 hover:to-emerald-800 text-white text-lg py-6 font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <WhatsappIcon className="h-6 w-6" />
                    Confirmar Reserva por WhatsApp
                  </Button>
                  <p className="text-center text-sm text-gray-500 mt-2">
                    Serás redirigido a WhatsApp. Respuesta en menos de 10 minutos.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Información lateral */}
            <div className="space-y-8">
              {/* Contacto */}
              <Card className="shadow-lg border border-amazonGreen-100 bg-white/90 backdrop-blur-sm rounded-2xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-amazonGreen-800 flex items-center gap-2.5">
                    <Phone className="h-5 w-5" />
                    ¿Preguntas? Estamos aquí
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { icon: MapPin, title: "Dirección", desc: "Macas, Morona Santiago", sub: "Corazón de la Amazonía ecuatoriana" },
                    { icon: Phone, title: "WhatsApp", desc: "+593 98 351 7007", sub: "Disponible 24/7" },
                    { icon: Mail, title: "Email", desc: "info@hotelaorquidea.com", sub: "" },
                    { icon: Clock, title: "Horarios", desc: "Check-in: 12:00 • Check-out: 12:00", sub: "" },
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 p-3 bg-amazonGreen-50 rounded-xl">
                      <div className="mt-0.5 text-amazonGreen-700">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-amazonGreen-800">{item.title}</p>
                        <p className="text-amazonGreen-600">{item.desc}</p>
                        {item.sub && <p className="text-xs text-amazonGreen-500 mt-0.5">{item.sub}</p>}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Mapa */}
              <Card className="shadow-lg border border-amazonGreen-100 bg-white/90 backdrop-blur-sm rounded-2xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-amazonGreen-800 flex items-center gap-2.5">
                    <MapPin className="h-5 w-5" />
                    Ubicación
                  </CardTitle>
                  <CardDescription className="text-amazonGreen-600">
                    Fácil acceso desde el centro de Macas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-72 rounded-xl overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1993.2976758738698!2d-78.11675039748383!3d-2.303129438858879!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d20f649acc32e7%3A0x1e462df3fce4c9c9!2sHotel%20La%20Orquidea!5e0!3m2!1ses-419!2sec!4v1758734962637!5m2!1ses-419!2sec"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Hotel La Orquídea en Macas"
                      className="transition-transform duration-300 hover:scale-[1.01]"
                    ></iframe>
                  </div>
                  <div className="mt-4 text-center">
                    <a
                      href="https://maps.app.goo.gl/U34QsXYCmpEWgUbY7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-amazonGreen-700 hover:text-amazonGreen-900 font-medium"
                    >
                      <MapPin className="h-4 w-4" />
                      Ver en Google Maps
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}