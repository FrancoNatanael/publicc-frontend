"use client";

import { useFetchLinks } from "@/features/link/useFetchLinks";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink, Copy, Trash2, Globe, Plus, Check } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function LinksPage() {
    const { links, loading, getAllLinks, deleteLink } = useFetchLinks();
    const { user } = useAuth();
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
            if (user) {
                getAllLinks(user.id);
            }
        };
        fetchUser();
    }, []);

    const copyToClipboard = (slug: string) => {
        setCopied(true);
        const fullUrl = `${window.location.origin}/${slug}`;
        navigator.clipboard.writeText(fullUrl);

        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    const handleDelete = async (id: string) => {
        if (confirm("¿Estás seguro de que quieres eliminar este link?")) {
            const success = await deleteLink(id);
            if (success && user) {
                getAllLinks(user.id);
            }
        }
    };

    if (loading && links.length === 0) {
        return (
            <div className="w-full max-w-5xl mx-auto p-6 text-center py-20">
                <p className="text-muted-foreground animate-pulse">Cargando tus links...</p>
            </div>
        );
    }

    return (
        <div className="w-full max-w-5xl mx-auto p-6 space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Mis Links</h1>
                    <p className="text-muted-foreground">Gestiona tus páginas públicas de Publicc.</p>
                </div>
                <Link href="/crear-link">
                    <Button className="gap-2">
                        <Plus className="w-4 h-4" />
                        Crear nuevo link
                    </Button>
                </Link>
            </div>

            {links.length === 0 ? (
                <Card className="border-dashed py-12">
                    <CardContent className="flex flex-col items-center justify-center text-center space-y-4">
                        <div className="p-4 bg-muted rounded-full">
                            <Globe className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-xl font-semibold">No tienes links creados</h3>
                            <p className="text-muted-foreground max-w-sm">
                                Crea tu primera página pública para mostrar tu valor al mundo.
                            </p>
                        </div>
                        <Link href="/crear-link">
                            <Button variant="outline">Empezar ahora</Button>
                        </Link>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {links.map((link) => (
                        <Card key={link.id} className="group hover:shadow-lg transition-all flex flex-col">
                            <CardContent className="p-6 flex flex-col h-full">
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-center justify-between gap-2">
                                        <h3 className="text-xl font-bold truncate">{link.name}</h3>
                                        <div className="h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
                                    </div>
                                    <p className="text-sm text-muted-foreground line-clamp-1">{link.role}</p>
                                    <div className="bg-muted/50 p-2 rounded text-xs font-mono mt-2 truncate">
                                        /{link.slug}
                                    </div>
                                </div>
                                <div className="flex gap-2 mt-6">
                                    <Link href={`/${link.slug}`} target="_blank" className="flex-1">
                                        <Button variant="outline" size="sm" className="w-full gap-2">
                                            <ExternalLink className="w-3 h-3" />
                                            Ver
                                        </Button>
                                    </Link>
                                    <Button
                                        variant="secondary"
                                        size="sm"
                                        className="gap-2"
                                        onClick={() => copyToClipboard(link.slug)}
                                    >
                                        {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                                        onClick={() => handleDelete(link.id)}
                                    >
                                        <Trash2 className="w-3 h-3" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
