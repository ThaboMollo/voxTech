# VoxTech Web Application Implementation Roadmap

## Objective
Build VoxTech as a premium marketing website, content platform, and lead-generation engine that can be delivered in stable increments without rework-heavy architecture changes later.

## Product Layers
1. Brand foundation
2. Content and proof system
3. Conversion engine
4. Measurement and optimization

## Delivery Principles
- [ ] Build the shared foundations before page-specific customization.
- [ ] Keep all content-driven pages CMS-ready even if some content launches as seed data.
- [ ] Treat design consistency, performance, and SEO as build requirements, not polish tasks.
- [ ] Avoid one-off page components when a reusable section pattern can solve the same problem.
- [ ] Keep the primary conversion path obvious on every major page.

## Phase Plan

### Phase A: Platform Foundation
Goal: Create the repo structure, design primitives, CMS connection, and baseline developer experience.

- [ ] Initialize the Next.js App Router application with TypeScript and Tailwind.
- [ ] Add core dependencies: Sanity, validation, forms, utilities, icons, and optional UI primitives.
- [ ] Set up environment variable strategy for local, preview, and production.
- [ ] Establish app-level layout, global styles, typography, metadata, and route groups.
- [ ] Define shared utility modules for class merging, formatting, slugs, and constants.
- [ ] Set up Sanity client, image helpers, fetch wrapper, and query organization.
- [ ] Define TypeScript types for all major content entities.
- [ ] Add linting, formatting, and baseline quality scripts.

Definition of done:
- [ ] Repo structure is stable enough to support page and CMS work in parallel.
- [ ] Local development can render a shell page with shared layout and styling tokens.
- [ ] CMS connection and environment loading work without hardcoded values.

### Phase B: Marketing Core
Goal: Ship the premium marketing site with the main conversion journey.

- [ ] Build global layout components: header, footer, mobile navigation, page shell.
- [ ] Build shared presentation components: container, heading, buttons, cards, badges, rich text.
- [ ] Implement the homepage section stack.
- [ ] Implement What We Do, Work, Contact, and Book a Demo pages.
- [ ] Connect pages to live or seeded CMS content.
- [ ] Build contact and lead forms with validation and success/error states.
- [ ] Add sitewide CTA patterns and trust sections.

Definition of done:
- [ ] The main navigation flow works from Home to Book a Demo.
- [ ] Users can understand the offer, inspect proof, and submit a valid inquiry.
- [ ] The site is responsive and visually consistent across the primary pages.

### Phase C: Authority and Proof Expansion
Goal: Turn the site into a stronger credibility and SEO asset.

- [ ] Add case study content model and case study detail routes.
- [ ] Expand Work into proof storytelling with related content flows.
- [ ] Build Insights listing and article detail experiences.
- [ ] Build Opportunities listing and detail experiences.
- [ ] Add Resources listing and resource detail or download experiences.
- [ ] Implement testimonials, FAQs, and reusable proof modules.
- [ ] Improve category, related-content, and internal-linking patterns.

Definition of done:
- [ ] Editorial, proof, and resource content can all be managed in CMS.
- [ ] The site has strong authority pathways beyond static marketing pages.
- [ ] Users can move naturally from content to conversion points.

### Phase D: Lead Engine and Operations
Goal: Make the platform measurable, automatable, and operationally useful.

- [ ] Integrate demo booking provider or fallback qualification flow.
- [ ] Add CRM-ready lead payloads and internal notification flow.
- [ ] Implement advanced qualification fields and routing rules.
- [ ] Add analytics events for page engagement, CTA clicks, form progress, and conversions.
- [ ] Add funnel reporting conventions and dashboard-ready event naming.
- [ ] Implement confirmation states, follow-up triggers, and resource delivery flows.
- [ ] Prepare experimentation surfaces for CTA and form optimization.

Definition of done:
- [ ] Lead data is usable by business operations, not just captured.
- [ ] Conversions can be attributed to content, routes, and CTAs.
- [ ] The site supports iteration based on real performance data.

## Workstreams

### Design System Workstream
- [ ] Define color, spacing, type, radius, elevation, and motion tokens.
- [ ] Standardize layout widths, section spacing, and content rhythm.
- [ ] Approve component variants before page assembly begins.

### Content Platform Workstream
- [ ] Model all required content types in Sanity.
- [ ] Define required, optional, and launch-blocking fields.
- [ ] Seed enough initial content to prevent empty-state launch issues.

### Conversion Workstream
- [ ] Decide form submission path and notification provider.
- [ ] Decide scheduling provider and fallback behavior.
- [ ] Decide what qualifies as a marketing lead versus a demo lead.

### Growth Workstream
- [ ] Define SEO metadata patterns.
- [ ] Define analytics taxonomy.
- [ ] Define launch KPIs and post-launch review cadence.

## Dependency Map
- Architecture must be stable before page implementation accelerates.
- CMS schema decisions must be locked before fetchers and page queries are finalized.
- Shared components must be built before complex pages to avoid divergence.
- Form schemas must be finalized before API routes and CRM payload mapping.
- Analytics naming should be defined before conversion features ship.

## Suggested Milestone Sequence
1. Foundation and repo setup
2. Design system and shared components
3. CMS schemas and typed queries
4. Core marketing pages
5. Editorial and proof pages
6. Lead capture and booking integration
7. SEO, analytics, QA, and launch

## Global Completion Checklist
- [ ] Every route has a planned owner, data source, and primary CTA.
- [ ] Every CMS document has a matching TypeScript type and query path.
- [ ] Every form has validation, submission handling, and user feedback states.
- [ ] Every major page has metadata and structured data requirements defined.
- [ ] Every launch-critical page has fallback behavior for empty or missing CMS content.
