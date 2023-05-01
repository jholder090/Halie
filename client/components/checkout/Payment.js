import React, { useState } from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js'
import { PaymentElement } from '@stripe/react-stripe-js';

const Payment = ({ activeSection, setActiveSection }) => {

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Where it sends you after payment confirmed
        return_url: `${window.location.origin}`
      },
      redirect: "if_required",
    });

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      setMessage("Payment succeeded!")
    } else {
      setMessage("Unexpected state")
    }

    setIsProcessing(false)
  }
  return (
    <>
      <div className='checkout__payment--title border-b border-solid border-border-gray mb-6 pb-2'>Secure Payment</div>
      {activeSection == "Payment"
        ?
        <form className='checkout_payment--form w-full border-b border-solid border-border-gray mb-6 pb-2' id="payment-form" onSubmit={handleSubmit}>
          <PaymentElement />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded focus:outline-none focus:shadow-outline" disabled={isProcessing} type='submit'>
            <span id='button-text'>
              {isProcessing ? "Processing..." : "Pay now"}
            </span>
          </button>
          {message ? message : null}
        </form>
        : null}
    </>
  )
}

export default Payment;
