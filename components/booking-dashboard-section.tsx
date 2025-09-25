import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, XCircle, Info, StepForward, MessageSquare } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function BookingDashboardSection() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Contacto Inicial",
      description: "Inicia tu reserva a través de WhatsApp con nuestro equipo.",
    },
    {
      icon: Clock,
      title: "Verificación de Disponibilidad",
      description: "Nuestro equipo revisa las fechas y el tipo de alojamiento solicitado.",
    },
    {
      icon: StepForward,
      title: "Detalles de Pago",
      description: "Te enviaremos los detalles para la transferencia bancaria y confirmación.",
    },
    {
      icon: CheckCircle,
      title: "Reserva Confirmada",
      description: "Una vez recibido el pago, tu reserva se confirma y recibirás un email.",
    },
  ]

  return (
    <section id="mi-reserva" className="py-12 md:py-20 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Estado de tu Reserva</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Gestiona y consulta el estado de tu reserva a través de nuestro sistema de comunicación.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="p-6 md:p-8 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">Tu Dashboard Personal (vía WhatsApp)</CardTitle>
              <CardDescription className="mt-2">
                Dado que nuestras reservas se gestionan de forma personalizada, tu chat de WhatsApp con nuestro equipo
                es tu principal herramienta para ver y gestionar el estado de tu reserva.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-primary">
                  <Info className="h-6 w-6" /> ¿Cómo funciona?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Una vez que inicias el proceso de reserva a través de nuestro botón de WhatsApp, nuestro equipo te
                  asignará un agente dedicado. Este agente te mantendrá informado sobre cada paso de tu reserva.
                </p>
              </div>

              {/* Indicador de Progreso Conceptual */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-primary">
                  <StepForward className="h-6 w-6" /> Proceso de Reserva:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg border bg-muted/50 transition-transform duration-300 hover:scale-[1.02] hover:shadow-md"
                    >
                      <step.icon className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg">{step.title}</h4>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold flex items-center gap-2 text-primary">
                  <Clock className="h-6 w-6" /> Estados Comunes de Reserva:
                </h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    <span className="font-semibold">Pendiente de Confirmación:</span> Hemos recibido tu solicitud y
                    estamos verificando la disponibilidad.
                  </li>
                  <li>
                    <span className="font-semibold">Pendiente de Pago:</span> Tu reserva está pre-aprobada. Te hemos
                    enviado los detalles para la transferencia bancaria.
                  </li>
                  <li>
                    <span className="font-semibold flex items-center gap-1">
                      Confirmada <CheckCircle className="h-4 w-4 text-green-500" />:
                    </span>{" "}
                    ¡Tu reserva está completa! Recibirás un correo electrónico con todos los detalles.
                  </li>
                  <li>
                    <span className="font-semibold flex items-center gap-1">
                      Cancelada <XCircle className="h-4 w-4 text-red-500" />:
                    </span>{" "}
                    Tu reserva ha sido cancelada. Por favor, contáctanos si necesitas ayuda.
                  </li>
                </ul>
              </div>

              <div className="space-y-4 text-center mt-6">
                <h3 className="text-xl font-semibold flex items-center justify-center gap-2 text-primary">
                  <Info className="h-6 w-6" /> ¿Necesitas ayuda?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Si tienes alguna pregunta sobre el estado de tu reserva o necesitas hacer algún cambio, simplemente
                  responde a tu chat de WhatsApp con nuestro equipo. Estaremos encantados de ayudarte.
                </p>
                <Link href="/#reservar" passHref>
                  <Button className="mt-4 transition-transform duration-200 hover:scale-105">
                    Contactar por WhatsApp
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
