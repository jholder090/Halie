import React, { useState } from 'react';
// useStripe gives access to resolved Stripe object passed thru Promise and Elements provider
// useElements gives access to Elements instance which allows for safe payment info passed from payment element to Stripe API.
import { useStripe, useElements } from '@stripe/react-stripe-js'
import {PaymentElement} from '@stripe/react-stripe-js';

const Checkout = () => {
  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Where it sends you after payment confirmed
        return_url: `${window.location.origin}`
      }
    });

    if (error) {
      setMessage(error.message);
    }

    setIsProcessing(false)
  }

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement />
      <button  disabled={isProcessing} id='submit'>
        <span id='button-text'>
          {isProcessing ? "Processing..." : "Pay now"}
        </span>
      </button>
    </form>
  );
};

export default Checkout;
