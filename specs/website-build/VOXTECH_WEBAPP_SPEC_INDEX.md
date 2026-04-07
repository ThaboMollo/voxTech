# VoxTech Web Application Spec Index

## Purpose
This spec set translates the current VoxTech planning documents into an implementation-ready document pack for building the full website and lead-generation platform.

These specs are intended to be used as working build plans:
- each document is scoped to one build layer
- tasks are written as checklists so progress can be marked
- the set covers Phase 1, Phase 2, and Phase 3 requirements
- existing Markdown files remain the source vision; this pack is the execution layer

## Source Documents Reviewed
- `VOXTECH_MASTER_SPEC.md`
- `VOXTECH_BUILDER_MODE.md`
- `VOXTECH_PHASE_1_PLAN.md`
- `VOXTECH_PHASE_2_PLAN.md`
- `VOXTECH_PHASE_3_PLAN.md`
- `README.md`

## Spec Pack
1. `VOXTECH_WEBAPP_IMPLEMENTATION_ROADMAP.md`
   End-to-end delivery plan, phase sequencing, dependencies, and definition of done.

2. `VOXTECH_WEBAPP_ARCHITECTURE_SPEC.md`
   Application architecture, folder structure, coding boundaries, shared utilities, and build conventions.

3. `VOXTECH_WEBAPP_PAGE_AND_ROUTE_SPEC.md`
   Route inventory, page-by-page assembly plans, page states, and routing requirements.

4. `VOXTECH_WEBAPP_COMPONENT_SYSTEM_SPEC.md`
   Reusable component plan, ownership boundaries, design system rules, and component completion checklists.

5. `VOXTECH_WEBAPP_CMS_AND_DATA_SPEC.md`
   Sanity schema plan, data contracts, query mapping, validation, and content operations requirements.

6. `VOXTECH_WEBAPP_GROWTH_AND_OPERATIONS_SPEC.md`
   Forms, lead flow, integrations, SEO, analytics, QA, launch, and post-launch optimization requirements.

## Recommended Build Order
1. Roadmap
2. Architecture
3. CMS and Data
4. Component System
5. Pages and Routes
6. Growth and Operations

## Program-Level Completion Criteria
- [ ] The repo structure matches the architecture spec.
- [ ] All core routes are implemented and connected to real content sources.
- [ ] Shared UI primitives are reusable and documented by purpose.
- [ ] CMS schemas support all marketing, proof, editorial, and conversion content.
- [ ] Lead capture, booking, analytics, and SEO are wired end to end.
- [ ] The site can launch as a premium marketing website and expand into a measurable lead engine.
