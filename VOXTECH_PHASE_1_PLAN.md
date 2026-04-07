# VOXTECH_PHASE_1_PLAN.md

## Project
VoxTech Marketing Website and Lead Generation Platform

## Phase Objective
Launch a premium, SEO-ready, CMS-powered website that positions VoxTech as a luxury-tech product and solutions house for SMEs and converts qualified visitors into booked demos.

## Strategic Goal
Phase 1 is about foundation and credibility.
This phase must establish VoxTech as:
- a premium software and consulting brand
- a serious execution partner for SMEs
- a thought leadership platform
- a lead capture machine

The website must communicate that VoxTech helps ambitious businesses move from idea to working solution.

## Core Brand Positioning
**VoxTech, powered by Apex Motus**
**The voice of tech execution**
**Bring the vision. Leave with the solution.**

## Primary Business Outcome
Generate qualified leads through demo bookings.

## Primary User Journey
Home -> What We Do -> Work -> Book a Demo

## Secondary User Journeys
Insights -> trust building -> Book a Demo
Opportunities -> ecosystem engagement -> Contact or Book a Demo
Contact -> inquiry -> sales discussion

## Target Audience
Small and medium businesses that:
- need custom digital systems
- want SaaS-style tools for internal or external use
- need technical consulting before building
- want a trusted product and engineering partner
- have inefficient manual or fragmented workflows

## Value Proposition
VoxTech helps SMEs turn business needs, ideas, and bottlenecks into premium digital systems, software products, and execution-ready technical solutions.

## Phase 1 Scope
The following must be included in Phase 1:
- branded marketing website
- premium homepage journey
- service explanation pages
- work and portfolio showcase
- blog and insight engine
- opportunities and hackathon listing capability
- demo booking flow
- contact flow
- SEO foundation
- Sanity CMS integration
- environment-based project link configuration

## Technology Stack
- Next.js with App Router
- TypeScript
- Tailwind CSS
- Sanity CMS
- Vercel deployment
- optional Calendly embed or equivalent scheduling integration
- analytics integration
- form delivery integration for leads

## Information Architecture
### Main Navigation
- Home
- What We Do
- Work
- Insights
- Opportunities
- Contact
- Book a Demo

### Footer Navigation
- About VoxTech
- Services
- Work
- Blog
- Opportunities
- Contact
- Privacy Policy
- Terms
- Powered by Apex Motus

## Phase 1 Deliverables
1. Brand-ready website structure
2. Fully responsive front-end
3. CMS schemas and content admin
4. SEO-ready metadata framework
5. Lead and demo conversion flow
6. Initial project showcase integration
7. Styled blog and opportunities architecture
8. Deployment-ready application

## Functional Requirements

### 1. Home Page
The home page must take users on a controlled journey.

#### Required Sections
1. Hero section
2. credibility/value strip
3. business pain section
4. VoxTech solution pillars
5. solutions and services preview
6. featured work preview
7. why VoxTech section
8. insights and opportunities preview
9. final conversion CTA

#### Hero Requirements
- premium headline
- subheadline for SMEs
- primary CTA: Book a Demo
- secondary CTA: View Our Work
- VoxTech and Apex Motus relationship visible
- visual tone: luxury technology

#### Suggested Hero Direction
Headline:
The voice of tech execution for ambitious businesses

Supporting line:
Bring the vision. Leave with the solution. VoxTech, powered by Apex Motus, helps SMEs design, build, and scale premium digital systems, SaaS products, and technical solutions.

#### CTA Requirements
- Book a Demo
- View Our Work

### 2. What We Do Page
Must clearly explain service lines.

#### Service Categories
- SaaS Product Development
- Business Systems and Workflow Solutions
- Technical Consulting and Advisory
- Product Discovery and MVP Planning
- Optimization and Modernization

#### Each Service Block Must Include
- service title
- what it is
- who it is for
- typical problems solved
- expected business outcome
- CTA to Book a Demo

### 3. Work Page
Must show execution proof.

#### Featured Projects
- ClinicOS
- tseboIQ
- ScanYa

#### Project Card Requirements
- project name
- short descriptor
- business challenge
- solution summary
- outcome or value delivered
- live project link from environment variables
- optional stack tags

#### Future-Proofing Requirement
The Work page must support both quick project cards and deeper case studies later.

### 4. Insights Page
Must function as an SEO and authority engine.

#### Content Categories
- Product Strategy
- Software Engineering
- AI in Business
- SME Digital Growth
- Build Logs
- Hackathons and Innovation

#### Functional Requirements
- list view
- category support
- featured article support
- author support
- slug-based article pages
- SEO metadata per article
- rich content rendering
- related content suggestions

### 5. Opportunities Page
Must showcase hackathons, innovation events, and collaboration opportunities.

#### Functional Requirements
- event list
- featured opportunity
- event detail pages
- category or type
- date and location
- registration or external link
- expired or past event handling
- future filtering capability

### 6. Contact Page
Must support premium inquiries.

#### Contact Components
- intro section
- contact details
- contact form
- city/location
- CTA to Book a Demo

#### Form Fields
- Full Name
- Company Name
- Email Address
- Service Interest
- Estimated Timeline
- Budget Range
- Project Message

