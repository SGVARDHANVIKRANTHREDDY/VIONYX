import { Metadata } from "next";
import { businessConfig } from "@/config/business";

interface SEOConfigProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  path = "",
  ogImage = "/images/og-image.webp",
  noIndex = false,
}: SEOConfigProps): Metadata {
  const siteUrl = businessConfig.siteUrl;
  const fullUrl = `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

  return {
    title: {
      default: `${title} | ${businessConfig.name}`,
      template: `%s | ${businessConfig.name}`,
    },
    description: description,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: `${title} | ${businessConfig.name}`,
      description: description,
      url: fullUrl,
      siteName: businessConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${businessConfig.name} - ${title}`,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${businessConfig.name}`,
      description: description,
      images: [ogImage],
      creator: "@vionyx",
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
  };
}
