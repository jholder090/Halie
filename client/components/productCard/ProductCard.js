import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToUserCartAsync, adjustQtyAsync } from "../slices/userCartSlice";
import { addToVisitorCart } from "../slices/visitorCartSlice";
import { ShoppingCartSimple } from "phosphor-react";

const ProductCard = ({ user, product, userCart, setAdded }) => {
  const [isHover, setHover] = useState(false);
  const [qty, setQty] = useState(1)
  const dispatch = useDispatch();
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
    <div onMouseEnter={handleHover} onMouseLeave={handleHover} className={`allProducts-productContainer min-h-fit max-w-sm  m-5 flex-col items-center flex-25 border-gray-200 rounded-sm shadow  dark:border-gray-700`} key={product.id}>
      <div className='allProducts-productImageUrl flex justify-center'>
        <a href="#" className='w-full flex justify-center max-h-72'>
          <img className={isHover ? "rounded-t-lg transition-all duration-700 scale-100" : "rounded-t-lg transition-all duration-700 scale-75"} src="https://i.postimg.cc/9Mw08wks/lotion.png" alt="Blah" />
        </a>
      </div>
      <div className="px-5">
        <div className='allProducts-productName'>
          <a href="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
          </a>
        </div>
        {/* <div className='allProducts-productDescription '>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
        </div> */}
      </div>
      {isLoggedIn
        ?
        <div id={product.id}
          href="#" className="allProducts-buyButton overflow-hidden  h-12 z-50 text-sm font-medium text-center text-white bg-halie-light  hover:bg-halie-med focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-between" >
          <div className="div1 w-4/12 flex items-center justify-center bg-halie-dark" onClick={() => addToUserCart(product)}>
            <ShoppingCartSimple size={28}/>
            <div>{product.price * qty}</div>
            </div>
          {/* <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" ><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> */}
          <div className={isHover ? 'bg-slate-500 w-36 flex justify-around items-center transition-all duration-700'
            :
            'bg-slate-500 w-36 flex justify-around items-center transition-all duration-700 translate-x-full'}>
            <button id='decrease' className='bg-lime-600 h-8 w-8'
              onClick={(e) => adjustQty(e)}>-</button>
            <div>{qty}</div>
            <button id='increase' className='bg-lime-600 h-8 w-8'
              onClick={(e) => adjustQty(e)}>+</button>
          </div>
        </div>
        :
        <div id={product.id} onMouseEnter={handleHover} onMouseLeave={handleHover}
          onClick={() => dispatch(addToVisitorCart(product))}
          href="#" className="allProducts-buyButton overflow-hidden w-85 px-3 py-2 z-50 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Buy now
          {/* <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" ><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> */}
          <button className={isHover ? `h-full w-full transition-all duration-700` : `h-full w-full transition-all duration-700 translate-x-full`}>HELLO!</button>
        </div>
      }
    </div>
  )
}

export default ProductCard;
