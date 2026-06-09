export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface Socials {
  twitter: string;
  linkedin: string;
  instagram: string;
  github: string;
}

export interface CTAConfig {
  primaryText: string;
  primaryHref: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: Address;
  socials: Socials;
  cta: CTAConfig;
}
