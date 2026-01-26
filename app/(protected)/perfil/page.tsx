import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Assuming these exist or I simulate div
// I will check if Avatar exists in ui later, but for now I'll use a simple div if it breaks, 
// actually I'll just use a div with initials to be safe and minimalist.
import { User, CreditCard, Settings, LogOut } from "lucide-react";

export default async function ProfilePage() {
    const supabase = await createClient();
    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return redirect("/auth/login");
    }

    return (
        <div className="w-full max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold tracking-tight">Configuración del Perfil</h1>
                <p className="text-muted-foreground">Gestiona tu cuenta y preferencias.</p>
            </div>

            <Card>
                <CardHeader className="pb-4">
                    <CardTitle>Información Personal</CardTitle>
                    <CardDescription>Tus datos de acceso.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-2xl font-bold">
                            {user.email?.[0].toUpperCase()}
                        </div>
                        <div className="space-y-1">
                            <p className="font-medium text-lg">Tu Cuenta</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" value={user.email || ""} disabled readOnly />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-4">
                    <CardTitle>Suscripción</CardTitle>
                    <CardDescription>Estado de tu plan actual.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/20">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-md bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                                <CreditCard className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="font-medium">Plan Free</p>
                                <p className="text-xs text-muted-foreground">Perfecto para empezar</p>
                            </div>
                        </div>
                        <Badge variant="secondary">Activo</Badge>
                    </div>
                    <Button variant="outline" className="w-full" disabled>
                        Actualizar a Pro (Pronto)
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="pb-4">
                    <CardTitle>Apariencia</CardTitle>
                    <CardDescription>Personaliza tu experiencia en la app.</CardDescription>
                </CardHeader>
                <CardContent className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Settings className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium">Tema de la interfaz</span>
                    </div>
                    <ThemeSwitcher />
                </CardContent>
            </Card>

            <div className="flex justify-end p-2">
                <form action="/auth/signout" method="post">
                    <Button variant="destructive" type="submit">
                        <LogOut className="w-4 h-4 mr-2" />
                        Cerrar Sesión
                    </Button>
                </form>
            </div>
        </div>
    );
}
