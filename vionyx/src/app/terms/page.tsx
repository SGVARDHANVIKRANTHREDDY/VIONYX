import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Terms of Service",
  description: "Read the terms and conditions governing the use of VIONYX's website and agency services.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen">
        <Container className="max-w-3xl mx-auto space-y-12">
          <div className="border-b border-white/5 pb-8 space-y-4">
            <Heading as="h1" size="h1">
              Terms of Service
            </Heading>
            <p className="text-text-muted text-sm font-mono">
              Last Updated: June 12, 2026
            </p>
          </div>

          <div className="space-y-8 text-text-secondary text-base leading-relaxed">
            <section className="space-y-3">
              <Heading as="h2" size="h4" className="text-white">
                1. Acceptance of Terms
              </Heading>
              <p>
                By accessing and using the website of VIONYX (“we”, “us”, “our”), you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any local laws. If you do not agree with any of these terms, you are prohibited from using this site.
              </p>
            </section>

            <section className="space-y-3">
              <Heading as="h2" size="h4" className="text-white">
                2. Use License
              </Heading>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on VIONYX&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside pl-4 space-y-2 text-text-muted">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                <li>Attempt to decompile or reverse engineer any software contained on VIONYX&apos;s website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <Heading as="h2" size="h4" className="text-white">
                3. Intellectual Property Rights & Handoff
              </Heading>
              <p>
                Unless otherwise explicitly stated in writing, all materials, custom source code, designs, and visual guidelines created during bespoke client engagements are governed by their respective design and development service contracts. Upon successful delivery and final milestone clearance, full code and IP rights transfer directly to the client as outlined in the service contract.
              </p>
            </section>

            <section className="space-y-3">
              <Heading as="h2" size="h4" className="text-white">
                4. Disclaimer
              </Heading>
              <p>
                The materials on VIONYX&apos;s website are provided on an &apos;as is&apos; basis. VIONYX makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section className="space-y-3">
              <Heading as="h2" size="h4" className="text-white">
                5. Limitations of Liability
              </Heading>
              <p>
                In no event shall VIONYX or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on VIONYX&apos;s website, even if VIONYX or a VIONYX authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section className="space-y-3">
              <Heading as="h2" size="h4" className="text-white">
                6. Governing Law
              </Heading>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
              </p>
            </section>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
