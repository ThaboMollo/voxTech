# VoxTech Web Application Component System Spec

## Goal
Define the reusable UI building blocks required to assemble the entire VoxTech website without duplicating logic or drifting from the premium design system.

## Component Design Rules
- [ ] Every reusable component has one clear responsibility.
- [ ] Visual variants use shared tokens and variant APIs instead of ad hoc class strings.
- [ ] Components accept normalized props rather than CMS-specific raw structures where practical.
- [ ] Components are responsive by default.
- [ ] Components support empty, loading, and disabled states when relevant.

## Layout Components

### `site-header`
- [ ] Brand lockup
- [ ] Primary navigation
- [ ] Primary CTA
- [ ] Sticky behavior
- [ ] Mobile trigger

### `site-footer`
- [ ] Footer navigation
- [ ] Contact details
- [ ] Legal links
- [ ] Social links
- [ ] Apex Motus relationship copy

### `mobile-nav`
- [ ] Navigation sheet or drawer
- [ ] CTA emphasis
- [ ] Accessible open and close behavior

### `page-shell`
- [ ] Shared page chrome
- [ ] Consistent top spacing
- [ ] Optional intro wrapper support

## Shared Components

### Core Primitives
- [ ] `container`
- [ ] `section-heading`
- [ ] `cta-button`
- [ ] `badge`
- [ ] `card`
- [ ] `rich-text`
- [ ] `empty-state`
- [ ] `logo-mark`

### Shared Completion Criteria
- [ ] Spacing, typography, and color usage are consistent.
- [ ] Components can be reused across marketing, editorial, and proof pages.
- [ ] Variants cover the known use cases without overfitting.

## Domain Components

### Home
- [ ] `hero-section`
- [ ] `credibility-strip`
- [ ] `problem-section`
- [ ] `solution-pillars`
- [ ] `services-preview`
- [ ] `featured-work`
- [ ] `why-voxtech`
- [ ] `insights-opportunities-preview`
- [ ] `final-cta`

### Services
- [ ] `service-detail-card`
- [ ] `service-grid`
- [ ] `service-cta-banner`

### Work
- [ ] `project-card`
- [ ] `project-grid`
- [ ] `case-study-header`
- [ ] `case-study-section`
- [ ] `related-projects`

### Blog and Editorial
- [ ] `blog-card`
- [ ] `blog-grid`
- [ ] `category-filter`
- [ ] `article-header`
- [ ] `related-articles`
- [ ] `newsletter-cta`

### Opportunities
- [ ] `opportunity-card`
- [ ] `opportunity-grid`
- [ ] `opportunities-filter-bar`
- [ ] `opportunity-header`

### Resources
- [ ] `resource-card`
- [ ] `resource-grid`
- [ ] `resource-access-panel`

### Forms
- [ ] `contact-form`
- [ ] `lead-form`
- [ ] `demo-booking-embed`
- [ ] `field`
- [ ] `submit-button`
- [ ] success and error feedback modules

### SEO
- [ ] `metadata` helpers
- [ ] `json-ld` renderer

## Reuse Strategy
- [ ] Build preview cards so they can appear in home sections and listing pages.
- [ ] Build intro, CTA, and proof modules as composable page sections.
- [ ] Build filter components to share interaction patterns across blog, opportunities, and resources where appropriate.
- [ ] Build form field primitives once and reuse them across contact, lead, and demo fallback flows.

## Accessibility Requirements
- [ ] Navigation is keyboard accessible.
- [ ] Buttons and links expose clear states.
- [ ] Forms have labels, errors, and focus management.
- [ ] Rich text output preserves semantic structure.
- [ ] Color contrast and motion choices support usability.

## Component Completion Checklist
- [ ] Shared primitives exist before higher-level assemblies depend on them.
- [ ] Each domain component has clear prop inputs and expected states.
- [ ] Components are styled consistently with the premium brand direction.
- [ ] Forms and filters are interactive only where client-side behavior is necessary.
- [ ] Component reuse reduces page-specific duplication across the app.
