'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, XCircle } from 'lucide-react';

export function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMessage("");

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay

      // Simulate success or failure
      if (Math.random() > 0.1) { // 90% chance of success
        setStatus("success");
        setResponseMessage("¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.");
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
      } else {
        setStatus("error");
        setResponseMessage("Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.");
      }
    } catch (error) {
      setStatus("error");
      setResponseMessage("Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo más tarde.");
      console.error("Error sending message:", error);
    }
  };

  return (
    <section id="contacto" className="py-12 md:py-20 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Contáctanos</h2>
          <p className="text-lg text-muted-foreground mt-2">
            ¿Tienes alguna pregunta o necesitas asistencia? Envíanos un mensaje.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="p-6 md:p-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">Envíanos un Mensaje</CardTitle>
              <CardDescription className="mt-2">
                Completa el formulario y te responderemos a la brevedad.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@ejemplo.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Asunto</Label>
                  <Input
                    id="subject"
                    placeholder="Asunto de tu mensaje"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Escribe tu mensaje aquí..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={status === "loading"}>
                  {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
                </Button>
                {status === "success" && (
                  <div className="mt-4 text-center text-green-600 flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5" /> {responseMessage}
                  </div>
                )}
                {status === "error" && (
                  <div className="mt-4 text-center text-red-600 flex items-center justify-center gap-2">
                    <XCircle className="h-5 w-5" /> {responseMessage}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
