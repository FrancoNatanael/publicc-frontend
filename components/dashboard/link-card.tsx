import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink, Edit2, Copy, Trash2, ChartBar } from "lucide-react";

export function LinkCard({ slug }: { slug: string }) {
    const fullUrl = `publicc.io/${slug}`; // TODO: Use env var for base URL

    return (
        <div className="w-full max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold tracking-tight">Tu Página Pública</h2>
                <Button variant="outline" size="sm" className="hidden sm:flex" disabled>
                    <ChartBar className="w-4 h-4 mr-2" />
                    Estadísticas (Pronto)
                </Button>
            </div>

            <Card className="border-l-4 border-l-primary shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6 justify-between items-start sm:items-center">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Publicado
                                </span>
                            </div>
                            <h3 className="text-xl font-mono font-medium text-foreground">
                                {fullUrl}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Actualizado hace unos momentos
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                            <Link href={`/crear-link`} className="flex-1 sm:flex-none">
                                {/* Reusing wizard route for edit for now, or use /crear-link?edit=true */}
                                <Button variant="secondary" className="w-full">
                                    <Edit2 className="w-4 h-4 mr-2" />
                                    Editar
                                </Button>
                            </Link>

                            <Button variant="outline" className="flex-1 sm:flex-none" onClick={() => navigator.clipboard.writeText(fullUrl)}>
                                <Copy className="w-4 h-4 mr-2" />
                                Copiar
                            </Button>

                            <Link href={`/${slug}`} target="_blank" className="flex-1 sm:flex-none">
                                <Button className="w-full">
                                    <ExternalLink className="w-4 h-4 mr-2" />
                                    Ver
                                </Button>
                            </Link>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-muted/30 border-dashed">
                    <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Bloques definidos</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                        <div className="text-2xl font-bold">4/4</div>
                    </CardContent>
                </Card>
                <Card className="bg-muted/30 border-dashed">
                    <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Links curados</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                        <div className="text-2xl font-bold">--</div>
                    </CardContent>
                </Card>
                <Card className="bg-muted/30 border-dashed">
                    <CardHeader className="p-4 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Vistas totales</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                        <div className="text-2xl font-bold">0</div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
