import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Privacy Policy",
  description: "Learn how VIONYX collects, uses, and protects your personal data in accordance with privacy regulations.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen">
        <Container className="max-w-3xl mx-auto space-y-12">
          <div className="border-b border-white/5 pb-8 space-y-4">
            <Heading as="h1" size="h1">
              Privacy Policy
            </Heading>
            <p className="text-text-muted text-sm font-mono">
              Effective Date: June 12, 2026
            </p>
          </div>

          <div className="space-y-8 text-text-secondary text-base leading-relaxed">
            <section className="space-y-3">
              <Heading as="h2" size="h4" className="text-white">
                1. Information We Collect
              </Heading>
              <p>
                We only collect information about you if we have a reason to do so—for example, to provide our services, to communicate with you, or to make our services better. We collect this information from three sources: when you provide it to us, automatically through operating our services, and from outside sources.
              </p>
              <p className="pl-4 border-l border-primary/30 text-text-muted italic">
                Example: When you submit our project inquiry/discovery form, we collect your name, email address, company name, phone number, and details regarding your project requirements.
              </p>
            </section>

            <section className="space-y-3">
              <Heading as="h2" size="h4" className="text-white">
                2. How We Use Information
              </Heading>
              <p>
                We use the information we collect to operate, support, and improve our services. Specifically, we use your details to:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-text-muted">
                <li>Respond to your service requests, proposals, and consultation bookings.</li>
                <li>Ensure technical functionality, security, and spam prevention (e.g., using honeypots on our forms).</li>
                <li>Analyze site performance and improve user interaction metrics.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <Heading as="h2" size="h4" className="text-white">
                3. Sharing & Disclosure
              </Heading>
              <p>
                VIONYX does not sell, trade, or rent your personal identification information to third parties. We may share information with trusted third-party service providers (such as hosting and email delivery services) solely to perform functions on our behalf and subject to strict data processing terms.
              </p>
            </section>

            <section className="space-y-3">
              <Heading as="h2" size="h4" className="text-white">
                4. Data Security
              </Heading>
              <p>
                While no online transmission is 100% secure, we implement industry-standard administrative, technical, and physical measures to protect your personal data from unauthorized access, modification, or destruction. All form submissions are routed securely over HTTPS.
              </p>
            </section>

            <section className="space-y-3">
              <Heading as="h2" size="h4" className="text-white">
                5. Contact Us
              </Heading>
              <p>
                If you have any questions about this Privacy Policy or our practices, please contact us at:
              </p>
              <p className="font-semibold text-white">
                Email: hello@vionyx.com
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
