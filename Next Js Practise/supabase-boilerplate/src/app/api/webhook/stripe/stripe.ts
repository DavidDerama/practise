import Stripe from "stripe";
import { headers } from "next/headers";
import { buffer } from "node:stream/consumers";

const endpointSecret = process.env.STRIPE_ENDPOINT_SECRET!;

const stripe = new Stripe(process.env.STRIPE_SK!);

export async function POST(req: any) {
  const rawBody = await buffer(req.body);
  try {
    const sig = (await headers()).get("stripe-signature");
    let event;
    try {
      event = stripe.webhooks.constructEvent(rawBody, sig!, endpointSecret);
    } catch (err: any) {
      return Response.json({ error: `Webhook error ${err?.message}` });
    }

    switch (event.type) {
      case "invoice.payment_succeeded":
        console.log(event.data.object);
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }
    return Response.json({});
  } catch (err) {
    return Response.json({ error: "Webhook Error" });
  }
}
