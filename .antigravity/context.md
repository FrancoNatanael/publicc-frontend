# Project Context: Posicionamiento Profesional (MVP)

## 1. Vision & Purpose
"Tu valor profesional, claro y en un solo link."
Una **app web** de marca personal estratégica para crear páginas de posicionamiento profesional. No es un CV tradicional ni un portfolio técnico; es una herramienta de narrativa diseñada para comunicar impacto, valor diferencial y presencia digital en un formato minimalista y escaneable.

## 2. Tech Stack (Core)
- **Framework:** Next.js 15 (App Router)
- **Database & Auth:** Supabase (PostgreSQL para datos, Auth para acceso simple vía Email/Magic Link)
- **Styling:** Tailwind CSS (Enfoque minimalista y profesional)
- **Analytics:** PostHog (Seguimiento de métricas de activación y conversión)
- **Language:** TypeScript

## 3. Target Audience (ICP)
- **Público de Latinoamérica**.
- **Perfiles No-Técnicos:** Roles de producto, marketing, ventas, operaciones, RRHH y creadores de contenido.
- **Niveles:** Profesionales junior/semi-senior y freelancers/consultores que tienen experiencia pero les cuesta comunicarla de forma efectiva.

## 4. MVP Scope (Critical Path)
### Features Included:
1. **Auth:** Registro simple mediante email o magic link.
2. **Wizard Guiado:** Flujo paso a paso para definir el mensaje de valor basado en 4 bloques: Qué hago, Para quién, Por qué importa y Qué resultados genero.
3. **Links Curados (Prueba Social):** Integración de contenido externo (YouTube, X, blogs, podcasts) para respaldar el criterio profesional.
4. **Public Profiles:** URL pública única (ej. `app.com/[slug]`) optimizada para compartir.
5. **Templates:** 2–3 opciones visuales minimalistas predefinidas.
6. **Multi-idioma (Plan Pro):** Versiones múltiples del mismo perfil con selector de idioma en la página pública.

### Out of Scope (DO NOT IMPLEMENT):
- Editor visual avanzado o Drag & Drop.
- IA generativa de contenido (reservado para fases futuras).
- Personalización profunda de diseño por parte del usuario.

## 5. Architecture & Conventions
- **Rendering:** Uso de Server Components por defecto (máxima velocidad y SEO). `use client` reservado para el wizard y formularios.
- **Data Model:** - `profiles`: Datos de posicionamiento (los 4 bloques) y configuración.
    - `curated_links`: Referencias externas para prueba social.
    - `experience_summary`: Resumen de trayectoria opcional.
    - `translations`: Soporte para contenido multi-idioma para Plan Pro.
- **Design System:** Estética "High-end minimal", priorizando legibilidad y jerarquía visual del mensaje sobre la decoración.

## 6. Business Logic Notes
- **Modelo de Negocio:**
    - **Plan Free:** 1 página, 1 template, subdominio con branding y un solo idioma.
    - **Plan Pro ($5 USD/mes):** Páginas ilimitadas, multi-idioma, sin branding de la plataforma.
- **Métricas Clave (PostHog):** Trackear `signup_completed`, `page_published`, `link_added` y la conversión `upgrade_clicked`.

## 7. Instructions for the Agent
- **Foco en el Mensaje:** Priorizar estructuras que ayuden al usuario a explicar "por qué importa" su trabajo en lugar de solo listar tareas.
- **Simplicidad:** Mantener el flujo de creación extremadamente ágil y enfocado en el usuario no técnico.
- **Performance:** La vista pública debe ser ultraligera para optimizar el Social Sharing.
- **Mindset:** Actuar como un *product-minded builder*, buscando validación rápida y posicionamiento estratégico.