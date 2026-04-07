import type { FaqItem, Insight, Opportunity, Project, Resource, Service } from "@/types/site";

export const siteContact = {
  email: "apex.motus.inc@gmail.com",
  location: "Johannesburg, South Africa",
  responseTime: "Replies within 1 to 2 business days for qualified inquiries.",
};

export const credibilityStats = [
  "SME-focused delivery partner",
  "CMS-ready content architecture",
  "Built for measurable lead generation",
  "Positioned for product, systems, and advisory work",
];

export const solutionPillars = [
  {
    title: "Product strategy",
    description: "Clarify the business problem, user needs, and technical shape before costly build decisions harden.",
  },
  {
    title: "Execution systems",
    description: "Design workflows and software that reduce manual drag and make operations easier to run.",
  },
  {
    title: "Delivery partnership",
    description: "Move from idea to implementation with a partner that can shape, build, and evolve the solution.",
  },
];

export const services: Service[] = [
  {
    title: "SaaS Product Development",
    slug: "saas-product-development",
    summary: "From platform idea to launchable product with a clear delivery path.",
    audience: "Founders and operators building digital products for internal or external users.",
    outcome: "A sharper product path and software that can be tested, sold, and improved.",
  },
  {
    title: "Business Systems and Workflow Solutions",
    slug: "business-systems-workflow-solutions",
    summary: "Replace fragmented tools and manual processes with systems that fit the business.",
    audience: "Teams operating through spreadsheets, repeated admin, and disconnected workflows.",
    outcome: "Cleaner operations, better visibility, and less process drag.",
  },
  {
    title: "Technical Consulting and Advisory",
    slug: "technical-consulting-advisory",
    summary: "Make better technical decisions before budgets and timelines get burned.",
    audience: "Businesses planning a build, rescue, or modernization move.",
    outcome: "Decision clarity, risk reduction, and a more coherent implementation path.",
  },
  {
    title: "Product Discovery and MVP Planning",
    slug: "product-discovery-mvp-planning",
    summary: "Shape the right first version with practical scope, priorities, and delivery logic.",
    audience: "Teams with strong ideas that still need structure and sequencing.",
    outcome: "An MVP roadmap grounded in business value and execution realism.",
  },
];

export const projects: Project[] = [
  {
    name: "ClinicOS",
    slug: "clinicos",
    descriptor: "A clinic operations platform for smoother service delivery.",
    challenge: "Clinic workflows were fragmented across admin, scheduling, and records, slowing down staff and visibility.",
    solution: "VoxTech shaped a unified digital operations concept that aligned scheduling, workflow visibility, and system thinking around the clinic's day-to-day reality.",
    outcome: "A clearer path to a scalable operational system built around speed, coordination, and service consistency.",
    tags: ["Healthtech", "Operations", "Workflow Systems"],
  },
  {
    name: "tseboIQ",
    slug: "tseboiq",
    descriptor: "An intelligence-led business platform focused on structured insight delivery.",
    challenge: "The product needed stronger system definition and a clearer route from concept to useful functionality.",
    solution: "VoxTech approached the work through product framing, information structure, and delivery logic that connected business goals to actual system behavior.",
    outcome: "A more credible execution foundation for taking the platform from idea into staged implementation.",
    tags: ["Product Strategy", "B2B SaaS", "Information Design"],
  },
  {
    name: "ScanYa",
    slug: "scanya",
    descriptor: "A digital concept designed around scan-driven utility and user action.",
    challenge: "The core idea needed practical shaping so the experience would feel useful, lean, and commercially relevant.",
    solution: "VoxTech defined a tighter solution frame around functionality, interaction logic, and practical user flow.",
    outcome: "A stronger product direction with better clarity on how the concept should behave in the real world.",
    tags: ["Product Discovery", "User Flow", "Digital Utility"],
  },
];

export const insights: Insight[] = [
  {
    title: "Why SME software projects stall before the first useful release",
    slug: "why-sme-software-projects-stall",
    excerpt: "Most slowdowns happen before engineering momentum starts. The real issue is weak shaping, not weak ambition.",
    category: "Product Strategy",
    readTime: "5 min read",
    body: [
      "A large share of SME software projects do not stall because the team lacks energy. They stall because the problem was not shaped tightly enough before implementation started.",
      "When the offer, workflow, or user path is still blurry, every build decision starts carrying more uncertainty than it should. That makes scope unstable and slows confidence.",
      "A better start looks different. Define the real constraint, prioritize the first useful outcome, and build around the operational reality of the business rather than a vague feature wishlist.",
    ],
  },
  {
    title: "The difference between digitizing a process and improving one",
    slug: "digitizing-a-process-vs-improving-one",
    excerpt: "Software should not preserve broken process logic. It should remove drag and improve how the business moves.",
    category: "SME Digital Growth",
    readTime: "4 min read",
    body: [
      "Digitizing a broken process does not fix it. It only makes the friction easier to repeat.",
      "The useful question is not whether a task can move into software. It is whether the underlying sequence, approvals, and handoffs still make sense.",
      "The strongest system work usually starts by simplifying the path before automating it.",
    ],
  },
  {
    title: "Where AI can actually help a growing business right now",
    slug: "where-ai-can-help-a-growing-business",
    excerpt: "The best early AI use cases are operational and specific, not theatrical.",
    category: "AI in Business",
    readTime: "6 min read",
    body: [
      "AI is most useful when it removes repeatable cognitive work, speeds up information handling, or improves consistency around operational tasks.",
      "For many SMEs, that means document extraction, structured summaries, internal search, or assisted workflow decisions instead of flashy surface-level automation.",
      "The point is not to add AI because it sounds modern. The point is to use it where it reduces cost, delay, or decision friction.",
    ],
  },
];

export const opportunities: Opportunity[] = [
  {
    title: "Build Sprint Collaboration Call",
    slug: "build-sprint-collaboration-call",
    type: "Collaboration",
    date: "May 2026",
    location: "Remote",
    summary: "A structured opportunity for operators, founders, and teams exploring focused product or systems work with VoxTech.",
  },
  {
    title: "Innovation Weekend: Systems for SMEs",
    slug: "innovation-weekend-systems-for-smes",
    type: "Event",
    date: "June 2026",
    location: "Johannesburg",
    summary: "A VoxTech-led innovation format around practical software and workflow opportunities for SME environments.",
  },
];

export const resources: Resource[] = [
  {
    title: "VoxTech Capability Profile",
    slug: "voxtech-capability-profile",
    description: "A concise capability summary covering services, proof areas, and how VoxTech approaches software execution.",
    mode: "Direct download",
  },
  {
    title: "SME Software Readiness Checklist",
    slug: "sme-software-readiness-checklist",
    description: "A planning asset for businesses deciding whether a software, systems, or workflow investment is ready to move.",
    mode: "Gated access",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "What happens in the first demo session?",
    answer: "We clarify the problem, talk through current constraints, and outline the most credible next step.",
  },
  {
    question: "Do you only work on full product builds?",
    answer: "No. VoxTech also supports discovery, workflow systems, modernization, and advisory work.",
  },
  {
    question: "Can this site evolve into a lead engine later?",
    answer: "Yes. The architecture is being shaped so CRM, analytics, and richer qualification flows can be layered in cleanly.",
  },
];
