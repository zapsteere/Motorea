// app/api/checkout/route.ts
import Stripe from "stripe";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  // Read body from the request
  const { amount = 100, description = "Vehicle Deposit" } = await req.json();

  // Read the secret key at request time (runtime), not at import/build time
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret) {
    console.error("Missing STRIPE_SECRET_KEY in environment");
    return NextResponse.json(
      { error: "Server misconfigured" },
      { status: 500 }
    );
  }

  // Use the Stripe API version your dashboard showed (either is fine)
  const stripe = new Stripe(secret, { apiVersion: "2024-06-20" });
  // If you prefer the new one you saw, you can use:
  // const stripe = new Stripe(secret, { apiVersion: "2025-08-27.basil" });

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "gbp",
          product_data: { name: description },
          unit_amount: Math.round(Number(amount) * 100),
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
  });

  return NextResponse.json({ url: session.url });
}