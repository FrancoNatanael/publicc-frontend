"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, FileText, Palette, Zap, Globe, Layers, Sparkles } from "lucide-react"

const tags = [
  { label: "CV moderno", icon: FileText },
  { label: "Diseño minimalista", icon: Palette },
  { label: "Listo en minutos", icon: Zap },
  { label: "Multi-idioma", icon: Globe },
  { label: "Templates", icon: Layers },
  { label: "Link único", icon: Sparkles },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        </div>
      </div>
      
      <div className="container mx-auto max-w-5xl px-4 py-24 md:py-32">
        <div className="flex flex-col items-center text-center">
          <Badge variant="secondary" className="mb-6">
            Tu presentación profesional en un link
          </Badge>
          
          <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Creá tu carta de presentación profesional en minutos
          </h1>
          
          <p className="mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Reemplazá el CV en PDF por una presentación web moderna, fácil de actualizar y compartir. Sin saber diseño ni tecnología.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <Badge key={tag.label} variant="outline" className="gap-1.5 px-3 py-1.5">
                <tag.icon className="h-3.5 w-3.5" />
                {tag.label}
              </Badge>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" asChild className="gap-2">
              <Link href="/register">
                Crear mi presentación
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/demo/juan-perez">Ver ejemplo</Link>
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Gratis para siempre. Sin tarjeta de crédito.
          </p>
        </div>

        {/* Preview mockup */}
        <div className="mt-16 md:mt-24">
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute -inset-4 rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-xl border bg-card shadow-2xl">
              <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted-foreground">presentia.app/juan-perez</span>
                </div>
              </div>
              <div className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-muted to-muted-foreground/20" />
                  <h3 className="mt-4 text-xl font-semibold">Juan Pérez</h3>
                  <p className="text-muted-foreground">Product Designer</p>
                  <p className="mt-4 max-w-md text-sm text-muted-foreground">
                    Diseñador de producto con 5 años de experiencia creando interfaces que conectan con las personas.
                  </p>
                  <div className="mt-6 flex gap-2">
                    <Badge>UI/UX</Badge>
                    <Badge>Figma</Badge>
                    <Badge>Design Systems</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
