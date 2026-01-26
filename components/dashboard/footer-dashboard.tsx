'use client'
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function FooterDashboard() {
    const { theme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    return <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-4">
        <Link href="/" className="flex items-center gap-2">
            {mounted && theme === "dark" ? (
                <Image src="/icon-white.svg" alt="Logo" width={32} height={32} />
            ) : (
                <Image src="/icon.svg" alt="Logo" width={32} height={32} />
            )}
            <span className="text-lg font-semibold tracking-tight">publicc</span>
        </Link>
    </footer>
}