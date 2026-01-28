"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { StepIndicator } from "@/components/wizard/step-indicator";
import { ArrowLeft, ArrowRight, Save, Link as LinkIcon, Plus, Trash } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LinkFormData } from "@/features/link/types";


export default function CreateLinkPage() {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const totalSteps = 4;

    const [formData, setFormData] = useState<LinkFormData>({

        slug: "",
        name: "",
        role: "",
        valueProp: {
            what: "",
            who: "",
            why: "",
            results: ""
        },
        links: [{ title: "", url: "" }],
        contact: {
            email: "",
            bio: ""
        }
    });

    const nextStep = () => setStep((prev) => Math.min(prev + 1, totalSteps));
    const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

    const handleLinkChange = (index: number, field: "title" | "url", value: string) => {
        const newLinks = [...formData.links];
        newLinks[index][field] = value;
        setFormData({ ...formData, links: newLinks });
    };

    const addLink = () => {
        setFormData({ ...formData, links: [...formData.links, { title: "", url: "" }] });
    };

    const removeLink = (index: number) => {
        const newLinks = formData.links.filter((_, i) => i !== index);
        setFormData({ ...formData, links: newLinks });
    };

    const handleFinish = async () => {
        // Here we would save to Supabase
        console.log("Saving data:", formData);
        // Simulate delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        router.push("/home");
    };

    return (
        <div className="mx-auto w-full py-10 px-4">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Mostrá tu valor</h1>
                <p className="text-muted-foreground">Paso {step} de {totalSteps}</p>
            </div>

            <StepIndicator currentStep={step} totalSteps={totalSteps} />

            <Card className="mt-6 border-2 border-muted/40 shadow-sm md:w-[600px] w-full">
                <CardContent className="pt-6">
                    {step === 1 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="space-y-2">
                                <CardTitle>Identidad Base</CardTitle>
                                <CardDescription>¿Cómo quieres que te encuentren?</CardDescription>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="slug">URL Personal</Label>
                                    <div className="flex items-center gap-2">
                                        <span className="text-muted-foreground text-sm">publicc.io/</span>
                                        <Input
                                            id="slug"
                                            placeholder="tu-nombre"
                                            value={formData.slug}
                                            onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="name">Nombre Visible</Label>
                                    <Input
                                        id="name"
                                        placeholder="Ej. Franco Tomaino"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="role">Rol Principal</Label>
                                    <Input
                                        id="role"
                                        placeholder="Ej. Product Engineer"
                                        value={formData.role}
                                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="space-y-2">
                                <CardTitle>Los 4 Bloques de Valor</CardTitle>
                                <CardDescription>Definí tu propuesta única.</CardDescription>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label>¿Qué haces?</Label>
                                    <Textarea
                                        placeholder="Construyo aplicaciones web escalables..."
                                        value={formData.valueProp.what}
                                        onChange={(e) => setFormData({ ...formData, valueProp: { ...formData.valueProp, what: e.target.value } })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>¿Para quién? <span className="text-muted-foreground">(opcional)</span></Label>
                                    <Input
                                        placeholder="Startups en fase de crecimiento..."
                                        value={formData.valueProp.who}
                                        onChange={(e) => setFormData({ ...formData, valueProp: { ...formData.valueProp, who: e.target.value } })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>¿Por qué importa? (Diferenciación)</Label>
                                    <Textarea
                                        placeholder="Porque combino diseño y código para iterar rápido..."
                                        value={formData.valueProp.why}
                                        onChange={(e) => setFormData({ ...formData, valueProp: { ...formData.valueProp, why: e.target.value } })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Resultados <span className="text-muted-foreground">(opcional)</span></Label>
                                    <Input
                                        placeholder="+20% conversión en último proyecto..."
                                        value={formData.valueProp.results}
                                        onChange={(e) => setFormData({ ...formData, valueProp: { ...formData.valueProp, results: e.target.value } })}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="space-y-2">
                                <CardTitle>Evidencia</CardTitle>
                                <CardDescription>Agrega links que demuestren tu trabajo.</CardDescription>
                            </div>

                            <div className="space-y-4">
                                {formData.links.map((link, index) => (
                                    <div key={index} className="flex gap-2 items-start">
                                        <div className="grid gap-2 flex-1">
                                            <Input
                                                placeholder="Título (Ej. Mi charla en ReactConf)"
                                                value={link.title}
                                                onChange={(e) => handleLinkChange(index, "title", e.target.value)}
                                            />
                                            <Input
                                                placeholder="URL (https://...)"
                                                value={link.url}
                                                onChange={(e) => handleLinkChange(index, "url", e.target.value)}
                                            />
                                        </div>
                                        <Button variant="ghost" size="icon" onClick={() => removeLink(index)} disabled={formData.links.length === 1}>
                                            <Trash className="w-4 h-4 text-destructive" />
                                        </Button>
                                    </div>
                                ))}
                                <Button variant="outline" size="sm" onClick={addLink} className="w-full" disabled={formData.links.length >= 3}>
                                    <Plus className="w-4 h-4 mr-2" /> Agregar otro link
                                </Button>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                            <div className="space-y-2">
                                <CardTitle>Contacto y Finalizar</CardTitle>
                                <CardDescription>Últimos detalles.</CardDescription>
                            </div>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Público</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="hola@ejemplo.com"
                                        value={formData.contact.email}
                                        onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, email: e.target.value } })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="bio">Bio Corta</Label>
                                    <Textarea
                                        placeholder="Unas líneas sobre ti..."
                                        value={formData.contact.bio}
                                        onChange={(e) => setFormData({ ...formData, contact: { ...formData.contact, bio: e.target.value } })}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="flex justify-between mt-8 pt-4 border-t">
                        <Button variant="ghost" onClick={prevStep} disabled={step === 1}>
                            <ArrowLeft className="w-4 h-4 mr-2" /> Atrás
                        </Button>

                        {step < totalSteps ? (
                            <Button onClick={nextStep}>
                                Siguiente <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        ) : (
                            <Button onClick={handleFinish} className="bg-primary text-primary-foreground hover:bg-primary/90">
                                <Save className="w-4 h-4 mr-2" /> Publicar Página
                            </Button>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
