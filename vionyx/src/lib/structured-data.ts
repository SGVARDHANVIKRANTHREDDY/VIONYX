import { businessConfig } from "@/config/business";

export function getLocalBusinessSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vionyx.in";
  
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
      "latitude": 19.0760, // Default coordinates for Mumbai
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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vionyx.in";

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": businessConfig.name,
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "sameAs": [
      businessConfig.socials.twitter,
      businessConfig.socials.linkedin,
      businessConfig.socials.instagram,
      businessConfig.socials.github
    ]
  };
}

export function getWebsiteSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vionyx.in";

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
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vionyx.in";

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
        "name": "Contact",
        "item": `${siteUrl}/#contact`
      }
    ]
  };
}
