# VoxTech Web Application Page and Route Spec

## Goal
Define every user-facing route, the content needed for it, the components it assembles, and the completion criteria for shipping it.

## Route Inventory

### Core Marketing Routes
- [ ] `/`
- [ ] `/what-we-do`
- [ ] `/work`
- [ ] `/contact`
- [ ] `/book-demo`

### Proof and Content Routes
- [ ] `/work/[slug]`
- [ ] `/insights`
- [ ] `/insights/[slug]`
- [ ] `/opportunities`
- [ ] `/opportunities/[slug]`
- [ ] `/resources`
- [ ] `/resources/[slug]`

## Global Page Rules
- [ ] Every page has a clear primary CTA.
- [ ] Every page has metadata and social sharing requirements defined.
- [ ] Every content-driven page has loading, empty, and missing-content behavior defined.
- [ ] Every page preserves the premium brand tone without overloading the interface.

## Page Specs

### Home `/`
Purpose: introduce VoxTech, establish trust, preview capability, and move visitors toward booking.

Sections:
- [ ] Hero
- [ ] Credibility strip
- [ ] Problem section
- [ ] Solution pillars
- [ ] Services preview
- [ ] Featured work
- [ ] Why VoxTech
- [ ] Insights and opportunities preview
- [ ] Final CTA

Data requirements:
- [ ] Site settings
- [ ] Featured services
- [ ] Featured projects
- [ ] Latest insights
- [ ] Upcoming opportunities

Done when:
- [ ] The page communicates offer, proof, and next action within the first scroll.
- [ ] All preview modules route users deeper into the site.

### What We Do `/what-we-do`
Purpose: explain service lines and match them to business problems and outcomes.

Sections:
- [ ] Intro
- [ ] Service grid or stacked detail blocks
- [ ] Optional process summary
- [ ] Why work with VoxTech block
- [ ] CTA banner

Data requirements:
- [ ] Services
- [ ] FAQs or trust snippets
- [ ] Global CTA content

Done when:
- [ ] Users can understand who each service is for and what outcome it creates.

### Work `/work`
Purpose: prove execution capability and route users into deeper proof.

Sections:
- [ ] Intro
- [ ] Project grid
- [ ] Optional proof or testimonial strip
- [ ] CTA banner

Data requirements:
- [ ] Projects
- [ ] Optional case study references
- [ ] Optional testimonials

Done when:
- [ ] Each project gives enough context to qualify interest.
- [ ] Users can continue into case studies or direct conversion.

### Case Study `/work/[slug]`
Purpose: turn project proof into a business story that sells capability.

Sections:
- [ ] Header
- [ ] Overview
- [ ] Challenge
- [ ] Strategy
- [ ] Solution
- [ ] Outcome
- [ ] Gallery or visual proof
- [ ] Related projects
- [ ] CTA

Data requirements:
- [ ] Case study by slug
- [ ] Related project
- [ ] Optional testimonial

Done when:
- [ ] The page clearly explains problem, approach, implementation, and result.

### Insights `/insights`
Purpose: function as the editorial entry point for authority and SEO.

Sections:
- [ ] Intro
- [ ] Featured article area
- [ ] Category filter
- [ ] Article grid
- [ ] Newsletter or CTA block

Data requirements:
- [ ] Posts
- [ ] Categories
- [ ] Optional featured post

Done when:
- [ ] Users can browse by topic and identify relevant content quickly.

### Insight Detail `/insights/[slug]`
Purpose: deliver strong content while preserving conversion momentum.

Sections:
- [ ] Article header
- [ ] Rich content body
- [ ] Inline CTA opportunities
- [ ] Related posts
- [ ] Final CTA

Data requirements:
- [ ] Post by slug
- [ ] Author and category references
- [ ] Related posts
- [ ] Optional related services or projects

Done when:
- [ ] The article is readable, well-structured, and connected to the rest of the site.

### Opportunities `/opportunities`
Purpose: present innovation, event, or collaboration opportunities in a clear browseable format.

Sections:
- [ ] Intro
- [ ] Filter controls
- [ ] Featured opportunity
- [ ] Opportunity grid
- [ ] CTA block

Data requirements:
- [ ] Opportunities
- [ ] Opportunity types or categories
- [ ] Date status logic

Done when:
- [ ] Users can distinguish upcoming versus past or expired items.

### Opportunity Detail `/opportunities/[slug]`
Purpose: explain the opportunity and make the next step obvious.

Sections:
- [ ] Header
- [ ] Detail body
- [ ] Action module
- [ ] Related opportunities
- [ ] CTA banner

Data requirements:
- [ ] Opportunity by slug
- [ ] Related items

Done when:
- [ ] The page supports registration, contact, or other next-step behavior cleanly.

### Resources `/resources`
Purpose: house downloadable assets, capability materials, and lead magnets.

Sections:
- [ ] Intro
- [ ] Featured resource
- [ ] Resource grid
- [ ] Optional filter or category controls
- [ ] CTA block

Data requirements:
- [ ] Resources
- [ ] Categories if used
- [ ] Gating metadata

Done when:
- [ ] Visitors can understand what each asset is and whether access is instant or form-gated.

### Resource Detail `/resources/[slug]`
Purpose: convert authority assets into measurable engagement.

Sections:
- [ ] Resource header
- [ ] Description and value summary
- [ ] Access or download module
- [ ] Related resources
- [ ] CTA block

Data requirements:
- [ ] Resource by slug
- [ ] Access mode
- [ ] Related assets

Done when:
- [ ] The page handles direct download or gated capture without ambiguity.

### Contact `/contact`
Purpose: support direct inquiry with a premium, low-friction experience.

Sections:
- [ ] Intro
- [ ] Contact details
- [ ] Contact form
- [ ] Response-time or FAQ reassurance

Form fields:
- [ ] Full name
- [ ] Company name
- [ ] Email
- [ ] Service interest
- [ ] Estimated timeline
- [ ] Budget range
- [ ] Project message

Done when:
- [ ] Users can submit inquiries confidently and receive a clear success state.

### Book a Demo `/book-demo`
Purpose: be the clearest high-intent conversion page on the site.

Sections:
- [ ] Intro
- [ ] Session value proposition
- [ ] Scheduler embed or lead fallback
- [ ] FAQ block
- [ ] Trust copy

Done when:
- [ ] The page removes uncertainty about what happens next.
- [ ] Booking or fallback submission works reliably.

## Cross-Route State Checklist
- [ ] Loading behavior defined for async routes.
- [ ] Empty state defined for listings.
- [ ] Not-found state defined for dynamic routes.
- [ ] Preview and related-content modules defined for content depth.
- [ ] CTA hierarchy consistent across pages.
