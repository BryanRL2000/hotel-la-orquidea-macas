import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Sobre Nosotros - Hotel La Orquídea",
  description: "Descubre nuestra historia, misión y conexión con la Amazonía. Vive una experiencia auténtica en medio de la selva.",
  keywords: ["Hotel La Orquídea", "historia", "misión", "visión", "Amazonía", "turismo sostenible", "cultura Shuar"],
}

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <MainNav />

      <main className="flex-1 py-12 md:py-20">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">

          {/* Nuestra Historia */}
          <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Nuestra Historia</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-left">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  En 1995, una familia apasionada por la Amazonía decidió abrir las puertas de su hogar al mundo.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Hoy, Hotel La Orquídea no es solo un lugar para dormir: es una experiencia viva, donde cada detalle respira naturaleza, cultura y calidez humana.
                </p>
                <div className="mt-4">
                  <Link href="/alojamientos">
                    <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">
                      Conoce Nuestras Habitaciones
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl border">
                <img
                  src="/fundadores.jpg"
                  alt="Fundadores del Hotel La Orquídea"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-90"
                />
              </div>
            </div>
          </section>

          {/* Misión y Visión */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Propósito y Sueños</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted/50 p-8 rounded-2xl border hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-primary mb-4">Misión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ofrecer turismo sostenible que beneficie a la comunidad y respete el entorno, creando experiencias auténticas en el corazón de la Amazonía.
                </p>
              </div>
              <div className="bg-muted/50 p-8 rounded-2xl border hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-primary mb-4">Visión</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser el puente entre el mundo moderno y la sabiduría ancestral de la selva, reconocidos por hospitalidad y sostenibilidad en la Amazonía.
                </p>
              </div>
            </div>
          </section>

          {/* Valores */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Lo Que Nos Guía</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: "🌿",
                  title: "Sostenibilidad",
                  desc: "Protegemos la selva mientras te recibimos en ella.",
                },
                {
                  icon: "🏡",
                  title: "Hospitalidad",
                  desc: "Te tratamos como parte de nuestra familia amazónica.",
                },
                {
                  icon: "⭐",
                  title: "Excelencia",
                  desc: "Cada detalle está pensado para tu comodidad y asombro.",
                },
                {
                  icon: "🤝",
                  title: "Comunidad",
                  desc: "Trabajamos con y para las comunidades Shuar locales.",
                },
                {
                  icon: "🎭",
                  title: "Autenticidad",
                  desc: "Vive rituales, sabores y sonidos reales de la Amazonía.",
                },
                {
                  icon: "❤️",
                  title: "Pasión",
                  desc: "Hecho con amor por quienes aman esta tierra.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Video Section - Ahora aquí, abajo */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-center text-primary mb-8">Descubre Nuestra Esencia</h2>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video max-w-4xl mx-auto border border-primary/20">
              <iframe
                src="https://www.youtube.com/embed/ryf4Syppu80?si=i5S8YFNsXAVWAXXG"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
            <p className="text-center text-muted-foreground mt-4 text-lg">
              Sumérgete en la belleza de la Amazonía y conoce cómo vivimos la armonía entre naturaleza, cultura y hospitalidad.
            </p>
          </section>

          {/* CTA Final */}
          <section className="text-center py-16 bg-primary/5 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              ¿Listo para vivir la Amazonía?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Reserva hoy y sé parte de una historia que respeta la naturaleza, honra la cultura y celebra la vida.
            </p>
            <Link href="/reservas" passHref>
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white"
                aria-label="Reserva tu estancia en Hotel La Orquídea"
              >
                Reserva tu Estancia →
              </Button>
            </Link>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}                 