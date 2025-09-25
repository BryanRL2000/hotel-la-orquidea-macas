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
  const whatsappNumber = "+593994979605" // Número actualizado del hotel

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

    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")
  }

  const availableRoomTypes = roomDetailsData.map((room) => ({
    value: room.slug,
    label: room.type,
    price: room.details.price,
    capacity: room.details.capacity,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-br from-amazonGreen-50 to-white">
      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-amazonGreen-100 to-amazonGreen-50">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amazonGreen-800 mb-6">Reserva tu Estancia</h1>
          <p className="text-lg md:text-xl text-amazonGreen-700 max-w-3xl mx-auto mb-8">
            Completa el formulario y te contactaremos por WhatsApp para confirmar tu reserva en Hotel La Orquídea, tu
            refugio en el corazón de la Amazonía ecuatoriana.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-amazonGreen-600">
            <span className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Confirmación inmediata
            </span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Atención personalizada
            </span>
            <span className="bg-white px-4 py-2 rounded-full shadow-sm flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Ubicación privilegiada
            </span>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Formulario de Reserva */}
            <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-3xl font-bold text-amazonGreen-800 mb-2">Formulario de Reserva</CardTitle>
                <CardDescription className="text-lg text-amazonGreen-600">
                  Completa tus datos y te contactaremos por WhatsApp
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Datos Personales */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-amazonGreen-800 flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Datos Personales
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="fullName" className="text-amazonGreen-700 font-medium">
                          Nombre Completo *
                        </Label>
                        <Input
                          id="fullName"
                          placeholder="Tu nombre completo"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                          className="border-amazonGreen-200 focus:border-amazonGreen-500 focus:ring-amazonGreen-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-amazonGreen-700 font-medium">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@ejemplo.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-amazonGreen-200 focus:border-amazonGreen-500 focus:ring-amazonGreen-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-amazonGreen-700 font-medium">
                        Teléfono *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Tu número de teléfono"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="border-amazonGreen-200 focus:border-amazonGreen-500 focus:ring-amazonGreen-500"
                      />
                    </div>
                  </div>

                  {/* Detalles de la Reserva */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-amazonGreen-800 flex items-center gap-2">
                      <Bed className="h-5 w-5" />
                      Detalles de la Reserva
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="check-in" className="text-amazonGreen-700 font-medium">
                          Fecha de Entrada *
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              id="check-in"
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal border-amazonGreen-200 hover:border-amazonGreen-500",
                                !dateRange?.from && "text-muted-foreground",
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {dateRange?.from ? (
                                format(dateRange.from, "dd/MM/yyyy", { locale: es })
                              ) : (
                                <span>Seleccionar fecha</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              initialFocus
                              mode="range"
                              defaultMonth={dateRange?.from}
                              selected={dateRange}
                              onSelect={setDateRange}
                              numberOfMonths={2}
                              locale={es}
                              disabled={(date) => date < new Date()}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="check-out" className="text-amazonGreen-700 font-medium">
                          Fecha de Salida *
                        </Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              id="check-out"
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal border-amazonGreen-200 hover:border-amazonGreen-500",
                                !dateRange?.to && "text-muted-foreground",
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {dateRange?.to ? (
                                format(dateRange.to, "dd/MM/yyyy", { locale: es })
                              ) : (
                                <span>Seleccionar fecha</span>
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              initialFocus
                              mode="range"
                              defaultMonth={dateRange?.from}
                              selected={dateRange}
                              onSelect={setDateRange}
                              numberOfMonths={2}
                              locale={es}
                              disabled={(date) => date < new Date()}
                            />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="guests" className="text-amazonGreen-700 font-medium">
                          Número de Huéspedes *
                        </Label>
                        <Select onValueChange={setGuests} value={guests} required>
                          <SelectTrigger id="guests" className="border-amazonGreen-200 focus:border-amazonGreen-500">
                            <SelectValue placeholder="Selecciona" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                              <SelectItem key={num} value={String(num)}>
                                {num} Huésped{num > 1 ? "es" : ""}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="roomType" className="text-amazonGreen-700 font-medium">
                          Tipo de Habitación
                        </Label>
                        <Select onValueChange={setRoomType} value={roomType}>
                          <SelectTrigger id="roomType" className="border-amazonGreen-200 focus:border-amazonGreen-500">
                            <SelectValue placeholder="Selecciona un tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableRoomTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                <div className="flex flex-col">
                                  <span>{type.label}</span>
                                  <span className="text-xs text-muted-foreground">
                                    {type.capacity} - {type.price}
                                  </span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Mensaje Adicional */}
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-amazonGreen-700 font-medium">
                      Mensaje Adicional
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntanos sobre tus preferencias, ocasión especial, o cualquier solicitud especial..."
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="border-amazonGreen-200 focus:border-amazonGreen-500 focus:ring-amazonGreen-500"
                    />
                  </div>

                  {/* Botón de Envío */}
                  <Button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <WhatsappIcon className="h-6 w-6" />
                    Enviar Reserva por WhatsApp
                  </Button>
                  <p className="text-center text-sm text-amazonGreen-600 mt-2">
                    Al enviar este formulario, serás redirigido a WhatsApp para completar tu reserva de manera rápida y
                    personalizada.
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Información de Contacto y Mapa */}
            <div className="space-y-8">
              {/* Información de Contacto */}
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-amazonGreen-800 flex items-center gap-2">
                    <Phone className="h-6 w-6" />
                    Información de Contacto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 bg-amazonGreen-50 rounded-lg">
                      <MapPin className="h-6 w-6 text-amazonGreen-700 mt-1 shrink-0" />
                      <div>
                        <p className="font-semibold text-amazonGreen-800">Dirección</p>
                        <p className="text-amazonGreen-600">Macas, Morona Santiago, Ecuador</p>
                        <p className="text-sm text-amazonGreen-500">En el corazón de la Amazonía</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-amazonGreen-50 rounded-lg">
                      <Phone className="h-6 w-6 text-amazonGreen-700 mt-1 shrink-0" />
                      <div>
                        <p className="font-semibold text-amazonGreen-800">WhatsApp</p>
                        <p className="text-amazonGreen-600">+593 99 497 9605</p>
                        <p className="text-sm text-amazonGreen-500">Disponible 24/7</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-amazonGreen-50 rounded-lg">
                      <Mail className="h-6 w-6 text-amazonGreen-700 mt-1 shrink-0" />
                      <div>
                        <p className="font-semibold text-amazonGreen-800">Email</p>
                        <p className="text-amazonGreen-600">info@hotelllaorquidea.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-amazonGreen-50 rounded-lg">
                      <Clock className="h-6 w-6 text-amazonGreen-700 mt-1 shrink-0" />
                      <div>
                        <p className="font-semibold text-amazonGreen-800">Horarios</p>
                        <p className="text-amazonGreen-600">Check-in: 15:00</p>
                        <p className="text-amazonGreen-600">Check-out: 12:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mapa de Google Maps */}
              <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-amazonGreen-800 flex items-center gap-2">
                    <MapPin className="h-6 w-6" />
                    Nuestra Ubicación
                  </CardTitle>
                  <CardDescription>Encuéntranos en el corazón de Macas, Morona Santiago</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-80 rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1993.2976758738698!2d-78.11675039748383!3d-2.303129438858879!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d20f649acc32e7%3A0x1e462df3fce4c9c9!2sHotel%20La%20Orquidea!5e0!3m2!1ses-419!2sec!4v1758734962637!5m2!1ses-419!2sec"
                      style={{ border: "0", width: "100%", height: "100%" }}  // ✅ objeto correcto
                      allowFullScreen  // ✅ camelCase
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"  // ✅ camelCase
                      title="Ubicación del Hotel La Orquídea en Macas, Ecuador"
                      className="transition-all duration-300 hover:brightness-110"
                    ></iframe>
                    
                  </div>
                  <div className="mt-4 text-center">
                    <a
                      href="https://maps.app.goo.gl/U34QsXYCmpEWgUbY7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-amazonGreen-700 hover:text-amazonGreen-800 font-medium transition-colors duration-300"
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
