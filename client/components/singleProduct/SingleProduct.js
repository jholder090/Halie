import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProductAsync, selectSingleProduct } from "../slices/singleProductSlice";
import { addToUserCartAsync, adjustQtyAsync } from "../slices/userCartSlice";
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";
import { ShoppingCartSimple, CaretLeft, CaretRight } from "phosphor-react";
import ProductCarousel from './ProductCarousel'


const SingleProduct = () => {
  const [isHover, setHover] = useState(false);
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector(selectSingleProduct);
  const user = useSelector(state => state.auth.me);
  let userCart = useSelector(selectUserCart)


  useEffect(() => {
    dispatch(fetchSingleProductAsync(productId))
  }, [])

  useEffect(() => {
    dispatch(fetchUserCartAsync(user.id))
  }, [user])


  const adjustQty = (e) => {
    if (e.target.id == 'decrease' && qty >= 2) {
      setQty(qty - 1)
    } else if (e.target.id == 'increase') {
      setQty(qty + 1)
    }
  }

  const addToUserCart = (product) => {
    for (let i = 0; i < userCart.length; i++) {
      let item = { ...userCart[i] }
      if (item.productId === product.id) {
        item.quantity += qty;
        item.price = item.product.price * item.quantity
        return dispatch(adjustQtyAsync(item))
      }
    }
    let cartId = user.id;
    let quantity = qty;
    let productId = product.id;
    let price = product.price * quantity;
    dispatch(addToUserCartAsync({ cartId, productId, quantity, price }))
  }

  return (
    <>
      <div className="singleProduct-top flex  px-12">

        <ProductCarousel product={product}
         />

        <div className="singleProduct-addToCart w-1/2 border-solid border-2 border-emerald-800">
          <div>${product.price * qty}</div>
          <div>
            <button id='decrease' className='bg-halie-dark hover:bg-halie-hover text-white font-bold py-2 px-5 rounded-full'
              onClick={(e) => adjustQty(e)}>-</button>
            <div>{qty}</div>
            <button id='increase' className='bg-halie-dark hover:bg-halie-hover text-white font-bold py-2 px-5 rounded-full'
              onClick={(e) => adjustQty(e)}>+</button>
          </div>
          <div className="div1 m-1 w-4/12 flex items-center justify-around rounded-full bg-halie-dark hover:bg-halie-hover hover:cursor-pointer" onClick={() => addToUserCart(product)}>
            <ShoppingCartSimple size={28} />
            <div>${product.price * qty}</div>
          </div>
        </div>
      </div>
      <div className="singleProduct-description border-solid border-2 border-red-500">
        <h3>Description</h3>
        <div>{product.description}</div>
      </div >
    </>

  );
};

export default SingleProduct;
