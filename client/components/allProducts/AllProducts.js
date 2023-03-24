import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts, selectAllProducts } from '../slices/allProductsSlice';



const AllProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);
  console.log("PRODUCTS --->", products)

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <>
      {products.map(product => {
        return (
          <h1 key={product.id}>{product.name}</h1>
        )
      })}
    </>
  );
};

export default AllProducts;
