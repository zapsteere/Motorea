import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const config = { api: { bodyParser: false } } as any; // для совместимости

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2025-08-27.basil" });
  const sig = req.headers.get("stripe-signature")!;
  const buf = await req.arrayBuffer();
  const textBody = Buffer.from(buf).toString("utf8");

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      textBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET! // возьми из Stripe CLI или Dashboard
    );
  } catch (err: any) {
    return new NextResponse(`Webhook signature verification failed. ${err.message}`, { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      // TODO: зафиксируй оплату в БД, подтверди бронь, отправь письмо
      // session.metadata.bookingId, session.amount_total, session.payment_status и т.д.
      break;
    }
    // обработай нужные события: payment_intent.succeeded, charge.refunded и т.п.
  }

  return NextResponse.json({ received: true });
}
