export const businessConfig = {
  name: "VIONYX",
  tagline: "Premium Digital Experiences for Growing Businesses",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://vionyx.com",
  email: "vionyx.origin@gmailcom",
  phone: "+91-9999999999",
  whatsapp: "+919999999999",
  address: {
    street: "123 Premium Tech Boulevard",
    city: "Tirupati",
    state: "Andhra Pradesh",
    zip: "517501",
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
  },
};

export type BusinessConfig = typeof businessConfig;
