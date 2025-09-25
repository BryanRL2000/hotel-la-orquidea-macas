"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import type { DateRange } from "react-day-picker"
import { Calendar } from "@/components/ui/calendar"

export function AvailabilityForm() {
  const router = useRouter()
  const [date, setDate] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  })
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [destination, setDestination] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleCheckAvailability = () => {
    // Redirigir a la página de alojamientos
    router.push("/alojamientos")
  }

  return (
    <section className="py-8 bg-amazonGreen-100">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
          {/* Elegir destino */}
          <div className="space-y-2">
            <Label htmlFor="destination" className="text-amazonGreen-700 font-semibold">
              Elegir destino*
            </Label>
            <Input
              id="destination"
              placeholder="Enter Destination.."
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-white"
            />
          </div>

          {/* Número de Teléfono */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-amazonGreen-700 font-semibold">
              Número de Teléfono*
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="No.of Tel..."
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-white"
            />
          </div>

          {/* Fecha de Viaje (Inicio) */}
          <div className="space-y-2">
            <Label htmlFor="start-date" className="text-amazonGreen-700 font-semibold">
              Fecha de Viaje*
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="start-date"
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal bg-white",
                    !date?.from && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.from ? format(date.from, "dd/MM/yyyy", { locale: es }) : <span>dd/mm/aaaa</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                  locale={es}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Fin de Viaje (Fin) */}
          <div className="space-y-2">
            <Label htmlFor="end-date" className="text-amazonGreen-700 font-semibold">
              Fin de Viaje*
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="end-date"
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal bg-white",
                    !date?.to && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date?.to ? format(date.to, "dd/MM/yyyy", { locale: es }) : <span>dd/mm/aaaa</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={date?.from}
                  selected={date}
                  onSelect={setDate}
                  numberOfMonths={2}
                  locale={es}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Botón Ver disponibilidad */}
          <Button
            size="lg"
            className="w-full bg-amazonGreen-700 hover:bg-amazonGreen-800 text-white transition-transform duration-200 hover:scale-105 mt-6 lg:mt-0"
            onClick={handleCheckAvailability}
          >
            Ver disponibilidad
          </Button>
        </div>
      </div>
    </section>
  )
}
