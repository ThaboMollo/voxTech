# VoxTech Web Application CMS and Data Spec

## Goal
Define the content model, query layer, and validation contracts required to power the whole website through Sanity and typed application data.

## Core Content Domains
- [ ] Site settings
- [ ] Services
- [ ] Projects
- [ ] Case studies
- [ ] Blog posts
- [ ] Categories
- [ ] Authors
- [ ] Opportunities
- [ ] Testimonials
- [ ] FAQs
- [ ] Resources

## Schema Plan

### Site Settings
- [ ] Brand title
- [ ] Description
- [ ] Tagline
- [ ] Primary CTA
- [ ] Secondary CTA
- [ ] Contact details
- [ ] Social links
- [ ] Footer copy
- [ ] SEO defaults

### Services
- [ ] Title
- [ ] Slug
- [ ] Summary
- [ ] Description
- [ ] Audience
- [ ] Problems solved
- [ ] Outcomes
- [ ] Featured flag
- [ ] CTA copy

### Projects
- [ ] Title
- [ ] Slug
- [ ] Short descriptor
- [ ] Challenge
- [ ] Solution
- [ ] Outcome
- [ ] Tech stack
- [ ] External URL
- [ ] Featured flag
- [ ] Related case study reference

### Case Studies
- [ ] Title
- [ ] Slug
- [ ] Summary
- [ ] Sector or client context
- [ ] Challenge
- [ ] Strategy
- [ ] Solution
- [ ] Implementation highlights
- [ ] Outcome
- [ ] Metrics
- [ ] Gallery
- [ ] Related project
- [ ] Featured flag

### Blog Posts
- [ ] Title
- [ ] Slug
- [ ] Excerpt
- [ ] Body
- [ ] Author reference
- [ ] Category reference
- [ ] Publish date
- [ ] Featured flag
- [ ] SEO fields

### Categories
- [ ] Title
- [ ] Slug
- [ ] Optional description

### Authors
- [ ] Name
- [ ] Slug if public author page is needed later
- [ ] Role
- [ ] Bio
- [ ] Image

### Opportunities
- [ ] Title
- [ ] Slug
- [ ] Summary
- [ ] Type or category
- [ ] Date
- [ ] Location
- [ ] Registration link
- [ ] Status logic support
- [ ] Featured flag

### Testimonials
- [ ] Quote
- [ ] Author name
- [ ] Role
- [ ] Company
- [ ] Company logo
- [ ] Related service or project
- [ ] Featured flag

### FAQs
- [ ] Question
- [ ] Answer
- [ ] Related page or context

### Resources
- [ ] Title
- [ ] Slug
- [ ] Description
- [ ] Cover image
- [ ] File or external URL
- [ ] Category
- [ ] Gated boolean
- [ ] CTA copy

## Object Schemas
- [ ] `seo`
- [ ] `link`
- [ ] `hero`
- [ ] `cta`
- [ ] shared rich-text blocks where needed

## Type System Plan
- [ ] Create matching TypeScript types for every document used by the frontend.
- [ ] Separate raw CMS response types from normalized UI-facing types where complexity warrants it.
- [ ] Reuse shared field types for SEO, links, images, and CTA payloads.

## Query Plan

### Global Queries
- [ ] Site settings
- [ ] Main navigation data
- [ ] Footer data

### Listing Queries
- [ ] Featured services
- [ ] Featured projects
- [ ] Blog list with category support
- [ ] Opportunities list with date-aware sorting
- [ ] Resources list

### Detail Queries
- [ ] Project or case study by slug
- [ ] Blog post by slug
- [ ] Opportunity by slug
- [ ] Resource by slug

### Related Content Queries
- [ ] Related articles
- [ ] Related projects
- [ ] Related opportunities
- [ ] Related resources

## Validation Plan

### Form Schemas
- [ ] Contact form schema
- [ ] Lead form schema
- [ ] Demo fallback schema

### Content Validation Rules
- [ ] Slugs are unique and required for routable content.
- [ ] Launch-critical fields are enforced in CMS.
- [ ] URLs and emails are validated.
- [ ] Optional relationships fail gracefully when absent.

## Content Operations Checklist
- [ ] Seed launch content for all core routes.
- [ ] Mark which content types are required for Phase 1 launch.
- [ ] Mark which content types unlock Phase 2 and Phase 3 routes.
- [ ] Define editorial workflow for publishing and updating content.
- [ ] Define ownership for services, work, blog, opportunities, and resources.

## CMS and Data Completion Checklist
- [ ] Every routed page has a supporting schema and query path.
- [ ] Every query has a corresponding typed fetch helper.
- [ ] Every launch-critical field is enforced either in schema or app validation.
- [ ] Content relationships support previews, related content, and CTA routing.
- [ ] Seed content exists so the first production build does not rely on empty placeholders.
