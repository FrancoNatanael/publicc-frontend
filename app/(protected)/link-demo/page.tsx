import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, CheckCircle2, ArrowLeft } from "lucide-react";

export default function LinkDemoPage() {
    return (
        <div className="w-full min-h-screen bg-background">
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

            <div className="max-w-3xl mx-auto py-12 px-6">
                {/* Header Section */}
                <div className="mb-12 space-y-4">
                    <Link href="/home" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4">
                        <ArrowLeft className="w-4 h-4 mr-1" /> Volver al dashboard
                    </Link>
                    <div className="flex items-center gap-4 justify-between flex-col md:flex-row w-full">
                        <div className="flex items-center gap-2">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                JS
                            </div>
                            <div>
                                <h1 className="text-4xl font-extrabold tracking-tight">Juan Stark</h1>
                                <p className="text-xl text-muted-foreground font-light">Product Designer & Developer</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2 md:self-end md:flex-col w-full md:w-auto">
                            <Button variant="outline" size="sm" className="w-full md:w-auto">Twitter / X</Button>
                            <Button variant="outline" size="sm" className="w-full md:w-auto">LinkedIn</Button>
                        </div>
                    </div>
                </div>

                {/* 4 Value Blocks */}
                <div className="grid gap-8 md:grid-cols-2 mb-16">
                    <div className="space-y-2">
                        <Badge variant="outline" className="mb-2 uppercase tracking-widest text-[10px]">Qué hago</Badge>
                        <h3 className="text-xl font-semibold leading-relaxed">
                            Diseño interfaces minimalistas y las construyo con código limpio.
                        </h3>
                    </div>
                    <div className="space-y-2">
                        <Badge variant="outline" className="mb-2 uppercase tracking-widest text-[10px]">Para quién</Badge>
                        <h3 className="text-xl font-semibold leading-relaxed">
                            Startups early-stage que necesitan moverse rápido sin sacrificar calidad visual.
                        </h3>
                    </div>
                    <div className="space-y-2">
                        <Badge variant="outline" className="mb-2 uppercase tracking-widest text-[10px]">Por qué importa</Badge>
                        <h3 className="text-xl font-semibold leading-relaxed">
                            Cierro la brecha entre diseño e ingeniería, reduciendo iteraciones y deuda técnica.
                        </h3>
                    </div>
                    <div className="space-y-2 p-4 bg-muted/30 rounded-lg border border-border/50">
                        <Badge variant="outline" className="mb-2 uppercase tracking-widest text-[10px] bg-background">Resultados</Badge>
                        <p className="text-lg font-medium">
                            <CheckCircle2 className="inline w-5 h-5 text-green-500 mr-2" />
                            Lancé 3 productos MVP en <span className="text-primary font-bold">4 semanas</span>.
                        </p>
                    </div>
                </div>

                {/* Curated Links Section */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold border-b pb-2">Evidencia & Pensamiento</h2>
                    <div className="grid gap-4">
                        {[
                            { title: "Cómo escalar Design Systems (Charla)", url: "youtube.com/watch?v=..." },
                            { title: "El fin del lorem ipsum (Artículo)", url: "medium.com/@juan/..." },
                            { title: "Caso de estudio: Fintech App", url: "behance.net/..." }
                        ].map((link, i) => (
                            <a key={i} href="#" className="block group">
                                <Card className="hover:shadow-md transition-all hover:border-primary/50 group-hover:bg-accent/5">
                                    <CardContent className="flex items-center justify-between p-4">
                                        <span className="font-medium group-hover:text-primary transition-colors">{link.title}</span>
                                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                                    </CardContent>
                                </Card>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
