import React from "react";
import Link from "next/link";
import { businessConfig } from "@/config/business";
import { navLinks } from "@/config/navigation";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border-default bg-background/50 py-12 md:py-16">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {/* Brand Column */}
        <div className="flex flex-col space-y-4 col-span-1 md:col-span-2">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-wider text-text-primary">
              {businessConfig.name}
              <span className="text-secondary">.</span>
            </span>
          </Link>
          <p className="text-text-muted text-sm max-w-sm">
            {businessConfig.tagline}
          </p>
          <div className="flex space-x-4 pt-2">
            {Object.entries(businessConfig.socials).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-white capitalize text-sm transition-colors duration-200"
              >
                {key}
              </a>
            ))}
          </div>
        </div>

        {/* Links Column */}
        <div>
          <Heading as="h4" size="h6" className="mb-4">
            Navigation
          </Heading>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-text-muted hover:text-white text-sm transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <Heading as="h4" size="h6" className="mb-4">
            Contact Info
          </Heading>
          <ul className="space-y-3 text-sm text-text-muted">
            <li>Email: {businessConfig.email}</li>
            <li>Phone: {businessConfig.phone}</li>
            <li>
              Address: <br />
              {businessConfig.address.street}, <br />
              {businessConfig.address.city}, {businessConfig.address.state} -{" "}
              {businessConfig.address.zip}
            </li>
          </ul>
        </div>
      </Container>

      {/* Bottom Copyright */}
      <Container className="pt-8 mt-8 border-t border-border-default/50 text-center md:flex md:justify-between md:items-center md:text-left text-sm text-text-muted">
        <p>© {currentYear} {businessConfig.name}. All rights reserved.</p>
        
        <div className="flex gap-4 justify-center my-3 md:my-0">
          <Link href="/privacy" className="hover:text-white transition-colors duration-200">
            Privacy Policy
          </Link>
          <span>•</span>
          <Link href="/terms" className="hover:text-white transition-colors duration-200">
            Terms of Service
          </Link>
        </div>

        <p className="mt-2 md:mt-0">
          Crafted with precision for premium local businesses.
        </p>
      </Container>
    </footer>
  );
}
