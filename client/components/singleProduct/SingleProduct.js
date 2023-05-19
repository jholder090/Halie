import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProductAsync, selectSingleProduct } from "../slices/singleProductSlice";
import { addToUserCartAsync, adjustQtyAsync } from "../slices/userCartSlice";
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";
import { ShoppingCartSimple, CaretLeft, CaretRight } from "phosphor-react";
import ProductCarousel from './ProductCarousel'
import { addToVisitorCart } from "../slices/visitorCartSlice";


const SingleProduct = () => {
  const [isHover, setHover] = useState(false);
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector(selectSingleProduct);
  console.log("product", product)
  const user = useSelector(state => state.auth.me);
  let userCart = useSelector(selectUserCart);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);


  useEffect(() => {
    dispatch(fetchSingleProductAsync(productId))
  }, [])

  useEffect(() => {
    dispatch(fetchUserCartAsync(user.CartId))
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
      <div className="singleProduct-top flex flex-col items-center px-12 w-full">
        <div className="title w-full text-center text-header font-extraStrong">{product.name}</div>
        <div className="singleProduct-main flex w-full">
          <ProductCarousel product={product}
          />
          {isLoggedIn ?
            <div className="singleProduct-addToCart w-1/2 flex flex-col justify-center items-center  ">
              <h4 className="singleProduct__addToCart__price text-2xl font-extrabold my-6">
                ${product.price}
              </h4>
              <h3>{`Subtotal: ${(Math.round((product.price * qty) * 100) / 100).toFixed(2)}`}</h3>
              <div className="singleProduct__addToCart__quantity flex justify-between items-center h-10 w-1/2 my-6 rounded-full border border-solid border-black">
                <button id='decrease' className=' text-black font-bold py-2 px-5 rounded-full'
                  onClick={(e) => adjustQty(e)}>-</button>
                <div>{qty}</div>
                <button id='increase' className=' text-black font-bold py-2 px-5 rounded-full'
                  onClick={(e) => adjustQty(e)}>+</button>
              </div>
              <div className="singleProduct__addToCart__buyButton flex justify-center items-center h-10 w-1/2 my-6 rounded-full border border-solid bg-halie-light hover:cursor-pointer" onClick={() => addToUserCart(product)}>
                <ShoppingCartSimple size={28} />
                <div>Add to Cart</div>
              </div>
            </div>
            :
            <div className="singleProduct-addToCart w-1/2 flex flex-col justify-center items-center  ">
              <h4 className="singleProduct__addToCart__price text-2xl font-extrabold my-6">
                ${product.price}
              </h4>
              <h3>{`Subtotal: ${(Math.round((product.price * qty) * 100) / 100).toFixed(2)}`}</h3>
              <div className="singleProduct__addToCart__quantity flex justify-between items-center h-10 w-1/2 my-6 rounded-full border border-solid border-black">
                <button id='decrease' className=' text-black font-bold py-2 px-5 rounded-full'
                  onClick={(e) => adjustQty(e)}>-</button>
                <div>{qty}</div>
                <button id='increase' className=' text-black font-bold py-2 px-5 rounded-full'
                  onClick={(e) => adjustQty(e)}>+</button>
              </div>
              <div className="singleProduct__addToCart__buyButton flex justify-center items-center h-10 w-1/2 my-6 rounded-full border border-solid bg-halie-light hover:cursor-pointer" onClick={() => dispatch(addToVisitorCart({ product, qty }))}>
                <ShoppingCartSimple size={28} />
                <div>Add to Cart</div>
              </div>
            </div>
          }
        </div>
      </div>
      <div className="singleProduct-description mx-96 flex flex-col">
        <div className="text-2xl font-extrabold">Description</div>
        <div>{product.description}</div>
      </div >
    </>

  );
};

export default SingleProduct;
