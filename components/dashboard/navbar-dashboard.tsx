"use client"
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import { ThemeToggle } from "../theme-toggle";
import { CircleUser, LogOut, User } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function NavbarDashboard() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const router = useRouter()
    const supabase = createClient()

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push("/")
    }

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
                <Link href="/" className="flex items-center gap-2">
                    {mounted && theme === "dark" ? (
                        <Image src="/icon-white.svg" alt="Logo" width={32} height={32} />
                    ) : (
                        <Image src="/icon.svg" alt="Logo" width={32} height={32} />
                    )}
                    <span className="text-lg font-semibold tracking-tight">publicc</span>
                </Link>

                <nav className="hidden items-center gap-6 md:flex">
                    <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                        Links
                    </Link>
                </nav>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <CircleUser size={20} />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => router.push('/perfil')}>
                                <User className="mr-2 h-4 w-4" />
                                <span>Perfil</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={handleSignOut}>
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Cerrar sesión</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}