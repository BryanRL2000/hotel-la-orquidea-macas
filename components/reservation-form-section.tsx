"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn, slugify } from "@/lib/utils"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon, MapPin, Phone, Mail, Clock } from "lucide-react"
import type { DateRange } from "react-day-picker"
import { roomDetailsData } from "@/lib/room-data"

export function ReservationFormSection() {
  const whatsappNumber = "+593983517007" // Reemplaza con el número de WhatsApp real del hotel

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

  const handleGuestsChange = (value: string) => {
    setGuests(value)
  }

  const handleRoomTypeChange = (value: string) => {
    setRoomType(value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const checkInDate = dateRange?.from ? format(dateRange.from, "yyyy-MM-dd", { locale: es }) : "No especificado"
    const checkOutDate = dateRange?.to ? format(dateRange.to, "yyyy-MM-dd", { locale: es }) : "No especificado"

    const whatsappMessage = encodeURIComponent(
      `¡Hola! Me gustaría hacer una reserva en Hotel Heliconia:\n` +
        `Check-in: ${checkInDate}\n` +
        `Check-out: ${checkOutDate}\n` +
        `Huéspedes: ${guests}\n` +
        `Tipo de habitación: ${roomType || "No especificado"}\n` +
        `Datos de contacto: Nombre: ${formData.fullName}\n` +
        `Email: ${formData.email}\n` +
        `Teléfono: ${formData.phone}\n` +
        `Mensaje adicional: ${formData.message || "Ninguno"}`,
    )

    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")
  }

  const availableRoomTypes = roomDetailsData.map((room) => ({
    value: slugify(room.type),
    label: room.type,
  }))

  return (
    <section id="reservar" className="py-12 md:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Contacto & Reservas</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Estamos aquí para hacer realidad tu experiencia perfecta en Hotel Heliconia. Contáctanos y comienza tu
            aventura.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Información de Contacto */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-primary">Información de Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-amazonGreen-700 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Dirección</p>
                  <p className="text-muted-foreground">Macas la Esmeralda Oriental, Provincia de Morona Santiago, Ecuador</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 text-amazonGreen-700 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Teléfono</p>
                  <p className="text-muted-foreground">+593 983517007</p>
                  <p className="text-muted-foreground text-sm">Disponible 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 text-amazonGreen-700 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-muted-foreground">reservas@hotelheliconia.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-6 w-6 text-amazonGreen-700 mt-1 shrink-0" />
                <div>
                  <p className="font-semibold">Horarios</p>
                  <p className="text-muted-foreground">Check-in: 12:00</p>
                  <p className="text-muted-foreground">Check-out: 12:00</p>
                </div>
              </div>
            </div>
            {/* Placeholder para Mapa Interactivo */}
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md flex items-center justify-center text-muted-foreground">
              {/* Reemplaza con tu mapa incrustado real */}
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
          </div>

          {/* Formulario de Reserva */}
          <Card className="p-6 md:p-8 shadow-lg transition-transform duration-300 hover:scale-[1.01] hover:shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">Formulario de Reserva</CardTitle>
              <CardDescription className="mt-2">Completa los detalles para tu solicitud de reserva.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Nombre Completo*</Label>
                    <Input
                      id="fullName"
                      placeholder="Tu nombre completo"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email*</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@ejemplo.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono*</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Tu número de teléfono"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="check-in">Check-in*</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="check-in"
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !dateRange?.from && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {dateRange?.from ? (
                            format(dateRange.from, "dd/MM/yyyy", { locale: es })
                          ) : (
                            <span>dd/mm/aaaa</span>
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
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="check-out">Check-out*</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          id="check-out"
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !dateRange?.to && "text-muted-foreground",
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {dateRange?.to ? format(dateRange.to, "dd/MM/yyyy", { locale: es }) : <span>dd/mm/aaaa</span>}
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
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="guests">Número de Huéspedes*</Label>
                    <Select onValueChange={handleGuestsChange} value={guests} required>
                      <SelectTrigger id="guests">
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
                    <Label htmlFor="roomType">Tipo de Habitación</Label>
                    <Select onValueChange={handleRoomTypeChange} value={roomType}>
                      <SelectTrigger id="roomType">
                        <SelectValue placeholder="Selecciona un tipo" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableRoomTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje Adicional</Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tus preferencias, ocasión especial, o cualquier solicitud especial..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amazonGreen-700 hover:bg-amazonGreen-800 text-white flex items-center gap-2 transition-transform duration-200 hover:scale-105"
                >
                  Enviar Solicitud de Reserva
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-2">
                  Al enviar este formulario, serás redirigido a WhatsApp para completar tu reserva de manera rápida y
                  personalizada.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
