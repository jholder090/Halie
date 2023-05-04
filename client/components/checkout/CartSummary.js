import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";

const CartSummary = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.me);
  let userCart = useSelector(selectUserCart);
  console.log("UZER Cart", userCart)

  useEffect(() => {
    dispatch(fetchUserCartAsync(user.id))
  }, [user])

  const getUserCartSize = (userCart) => {
    let size = 0;
    userCart?.map(cartItem => {
      size += cartItem.quantity;
    }
    )
    return size
  }

  const getCartTotal = () => {
    let total = 0;
    for (let item of userCart) {
      total += item.price;
    }
    return (Math.round((total) * 100) / 100).toFixed(2);
  }


  return (
    <div className='checkout__cartSummary w-2/5 h-33vh flex flex-col border border-solid border-border-gray p-4'>
      <div className='checkout__cartSummary--itemsWrapper h-1/3 border-b border-solid border-border-gray'>
        <div className='checkout__cartSummary--numItems'>Num Items
        </div>
        <div>{userCart && userCart.length ? getUserCartSize(userCart) : null}</div>
        <div className='checkout__cartSummary--showDetails underline cursor-pointer' onClick={() => navigate('/cart/1')}>Show Details</div>
      </div>
      <div className='checkout__cartSummary--addUp h-1/3 '>
        <div className='checkout__cartSummary--subtotal flex justify-between'>
          <div>Subtotal</div>
          <div>{userCart && userCart.length ? getCartTotal(userCart) : null}</div>
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
