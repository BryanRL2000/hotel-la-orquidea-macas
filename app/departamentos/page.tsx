import { MainNav } from "@/components/main-nav";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { roomDetailsData } from "@/lib/room-data";
import { slugify } from "@/lib/utils";

export default function DepartamentosPage() {
  const departamentos = roomDetailsData.filter(room => room.category === "departamentos");

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-1 py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Nuestros Departamentos y Casas de Renta</h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Espacios amplios y privados para estancias prolongadas o grupos grandes.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {departamentos.map((room, index) => (
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
