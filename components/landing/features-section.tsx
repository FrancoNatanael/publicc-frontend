"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Link2, Paintbrush, RefreshCw, Globe, Share2, Shield } from "lucide-react"

const features = [
  {
    icon: Link2,
    title: "Un link único",
    description: "Tu propuesta profesional accesible desde un solo lugar. Fácil de compartir, imposible de ignorar.",
  },
  {
    icon: Paintbrush,
    title: "Diseño minimalista",
    description: "Templates minimalistas que ponen el foco en lo importante: lo que aportás.",
  },
  {
    icon: RefreshCw,
    title: "Siempre actualizada",
    description: "Editá tu propuesta en segundos. Sin reenviar archivos ni generar nuevos PDFs.",
  },
  {
    icon: Globe,
    title: "Multi-idioma",
    description: "Una misma presentación, múltiples idiomas. Ideal para procesos internacionales.",
  },
  {
    icon: Share2,
    title: "Fácil de compartir",
    description: "Compartí tu link en LinkedIn, WhatsApp, email o donde prefieras.",
  },
  {
    icon: Shield,
    title: "Vos decidís el mensaje",
    description: "Decidí qué mostrar y qué no. Tu presentación, tus reglas.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="border-t bg-muted/30 py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Todo lo que necesitás para destacar
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Herramientas pensadas para comunicar valor, no solo experiencia
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/50 bg-background/50">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
