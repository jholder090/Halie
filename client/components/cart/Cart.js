import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";
import './cart.css'

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartId } = useParams();
  const user = useSelector(state => state.auth.me);
  let userCart = useSelector(selectUserCart)
  //  console.log("User Cart: ", userCart)



  useEffect(() => {
    dispatch(fetchUserCartAsync(cartId))
  }, [])

  const getCartTotal = () => {
    let total = 0;
    for (let item of userCart) {
      total += item.price;
    }
    return Math.round(total * 100) / 100;
  }

  return (
    <>
      <div className='cart w-full flex px-12 py-12'>
        <div className='cart__cartList flex flex-col w-8/12 px-4 justify-between  '>
          {userCart.map(item => {
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
                    <button id='decrease' className=' text-black font-bold py-2 px-5 rounded-full'
                    >-</button>
                    <div>qty</div>
                    <button id='increase' className=' text-black font-bold py-2 px-5 rounded-full'
                    >+</button>
                  </div>
                  <div className='cart__itemTotal'>${item.quantity * item.product.price}</div>
                  <div className='cart__clearItem'>X</div>
                </div>
              </div>


            )
          })}
          <button className='cart__clearCart underline'>Clear Cart</button>
        </div>


        <div className='cart__checkout flex flex-col items-center w-4/12'>
          <div className='cart__cartTotal w-full flex justify-between border-b border-solid border-border-gray'>
            <div className='cart__itemCount'>{`${userCart.length} items`}</div>
            <div className='cart__totalPrice'>{userCart && userCart.length ? getCartTotal(userCart) : ''}</div>
          </div>
          <div className='cart__checkoutButton flex justify-center items-center h-10 w-1/2 my-6 rounded-full border border-solid bg-halie-light hover:cursor-pointer'>CHECKOUT</div>
          <button className='cart__continueShopping underline' onClick={() => navigate('/products')}>Continue Shopping</button>
        </div>
      </div>




    </>

  )

}

export default Cart;
