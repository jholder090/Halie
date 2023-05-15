import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";

const ShrunkNavbar = ({ user, isLoggedIn, userCart, visitorCart, getVisitorCartSize, getUserCartSize }) => {

  const navigate = useNavigate();

  return (
    <>

      <img src='https://i.postimg.cc/4NBkbCyf/Temple-Rose-Title-Shrunk.png' alt='Halie Logo' className='h-full w-1/4' />
      <nav className='flex items-center justify-center h-full w-1/4'>
        <ul className='flex'>
          <li onClick={() => navigate(`/home`)} className="px-1 cursor-pointer">Home</li>
          <li onClick={() => navigate(`/products/`)} className="px-1 cursor-pointer">Products</li>
          <li onClick={() => navigate(`/products/`)} className="px-1 cursor-pointer">About</li>
          {isLoggedIn ? (
            <li onClick={() => navigate(`/cart/1`)} className="px-1 cursor-pointer">
              {`My Cart | ${getUserCartSize(userCart)}`}
            </li>
          ) : (
            <li onClick={() => navigate(`/cart/1`)} className="px-1 cursor-pointer">
              ({getVisitorCartSize(visitorCart)})
            </li>
          )}
        </ul>
      </nav>

    </>
  )
}

export default ShrunkNavbar;
