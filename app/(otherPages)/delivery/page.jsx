import React from "react";
import Link from "next/link";
import Header1 from "@/components/common/headers/Header1";
import Footer1 from "@/components/common/footers/Footer";
import ReserveButton from "@/components/common/ReserveButton";

export const metadata = {
  title: "Car Delivery Service — Motorea UK-wide Delivery",
  description:
    "Professional car delivery service across the UK. Trackable delivery, doorstep handover, and full protection. Get your car delivered safely to your door.",
};

export default function DeliveryPage() {
  return (
    <>
      <Header1 />
      <main className="layout-radius">
        {/* Hero */}
        <section className="boxcar-container pt-16 pb-10">
          <h1 className="mb-3">Car Delivery Service</h1>
          <p className="text-lg max-w-3xl">
            Professional car delivery across the UK. We bring your car directly to your door with full tracking, 
            insurance, and peace of mind. No need to travel — we come to you.
          </p>
        </section>

        {/* Delivery Options */}
        <section className="boxcar-container py-10">
          <h2 className="mb-4">Delivery Options</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Home Delivery</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Direct to your doorstep</li>
                <li>Fully insured during transit</li>
                <li>Real-time tracking updates</li>
                <li>Professional delivery team</li>
                <li>Inspection on arrival</li>
              </ul>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Collection</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Pick up from our location</li>
                <li>Full handover demonstration</li>
                <li>All paperwork ready</li>
                <li>Test drive available</li>
                <li>No delivery charges</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Delivery Process */}
        <section className="boxcar-container py-10">
          <h2 className="mb-4">How Delivery Works</h2>
          <ol className="list-decimal pl-6 space-y-3 max-w-3xl">
            <li><strong>Book Delivery:</strong> Choose your preferred delivery date and time slot.</li>
            <li><strong>Preparation:</strong> We prepare your car, complete final checks, and arrange insurance.</li>
            <li><strong>Tracking:</strong> Receive real-time updates on your car's journey to you.</li>
            <li><strong>Arrival:</strong> Our driver arrives at your chosen location with your car.</li>
            <li><strong>Handover:</strong> Complete inspection, sign paperwork, and drive away happy.</li>
          </ol>
        </section>

        {/* Delivery Areas & Pricing */}
        <section className="boxcar-container py-10">
          <h2 className="mb-4">Delivery Areas & Pricing</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Local (0-50 miles)</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">£99</p>
              <p className="text-sm text-gray-600">Same day delivery available</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Regional (51-150 miles)</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">£199</p>
              <p className="text-sm text-gray-600">Next day delivery</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Nationwide (150+ miles)</h3>
              <p className="text-2xl font-bold text-green-600 mb-2">£299</p>
              <p className="text-sm text-gray-600">2-3 day delivery</p>
            </div>
          </div>
        </section>

        {/* Customer Testimonials */}
        <section className="boxcar-container py-10">
          <h2 className="mb-4">Delivery Reviews</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="p-6 border rounded-lg">
              <p className="mb-2">"Exactly as described — zero hassle. Delivery in 4 days."</p>
              <div className="text-sm text-gray-600">— Sarah K</div>
            </div>
            <div className="p-6 border rounded-lg">
              <p className="mb-2">"Driver was professional and car arrived in perfect condition."</p>
              <div className="text-sm text-gray-600">— John D</div>
            </div>
            <div className="p-6 border rounded-lg">
              <p className="mb-2">"Great communication throughout delivery process. Recommend."</p>
              <div className="text-sm text-gray-600">— Ahmed R</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="boxcar-container py-14">
          <div className="flex flex-col md:flex-row md:items-center gap-4 p-6 border rounded-lg">
            <p className="text-lg font-medium mb-0">Ready to arrange delivery?</p>
            <div className="flex flex-wrap gap-3">
              <ReserveButton amount={99} description="Deposit – Delivery Page" />
              <a className="theme-btn" href="https://wa.me/447722471841" target="_blank" rel="noopener noreferrer">
                WhatsApp Us 07722 471841
              </a>
              <Link className="theme-btn" href="/cars-for-sale">
                Browse Stock
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer1 />
    </>
  );
}
