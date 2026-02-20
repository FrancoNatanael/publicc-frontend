import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle2, ArrowLeft } from "lucide-react";
import { ProfileDB } from "../types";

interface LinkProps {
    profile: ProfileDB;
    showDemoBanner?: boolean;
    showBackButton?: boolean;
    backButtonHref?: string;
    backButtonText?: string;
}

export function LinkComponent({
    profile,
    showDemoBanner = false,
    showBackButton = false,
    backButtonHref = "/home",
    backButtonText = "Volver al dashboard",
}: LinkProps) {
    const initials = profile.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

    return (
        <div className="w-full min-h-screen bg-background p-4">
            {showDemoBanner && (
                <div className="sticky top-0 z-10 w-full bg-primary text-primary-foreground py-3 text-center text-sm font-medium shadow-md">
                    <div className="flex items-center justify-center gap-4 max-w-5xl mx-auto px-4">
                        <span>👋 Este es un ejemplo de cómo se ve una página terminada.</span>
                        <Link href="/crear-link">
                            <Button size="sm" variant="secondary" className="whitespace-nowrap">
                                Crear la mía ahora
                            </Button>
                        </Link>
                    </div>
                </div>
            )}

            <div className="max-w-3xl mx-auto py-12 px-6">
                {/* Header Section */}
                <div className="mb-12 space-y-4">
                    {showBackButton && (
                        <Link
                            href={backButtonHref}
                            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
                        >
                            <ArrowLeft className="w-4 h-4 mr-1" /> {backButtonText}
                        </Link>
                    )}
                    <div className="flex items-center gap-4 justify-between flex-col md:flex-row w-full">
                        <div className="flex items-center gap-2">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                {initials}
                            </div>
                            <div>
                                <h1 className="text-4xl font-extrabold tracking-tight">{profile.name}</h1>
                                <p className="text-xl text-muted-foreground font-light">{profile.role}</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 md:self-end sm:flex-col w-full sm:w-auto">
                            {profile.contact_info?.twitter && (
                                <a href={profile.contact_info.twitter.startsWith('http') ? profile.contact_info.twitter : `https://twitter.com/${profile.contact_info.twitter}`} target="_blank">
                                    <Button variant="outline" size="sm" className="w-full md:w-auto">Twitter / X</Button>
                                </a>
                            )}
                            {profile.contact_info?.linkedin && (
                                <a href={profile.contact_info.linkedin.startsWith('http') ? profile.contact_info.linkedin : `https://linkedin.com/in/${profile.contact_info.linkedin}`} target="_blank">
                                    <Button variant="outline" size="sm" className="w-full md:w-auto">LinkedIn</Button>
                                </a>
                            )}
                            {profile.contact_info?.email && (
                                <a href={`mailto:${profile.contact_info.email}`}>
                                    <Button variant="outline" size="sm" className="w-full md:w-auto">Email</Button>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* 4 Value Blocks */}
                <div className="grid gap-8 md:grid-cols-2 mb-16 mt-4">
                    <div className="space-y-2 border-gray-200 border rounded-lg p-4">
                        <Badge variant="outline" className="mb-2 uppercase tracking-widest text-xs text-muted-foreground">
                            Qué hago
                        </Badge>
                        <h3 className="text-md font-semibold leading-relaxed">
                            {profile.value_props?.what}
                        </h3>
                    </div>
                    <div className="space-y-2 border-gray-200 border rounded-lg p-4">
                        <Badge variant="outline" className="mb-2 uppercase tracking-widest text-xs text-muted-foreground">
                            Para quién
                        </Badge>
                        <h3 className="text-md font-semibold leading-relaxed">
                            {profile.value_props?.who}
                        </h3>
                    </div>
                    <div className="space-y-2 border-gray-200 border rounded-lg p-4">
                        <Badge variant="outline" className="mb-2 uppercase tracking-widest text-xs text-muted-foreground">
                            Por qué importa
                        </Badge>
                        <h3 className="text-md font-semibold leading-relaxed">
                            {profile.value_props?.why}
                        </h3>
                    </div>
                    <div className="space-y-2 p-4 bg-muted/30 rounded-lg border border-primary bg-primary/10">
                        <Badge variant="outline" className="mb-2 uppercase tracking-widest text-xs text-muted-foreground">
                            Resultados
                        </Badge>
                        <p className="text-md font-medium flex items-center">
                            <CheckCircle2 className="inline w-5 h-5 text-primary mr-2" />
                            {profile.value_props?.results}
                        </p>
                    </div>
                </div>

                {/* Curated Links Section */}
                <div className="space-y-6 mt-10">
                    <h2 className="text-2xl font-bold border-b pb-2">Evidencia &amp; Pensamiento</h2>
                    <div className="grid gap-4">
                        {profile.evidence_links && profile.evidence_links.length > 0 ? (
                            profile.evidence_links.map((link, i) => (
                                <a key={link.id || i} href={link.url.startsWith('http') ? link.url : `https://${link.url}`} target="_blank" className="block group">
                                    <Card className="hover:shadow-md transition-all hover:border-primary/50 group-hover:bg-accent/5">
                                        <CardContent className="flex items-center justify-between p-4">
                                            <span className="font-medium group-hover:text-primary transition-colors">{link.title}</span>
                                            <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                                        </CardContent>
                                    </Card>
                                </a>
                            ))
                        ) : (
                            <p className="text-muted-foreground text-sm italic text-center py-4">No hay links de evidencia todavía.</p>
                        )}
                    </div>
                </div>
                <p className="text-lg font-semibold tracking-tight text-center mt-4 block w-full text-sm border-t pt-4">Publicc © 2026</p>
            </div>
        </div>
    );
}
