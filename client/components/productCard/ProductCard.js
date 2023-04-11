import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToUserCartAsync, adjustQtyAsync } from "../slices/userCartSlice";
import { addToVisitorCart } from "../slices/visitorCartSlice";

const ProductCard = ({ user, product, userCart }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const [isHover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!isHover);
  }

  const addToUserCart = (product) => {
    for(let i=0; i< userCart.length; i++){
      let item = {...userCart[i]}
      if (item.productId === product.id) {
        item.quantity++;
        return dispatch(adjustQtyAsync(item))
      }
    }

    let cartId = user.id;
    let quantity = 1;
    let productId = product.id;
    let price = product.price * quantity;
    dispatch(addToUserCartAsync({ cartId, productId, quantity, price }))
  }

  return (
    <div className={`allProducts-productContainer max-w-sm h-100 flex-col bg-white border border-gray-200 m-4 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`} key={product.id}>
      <div className='allProducts-productImageUrl'>
        <a href="#">
          <img className="rounded-t-lg" src="https://i.postimg.cc/9Mw08wks/lotion.png" alt="Blah" />
        </a>
      </div>
      <div className="p-5">
        <div className='allProducts-productName'>
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
          </a>
        </div>
        <div className='allProducts-productDescription '>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
        </div>
        <div className='allProducts-productPrice'>${product.price}
        </div>
      </div>
      {isLoggedIn
        ?
        <div id={product.id} onMouseEnter={handleHover} onMouseLeave={handleHover}
          onClick={() => addToUserCart(product)}
          href="#" className="allProducts-buyButton overflow-hidden w-85 px-3 py-2 z-50 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Buy now
          {/* <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" ><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> */}
          <button className={isHover ? `h-full w-full transition-all duration-700` : `h-full w-full transition-all duration-700 translate-x-full`}>HELLO!</button>
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
