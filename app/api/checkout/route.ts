// app/api/checkout/route.ts
import 'server-only';
import Stripe from 'stripe';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // Required for Stripe SDK (not edge runtime)

export async function POST(req: Request) {
  try {
    const { amount = 100, description = 'Vehicle Deposit' } = await req.json();

    const secret = process.env.STRIPE_SECRET_KEY;
    if (!secret) {
      console.error('Missing STRIPE_SECRET_KEY in environment');
      return NextResponse.json(
        { error: 'Server misconfigured' },
        { status: 500 }
      );
    }

    const stripe = new Stripe(secret, { apiVersion: '2024-06-20' });

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'gbp',
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
  } catch (err: any) {
    console.error('Stripe checkout error:', err);
    return NextResponse.json(
      { error: err?.message ?? 'Stripe error' },
      { status: 500 }
    );
  }
}