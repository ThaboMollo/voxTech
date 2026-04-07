# VOXTECH_MASTER_SPEC.md

## Project
VoxTech Website & Lead Engine Platform

## Overview
This specification consolidates Phase 1, 2, and 3 into a build-ready system design.

The platform must:
- Position VoxTech as a premium tech execution house
- Showcase real work and authority
- Generate and qualify leads
- Scale into a measurable lead engine

---

# 1. PAGE-BY-PAGE REQUIREMENTS

## 1.1 Home Page (/)

### Sections
- Hero
- Credibility Strip
- Problem Section
- Solution Pillars
- Services Preview
- Featured Work
- Why VoxTech
- Insights & Opportunities Preview
- Final CTA

### Components
- HeroSection
- CredibilityBar
- ProblemBlock
- PillarGrid
- ServiceCardList
- ProjectCardList
- TrustSection
- ContentPreviewSplit
- CTASection

---

## 1.2 What We Do (/what-we-do)

### Sections
- Intro
- Service Blocks
- CTA

### Components
- PageIntro
- ServiceDetailCard
- CTASection

---

## 1.3 Work (/work)

### Sections
- Intro
- Project Grid
- CTA

### Components
- PageIntro
- ProjectCard
- CTASection

---

## 1.4 Case Study (/work/[slug])

### Sections
- Overview
- Challenge
- Strategy
- Solution
- Outcome
- CTA

### Components
- CaseStudyHeader
- CaseStudySection
- CTASection

---

## 1.5 Insights (/insights)

### Sections
- Intro
- Category Filter
- Article List

### Components
- PageIntro
- CategoryFilter
- BlogCard
- Pagination

---

## 1.6 Insight Detail (/insights/[slug])

### Components
- ArticleHeader
- RichTextRenderer
- RelatedArticles
- CTASection

---

## 1.7 Opportunities (/opportunities)

### Sections
- Intro
- Filters
- Event List

### Components
- PageIntro
- FilterBar
- OpportunityCard

---

## 1.8 Opportunity Detail (/opportunities/[slug])

### Components
- OpportunityHeader
- OpportunityDetails
- CTASection

---

## 1.9 Contact (/contact)

### Sections
- Intro
- Contact Info
- Form

### Components
- PageIntro
- ContactDetails
- ContactForm

---

## 1.10 Book a Demo (/book-demo)

### Sections
- Intro
- Booking Module
- FAQ

### Components
- PageIntro
- BookingEmbed
- FAQBlock

---

# 2. COMPONENT MAP

## Layout
- Header
- Footer
- MobileNav

## Shared
- Button
- SectionWrapper
- Container
- Typography
- Card
- Badge

## Home
- HeroSection
- CredibilityBar
- ProblemBlock
- PillarGrid
- ServiceCard
- ProjectCard
- TrustSection
- ContentPreviewSplit
- CTASection

## Services
- ServiceDetailCard

## Work
- ProjectCard
- CaseStudySection

## Blog
- BlogCard
- CategoryFilter
- ArticleHeader
- RichTextRenderer
- RelatedArticles

## Opportunities
- OpportunityCard
- FilterBar

## Forms
- ContactForm
- BookingEmbed
- LeadForm

## SEO
- SEOHead
- MetaTags

---

# 3. CMS SCHEMAS (SANITY)

## 3.1 Site Settings
- title
- description
- tagline
- contact email
- social links
- Apex Motus reference

## 3.2 Services
- title
- slug
- summary
- description
- audience
- outcomes
- featured

## 3.3 Projects
- title
- slug
- description
- challenge
- solution
- outcome
- techStack
- externalUrl
- featured

## 3.4 Case Studies
- title
- slug
- overview
- challenge
- strategy
- solution
- outcome
- gallery
- relatedProject

## 3.5 Blog Posts
- title
- slug
- excerpt
- body
- author
- category
- publishDate
- SEO fields

## 3.6 Categories
- title
- slug

## 3.7 Opportunities
- title
- slug
- summary
- date
- location
- link
- category

## 3.8 Testimonials
- quote
- author
- company

## 3.9 Resources
- title
- slug
- file
- description

---

# 4. FOLDER STRUCTURE (NEXT.JS)

app/
  layout.tsx
  page.tsx
  what-we-do/page.tsx
  work/page.tsx
  work/[slug]/page.tsx
  insights/page.tsx
  insights/[slug]/page.tsx
  opportunities/page.tsx
  opportunities/[slug]/page.tsx
  contact/page.tsx
  book-demo/page.tsx

components/
  layout/
  shared/
  home/
  services/
  work/
  blog/
  opportunities/
  forms/
  seo/

lib/
  sanity/
  api/
  utils/
  seo/

sanity/
  schemas/

types/

styles/

---

# 5. DATA FLOW

CMS (Sanity) -> Next.js fetch -> Components -> UI

Forms -> API Routes -> CRM / Email

Env -> Project Links

---

# 6. API ROUTES

/api/contact
/api/lead
/api/demo

---

# 7. ENV VARIABLES

NEXT_PUBLIC_SITE_URL
NEXT_PUBLIC_CLINICOS_URL
NEXT_PUBLIC_TSEBOIQ_URL
NEXT_PUBLIC_SCANYA_URL
SANITY_PROJECT_ID
SANITY_DATASET
NEXT_PUBLIC_DEMO_URL

---

# 8. CONVERSION FLOW

Visitor ->
Landing ->
Service understanding ->
Proof ->
Demo Booking ->
CRM capture ->
Follow-up

---

# 9. BUILD ORDER

1. Setup Next.js + Tailwind
2. Setup Sanity CMS
3. Build Layout & Navigation
4. Build Home Page
5. Build What We Do
6. Build Work + Case Studies
7. Build Insights
8. Build Opportunities
9. Build Contact + Demo
10. Add SEO
11. Connect Forms
12. Deploy

---

# 10. SUCCESS CRITERIA

- Premium UX
- Clear messaging
- SEO-ready
- CMS-driven
- Lead capture working
- Demo booking working
- Scalable architecture

---

# FINAL NOTE

This is not just a website.

This is VoxTech’s:
- brand engine
- authority engine
- lead engine

Build it like a product, not a page.