### 7. Book a Demo Page
Must be a high-intent conversion page.

#### Requirements
- short intro
- clear promise of the session
- expected outcomes from the session
- scheduler embed or lead capture form
- trust copy
- optional FAQ

## CMS Plan

### Required Content Types
1. Site Settings
2. Services
3. Projects
4. Blog Posts
5. Blog Categories
6. Authors
7. Opportunities
8. Testimonials
9. FAQs
10. Contact Settings
11. SEO Defaults

### Site Settings Fields
- site title
- site description
- brand tagline
- primary CTA label
- primary CTA URL
- company positioning line
- footer copy
- social links
- business contact details
- Apex Motus relationship line

### Service Schema Fields
- title
- slug
- summary
- long description
- who it is for
- problems solved
- outcome
- featured image
- CTA label
- CTA link
- sort order
- featured boolean

### Project Schema Fields
- title
- slug
- short description
- challenge
- solution
- outcome
- tech stack tags
- featured image
- logo
- status
- external URL
- case study enabled boolean
- featured boolean

### Blog Post Schema Fields
- title
- slug
- excerpt
- cover image
- author
- category
- publish date
- body content
- featured boolean
- SEO title
- SEO description
- keywords

### Opportunity Schema Fields
- title
- slug
- summary
- organizer
- event date
- location
- registration URL
- body
- featured image
- category
- status
- featured boolean

## UX and UI Direction

### Visual Positioning
Corporate luxury with startup energy.

### Design Principles
- premium spacing
- minimal clutter
- subtle tech motifs
- clean hierarchy
- refined transitions
- sharp typography
- confident buttons
- dark-capable design
- premium cards
- restrained accent use

### Style Notes
- neutral dark palette
- off-white and graphite tones
- one elegant tech accent color
- subtle grids, signal lines, or abstract topology patterns
- avoid noisy cyberpunk styling
- no visual chaos

## Core Components
- Header
- Mobile Navigation
- Hero Section
- Section Heading
- CTA Buttons
- Service Cards
- Project Cards
- Blog Cards
- Opportunity Cards
- Quote/Testimonial Block
- Stats or Credibility Strip
- Footer
- Demo Booking Module
- Contact Form
- Rich Text Renderer
- SEO component
- Empty State components

## Routing Plan
- /
- /what-we-do
- /work
- /work/[slug]
- /insights
- /insights/[slug]
- /opportunities
- /opportunities/[slug]
- /contact
- /book-demo

## Suggested App Structure
```txt
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
  navigation/
  home/
  services/
  work/
  blog/
  opportunities/
  forms/
  shared/
  seo/

lib/
  sanity/
  seo/
  env/
  utils/

sanity/
  schemaTypes/
  deskStructure/

types/
  cms/
  ui/
```

## Environment Variable Plan
These must be configurable in .env:
- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_CLINICOS_URL
- NEXT_PUBLIC_TSEBOIQ_URL
- NEXT_PUBLIC_SCANYA_URL
- SANITY_PROJECT_ID
- SANITY_DATASET
- SANITY_API_VERSION
- SANITY_STUDIO_TOKEN
- NEXT_PUBLIC_DEMO_BOOKING_URL
- NEXT_PUBLIC_CONTACT_EMAIL

## SEO Requirements
- metadata per page
- Open Graph support
- Twitter/X meta support
- canonical links
- structured headings
- optimized image delivery
- semantic layout
- internal linking across pages
- schema markup where useful
- sitemap
- robots file

## Analytics and Lead Tracking
Minimum analytics for Phase 1:
- page views
- CTA clicks
- demo booking clicks
- contact form submissions
- work page engagement
- blog article engagement

## Content Requirements Before Launch
### Pages
- home copy
- what we do copy
- work intro copy
- contact page copy
- demo booking copy

### Projects
- ClinicOS
- tseboIQ
- ScanYa

### Articles
At least 3 launch-ready blog posts

### Opportunities
At least 3 seeded opportunity entries or example items

## Non-Functional Requirements
- responsive across desktop, tablet, mobile
- fast load times
- accessible navigation and forms
- maintainable CMS structure
- modular code architecture
- clean reusable components
- future expansion readiness

## Acceptance Criteria
Phase 1 is complete when:
- all main pages are built
- CMS content can drive services, projects, articles, and opportunities
- the design reflects premium corporate luxury with subtle tech energy
- users can book a demo
- users can contact VoxTech
- project links load from environment variables
- the site is responsive
- metadata and SEO base are in place
- the application is deployment-ready

## Risks
- too much content without enough hierarchy
- agency-style vagueness
- weak proof presentation on work page
- overly flashy UI hurting trust
- too many CTAs reducing conversion clarity

## Execution Priority
1. brand positioning and information architecture
2. design system and page wireframes
3. CMS schema setup
4. homepage implementation
5. core page implementation
6. project and blog plumbing
7. form and demo conversion flow
8. SEO and analytics
9. content population
10. QA and deployment

## Phase 1 Success Metric
The website successfully positions VoxTech as a premium tech execution house and begins generating qualified demo inquiries from SMEs.
