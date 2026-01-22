"use client"

import Link from "next/link"
import { Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
              <Sparkles className="h-4 w-4 text-background" />
            </div>
            <span className="text-lg font-semibold tracking-tight">presentia</span>
          </Link>
          
          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Características
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Precios
            </Link>
            <Link href="/login" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Iniciar sesión
            </Link>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © 2026 Presentia. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
