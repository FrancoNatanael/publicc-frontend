"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Sparkles } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground">
            <Sparkles className="h-4 w-4 text-background" />
          </div>
          <span className="text-lg font-semibold tracking-tight">presentia</span>
        </Link>
        
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Características
          </Link>
          <Link href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Cómo funciona
          </Link>
          <Link href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Precios
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" asChild className="hidden sm:inline-flex">
            <Link href="/login">Iniciar sesión</Link>
          </Button>
          <Button asChild>
            <Link href="/register">Empezar gratis</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
