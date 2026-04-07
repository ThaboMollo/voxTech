export type NavItem = {
  label: string;
  href: string;
};

export type Service = {
  title: string;
  slug: string;
  summary: string;
  audience: string;
  outcome: string;
};

export type Project = {
  name: string;
  slug: string;
  descriptor: string;
  challenge: string;
  solution: string;
  outcome: string;
  tags: string[];
};

export type Insight = {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  body: string[];
};

export type Opportunity = {
  title: string;
  slug: string;
  type: string;
  date: string;
  location: string;
  summary: string;
};

export type Resource = {
  title: string;
  slug: string;
  description: string;
  mode: "Direct download" | "Gated access";
};

export type FaqItem = {
  question: string;
  answer: string;
};
