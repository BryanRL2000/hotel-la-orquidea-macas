"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsappIcon } from "@/components/whatsapp-icon"
import Image from "next/image"
import Link from "next/link"

export function BookingSection() {
  const whatsappNumber = "+593983517007"
  const whatsappMessage = encodeURIComponent(
    "Hola, me gustaría hacer una reserva en el Hotel La Orquídea. ¿Podrían darme más información?",
  )

  return (
    <section id="reservar" className="py-12 md:py-20 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Reserva tu Estancia</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Facilitamos tu proceso de reserva para que disfrutes sin preocupaciones.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="p-6 md:p-8 transition-transform duration-300 hover:scale-[1.01] hover:shadow-lg">
            <CardHeader className="text-center">
              <Image
                src="/hotel_principal.jpeg"
                alt="Exterior del Hotel La Orquídea"
                width={600}
                height={300}
                className="rounded-md object-cover w-full h-48 mb-6"
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <CardTitle className="text-2xl md:text-3xl">Proceso de Reserva y Pago</CardTitle>
              <CardDescription className="mt-2">
                Para garantizar una atención personalizada y segura, todas nuestras reservas se gestionan a través de
                WhatsApp.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Método de Pago</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Actualmente, aceptamos pagos únicamente por **transferencia bancaria**. Una vez que te contactes con
                  nosotros por WhatsApp, te proporcionaremos los detalles bancarios necesarios para completar tu
                  reserva.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Cómo Reservar</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Haz clic en el botón de WhatsApp a continuación. Serás redirigido a una conversación con nuestro
                  equipo, donde podrás consultar disponibilidad, precios y finalizar tu reserva.
                </p>
              </div>
              <div className="flex justify-center">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 transition-transform duration-200 hover:scale-105"
                  >
                    <WhatsappIcon className="h-6 w-6" />
                    Reservar por WhatsApp
                  </Button>
                </a>
              </div>
              <div className="space-y-2 text-center mt-6">
                <h3 className="text-xl font-semibold">Dashboard de Reservas (Conceptual)</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Una vez que hayas iniciado tu reserva por WhatsApp, nuestro equipo te guiará a través de todo el
                  proceso. Podrás ver el estado de tu reserva y los detalles confirmados directamente en la
                  conversación. Considera tu chat de WhatsApp como tu &quot;dashboard&quot; personal para el seguimiento
                  de tu reserva.
                </p>
                <Link href="/reservas">
                  <Button variant="outline" className="mt-4 bg-transparent">
                    Ver más sobre reservas
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
