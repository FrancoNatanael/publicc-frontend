"use client";

import { useFetchLinks } from "@/features/link/useFetchLinks";
import { useEffect, use } from "react";
import { LinkComponent } from "@/features/link/components/link";

export default function PublicLinkPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const { link, loading, error, getLinkBySlug } = useFetchLinks();


    useEffect(() => {
        if (slug) {
            getLinkBySlug(slug);
        }
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-muted-foreground animate-pulse text-lg">Cargando perfil...</p>
            </div>
        );
    }

    if (error || !link) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 space-y-4">
                <h1 className="text-4xl font-bold">404</h1>
                <p className="text-xl text-muted-foreground">Oops! No pudimos encontrar este link.</p>
                <div className="flex flex-col gap-2">
                    <p className="text-sm">¿Es tu link? Asegúrate de haberlo escrito bien.</p>
                    <a href="/" className="text-primary hover:underline font-medium">Volver al inicio</a>
                </div>
            </div>
        );
    }

    return <LinkComponent profile={link} />;
}
