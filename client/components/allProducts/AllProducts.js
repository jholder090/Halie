import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, selectAllProducts } from '../slices/allProductsSlice';
import { addToUserCartAsync, adjustQtyAsync, fetchUserInfoAsync, selectUserInfo } from "../slices/userCartSlice";
import { addToCart } from "../slices/visitorCartSlice";
// import {} from ''
import './allProducts.css'



const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  console.log("PRODUCTS", products)
  const [isHover, setHover] = useState(false);
  const user = useSelector(state => state.auth.me);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const userInfo = useSelector(selectUserInfo);
  console.log("USERINFO", userInfo)
  const userCart = userInfo.cart?.products
  console.log("USERCART", userCart)

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchUserInfoAsync(user.id))
  }, [user]);

  const handleButtonHover = (e) => {
    const hiddenDiv = document.querySelector(`.toggle${e.target.id}`);

    hiddenDiv.style.transform = 'translate(-330px)'


  }

  const handleButtonLeave = (e) => {
    const hiddenDiv = document.querySelector(`.toggle${e.target.id}`);

    hiddenDiv.style.transform = 'translate(330px)'
  }

  const addToUserCart = async (product) => {
    userCart?.map(cartItem => {
      if (cartItem.id === product.id) {
       return dispatch(adjustQtyAsync(cartItem))
      }
    }
    )
    let quantity = 1;
    let productId = product.id;
    let cartId = userInfo.cart.id;
    let price = product.price * quantity;
    dispatch(addToUserCartAsync({quantity, price, productId, cartId}))
  }

  return (
    <>
      <div className='allProducts h-full flex justify-center flex-wrap'>
        {products.map(product => {
          return (
            <div className='allProducts-productContainer max-w-sm h-100 flex-col bg-white border border-gray-200 m-4 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700' key={product.id}>
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
              <div className='allProducts-cartInteractions'>
                <>
                  <div id={product.id} onMouseEnter={handleButtonHover} onMouseLeave={handleButtonLeave} onClick={() => addToUserCart(product)}
                   href="#" className="allProducts-buyButton overflow-hidden w-85 px-3 py-2 z-50 text-sm font-medium text-center text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Buy now
                    {/* <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" ><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg> */}
                    <div className={`toggle${product.id} h-full w-full transition-all duration-700 relative left-full`}>HELLO!</div>
                  </div>
                </>
              </div>
            </div>
          )
        })}
        {/* <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src="https://i.postimg.cc/9Mw08wks/lotion.png" alt="Blah" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
      </div> */}
      </div>
    </>
  );
};

export default AllProducts;
