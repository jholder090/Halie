import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartId } = useParams();
  const user = useSelector(state => state.auth.me);
  let userCart = useSelector(selectUserCart)
  console.log("USERCART", userCart)



  useEffect(() => {
    dispatch(fetchUserCartAsync(cartId))
  }, [])

  const getCartTotal = (userCart) => {
    let total = 0;
    for(let i = 0; i < userCart.length; i++) {
      total += String(userCart.price);
    }
    return total;
  }

  return (
    <>
      <div className='cart w-full flex px-12'>
        <div className='cart__cartList flex flex-col w-8/12 px-4 justify-between border border-solid border-cyan-300 '>
          {userCart.map(item => {
            return (
              <>
                <div className='cart_itemContainer flex justify-between h-36 border border-solid border-cyan-300'>
                  <div className='cart_itemInfo flex  border border-solid border-slate-500 w-2/5'>
                    <div className='cart__itemImage flex'>
                      <img src={item.product.imageUrl} className='' />
                    </div>
                    <div className='cart__itemText flex flex-col justify-around'>
                      <div className='cart__itemName'>{item.product.name}</div>
                      <div className='cart__itemPrice'>{item.product.price}</div>
                    </div>
                  </div>
                  <div className='cart_itemQty flex justify-between items-center border border-solid border-lime-300 w-2/5'>
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

              </>
            )
          })}
        </div>
        <div className='cart__checkout border w-4/12 border-solid border-black'>
          <div className='cart__cartTotal'>
            <div className='cart__itemCount'>{`${userCart.length} items`}</div>
            <div className='cart__totalPrice'>{getCartTotal(userCart)}</div>
          </div>
          <div className='cart__checkoutButton'>CHECKOUT</div>
        </div>
      </div>




    </>

  )

}

export default Cart;
