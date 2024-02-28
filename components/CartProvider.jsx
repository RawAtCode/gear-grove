 'use client';

import { CartProvider as CProvider } from "use-shopping-cart";

const CartProvider = ({children}) => {
  return (
    <CProvider 
    mode="payment" 
    cartMode="client-only" 
    stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
    successUrl="https://geargrove.vercel.app/Stripe/success" 
    cancelUrl="https://geargrove.vercel.app/Stripe/error"
    language="en-US"
    currency="INR"
    billingAddressCollection={true}
    shouldPersist={true}
    >
        {children}
    </CProvider>
  );
};

export default CartProvider;