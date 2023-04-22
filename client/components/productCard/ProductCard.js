import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToUserCartAsync, adjustQtyAsync } from "../slices/userCartSlice";
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";
import { addToVisitorCart } from "../slices/visitorCartSlice";
import { ShoppingCartSimple } from "phosphor-react";
import "./productCard.css"

const ProductCard = ({ user, product, userCart, setAdded }) => {
  const [isHover, setHover] = useState(false);
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);


  const handleHover = () => {
    setHover(!isHover);
  }

  const adjustQty = (e) => {
    if (e.target.id == 'decrease' && qty >= 2) {
      setQty(qty - 1)
    } else if (e.target.id == 'increase') {
      setQty(qty + 1)
    }
  }

  const addToUserCart = (product) => {
    setAdded(true);
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
    <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`allProducts-productContainer min-h-fit max-w-sm  mx-4 my-6 flex-col items-center flex-25 border-gray-200 rounded-sm shadow  dark:border-gray-700`} key={product.id}>
      <div onClick={() => navigate(`/products/${product.id}`)} className='allProducts-productImageUrl flex flex-col justify-center hover:cursor-pointer'>
        <img className={isHover ? "rounded-t-lg transition-all duration-700 scale-100" : "rounded-t-lg transition-all duration-700 scale-75"} src={product.imageUrl} alt="Blah" />
        <div className='allProducts-productName'>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
        </div>
      </div>
      {isLoggedIn
        ?
        <div id={product.id}
          className="allProducts-buyButton overflow-hidden  h-12 z-50 text-sm font-medium text-center text-white bg-halie-light focus:ring-4 focus:outline-none flex justify-between" >
          <div className="div1 m-1 w-4/12 flex items-center justify-around rounded-full bg-halie-dark hover:bg-halie-hover hover:cursor-pointer" onClick={() => addToUserCart(product)}>
            <ShoppingCartSimple size={28} />
            <div>${product.price * qty}</div>
          </div>
          {/* <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" ><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> */}
          <div className={isHover ? 'w-36 flex justify-around items-center transition-all duration-700'
            :
            'w-36 flex justify-around items-center transition-all duration-700 translate-x-full'}>
            <button id='decrease' className='bg-halie-dark hover:bg-halie-hover text-white font-bold py-2 px-5 rounded-full'
              onClick={(e) => adjustQty(e)}>-</button>
            <div>{qty}</div>
            <button id='increase' className='bg-halie-dark hover:bg-halie-hover text-white font-bold py-2 px-5 rounded-full'
              onClick={(e) => adjustQty(e)}>+</button>
          </div>
        </div>
        :
        <div id={product.id} onMouseEnter={handleHover} onMouseLeave={handleHover}
          onClick={() => dispatch(addToVisitorCart(product))}
          className="allProducts-buyButton overflow-hidden w-85 px-3 py-2 z-50 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Buy now
          {/* <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" ><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> */}
          <button className={isHover ? `h-full w-full transition-all duration-700` : `h-full w-full transition-all duration-700 translate-x-full`}>HELLO!</button>
        </div>
      }
    </div>
  )
}

export default ProductCard;
