import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, ArrowRight, LayoutTemplate } from "lucide-react";

export function EmptyState({ userName }: { userName?: string }) {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/5 text-primary mb-4">
                    <Sparkles className="w-8 h-8" />
                </div>
                <h1 className="text-3xl font-bold tracking-tight">
                    Hola{userName ? `, ${userName}` : ""}.
                </h1>
                <p className="text-muted-foreground text-lg max-w-[500px] mx-auto">
                    Todavía no tenés tu presentación profesional online.
                    Creá tu página y mostrá quién sos, qué hacés y por qué deberían elegirte.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <Link href="/crear-link">
                    <Card className="h-full border-2 border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg group cursor-pointer bg-card/50 backdrop-blur-sm">
                        <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full space-y-4">
                            <div className="p-3 rounded-full bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                                <LayoutTemplate className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                                    Crear mi Página
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Comenzá el wizard guiado
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/link-demo">
                    <Card className="h-full border border-border hover:bg-accent/5 transition-all cursor-pointer">
                        <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full space-y-4 opacity-70 hover:opacity-100">
                            <div className="p-3 rounded-full bg-secondary text-secondary-foreground">
                                <ArrowRight className="w-6 h-6" />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-semibold text-lg">Ver Demo</h3>
                                <p className="text-sm text-muted-foreground">
                                    Inspírate con un ejemplo
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </div>
    );
}
