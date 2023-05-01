import React, { useState } from 'react';
import CartSummary from './CartSummary';

import CheckoutAccordion from "./CheckoutAccordion"

const Checkout = () => {


  return (
    <>
      <div className='checkoutWrapper flex w-full px-44 py-10'>
        <CheckoutAccordion />
        <CartSummary />
      </div>
    </>

  );
};

export default Checkout;
