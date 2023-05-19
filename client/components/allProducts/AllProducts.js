import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, selectAllProducts } from '../slices/allProductsSlice';
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";
import { ProductCard } from '../index'
import './allProducts.css'



const AllProducts = ({ user }) => {
  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  let userCart = useSelector(selectUserCart)
  console.log("Products", products)

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  useEffect(() => {
    dispatch(fetchUserCartAsync(user?.cartId))
  }, [])

  useEffect(() => {
    setAdded(false)
  }, [added])

  return (
    <>
      <div className='allProducts h-full grid grid-cols-4 px-12'>
        {products.map(product => {
          return (
            <ProductCard key={product.id} user={user} product={product} userCart={userCart} setAdded={setAdded}
              />
          )
        })}
      </div>
    </>
  );
};

export default AllProducts;
