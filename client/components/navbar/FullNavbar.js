import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";

const FullNavbar = ({ user, isLoggedIn, userCart, visitorCart, getVisitorCartSize, getUserCartSize }) => {


  return (
    <>
      <img src='https://i.postimg.cc/q76pMWNw/Temple-Rose-Left-Rose-Joe.png' alt='Halie Logo' className='h-full w-1/5' />
      <img src='https://i.postimg.cc/Jn7HF160/Temple-Rose-Title.png' alt='Halie Logo' className='h-full w-2/5' />
      <nav className='flex items-center justify-center h-full w-1/5'>
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
      <img src='https://i.postimg.cc/PxqzwzkS/Temple-Rose-Right-Rose.png' alt='Halie Logo' className='h-full w-1/5' />
    </>
  )
}

export default FullNavbar;
