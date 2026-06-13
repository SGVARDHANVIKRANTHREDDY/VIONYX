import { FAQContent } from "@/types/content";

export const faqContent: FAQContent = {
  label: "Frequently Asked Questions",

  title: "Answers To The Questions That Matter Most",

  description:
    "We believe in transparency at every stage of the project. Explore answers to some of the most common questions about our design process, development approach, timelines, and long-term support.",

  items: [
    {
      question: "What is VIONYX's core development technology stack?",
      answer:
        "We build premium, high-performance frontends using Next.js 16, React 19, and TypeScript. For styling, we use Vanilla Tailwind CSS. For animations and micro-interactions, we leverage Framer Motion. This guarantees ultra-fast load times, solid SEO indexing, and clean, modular code that is easily maintainable.",
    },
    {
      question: "What does your project billing structure look like?",
      answer:
        "We work on a clear, milestone-based billing model. Standard projects require a 50% deposit to initiate design, 25% upon design approval before development starts, and the remaining 25% upon final testing approval and deployment. For ongoing development work, we also offer custom monthly retainers.",
    },
    {
      question: "How does the code and intellectual property (IP) handoff work?",
      answer:
        "Upon project completion and final milestone payment, 100% intellectual property rights, design assets (Figma files), and the codebase (GitHub repository access) are transferred directly to you. We provide a full handover package, including deployment documentation.",
    },
    {
      question: "Will my website be optimized for mobile and search engines?",
      answer:
        "Yes, absolutely. Every experience is custom-coded to pass Google's Core Web Vitals, implement semantic HTML structure, include schema markup (JSON-LD), and conform to accessibility guidelines. We focus heavily on loading speed to boost SEO positioning and lead conversions.",
    },
    {
      question: "Do you offer post-launch support and maintenance?",
      answer:
        "Yes. Every launch includes one month of complimentary post-deployment support for bug fixes, performance monitoring, and configuration adjustments. We also offer monthly maintenance retainers for secure updates, features, and backups.",
    },
    {
      question: "Can you integrate third-party services and APIs?",
      answer:
        "Certainly. We build integrations with CRMs (HubSpot, Salesforce), email marketing systems (Mailchimp, Klaviyo), booking tools (Calendly), analytics platforms, database layers, and bespoke REST/GraphQL APIs to connect your website directly to your business workflow.",
    },
  ],
};
