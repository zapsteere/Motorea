import React from "react";
import Link from "next/link";
import Header1 from "@/components/common/headers/Header1";
import Footer from "@/components/common/footers/Footer";
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
      <Footer parentClass="boxcar-footer footer-style-one v1 cus-st-1" />
    </>
  );
}
import React from "react";
import Link from "next/link";
import Header1 from "@/components/common/headers/Header1";
import Footer from "@/components/common/footers/Footer";
import ReserveButton from "@/components/common/ReserveButton";

export const metadata = {
  title: "Motorea Long‑Distance Car Delivery",
  description:
    "Buy your next car from Motorea and get it delivered anywhere in the UK. Transparent, legal, and easy with a 14‑day cancellation right. Returns may incur charges.",
};

export default function DeliveryPage() {
  return (
    <>
      <Header1 headerClass="boxcar-header header-style-v1 style-two inner-header cus-style-1" />
      <main className="layout-radius">
        {/* Hero */}
        <section className="boxcar-container pt-16 pb-10">
          <h1 className="mb-3">Motorea Long‑Distance Car Delivery</h1>
          <p className="text-lg">
            We deliver your next car straight to your door — anywhere in the UK. No faff. No hidden terms.
            Just professional service and full transparency.
          </p>
        </section>

        {/* What we offer */}
        <section className="boxcar-container py-10">
          <h2 className="mb-4">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Nationwide delivery, doorstep to doorstep.</strong> From Stoke‑on‑Trent to anywhere in the UK, your car arrives securely and on time.</li>
            <li><strong>Click‑to‑collect or home delivery.</strong> Choose whichever suits your schedule and location.</li>
            <li><strong>Transparency at every step.</strong> We send a full condition report, walkaround video and photo evidence before dispatch. Track delivery in real‑time.</li>
          </ul>
        </section>

        {/* Legal Rights */}
        <section className="boxcar-container py-10">
          <h2 className="mb-4">Legal Rights & Your Protection</h2>
          <h3 className="font-semibold">Distance Selling & 14‑Day Cancellation</h3>
          <p className="mt-2">
            If you buy remotely (online or phone), UK law grants you a 14‑day cancellation right from the day you receive the vehicle. No need to give a reason — just notify us in writing and arrange to return the vehicle.
          </p>
          <p className="mt-2">
            <strong>Returns are chargeable.</strong> Return transport is at your cost unless agreed otherwise. You are also liable for excess mileage or vehicle damage. If we fail to notify you properly, your cancellation period extends to <strong>1 year and 14 days</strong>.
          </p>

          <h3 className="font-semibold mt-6">Pre‑Contract Info We Must Provide (by law)</h3>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Our business name, address, and contact info</li>
            <li>Full description of the vehicle</li>
            <li>Total price (including VAT), delivery charges, and timeframe</li>
            <li>Payment methods available</li>
            <li>Your cancellation rights and how to exercise them</li>
            <li>Any recurring or contractual obligations (if applicable)</li>
          </ul>

          <h3 className="font-semibold mt-6">Delivery Times & Responsibility</h3>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>We must deliver within 30 days unless a different timeframe is agreed in writing.</li>
            <li>If we miss the agreed date and don’t agree a new one, you can cancel and receive a full refund.</li>
            <li>We are responsible for the vehicle until it is in your possession.</li>
          </ul>

          <h3 className="font-semibold mt-6">Consumer Rights Act 2015 – Your Core Protections</h3>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Vehicle must be of satisfactory quality and roadworthy</li>
            <li>Must match the description, photos and features as advertised</li>
            <li>Must be fit for purpose, especially if you specified a use</li>
          </ul>
        </section>

        {/* How it works */}
        <section className="boxcar-container py-10">
          <h2 className="mb-4">How It Works</h2>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Choose your car online or request a video call/walkthrough.</li>
            <li>We send photos, a detailed condition report and an HD inspection video.</li>
            <li>Pay securely and schedule your delivery window.</li>
            <li>We deliver within the agreed timeframe (or 30 days by default).</li>
            <li>You inspect the vehicle. You have 14 days to cancel if needed.</li>
            <li>If you’re happy, enjoy your new ride. If not, return it — charges may apply.</li>
          </ol>
        </section>

        {/* Returns, mileage, condition */}
        <section className="boxcar-container py-10">
          <h2 className="mb-4">Returns, Mileage & Vehicle Condition on Cancellation</h2>
          <p>We offer a no‑fuss return policy — but the return is not free:</p>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>You have 14 days from the date of delivery to cancel.</li>
            <li>You are responsible for organising and covering the cost of return transport (unless otherwise agreed).</li>
            <li>The vehicle must be returned in the same condition it was delivered in.</li>
            <li>You should not exceed <strong>25 miles</strong> during your inspection/test period. Going over this may trigger a per‑mile deduction.</li>
            <li>Any damage, wear or alterations caused while in your care will result in deductions from your refund.</li>
          </ul>

          <h3 className="font-semibold mt-6">Examples of chargeable deductions:</h3>
          <ul className="list-disc pl-6 space-y-1 mt-2">
            <li>Scratches, dents, scuffed alloys</li>
            <li>Soiled or marked interior</li>
            <li>Missing keys, documents or accessories</li>
            <li>Excess mileage</li>
            <li>Any modification or post‑delivery mechanical issue</li>
          </ul>

          <p className="mt-4">
            Refunds are processed within 30 days of cancellation notice, minus: return transport cost, any deductions for excess mileage or damage, and any missing documentation/keys/parts.
          </p>
        </section>

        {/* Footer CTA */}
        <section className="boxcar-container py-14">
          <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 border rounded-lg">
            <p className="text-lg font-medium mb-0">Need a delivery quote or want to reserve a car?</p>
            <div className="flex flex-wrap gap-3">
              <ReserveButton amount={99} description="Deposit – Delivery Page" />
              <a className="theme-btn" href="https://wa.me/447722471841" target="_blank" rel="noopener noreferrer">WhatsApp Us 07722 471841</a>
              <a className="theme-btn" href="mailto:sulaiman@motorea.co">Email sulaiman@motorea.co</a>
              <Link className="theme-btn" href="/cars-for-sale">Browse Stock</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer parentClass="boxcar-footer footer-style-one v1 cus-st-1" />
    </>
  );
}
