import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { adjustQtyAsync } from "../slices/userCartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const adjustCartQuantityAsync = (e) => {
    let newItem = { ...item };

    if (e.target.id == "decrease") {
      newItem.quantity--;
      newItem.price = newItem.product.price * newItem.quantity;
      return dispatch(adjustQtyAsync(newItem));
    }
    newItem.quantity++;
    newItem.price = newItem.product.price * newItem.quantity;
    return dispatch(adjustQtyAsync(newItem));
  }

  return (
    <div key={item.id} className='cart_itemContainer flex justify-between h-36 my-2 '>
      <div className='cart_itemInfo flex justify-center w-2/5'>
        <div className='cart__itemImage flex w-2/5'>
          <img src={item.product.imageUrl} className='' />
        </div>
        <div className='cart__itemText flex flex-col justify-center w-2/5'>
          <div className='cart__itemName my-2'>{item.product.name}</div>
          <div className='cart__itemPrice my-2'>{item.product.price}</div>
        </div>
      </div>
      <div className='cart_itemQty flex justify-around items-center w-2/5 mr-6'>
        <div className="cart__adjustQty flex justify-between items-center h-10 w-1/2 my-6 rounded-full border border-solid border-black">
          <button id='decrease' className=' text-black font-bold py-2 px-5 rounded-full' onClick={(e) => adjustCartQuantityAsync(e)}
          >-</button>
          <div>{item.quantity}</div>
          <button id='increase' className=' text-black font-bold py-2 px-5 rounded-full' onClick={(e) => adjustCartQuantityAsync(e)}
          >+</button>
        </div>
        <div className='cart__itemTotal'>${(Math.round((item.quantity * item.product.price) * 100) / 100).toFixed(2)}</div>
        <div className='cart__clearItem'>X</div>
      </div>
    </div>
  )
}

export default CartItem;





