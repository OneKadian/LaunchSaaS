"use client";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function CheckoutButton({ display }) {
  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        return;
      }
      const { session } = await (
        await fetch("/api/stripe-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        })
      ).json();

      await stripe.redirectToCheckout({
        sessionId: session.id,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="flex flex-col items-center ">
      <button
        onClick={handleCheckout}
        className={`text-white bg-primary-700 font-medium ${display} rounded-lg w-fit mx-auto text-sm px-20 py-3 text-center`}
      >
        {/* <span className="ml-2">BUY</span> */}
        BUY
      </button>
    </section>
  );
}
