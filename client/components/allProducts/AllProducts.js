import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, selectAllProducts } from '../slices/allProductsSlice';
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";
import { addToCart } from "../slices/visitorCartSlice";
// import {} from ''
import { ProductCard } from '../index'
import './allProducts.css'



const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  const user = useSelector(state => state.auth.me);
  let userCart = useSelector(selectUserCart)

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
