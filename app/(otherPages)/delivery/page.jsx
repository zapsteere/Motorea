import React from "react";
import Header1 from "@/components/common/headers/Header1";
import Footer1 from "@/components/common/footers/Footer";

export const metadata = {
  title: "Motorea Long‑Distance Car Delivery",
  description:
    "Experience seamless long-distance car delivery with Motorea. From transparent pricing to legal protections, discover how we ensure your vehicle travels safely and efficiently across distances.",
};

export default function LongDistanceCarDeliveryPage() {
  return (
    <>
      <Header1 headerClass="boxcar-header header-style-v1 style-two inner-header cus-style-1" />
      <main>
        <section className="hero-section" style={{ padding: "4rem 1rem", backgroundColor: "#f5f7fa", textAlign: "center" }}>
          <h1>Motorea Long‑Distance Car Delivery</h1>
          <p style={{ maxWidth: "600px", margin: "1rem auto", fontSize: "1.2rem", color: "#555" }}>
            Experience seamless long-distance car delivery with Motorea. We ensure your vehicle travels safely and efficiently across any distance.
          </p>
        </section>

        <section className="what-we-offer" style={{ padding: "3rem 1rem", maxWidth: "900px", margin: "0 auto" }}>
          <h2>What We Offer</h2>
          <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", color: "#333" }}>
            <li>Transparent pricing with no hidden fees.</li>
            <li>Professional handling and secure transportation.</li>
            <li>Real-time tracking and status updates.</li>
            <li>Flexible scheduling to suit your needs.</li>
          </ul>
        </section>

        <section className="legal-rights-protection" style={{ backgroundColor: "#eef2f7", padding: "3rem 1rem", maxWidth: "900px", margin: "0 auto" }}>
          <h2>Legal Rights & Protection</h2>
          <p style={{ color: "#444", lineHeight: "1.6" }}>
            At Motorea, your vehicle’s safety and your legal rights are our priority. We comply with all regulatory requirements and provide comprehensive insurance coverage during transit. Our contracts clearly outline your protections, ensuring peace of mind throughout the delivery process.
          </p>
        </section>

        <section className="how-it-works" style={{ padding: "3rem 1rem", maxWidth: "900px", margin: "0 auto" }}>
          <h2>How It Works</h2>
          <ol style={{ paddingLeft: "1.5rem", color: "#333" }}>
            <li>Request a quote by providing your vehicle and destination details.</li>
            <li>Schedule a pickup at a convenient time and location.</li>
            <li>Track your vehicle in real-time during transit.</li>
            <li>Receive your vehicle safely at the destination.</li>
          </ol>
        </section>

        <section className="returns-mileage" style={{ backgroundColor: "#eef2f7", padding: "3rem 1rem", maxWidth: "900px", margin: "0 auto" }}>
          <h2>Returns & Mileage</h2>
          <p style={{ color: "#444", lineHeight: "1.6" }}>
            We understand concerns about mileage and returns. Motorea guarantees that your vehicle’s mileage will be within agreed limits and offers clear return policies should you need to cancel or modify your delivery. Customer satisfaction is our commitment.
          </p>
        </section>

        <section className="faq" style={{ padding: "3rem 1rem", maxWidth: "900px", margin: "0 auto" }}>
          <h2>Frequently Asked Questions</h2>
          <dl style={{ color: "#333" }}>
            <dt><strong>Q: How long does delivery take?</strong></dt>
            <dd>A: Delivery times depend on distance but typically range from 3 to 10 days.</dd>

            <dt><strong>Q: Is my vehicle insured during transit?</strong></dt>
            <dd>A: Yes, we provide comprehensive insurance coverage for all deliveries.</dd>

            <dt><strong>Q: Can I track my vehicle?</strong></dt>
            <dd>A: Absolutely! Real-time tracking is available with every delivery.</dd>

            <dt><strong>Q: What if I need to reschedule?</strong></dt>
            <dd>A: Contact our support team to modify your delivery schedule with no hassle.</dd>
          </dl>
        </section>

        <section className="footer-cta" style={{ backgroundColor: "#0070f3", color: "#fff", textAlign: "center", padding: "3rem 1rem" }}>
          <h2>Ready to Ship Your Vehicle?</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 1.5rem", fontSize: "1.1rem" }}>
            Request a quote today and experience hassle-free long-distance car delivery with Motorea.
          </p>
          <a href="/contact" style={{ backgroundColor: "#fff", color: "#0070f3", padding: "0.75rem 1.5rem", borderRadius: "4px", textDecoration: "none", fontWeight: "bold" }}>
            Get a Quote
          </a>
        </section>
      </main>
      <Footer1 parentClass="boxcar-footer footer-style-one v1 cus-st-1" />
    </>
  );
}
