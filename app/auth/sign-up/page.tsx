"use client"

import React, { useEffect } from "react"

import { useState } from "react"
import Link from "next/link"
import { redirect, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, ArrowLeft, Mail, Loader2, Check } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { createClient } from "@/lib/supabase/client"
import { useTheme } from "next-themes"
import Image from "next/image"


const benefits = [
  "Enfocado en impacto, no solo en tareas",
  "Diseño minimalista",
  "Compartí con un simple link",
]

export default function RegisterPage() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [repeatPassword, setRepeatPassword] = useState("")

  const [isLoading, setIsLoading] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const router = useRouter()
  const supabase = createClient();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    if (password !== repeatPassword) {
      setError("Las contraseñas no coinciden")
      setIsLoading(false)
      return
    }

    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name },
          emailRedirectTo: `${window.location.origin}/home`,
        },
      })

      if (signUpError) throw signUpError

      setIsSent(true)

      setTimeout(() => {
        router.push("/auth/sign-up-success")
      }, 2000)

    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Ocurrió un error al crear la cuenta")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getClaims();
      if (data?.claims) {
        redirect("/home");
      }
    }

    checkUser()
    setMounted(true)
  }, [])

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left side - Form */}
      <div className="flex flex-1 flex-col">
        <main className="flex flex-1 items-center justify-center px-4 pb-16">
          <Card className="w-full max-w-md border-0 shadow-none lg:border lg:shadow-sm">
            <CardHeader className="text-center">
              {mounted && theme === "dark" ? (
                <Image src="/icon-white.svg" alt="Logo" width={32} height={32} />
              ) : (
                <Image src="/icon.svg" alt="Logo" width={32} height={32} />
              )}
              <CardTitle className="text-2xl">Creá tu cuenta</CardTitle>
              <CardDescription>
                Empezá a mostrar tu valor
              </CardDescription>
            </CardHeader>

            {!isSent ? (
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Tu nombre"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      minLength={6}
                    />
                  </div>
                  {/* <div className="space-y-2">
                    <Label htmlFor="repeatPassword">Repetir contraseña</Label>
                    <Input
                      id="repeatPassword"
                      type="password"
                      placeholder="••••••••"
                      value={repeatPassword}
                      onChange={(e) => setRepeatPassword(e.target.value)}
                      required
                      minLength={6}
                    />
                  </div> */}

                  {error && <p className="text-sm font-medium text-destructive">{error}</p>}
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <Button type="submit" className="w-full gap-2" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Creando cuenta...
                      </>
                    ) : (
                      <>
                        <Mail className="h-4 w-4" />
                        Registrarse
                      </>
                    )}
                  </Button>
                  <p className="text-center text-sm text-muted-foreground">
                    ¿Ya tenés cuenta?{" "}
                    <Link href="/auth/login" className="font-medium text-primary underline-offset-4 hover:underline">
                      Iniciá sesión
                    </Link>
                  </p>
                </CardFooter>
              </form>
            ) : (
              <CardContent className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Cuenta creada</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Redirigiendo...
                </p>
              </CardContent>
            )}
          </Card>
        </main>
      </div>

      <div className="hidden flex-1 items-center justify-center bg-muted/30 p-8 lg:flex">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold tracking-tight">
            Tu valor profesional en un solo link
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reemplazá el CV en PDF por una presentación web moderna y profesional.
          </p>
          <ul className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3.5 w-3.5 text-primary" />
                </div>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
