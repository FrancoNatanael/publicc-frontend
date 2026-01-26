'use client'
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import NavbarDashboard from "@/components/dashboard/navbar-dashboard";
import { useTheme } from "next-themes";
import FooterDashboard from "@/components/dashboard/footer-dashboard";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 w-full flex flex-col items-center">
        <NavbarDashboard />
        <div className="flex-1 flex flex-col">
          {children}
        </div>

        <FooterDashboard />
      </div>
    </main>
  );
}
