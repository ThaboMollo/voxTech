# VOXTECH_BUILDER_MODE.md

## Purpose
This document transforms the VoxTech master specification into Builder Mode.

Builder Mode means:
- implementation-first
- exact folder and file structure
- component responsibilities
- data contracts
- CMS schema plan
- page assembly plan
- API route expectations
- execution order
- coding standards

This document is intended to be used by:
- you
- an engineering agent
- a developer teammate
- an AI code generator

---

# 1. BUILD DIRECTIVE

Build VoxTech as a premium, CMS-driven, lead-generation website and platform using:
- Next.js App Router
- TypeScript
- Tailwind CSS
- Sanity CMS
- Vercel

The system must optimize for:
- premium trust
- SEO
- modularity
- maintainability
- lead conversion
- future expansion into a measurable lead engine

Primary conversion path:
Home -> What We Do -> Work -> Book a Demo

Primary commercial goal:
Generate qualified demo bookings from SMEs.

Brand positioning:
**VoxTech, powered by Apex Motus**
**The voice of tech execution**
**Bring the vision. Leave with the solution.**

---

# 2. TECH STACK

## Core
- Next.js 15+ with App Router
- React 19+
- TypeScript
- Tailwind CSS
- Sanity CMS
- next-sanity
- zod
- react-hook-form
- lucide-react
- clsx
- class-variance-authority
- next-seo patterns through metadata API
- Vercel deployment

## Optional but recommended
- shadcn/ui for primitives
- @tailwindcss/typography
- date-fns
- resend or equivalent for form email notifications
- calendly embed or custom scheduler integration
- Plausible or GA4 for analytics

---

# 3. HIGH-LEVEL FOLDER STRUCTURE

```txt
voxtech/
├─ app/
│  ├─ (marketing)/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ what-we-do/page.tsx
│  │  ├─ work/page.tsx
│  │  ├─ work/[slug]/page.tsx
│  │  ├─ insights/page.tsx
│  │  ├─ insights/[slug]/page.tsx
│  │  ├─ opportunities/page.tsx
│  │  ├─ opportunities/[slug]/page.tsx
│  │  ├─ resources/page.tsx
│  │  ├─ resources/[slug]/page.tsx
│  │  ├─ contact/page.tsx
│  │  └─ book-demo/page.tsx
│  ├─ api/
│  │  ├─ contact/route.ts
│  │  ├─ lead/route.ts
│  │  └─ demo/route.ts
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ robots.ts
│  └─ sitemap.ts
├─ components/
│  ├─ layout/
│  │  ├─ site-header.tsx
│  │  ├─ site-footer.tsx
│  │  ├─ mobile-nav.tsx
│  │  └─ page-shell.tsx
│  ├─ shared/
│  │  ├─ container.tsx
│  │  ├─ section-heading.tsx
│  │  ├─ cta-button.tsx
│  │  ├─ badge.tsx
│  │  ├─ card.tsx
│  │  ├─ rich-text.tsx
│  │  ├─ empty-state.tsx
│  │  └─ logo-mark.tsx
│  ├─ home/
│  │  ├─ hero-section.tsx
│  │  ├─ credibility-strip.tsx
│  │  ├─ problem-section.tsx
│  │  ├─ solution-pillars.tsx
│  │  ├─ services-preview.tsx
│  │  ├─ featured-work.tsx
│  │  ├─ why-voxtech.tsx
│  │  ├─ insights-opportunities-preview.tsx
│  │  └─ final-cta.tsx
│  ├─ services/
│  │  ├─ service-detail-card.tsx
│  │  ├─ service-grid.tsx
│  │  └─ service-cta-banner.tsx
│  ├─ work/
│  │  ├─ project-card.tsx
│  │  ├─ project-grid.tsx
│  │  ├─ case-study-header.tsx
│  │  ├─ case-study-section.tsx
│  │  └─ related-projects.tsx
│  ├─ blog/
│  │  ├─ blog-card.tsx
│  │  ├─ blog-grid.tsx
│  │  ├─ category-filter.tsx
│  │  ├─ article-header.tsx
│  │  ├─ related-articles.tsx
│  │  └─ newsletter-cta.tsx
│  ├─ opportunities/
│  │  ├─ opportunity-card.tsx
│  │  ├─ opportunity-grid.tsx
│  │  ├─ opportunities-filter-bar.tsx
│  │  └─ opportunity-header.tsx
│  ├─ forms/
│  │  ├─ contact-form.tsx
│  │  ├─ lead-form.tsx
│  │  ├─ demo-booking-embed.tsx
│  │  ├─ field.tsx
│  │  └─ submit-button.tsx
│  └─ seo/
│     ├─ metadata.ts
│     └─ json-ld.tsx
├─ lib/
│  ├─ sanity/
│  │  ├─ client.ts
│  │  ├─ image.ts
│  │  ├─ live.ts
│  │  ├─ queries.ts
│  │  └─ fetchers.ts
│  ├─ env/
│  │  └─ public-env.ts
│  ├─ validation/
│  │  ├─ contact.ts
│  │  ├─ lead.ts
│  │  └─ demo.ts
│  ├─ utils/
│  │  ├─ cn.ts
│  │  ├─ format-date.ts
│  │  └─ slug.ts
│  └─ constants/
│     ├─ nav.ts
│     ├─ brand.ts
│     └─ ctas.ts
├─ sanity/
│  ├─ env.ts
│  ├─ structure.ts
│  └─ schemaTypes/
│     ├─ index.ts
│     ├─ documents/
│     │  ├─ siteSettings.ts
│     │  ├─ service.ts
│     │  ├─ project.ts
│     │  ├─ caseStudy.ts
│     │  ├─ blogPost.ts
│     │  ├─ category.ts
│     │  ├─ author.ts
│     │  ├─ opportunity.ts
│     │  ├─ testimonial.ts
│     │  ├─ faq.ts
│     │  └─ resource.ts
│     └─ objects/
│        ├─ seo.ts
│        ├─ link.ts
│        ├─ hero.ts
│        └─ cta.ts
├─ types/
│  ├─ service.ts
│  ├─ project.ts
│  ├─ case-study.ts
│  ├─ blog.ts
│  ├─ opportunity.ts
│  ├─ testimonial.ts
│  ├─ resource.ts
│  └─ site.ts
├─ public/
│  ├─ images/
│  └─ og/
├─ .env.local.example
├─ tailwind.config.ts
├─ next.config.ts
├─ tsconfig.json
├─ package.json
└─ README.md
```

