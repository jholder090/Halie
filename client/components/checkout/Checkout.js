import React, { useState } from 'react';
// useStripe gives access to resolved Stripe object passed thru Promise and Elements provider
// useElements gives access to Elements instance which allows for safe payment info passed from payment element to Stripe API.

import CheckoutAccordion from "./CheckoutAccordion"

const Checkout = () => {


  return (
    <>
      <div className='checkoutWrapper flex w-full'>
        <CheckoutAccordion />
        <div>Cart Summary</div>
      </div>
    </>

  );
};

export default Checkout;
