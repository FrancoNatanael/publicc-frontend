import { LinkComponent } from "@/features/link/components/link";
import { ProfileDB } from "@/features/link/types";

export default function LinkDemoPage() {
    // Mock data para el demo
    const demoProfile: ProfileDB = {
        id: "demo-id",
        user_id: "demo-user",
        slug: "juan-stark",
        name: "Juan Stark",
        role: "Product Designer & Developer",
        template: "minimal",
        created_at: "2025-01-28T11:45:59-03:00",
        value_props: {
            what: "Diseño interfaces minimalistas y las construyo con código limpio.",
            who: "Startups early-stage que necesitan moverse rápido sin sacrificar calidad visual.",
            why: "Cierro la brecha entre diseño e ingeniería, reduciendo iteraciones y deuda técnica.",
            results: "Lancé 3 productos MVP en 4 semanas.",
        },
        evidence_links: [
            { title: "Cómo escalar Design Systems (Charla)", url: "youtube.com/watch?v=..." },
            { title: "El fin del lorem ipsum (Artículo)", url: "medium.com/@juan/..." },
            { title: "Caso de estudio: Fintech App", url: "behance.net/..." },
        ],
        contact_info: {
            email: "juan@example.com",
            linkedin: "https://linkedin.com/in/juanstark",
            twitter: "https://twitter.com/juanstark",
            bio: "",
        },
    };

    return (
        <LinkComponent
            profile={demoProfile}
            showDemoBanner={true}
            showBackButton={true}
            backButtonHref="/home"
            backButtonText="Volver al dashboard"
        />
    );
}
