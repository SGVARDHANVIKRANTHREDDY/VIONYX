import { MetadataRoute } from "next";
import { businessConfig } from "@/config/business";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${businessConfig.name} Agency`,
    short_name: businessConfig.name,
    description: businessConfig.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#030303",
    theme_color: "#030303",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