---

# 4. PAGE ASSEMBLY PLAN

## 4.1 Home Page
**File:** `app/(marketing)/page.tsx`

### Responsibilities
- establish premium brand trust fast
- explain what VoxTech does
- position VoxTech as execution partner
- show proof through featured work
- preview authority content
- drive user to Book a Demo

### Section Order
1. HeroSection
2. CredibilityStrip
3. ProblemSection
4. SolutionPillars
5. ServicesPreview
6. FeaturedWork
7. WhyVoxTech
8. InsightsOpportunitiesPreview
9. FinalCTA

### Required Data
- hero content from constants or site settings
- featured services from CMS
- featured projects from CMS
- latest blog posts from CMS
- upcoming opportunities from CMS
- global CTA and contact info from site settings

### Notes
- home page should load fast
- keep motion subtle
- every section should support one main CTA or trust message
- avoid clutter and long paragraphs

---

## 4.2 What We Do Page
**File:** `app/(marketing)/what-we-do/page.tsx`

### Responsibilities
- explain service lines clearly
- communicate who each service is for
- show expected business outcomes
- move user toward demo booking

### Required Components
- Page intro block
- Service grid
- Optional process section
- FAQ teaser
- CTA banner

### Required Data
- service documents from CMS
- optional FAQ items
- site settings CTA

### Section Order
1. Intro
2. ServiceGrid
3. Process summary
4. Why work with VoxTech
5. CTA banner

---

## 4.3 Work Page
**File:** `app/(marketing)/work/page.tsx`

### Responsibilities
- prove capability
- showcase product thinking and execution
- let user inspect relevant examples
- support deeper case-study routing later

### Required Components
- PageIntro
- ProjectGrid
- CTA banner

### Required Data
- featured projects from CMS
- optional testimonials related to work

### Section Order
1. Intro
2. ProjectGrid
3. Optional proof strip
4. CTA banner

---

## 4.4 Case Study Detail Page
**File:** `app/(marketing)/work/[slug]/page.tsx`

### Responsibilities
- tell the project story
- show business challenge
- show solution and why it matters
- create “we can do this for you too” energy

### Required Components
- CaseStudyHeader
- Challenge section
- Strategy section
- Solution section
- Outcome section
- Screenshot gallery
- RelatedProjects
- CTASection

