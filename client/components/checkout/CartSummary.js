import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";

const CartSummary = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let userCart = useSelector(selectUserCart);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  console.log("UZER Cart", userCart)
  const visitorCart = useSelector(state => state.visitorCart);

  useEffect(() => {
    dispatch(fetchUserCartAsync(user?.cartId))
  }, [])

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

  const getVisitorCartSize = (cart) => {
    let size = 0;
    for (let product of cart) {
      size += product.quantity;
    }
    return size;
  }

  const getVisitorCartTotal = (visitorCart) => {
    // for (let item of visitorCart) {
    //   console.log("visitor item price: ", item.price)
    // }
    let total = 0;
    for (let item of visitorCart) {
      total += (item.price * item.quantity);
    }
    return (Math.round((total) * 100) / 100).toFixed(2);
  }


  return (
    <div className='checkout__cartSummary w-2/5 h-33vh flex flex-col border border-solid border-border-gray p-4'>
      <div className='checkout__cartSummary--itemsDetails border-b border-solid border-border-gray'>
        <div className='checkout__cartSummary--itemsWrapper h-1/3 flex justify-between'>
          <div className='checkout__cartSummary--numItems font-strong'>Num Items
          </div>
          <div>{userCart && userCart.length ? getUserCartSize(userCart) :
          getVisitorCartSize(visitorCart)}</div>
        </div>
        {isLoggedIn ?
        <div className='checkout__cartSummary--showDetails underline cursor-pointer pt-2 text-small' onClick={() => navigate(`/cart/${user.cartId}`)}>Show Details
        </div>
        :
        <div className='checkout__cartSummary--showDetails underline cursor-pointer pt-2 text-small' onClick={() => navigate(`/cart/guest`)}>Show Details
        </div> }

      </div>


      <div className='checkout__cartSummary--addUp h-1/3 '>
        <div className='checkout__cartSummary--subtotal flex justify-between'>
          <div>Subtotal</div>
          <div>{userCart && userCart.length ? getCartTotal(userCart) :
          getVisitorCartTotal(visitorCart)}</div>
        </div>
        <div className='checkout__cartSummary--shipping flex justify-between'>
          <div>Shipping</div>
          <div>$19.99</div>
        </div>
        <div className='checkout__cartSummary--total flex justify-between'>
          <div className='font-strong'>Total</div>
          <div>${(Math.round((Number(getVisitorCartTotal(visitorCart)) + 19.99) * 100) / 100).toFixed(2)  }</div>
        </div>
      </div>

    </div>


  )

}
export default CartSummary;
