import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, selectAllProducts } from '../slices/allProductsSlice';
import './allProducts.css'



const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  console.log("PRODUCTS --->", products)

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (

    <div className='allProducts h-full flex justify-center flex-wrap'>
      {products.map(product => {
        return (
          <div className='allProducts-productContainer h-52 w-52 border-solid border-2 border-black mx-2 ' key={product.id}>
            <div className='allProducts-productName'>{product.name}</div>
            <div className='allProducts-productPrice'>{product.price}</div>
          </div>

        )
      })}
    </div>

  );
};

export default AllProducts;
