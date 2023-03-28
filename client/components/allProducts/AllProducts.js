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
          <div className='allProducts-productContainer h-auto w-60 border-solid border-2 border-black mx-2 my-2 flex-col' key={product.id}>
            <div className='allProducts-productName border-solid border-2 border-black '>{product.name}</div>
            <div className='allProducts-productImageUrl border-solid border-2 border-black '>
              <img src={product.imageUrl} />
            </div>
            <div className='allProducts-productDescription h-20 overflow-hidden border-solid border-2 border-black '>{product.description}</div>
            <div className='allProducts-productPrice border-solid border-2 border-black '>${product.price}</div>
          </div>

        )
      })}
    </div>

  );
};

export default AllProducts;
