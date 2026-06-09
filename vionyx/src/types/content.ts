export interface HeroContent {
  titlePrefix?: string;
  titleRegular: string;
  titleGradient: string;
  description: string;
  primaryCtaText: string;
  secondaryCtaText: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface AboutContent {
  label: string;
  title: string;
  description: string;
  mission: string;
  missionTitle?: string;
  stats: StatItem[];
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServicesContent {
  label: string;
  title: string;
  description: string;
  items: ServiceItem[];
}

export interface IndustryItem {
  icon: string;
  title: string;
  description: string;
}

export interface IndustriesContent {
  label: string;
  title: string;
  description: string;
  items: IndustryItem[];
}

export interface ProjectItem {
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  tags: string[];
  link: string;
  description: string;
  techStack: string[];
  goals: string;
  features: string[];
  outcomes: string[];
}

export interface PortfolioContent {
  label: string;
  title: string;
  description: string;
  items: ProjectItem[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ProcessContent {
  label: string;
  title: string;
  description: string;
  items: ProcessStep[];
}

export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  popular?: boolean;
  ctaText: string;
}

export interface PricingContent {
  label: string;
  title: string;
  description: string;
  tiers: PricingTier[];
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  image: string;
  imageAlt?: string;
  quote: string;
  rating: number;
}

export interface TestimonialsContent {
  label: string;
  title: string;
  description: string;
  items: TestimonialItem[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQContent {
  label: string;
  title: string;
  description: string;
  items: FAQItem[];
}

export interface TrustItem {
  name: string;
  logo: string;
}

export interface TrustContent {
  label: string;
  items: TrustItem[];
}

export interface ContactContent {
  label: string;
  title: string;
  description: string;
  submitButtonText: string;
  submitButtonLoadingText: string;
  quickActions: Array<{
    label: string;
    href: string;
  }>;
}
