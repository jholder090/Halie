import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserCartAsync, removeCartItemAsync, selectUserCart } from "../slices/userCartSlice";
import CartItem from "./CartItem";
import {
  remove,
} from '../slices/visitorCartSlice'
import './cart.css'

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { cartId } = useParams();
  const user = useSelector(state => state.auth.me);
  let userCart = useSelector(selectUserCart);
  console.log("USER CART: ", userCart)
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const visitorCart = useSelector(state => state.visitorCart);
  console.log("Visitor cart cartItem: ", visitorCart)



  useEffect(() => {
    dispatch(fetchUserCartAsync(user.cartId))
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

  const clearCartAsync = () => {
    for (let item of userCart) {
      dispatch(removeCartItemAsync(item));
    }
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

  const clearVisitorCart = () => {
    for (let item of visitorCart) {
      dispatch(remove(item.id));
    }
  }

  return (
    <>
      <div className='cart w-full flex px-12 py-12'>
        {isLoggedIn ?
          <div className='cart__cartList flex flex-col w-8/12 px-4 justify-between  '>
            {userCart.map((item, idx) => {
              return (
                <CartItem key={idx} item={item} />
              )
            })}
            <button className='cart__clearCart underline' onClick={() => clearCartAsync()}>Clear Cart</button>
          </div>
          :
          <div className='cart__cartList flex flex-col w-8/12 px-4 justify-between  '>
            {visitorCart && visitorCart.map((item, idx) => {
              return (
                <CartItem key={idx} item={item} />
              )
            })}
            <button className='cart__clearCart underline' onClick={() => clearVisitorCart()}>Clear Cart</button>
          </div>
        }

        {isLoggedIn ?
          <div className='cart__checkout flex flex-col items-center w-4/12'>
            <div className='cart__cartTotal w-full flex justify-between border-b border-solid border-border-gray'>
              <div className='cart__itemCount'>{`${getUserCartSize(userCart)} Items`}</div>
              <div className='cart__totalPrice'>{userCart && userCart.length ? getCartTotal(userCart) : ''}</div>
            </div>
            <div className='cart__checkoutButton flex justify-center items-center h-10 w-1/2 my-6 rounded-full border border-solid bg-halie-light hover:cursor-pointer' onClick={() => navigate(`/checkout`)}>CHECKOUT</div>
            <button className='cart__continueShopping underline' onClick={() => navigate('/products')}>Continue Shopping</button>
          </div>
          :
          <div className='cart__checkout flex flex-col items-center w-4/12'>
            <div className='cart__cartTotal w-full flex justify-between border-b border-solid border-border-gray'>
              <div className='cart__itemCount'>{`${getVisitorCartSize(visitorCart)} Items`}</div>
              <div className='cart__totalPrice'>{visitorCart && visitorCart.length ? getVisitorCartTotal(visitorCart) : ''}</div>
            </div>
            <div className='cart__checkoutButton flex justify-center items-center h-10 w-1/2 my-6 rounded-full border border-solid bg-halie-light hover:cursor-pointer' onClick={() => navigate(`/checkout`)}>CHECKOUT</div>
            <button className='cart__continueShopping underline' onClick={() => navigate('/products')}>Continue Shopping</button>
          </div>
        }


      </div>




    </>

  )

}

export default Cart;