### Required Data
- case study by slug
- related project
- related testimonial if available

---

## 4.5 Insights Listing Page
**File:** `app/(marketing)/insights/page.tsx`

### Responsibilities
- build authority
- support SEO
- encourage reading depth
- route traffic into services and demo flow

### Required Components
- PageIntro
- CategoryFilter
- BlogGrid
- Newsletter or CTA module

### Required Data
- blog post list
- categories
- featured article if available

---

## 4.6 Insight Detail Page
**File:** `app/(marketing)/insights/[slug]/page.tsx`

### Responsibilities
- deliver rich content well
- interlink to relevant services or case studies
- keep conversion path alive

### Required Components
- ArticleHeader
- RichTextRenderer
- Inline CTA blocks
- RelatedArticles
- Final CTA

### Required Data
- article by slug
- related posts
- related services if mapped

---

## 4.7 Opportunities Listing Page
**File:** `app/(marketing)/opportunities/page.tsx`

### Responsibilities
- position VoxTech as ecosystem participant
- highlight hackathons, innovation events, and collaboration opportunities
- improve return visits and topical authority

### Required Components
- PageIntro
- OpportunitiesFilterBar
- OpportunityGrid
- CTA block

### Required Data
- opportunity items
- opportunity categories or types
- featured opportunity

---

## 4.8 Opportunity Detail Page
**File:** `app/(marketing)/opportunities/[slug]/page.tsx`

### Responsibilities
- present event details clearly
- allow user to act
- associate VoxTech with innovation and collaboration

### Required Components
- OpportunityHeader
- OpportunityDetails
- Related opportunities
- CTA banner

---

## 4.9 Contact Page
**File:** `app/(marketing)/contact/page.tsx`

### Responsibilities
- support direct inquiry
- qualify incoming leads lightly
- reassure the user

### Required Components
- Intro
- Contact details
- ContactForm
- Optional FAQ or response-time note

### Form Fields
- fullName
- companyName
- email
- serviceInterest
- estimatedTimeline
- budgetRange
- message

---

## 4.10 Book a Demo Page
**File:** `app/(marketing)/book-demo/page.tsx`

### Responsibilities
- be the strongest conversion page
- remove ambiguity
- set expectations for the meeting
- support scheduling or a lead-first handoff

### Required Components
- Intro
- Value proposition for session
- DemoBookingEmbed or LeadForm fallback
- FAQBlock
- trust copy

---

## 4.11 Resources Page
**File:** `app/(marketing)/resources/page.tsx`

### Responsibilities
- support lead magnets in phase 2 and 3
- allow downloadable assets and capability materials
- strengthen authority and lead capture

---

# 5. COMPONENT RESPONSIBILITY MAP

## Layout Components

### `site-header.tsx`
Responsibilities:
- main nav
- brand identity
- primary CTA
- mobile trigger
- sticky behavior

### `site-footer.tsx`
Responsibilities:
- secondary nav
- contact info
- legal links
- Apex Motus relation line
- social links

### `mobile-nav.tsx`
Responsibilities:
- collapsed nav for small screens
- clear CTA emphasis
- simple transitions

---

## Shared Components

### `container.tsx`
Responsibilities:
- max width
- padding consistency
- layout discipline

### `section-heading.tsx`
Responsibilities:
- reusable eyebrow
- title
- supporting text

### `cta-button.tsx`
Variants:
- primary
- secondary
- ghost
- inverted

### `card.tsx`
Responsibilities:
- shared surface styles for service, project, blog, and event cards

### `rich-text.tsx`
Responsibilities:
- render Sanity Portable Text
- style headings, lists, links, quotes, code blocks
- preserve premium reading experience

---

## Home Components

### `hero-section.tsx`
Props:
- title
- subtitle
- primaryCta
- secondaryCta
- optional hero badge

### `credibility-strip.tsx`
Props:
- array of credibility items

### `problem-section.tsx`
Props:
- title
- problems[]
- optional summary

### `solution-pillars.tsx`
Props:
- pillars[]

### `services-preview.tsx`
Props:
- services[]

### `featured-work.tsx`
Props:
- projects[]

### `why-voxtech.tsx`
Props:
- reasons[]

### `insights-opportunities-preview.tsx`
Props:
- posts[]
- opportunities[]

### `final-cta.tsx`
Props:
- title
- body
- cta

---

## Service Components

### `service-detail-card.tsx`
Props:
- title
- summary
- audience
- outcomes[]
- href

