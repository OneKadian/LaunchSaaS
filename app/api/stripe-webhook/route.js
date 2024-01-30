import Stripe from "stripe";
import { NextResponse } from "next/server";
import {
  insertSubscription,
  updateSubscription,
} from "../../../supabase/supabaseStripe.js";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export async function POST(req) {
  const body = await req.text();
  const sig = req.headers.get("Stripe-Signature");
  const webhookSecret = process.env.NEXT_PUBLIC_STRIPE_TEST_WEBHOOK_SECRET_KEY;

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);

    switch (event?.type) {
      case "checkout.session.completed": // create the customer
        const eventual = event.data.object;
        const subscriptionId = event.data.object.subscription;
        const userID = event.data.object.metadata?.userID;
        await insertSubscription(eventual, subscriptionId, userID);
        break;
      case "customer.subscription.updated":
        const events = event.data.object;
        const id = event.data.object.id;
        await updateSubscription(events, id);
        break;
      default:
        console.log("Unhandled webhook event:", event.type);
        break;
    }
  } catch (err) {
    console.error(err.message);
    return NextResponse.json({ message: err.message }, { status: 400 });
  }

  return NextResponse.json({ received: true });
}
