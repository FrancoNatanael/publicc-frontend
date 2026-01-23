"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
export function Footer() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="border-t py-12">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center gap-2">
            {mounted && theme === "dark" ? (
              <Image src="/icon-white.svg" alt="Logo" width={32} height={32} />
            ) : (
              <Image src="/icon.svg" alt="Logo" width={32} height={32} />
            )}
            <span className="text-lg font-semibold tracking-tight">publicc</span>
          </Link>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Características
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Precios
            </Link>
            <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Iniciar sesión
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © 2026 publicc. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