### `service-grid.tsx`
Responsibilities:
- arrange service cards
- responsive 1, 2, 3 column behavior

---

## Work Components

### `project-card.tsx`
Props:
- title
- summary
- challenge
- outcome
- href
- externalUrl
- tags[]

### `case-study-header.tsx`
Props:
- title
- sector
- summary
- hero image
- project link

### `case-study-section.tsx`
Props:
- title
- body

### `related-projects.tsx`
Props:
- projects[]

---

## Blog Components

### `blog-card.tsx`
Props:
- title
- excerpt
- category
- publishedAt
- href
- coverImage

### `category-filter.tsx`
Responsibilities:
- display categories
- support active filter state

### `article-header.tsx`
Props:
- title
- excerpt
- author
- publishedAt
- category
- coverImage

### `related-articles.tsx`
Props:
- posts[]

---

## Opportunity Components

### `opportunity-card.tsx`
Props:
- title
- summary
- date
- location
- href
- externalLink

### `opportunities-filter-bar.tsx`
Responsibilities:
- filter by type
- filter upcoming/past in phase 2

### `opportunity-header.tsx`
Props:
- title
- summary
- date
- location
- organizer

---

## Form Components

### `contact-form.tsx`
Responsibilities:
- input validation
- error state handling
- submit to `/api/contact`

### `lead-form.tsx`
Responsibilities:
- stronger qualification form
- submit to `/api/lead`

### `demo-booking-embed.tsx`
Responsibilities:
- embed external scheduler
- fallback support if booking URL not present

### `field.tsx`
Responsibilities:
- shared label/input/error wrapper

### `submit-button.tsx`
Responsibilities:
- loading state
- disabled state
- success or pending text support

---

# 6. DATA TYPES

## `types/service.ts`
```ts
export interface Service {
  _id: string;
  title: string;
  slug: string;
  summary: string;
  description?: string;
  audience?: string;
  problemsSolved?: string[];
  outcomes?: string[];
  featured?: boolean;
}
```

## `types/project.ts`
```ts
export interface Project {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  techStack?: string[];
  externalUrl?: string;
  featured?: boolean;
}
```

## `types/case-study.ts`
```ts
export interface CaseStudy {
  _id: string;
  title: string;
  slug: string;
  summary?: string;
  sector?: string;
  challenge?: string;
  strategy?: string;
  solution?: string;
  outcome?: string;
  gallery?: unknown[];
  relatedProject?: Project;
}
```

## `types/blog.ts`
```ts
export interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  coverImage?: unknown;
  category?: {
    title: string;
    slug: string;
  };
  author?: {
    name: string;
  };
  publishDate?: string;
  body?: unknown[];
}
```

## `types/opportunity.ts`
```ts
export interface Opportunity {
  _id: string;
  title: string;
  slug: string;
  summary?: string;
  organizer?: string;
  eventDate?: string;
  location?: string;
  registrationUrl?: string;
  category?: string;
  status?: "upcoming" | "past" | "open";
}
```

---

# 7. CMS SCHEMA PLAN

## 7.1 `siteSettings.ts`
Fields:
- siteTitle
- siteDescription
- brandTagline
- apexMotusLine
- primaryCtaLabel
- primaryCtaUrl
- contactEmail
- phone
- city
- socialLinks[]
- footerCopy
- seoDefaults

## 7.2 `service.ts`
Fields:
- title
- slug
- summary
- description
- audience
- problemsSolved[]
- outcomes[]
- featuredImage
- featured
- sortOrder
- seo

## 7.3 `project.ts`
Fields:
- title
- slug
- shortDescription
- challenge
- solution
- outcome
- techStack[]
- featuredImage
- logo
- status
- externalUrl
- featured
- seo

## 7.4 `caseStudy.ts`
Fields:
- title
- slug
- summary
- sector
- challenge
- strategy
- solution
- implementationHighlights[]
- outcome
- metrics[]
- gallery[]
- relatedProject (reference)
- featured
- seo

## 7.5 `blogPost.ts`
Fields:
- title
- slug
- excerpt
- coverImage
- author (reference)
- category (reference)
- publishDate
- body
- featured
- seo

## 7.6 `category.ts`
Fields:
- title
- slug
- description

## 7.7 `author.ts`
Fields:
- name
- slug
- role
- image
- bio

