import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2025-08-27.basil" });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // Пример body: { amount: 4999, currency: "gbp", metadata: { bookingId: "abc123" }, mode: "payment" }
    const { amount, currency = "gbp", metadata = {}, mode = "payment" } = body;

    // Автоматически определяем базовый URL из запроса
    const origin = req.headers.get("origin") || req.headers.get("referer") || process.env.NEXT_PUBLIC_BASE_URL;
    const baseUrl = origin?.replace(/\/$/, "") || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode,
      // Либо передай price из Stripe, либо custom amount через line_items.amount:
      line_items: [
        // Вариант 1: фиксированная цена из Stripe
        // { price: "price_123", quantity: 1 },

        // Вариант 2: динамическая сумма (в копейках/центах)
        {
          price_data: {
            currency,
            product_data: { name: "Booking deposit" },
            unit_amount: amount, // напр. 4999 = £49.99
          },
          quantity: 1,
        },
      ],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
      metadata, // сюда можно положить bookingId, userId, выбранный слот и т.п.
      // customer_email: "user@example.com", // опционально
      // automatic_tax: { enabled: true },   // если используешь Stripe Tax
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
