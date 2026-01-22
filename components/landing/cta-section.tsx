"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-2xl bg-primary px-8 py-16 text-primary-foreground md:px-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
          
          <div className="relative flex flex-col items-center text-center">
            <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Dejá de enviar PDFs desactualizados
            </h2>
            <p className="mt-4 max-w-xl text-lg text-primary-foreground/80">
              Creá tu presentación profesional en minutos y compartila con un simple link.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="mt-8 gap-2"
              asChild
            >
              <Link href="/register">
                Crear mi presentación
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
