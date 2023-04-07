import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, selectAllProducts } from '../slices/allProductsSlice';
import { addToUserCartAsync, adjustQtyAsync, fetchUserInfoAsync, selectUserInfo } from "../slices/userCartSlice";
import { addToCart } from "../slices/visitorCartSlice";
// import {} from ''
import { ProductCard } from '../index'
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



  const handleButtonLeave = (e) => {
    const hiddenDiv = document.querySelector(`.toggle${e.target.id}`);

    hiddenDiv.style.transform = 'translate(330px)'
  }

  const addToUserCart = (product) => {
    // userCart?.map(cartItem => {
    //   if (cartItem.id === product.id) {
    //    return dispatch(adjustQtyAsync(cartItem))
    //   }
    // }
    // )
    let userId = user.id;
    let cartId = userInfo.cart.id;
    let cartQuantity = 1;
    let cartPrice = product.price * cartQuantity;
    let productId = product.id;
    let productDescription = product.description;
    let productImageUrl = product.imageUrl;
    let productName = product.name;
    let productQuantity = product.quantity;
    let productPrice = product.price;

    dispatch(addToUserCartAsync({ userId, cartId, cartQuantity, cartPrice, productId, productDescription, productImageUrl, productName, productQuantity, productPrice }))
    console.log("NEWUSERCART", userCart)
  }

  return (
    <>
      <div className='allProducts h-full flex justify-center flex-wrap'>
        {products.map(product => {
          return (
            <ProductCard key={product.id} product={product}
              handleButtonLeave={handleButtonLeave}
              addToUserCart={addToUserCart}
              />
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
