import React from "react";
import Link from "next/link";
import Header1 from "@/components/common/headers/Header1";
import Footer1 from "@/components/common/footers/footer1";
import ReserveButton from "@/components/common/ReserveButton";

export const metadata = {
  title: "About Motorea — Quality Used Cars, Delivered UK-wide",
  description:
    "Motorea is a UK used-car dealer focused on clear pricing, verified quality, and nationwide delivery. HD walkarounds, condition reports, and a 14-day distance-selling right.",
};

export default function AboutUsPage() {
  return (
    <>
      <Header1 headerClass="boxcar-header header-style-v1 style-two inner-header cus-style-1" />
      <main className="layout-radius">
        {/* Hero */}
        <section className="boxcar-container pt-16 pb-10">
          <h1 className="mb-3">About Motorea</h1>
          <p className="text-lg">
            We source, prepare, and deliver quality used cars across the UK. No faff. No hidden fees.
            Cars match the description — or they don’t leave our site.
          </p>
        </section>

        {/* What we stand for */}
        <section className="boxcar-container py-10">
          <h2 className="mb-4">What We Stand For</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Clarity:</strong> Full condition report, HD walkaround, verified history.</li>
            <li><strong>Standards:</strong> Clean prep, roadworthy checks, no mystery faults.</li>
            <li><strong>Delivery:</strong> Nationwide, trackable, doorstep handover.</li>
            <li><strong>Protection:</strong> Distance-selling rights + Consumer Rights Act compliant.</li>
          </ul>
        </section>

        {/* How we work */}
        <section className="boxcar-container py-10">
          <h2 className="mb-4">How We Work</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Pick a car online (or book a video call).</li>
            <li>We send photos, a detailed condition report, and an HD walkaround.</li>
            <li>Reserve securely for £99 and choose collection or home delivery.</li>
            <li>We deliver on the agreed date. Inspect on arrival — you have a 14-day remote-purchase right.</li>
          </ol>
        </section>

        {/* Testimonials */}
        <section className="boxcar-container py-10">
          <h2 className="mb-4">What Buyers Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <p className="mb-2">“Exactly as described — zero hassle. Delivery in 4 days.”</p>
              <div className="text-sm text-gray-600">— Sarah K</div>
            </div>
            <div className="p-6 border rounded-lg">
              <p className="mb-2">“Video + report gave me confidence. Would buy again.”</p>
              <div className="text-sm text-gray-600">— John D</div>
            </div>
            <div className="p-6 border rounded-lg">
              <p className="mb-2">“Great communication and no hidden fees. Recommend.”</p>
              <div className="text-sm text-gray-600">— Ahmed R</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="boxcar-container py-14">
          <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 border rounded-lg">
            <p className="text-lg font-medium mb-0">Ready to find your next car?</p>
            <div className="flex flex-wrap gap-3">
              <ReserveButton amount={99} description="Deposit – About Page" />
              <a
                className="theme-btn"
                href="https://wa.me/447722471841"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us 07722 471841
              </a>
              <Link className="theme-btn" href="/cars-for-sale">
                Browse Stock
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer1 parentClass="boxcar-footer footer-style-one v1 cus-st-1" />
    </>
  );
}
