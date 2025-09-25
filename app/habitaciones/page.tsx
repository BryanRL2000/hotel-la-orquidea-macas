import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { roomDetailsData } from "@/lib/room-data";
import { slugify } from "@/lib/utils";

export default function HabitacionesPage() {
  const habitaciones = roomDetailsData.filter(room => room.category === "habitaciones");

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1 py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Nuestras Habitaciones</h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Descubre nuestras cómodas habitaciones, perfectas para tu estancia en la Amazonía.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {habitaciones.map((room, index) => (
              <Card key={index} className="flex flex-col h-full transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg">
                <CardHeader>
                  <Image
                    src={room.images[0] || "/placeholder.svg"}
                    alt={room.type}
                    width={400}
                    height={300}
                    className="rounded-md object-cover w-full h-48"
                  />
                  <CardTitle className="mt-4">{room.type}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription>{room.description}</CardDescription>
                  <Link href={`/habitaciones/${slugify(room.type)}`} passHref>
                    <Button variant="outline" className="w-full mt-4 transition-transform duration-200 hover:scale-105">Ver Detalles</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