## 7.8 `opportunity.ts`
Fields:
- title
- slug
- summary
- organizer
- eventDate
- location
- registrationUrl
- body
- featuredImage
- category
- status
- featured
- seo

## 7.9 `testimonial.ts`
Fields:
- quote
- authorName
- authorRole
- company
- companyLogo
- relatedService (reference)
- relatedProject (reference)
- featured

## 7.10 `faq.ts`
Fields:
- question
- answer
- pageType
- order

## 7.11 `resource.ts`
Fields:
- title
- slug
- description
- coverImage
- file
- category
- formRequired
- featured
- seo

---

# 8. SANITY QUERY PLAN

Create query constants inside `lib/sanity/queries.ts`.

## Required Queries
- `siteSettingsQuery`
- `featuredServicesQuery`
- `allServicesQuery`
- `featuredProjectsQuery`
- `allProjectsQuery`
- `projectBySlugQuery`
- `caseStudyBySlugQuery`
- `latestPostsQuery`
- `allPostsQuery`
- `postBySlugQuery`
- `allCategoriesQuery`
- `upcomingOpportunitiesQuery`
- `allOpportunitiesQuery`
- `opportunityBySlugQuery`
- `featuredTestimonialsQuery`
- `faqsByPageQuery`
- `resourcesQuery`

---

# 9. ENVIRONMENT VARIABLES

Create `.env.local.example` with:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CLINICOS_URL=
NEXT_PUBLIC_TSEBOIQ_URL=
NEXT_PUBLIC_SCANYA_URL=
NEXT_PUBLIC_DEMO_BOOKING_URL=
NEXT_PUBLIC_CONTACT_EMAIL=
SANITY_PROJECT_ID=
SANITY_DATASET=production
SANITY_API_VERSION=2025-01-01
SANITY_STUDIO_TOKEN=
RESEND_API_KEY=
LEAD_NOTIFICATION_EMAIL=
```

### Notes
- product URLs should map to project cards when CMS external URL is absent
- use public env only for client-safe values
- server secrets remain server-only

---

# 10. NAVIGATION CONFIG

Create `lib/constants/nav.ts`.

```ts
export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Work", href: "/work" },
  { label: "Insights", href: "/insights" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Contact", href: "/contact" },
];
```

Create `lib/constants/ctas.ts`.

```ts
export const PRIMARY_CTA = {
  label: "Book a Demo",
  href: "/book-demo",
};

export const SECONDARY_CTA = {
  label: "View Our Work",
  href: "/work",
};
```

---

# 11. STYLING SYSTEM

## Visual Rules
- luxury first
- tech second
- avoid loud effects
- use strong spacing discipline
- use high-contrast typography
- keep motion understated

## Tailwind Token Recommendations
Use CSS variables in `globals.css`.

```css
:root {
  --background: 245 245 247;
  --foreground: 17 24 39;
  --muted: 100 116 139;
  --card: 255 255 255;
  --border: 226 232 240;
  --accent: 0 194 255;
  --accent-foreground: 6 10 18;
}

.dark {
  --background: 7 10 15;
  --foreground: 241 245 249;
  --muted: 148 163 184;
  --card: 12 17 24;
  --border: 30 41 59;
  --accent: 0 194 255;
  --accent-foreground: 7 10 15;
}
```

## Typography Guidance
- headlines: refined and bold
- body: clean and readable
- avoid decorative fonts
- use consistent content width for readability

---

# 12. FORM VALIDATION PLAN

## `lib/validation/contact.ts`
```ts
import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2),
  companyName: z.string().min(2),
  email: z.string().email(),
  serviceInterest: z.string().min(2),
  estimatedTimeline: z.string().min(1),
  budgetRange: z.string().min(1),
  message: z.string().min(10),
});

