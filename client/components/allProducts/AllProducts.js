import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, selectAllProducts } from '../slices/allProductsSlice';
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";
import { ProductCard } from '../index'
import './allProducts.css'



const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const user = useSelector(state => state.auth.me);
  let userCart = useSelector(selectUserCart)
  let visitorCart = useSelector(state => state.visitorCart)
  console.log("USER CART", userCart)
  console.log("VISITOR CART", visitorCart)

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  useEffect(() => {
    dispatch(fetchUserCartAsync(user.id))
  }, [user])

  return (
    <>
      <div className='allProducts h-full flex justify-center flex-wrap'>
        {products.map(product => {
          return (
            <ProductCard key={product.id} user={user} product={product} userCart={userCart}
              />
          )
        })}
      </div>
    </>
  );
};

export default AllProducts;
