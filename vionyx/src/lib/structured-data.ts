import { businessConfig } from "@/config/business";

const siteUrl = businessConfig.siteUrl;

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessConfig.name,
    "image": `${siteUrl}/images/og-image.webp`,
    "@id": `${siteUrl}/#localbusiness`,
    "url": siteUrl,
    "telephone": businessConfig.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": businessConfig.address.street,
      "addressLocality": businessConfig.address.city,
      "addressRegion": businessConfig.address.state,
      "postalCode": businessConfig.address.zip,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.0760,
      "longitude": 72.8777
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      businessConfig.socials.twitter,
      businessConfig.socials.linkedin,
      businessConfig.socials.instagram,
      businessConfig.socials.github
    ]
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": businessConfig.name,
    "description": businessConfig.tagline,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": businessConfig.phone,
      "contactType": "customer service",
      "areaServed": ["IN", "US"],
      "availableLanguage": ["en", "hi"]
    },
    "sameAs": [
      businessConfig.socials.twitter,
      businessConfig.socials.linkedin,
      businessConfig.socials.instagram,
      businessConfig.socials.github
    ]
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": businessConfig.name,
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteUrl}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Privacy Policy",
        "item": `${siteUrl}/privacy`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Terms of Service",
        "item": `${siteUrl}/terms`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": `${siteUrl}/#contact`
      }
    ]
  };
}
