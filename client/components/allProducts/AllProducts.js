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
  // const user = useSelector(state => state.auth.me);
  // const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  // const userInfo = useSelector(selectUserInfo);
  // console.log("USERINFO", userInfo)
  // const userCart = userInfo.cart?.products
  // console.log("USERCART", userCart)

  useEffect(() => {
    dispatch(fetchAllProducts());
    // dispatch(fetchUserInfoAsync(user.id))
  }, []);


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
              />
          )
        })}
      </div>
    </>
  );
};

export default AllProducts;
