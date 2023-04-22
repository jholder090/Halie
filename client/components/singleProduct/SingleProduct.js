import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleProductAsync, selectSingleProduct } from "../slices/singleProductSlice";
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";


const SingleProduct = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const product = useSelector(selectSingleProduct);


  useEffect(() => {
    dispatch(fetchSingleProductAsync(productId))
  }, [])

  return (

      <div>{product.name}</div>


  );
};

export default SingleProduct;
