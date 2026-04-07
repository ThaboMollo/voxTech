# VoxTech Website

Premium marketing website and lead-generation foundation for VoxTech, built with Next.js App Router, TypeScript, and Tailwind CSS.

## Overview

This repository contains:
- the current website implementation
- the planning and specification documents used to shape the build
- the first builder-mode foundation for VoxTech's marketing site

The site is being built to:
- position VoxTech as a premium tech execution partner
- showcase services, work, insights, opportunities, and resources
- support contact and demo-booking flows
- expand later into a CMS-driven and analytics-ready lead engine

## Current Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- `clsx`
- `tailwind-merge`
- `class-variance-authority`
- `lucide-react`

## Current Routes

- `/`
- `/what-we-do`
- `/work`
- `/work/[slug]`
- `/insights`
- `/insights/[slug]`
- `/opportunities`
- `/opportunities/[slug]`
- `/resources`
- `/resources/[slug]`
- `/contact`
- `/book-demo`
- `/api/contact`
- `/api/lead`
- `/api/demo`

## Project Structure

```txt
app/
  (marketing)/
  api/
  globals.css
  layout.tsx
  robots.ts
  sitemap.ts

components/
  blog/
  forms/
  home/
  layout/
  opportunities/
  resources/
  services/
  shared/
  work/

lib/
  constants/
  utils/

types/

specs/
  website-build/
```

## Local Development

### Requirements

- Node.js 22+
- npm 10+

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

## Content Model Status

The current implementation uses local typed content in [site-content.ts](/Users/thabomollomponya/Dev/voxTech/lib/constants/site-content.ts) as a temporary source.

Planned next layers:
- Sanity CMS schemas and content model
- typed queries and fetchers
- real form validation and submission flows
- booking integration
- analytics and SEO expansion

## Important Files

- [app/layout.tsx](/Users/thabomollomponya/Dev/voxTech/app/layout.tsx)
- [app/(marketing)/page.tsx](/Users/thabomollomponya/Dev/voxTech/app/(marketing)/page.tsx)
- [components/layout/site-header.tsx](/Users/thabomollomponya/Dev/voxTech/components/layout/site-header.tsx)
- [components/layout/site-footer.tsx](/Users/thabomollomponya/Dev/voxTech/components/layout/site-footer.tsx)
- [lib/constants/site-content.ts](/Users/thabomollomponya/Dev/voxTech/lib/constants/site-content.ts)
- [types/site.ts](/Users/thabomollomponya/Dev/voxTech/types/site.ts)

## Planning and Specs

High-level planning docs:
- [VOXTECH_MASTER_SPEC.md](/Users/thabomollomponya/Dev/voxTech/VOXTECH_MASTER_SPEC.md)
- [VOXTECH_BUILDER_MODE.md](/Users/thabomollomponya/Dev/voxTech/VOXTECH_BUILDER_MODE.md)
- [VOXTECH_PHASE_1_PLAN.md](/Users/thabomollomponya/Dev/voxTech/VOXTECH_PHASE_1_PLAN.md)
- [VOXTECH_PHASE_2_PLAN.md](/Users/thabomollomponya/Dev/voxTech/VOXTECH_PHASE_2_PLAN.md)
- [VOXTECH_PHASE_3_PLAN.md](/Users/thabomollomponya/Dev/voxTech/VOXTECH_PHASE_3_PLAN.md)

Implementation spec pack:
- [VOXTECH_WEBAPP_SPEC_INDEX.md](/Users/thabomollomponya/Dev/voxTech/specs/website-build/VOXTECH_WEBAPP_SPEC_INDEX.md)
- [VOXTECH_WEBAPP_IMPLEMENTATION_ROADMAP.md](/Users/thabomollomponya/Dev/voxTech/specs/website-build/VOXTECH_WEBAPP_IMPLEMENTATION_ROADMAP.md)
- [VOXTECH_WEBAPP_ARCHITECTURE_SPEC.md](/Users/thabomollomponya/Dev/voxTech/specs/website-build/VOXTECH_WEBAPP_ARCHITECTURE_SPEC.md)
- [VOXTECH_WEBAPP_PAGE_AND_ROUTE_SPEC.md](/Users/thabomollomponya/Dev/voxTech/specs/website-build/VOXTECH_WEBAPP_PAGE_AND_ROUTE_SPEC.md)
- [VOXTECH_WEBAPP_COMPONENT_SYSTEM_SPEC.md](/Users/thabomollomponya/Dev/voxTech/specs/website-build/VOXTECH_WEBAPP_COMPONENT_SYSTEM_SPEC.md)
- [VOXTECH_WEBAPP_CMS_AND_DATA_SPEC.md](/Users/thabomollomponya/Dev/voxTech/specs/website-build/VOXTECH_WEBAPP_CMS_AND_DATA_SPEC.md)
- [VOXTECH_WEBAPP_GROWTH_AND_OPERATIONS_SPEC.md](/Users/thabomollomponya/Dev/voxTech/specs/website-build/VOXTECH_WEBAPP_GROWTH_AND_OPERATIONS_SPEC.md)

## Current Build Status

Implemented:
- project scaffold
- marketing route group
- shared layout and reusable components
- homepage and supporting marketing pages
- static content-backed dynamic routes
- placeholder API endpoints
- sitemap and robots generation

Still pending:
- CMS integration
- form backend wiring
- scheduler integration
- structured SEO helpers
- analytics events
- deployment configuration
