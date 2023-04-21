import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";

const ShrunkNavbar = ({ user, isLoggedIn, userCart, visitorCart, getVisitorCartSize, getUserCartSize }) => {


  return (
    <>

      <img src='https://i.postimg.cc/4NBkbCyf/Temple-Rose-Title-Shrunk.png' alt='Halie Logo' className='h-full w-1/4' />
      <nav className='flex items-center justify-center h-full w-1/4'>
        <ul className='flex'>
          <li className="px-1">
            <a href='#'>Home</a>
          </li>
          <li className="px-1">
            <a href='#'>Products</a>
          </li>
          <li className="px-1">
            <a href='#'>About</a>
          </li>
          <li className="px-1">
          {isLoggedIn ? (
          <a href='#'>
           {`My Cart | ${getUserCartSize(userCart)}`}
          </a>
        ) : (
          <a href="#">
            ({getVisitorCartSize(visitorCart)})
          </a>
        )}
          </li>
        </ul>
      </nav>

    </>
  )
}

export default ShrunkNavbar;
