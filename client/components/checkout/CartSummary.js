import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const CartSummary = ({ activeSection, setActiveSection }) => {
  const navigate = useNavigate();

  return (
    <div className='checkout__cartSummary w-2/5 h-33vh flex flex-col border border-solid border-border-gray p-4'>
      <div className='checkout__cartSummary--itemsWrapper h-1/3 border-b border-solid border-border-gray'>
        <div className='checkout__cartSummary--numItems'>Num Items</div>
        <div className='checkout__cartSummary--showDetails underline cursor-pointer' onClick={() => navigate('/cart/1')}>Show Details</div>
      </div>
      <div className='checkout__cartSummary--addUp h-1/3 '>
        <div className='checkout__cartSummary--subtotal flex justify-between'>
          <div>Subtotal</div>
          <div>$45454.44</div>
        </div>
        <div className='checkout__cartSummary--shipping flex justify-between'>
          <div>Shipping</div>
          <div>$45454.44</div>
        </div>
        <div className='checkout__cartSummary--total flex justify-between'>
          <div>Total</div>
          <div>$99999.00</div>
        </div>
      </div>

    </div>


  )

}
export default CartSummary;
