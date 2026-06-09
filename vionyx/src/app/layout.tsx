import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import { PageBackground } from "@/components/layout/PageBackground";
import { businessConfig } from "@/config/business";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${businessConfig.name} - ${businessConfig.tagline}`,
  description: `${businessConfig.name} designs and engineers production-grade digital experiences for growing local businesses.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-sm focus:z-50 focus:font-semibold focus:outline-none focus:ring-2 focus:ring-secondary"
        >
          Skip to content
        </a>
        <PageBackground>
          {children}
        </PageBackground>
      </body>
    </html>
  );
}
