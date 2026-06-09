export const businessConfig = {
  name: "VIONYX",
  tagline: "Premium Digital Experiences for Growing Businesses",
  email: "hello@vionyx.in",
  phone: "+91-9999999999",
  whatsapp: "+919999999999",
  address: {
    street: "123 Premium Tech Boulevard",
    city: "Mumbai",
    state: "Maharashtra",
    zip: "400001",
    country: "India",
  },
  socials: {
    twitter: "https://twitter.com/vionyx",
    linkedin: "https://linkedin.com/company/vionyx",
    instagram: "https://instagram.com/vionyx",
    github: "https://github.com/vionyx",
  },
  cta: {
    primaryText: "Book a Free Consultation",
    primaryHref: "#contact",
  }
} as const;

export type BusinessConfig = typeof businessConfig;
