import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";

const Cart = () => {
  const dispatch = useDispatch();
const {cartId} = useParams();
const user = useSelector(state => state.auth.me);
let userCart = useSelector(selectUserCart)
console.log("USERCART", userCart)



useEffect(() => {
    dispatch(fetchUserCartAsync(cartId))
}, [])

  return(
    <>{userCart.map(cartItem => {
      return (
        <div key={cartItem.id}>{cartItem.product.name}</div>
      )
    })}
    </>

  )

}

export default Cart;
