# VoxTech Web Application Architecture Spec

## Goal
Define a scalable application structure that supports a premium marketing site now and a richer lead platform later without rewriting the foundation.

## Stack
- Framework: Next.js App Router
- Language: TypeScript
- Styling: Tailwind CSS
- CMS: Sanity
- Deployment: Vercel
- Forms: react-hook-form with zod validation
- Utilities: clsx and class-variance-authority

## Top-Level Folder Plan

```txt
app/
components/
lib/
sanity/
types/
public/
specs/
```

## Required Folder Structure

### `app/`
- [ ] `app/(marketing)/layout.tsx`
- [ ] `app/(marketing)/page.tsx`
- [ ] `app/(marketing)/what-we-do/page.tsx`
- [ ] `app/(marketing)/work/page.tsx`
- [ ] `app/(marketing)/work/[slug]/page.tsx`
- [ ] `app/(marketing)/insights/page.tsx`
- [ ] `app/(marketing)/insights/[slug]/page.tsx`
- [ ] `app/(marketing)/opportunities/page.tsx`
- [ ] `app/(marketing)/opportunities/[slug]/page.tsx`
- [ ] `app/(marketing)/resources/page.tsx`
- [ ] `app/(marketing)/resources/[slug]/page.tsx`
- [ ] `app/(marketing)/contact/page.tsx`
- [ ] `app/(marketing)/book-demo/page.tsx`
- [ ] `app/api/contact/route.ts`
- [ ] `app/api/lead/route.ts`
- [ ] `app/api/demo/route.ts`
- [ ] `app/globals.css`
- [ ] `app/robots.ts`
- [ ] `app/sitemap.ts`

### `components/`
- [ ] `components/layout/`
- [ ] `components/shared/`
- [ ] `components/home/`
- [ ] `components/services/`
- [ ] `components/work/`
- [ ] `components/blog/`
- [ ] `components/opportunities/`
- [ ] `components/resources/`
- [ ] `components/forms/`
- [ ] `components/seo/`

### `lib/`
- [ ] `lib/sanity/`
- [ ] `lib/env/`
- [ ] `lib/validation/`
- [ ] `lib/utils/`
- [ ] `lib/constants/`
- [ ] `lib/analytics/`
- [ ] `lib/forms/`

### `sanity/`
- [ ] `sanity/env.ts`
- [ ] `sanity/structure.ts`
- [ ] `sanity/schemaTypes/index.ts`
- [ ] `sanity/schemaTypes/documents/`
- [ ] `sanity/schemaTypes/objects/`

### `types/`
- [ ] Add one entity file per content model or cross-page UI contract.

## Architectural Rules
- [ ] Put route-specific assembly inside `app/`, not data-fetching business logic.
- [ ] Put reusable visual pieces in `components/`, grouped by domain.
- [ ] Put external service wiring, fetchers, validation, and utilities in `lib/`.
- [ ] Keep Sanity schema concerns isolated under `sanity/`.
- [ ] Keep content entity types centralized in `types/`.
- [ ] Avoid circular imports between `app/`, `components/`, and `lib/`.

## Rendering Strategy
- [ ] Default marketing pages to server components where possible.
- [ ] Use client components only for interactivity, forms, filters, embeds, and stateful UI.
- [ ] Keep CMS fetches on the server boundary unless a live-preview or client-side filter case requires otherwise.
- [ ] Pre-render content routes where practical and define revalidation strategy explicitly.

## Data Flow Rules
1. CMS or constants provide content.
2. `lib/sanity/queries.ts` defines query sources.
3. `lib/sanity/fetchers.ts` maps queries to typed fetch helpers.
4. Page routes request typed data through fetchers.
5. Components receive normalized props, not raw CMS responses where avoidable.

## Environment Plan
- [ ] Public brand, site URL, and optional external project links live in safe public env accessors.
- [ ] CMS dataset, project ID, API version, and read tokens live in server-safe env modules.
- [ ] Third-party integration keys are isolated by provider and never imported into presentation-only code.

## Error and Empty-State Strategy
- [ ] Define 404 behavior for missing slugs.
- [ ] Define graceful empty states for blog, resources, and opportunities listings.
- [ ] Define fallback content strategy when featured items are absent.
- [ ] Ensure form routes return consistent machine-readable error responses.

## Coding Conventions
- [ ] One component per file unless a tightly coupled helper is clearly private.
- [ ] Keep prop interfaces near the component when local; move them to `types/` when shared.
- [ ] Use `cva` for repeated visual variants.
- [ ] Use constants for repeated navigation, CTA labels, and brand strings.
- [ ] Keep page files focused on composition, metadata, and data loading.

## Architecture Completion Checklist
- [ ] Folder structure supports all required routes, schemas, and utilities.
- [ ] Data flows are typed from CMS fetch to component props.
- [ ] Shared modules can be reused without route coupling.
- [ ] Environment usage is explicit and safe for client and server boundaries.
- [ ] Error, empty, and fallback states are planned for content-driven routes.