export type ContactInput = z.infer<typeof contactSchema>;
```

## `lib/validation/lead.ts`
Add advanced qualification fields in phase 3:
- companySize
- projectStage
- urgency
- existingTools

## `lib/validation/demo.ts`
Keep it minimal if using lead-first before scheduler integration.

---

# 13. API ROUTE PLAN

## `/api/contact`
Method:
- POST

Responsibilities:
- validate request
- send email notification
- optionally store lead in CRM later
- return success/error JSON

Response format:
```ts
{ success: true, message: "Inquiry submitted successfully." }
```

## `/api/lead`
Method:
- POST

Responsibilities:
- advanced qualification capture
- CRM handoff
- email notification
- analytics event

## `/api/demo`
Method:
- POST

Responsibilities:
- scheduler fallback
- capture demo intent if direct booking is unavailable

---

# 14. SEO PLAN

## Global Requirements
- metadata on every page
- canonical URLs
- Open Graph
- Twitter/X cards
- sitemap
- robots
- semantic headings
- descriptive slugs

## Per Page
### Home
Target:
- VoxTech
- tech execution for SMEs
- software solutions for business

### What We Do
Target:
- SaaS development
- digital systems for SMEs
- technical consulting

### Work
Target:
- portfolio
- case studies
- software projects

### Insights
Target:
- organic content strategy
- thought leadership
- internal linking to services

### Opportunities
Target:
- hackathons
- innovation events
- collaboration opportunities

---

# 15. ANALYTICS PLAN

Track:
- page views
- CTA clicks
- form submissions
- demo booking clicks
- external project link clicks
- article engagement
- opportunity link clicks

Recommended event names:
- `cta_click`
- `demo_click`
- `contact_submit`
- `lead_submit`
- `project_link_click`
- `resource_download`

---

# 16. IMPLEMENTATION ORDER

## Sprint 1 — Foundation
1. initialize Next.js app
2. install Tailwind and base dependencies
3. create folder structure
4. create global styles and color tokens
5. build layout shell
6. build shared components

## Sprint 2 — CMS Foundation
1. initialize Sanity
2. create schemas
3. create client and query utilities
4. seed starter content
5. verify image pipeline and slug fetching

## Sprint 3 — Core Marketing Pages
1. build Home page
2. build What We Do page
3. build Work page
4. build Contact page
5. build Book a Demo page

## Sprint 4 — Content Engine
1. build Insights listing and detail pages
2. build Opportunities listing and detail pages
3. build case study detail page
4. add related content patterns

## Sprint 5 — Lead Engine
1. build form validation
2. connect API routes
3. connect email notifications
4. embed demo scheduler
5. add analytics

## Sprint 6 — SEO and QA
1. metadata cleanup
2. sitemap and robots
3. accessibility review
4. responsiveness review
5. performance optimization
6. deployment to Vercel

---

# 17. LAUNCH CONTENT CHECKLIST

## Required Before Go-Live
### Pages
- home
- what we do
- work
- insights
- opportunities
- contact
- book a demo

### Services
- SaaS Product Development
- Business Systems and Workflow Solutions
- Technical Consulting and Advisory
- Product Discovery and MVP Planning
- Optimization and Modernization

### Projects
- ClinicOS
- tseboIQ
- ScanYa

### Blog Posts
At least 3 posts

### Opportunities
At least 3 entries

### Contact
- email
- city
- booking link

---

# 18. ACCEPTANCE CRITERIA

The build is acceptable when:
- all core routes render correctly
- CMS content populates pages
- design feels premium and consistent
- forms validate and submit
- demo CTA is visible across the site
- SEO basics are implemented
- project cards can link to live URLs
- pages are responsive
- Lighthouse performance is strong enough for launch
- code is modular and easy to extend

---

# 19. RISKS TO AVOID

Do not:
- make the UI flashy for the sake of looking technical
- overload the home page with too much copy
- hide the CTA too deep
- mix too many visual styles
- build hardcoded content where CMS should own it
- make blog pages look like an afterthought
- create brittle component props without shared types

---

# 20. BUILDER MODE COMMAND SUMMARY

When implementing, follow this order of thought:

1. structure the system
2. model the content
3. build the layout
4. build the reusable parts
5. compose the pages
6. connect the CMS
7. wire the forms
8. add SEO
9. test the conversion path
10. deploy cleanly

Builder Mode standard:
- modular
- typed
- documented
- conversion-aware
- future-proof

---

# 21. NEXT ACTIONS

After this Builder Mode document, the next best assets to generate are:

1. `README.md`
   - setup instructions
   - install commands
   - local development steps
   - environment setup

2. `SANITY_SCHEMAS.ts set`
   - actual schema code for each document

3. `queries.ts`
   - actual GROQ queries

4. `page scaffolds`
   - starter code for:
     - home
     - what-we-do
     - work
     - contact
     - book-demo

5. `ui system`
   - container
   - section heading
   - card primitives
   - CTA buttons

---

# Final Directive
Build VoxTech like a product company’s front door, not a generic agency brochure.

Every component must either:
- increase trust
- increase clarity
- increase proof
- increase conversion

If it does none of those, it does not belong.
