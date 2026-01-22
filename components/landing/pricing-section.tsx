"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "para siempre",
    description: "Perfecto para empezar",
    features: [
      "1 presentación profesional",
      "1 template",
      "URL con subdominio",
      "Branding de Presentia",
      "1 idioma",
    ],
    cta: "Empezar gratis",
    href: "/register",
    popular: false,
  },
  {
    name: "Pro",
    price: "$5",
    period: "/ mes",
    description: "Para profesionales que quieren más",
    features: [
      "Presentaciones ilimitadas",
      "Todos los templates",
      "URL personalizada",
      "Sin branding",
      "Multi-idioma",
      "Prioridad en nuevas features",
      "Acceso a herramientas con IA",
    ],
    cta: "Comenzar prueba",
    href: "/register?plan=pro",
    popular: true,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="border-t bg-muted/30 py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Precios simples y transparentes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Empezá gratis, escalá cuando lo necesites
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 md:gap-6 lg:gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`relative ${plan.popular ? "border-primary shadow-lg" : "border-border/50"}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Más popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "default" : "outline"}
                  asChild
                >
                  <Link href={plan.href}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
