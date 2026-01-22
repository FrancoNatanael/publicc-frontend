"use client"

const steps = [
  {
    number: "01",
    title: "Creá tu cuenta",
    description: "Registrate con tu email en segundos. Sin tarjeta de crédito.",
  },
  {
    number: "02",
    title: "Completá tu perfil",
    description: "Un wizard guiado te ayuda a agregar tu información paso a paso.",
  },
  {
    number: "03",
    title: "Elegí tu template",
    description: "Seleccioná entre nuestros diseños minimalistas y profesionales.",
  },
  {
    number: "04",
    title: "Compartí tu link",
    description: "Tu presentación está lista. Compartila donde quieras.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Así de simple
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            En 4 pasos tenés tu presentación profesional lista
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-8 hidden h-px w-full bg-border lg:block" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-background text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
