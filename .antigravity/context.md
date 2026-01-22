# Project Context: Personal Pitch (MVP)

## 1. Vision & Purpose
"Tu presentación profesional en un link."
Una plataforma SaaS minimalista para crear presentaciones profesionales web (no portfolios técnicos, no CVs tradicionales en PDF). El objetivo es ofrecer una alternativa moderna y estética a LinkedIn o al CV estático, enfocada en la narrativa personal.

## 2. Tech Stack (Core)
- **Framework:** Next.js 15 (App Router)
- **Database & Auth:** Supabase
- **Styling:** Tailwind CSS
- **Analytics:** PostHog (Métricas de producto)
- **Language:** TypeScript

## 3. Target Audience (ICP)
- Profesionales NO técnicos (Marketing, RRHH, Ventas, Educación).
- Público de Latinoamérica.
- Usuarios que buscan simplicidad y diseño cuidado sin esfuerzo manual.

## 4. MVP Scope (Critical Path)
### Features Included:
1. **Auth:** Registro simple vía Email/Magic Link (Supabase Auth).
2. **Onboarding/Wizard:** Flujo guiado para completar:
   - Datos básicos (Nombre/Rol).
   - Bio narrativa.
   - Experiencia y Skills.
   - Contacto.
3. **Public Profiles:** Generación de URL dinámica `app.com/[slug]`.
4. **Templates:** 2 o 3 opciones de diseño minimalista predefinidas.
5. **Multi-idioma (Pro Feature):** Capacidad de traducir el perfil y mostrar un selector en la vista pública.

### Out of Scope (DO NOT IMPLEMENT):
- Editor visual Drag & Drop.
- IA generativa de contenido (fase futura).
- Personalización profunda de CSS por el usuario.

## 5. Architecture & Conventions
- **Client/Server:** Usar Server Components por defecto. Solo 'use client' para formularios o interacciones de UI.
- **Supabase Integration:** Usar `@supabase/ssr` para manejo de sesiones en el servidor.
- **Data Model:** - `profiles`: Datos básicos y configuración.
    - `experiences`: Relacionado con el perfil.
    - `translations`: Tabla para manejar el contenido en diferentes idiomas (para Plan Pro).
- **Design System:** Minimalista, limpio, tipografía legible.

## 6. Business Logic Notes
- **Pricing:** - Free: 1 perfil, 1 template, branding visible.
    - Pro ($5/mo): Perfiles ilimitados, multi-idioma, sin branding.
- **Events (PostHog):** Trackear `profile_published` y `upgrade_clicked` como métricas clave.

## 7. Instructions for the Agent
- Priorizar la simplicidad sobre la complejidad técnica.
- Asegurar que la vista pública sea extremadamente rápida y esté optimizada para SEO/Social Sharing.
- Al sugerir componentes, enfocarse en la experiencia del usuario no-técnico.