import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";

const ShrunkNavbar = ({ user, isLoggedIn, userCart, visitorCart, getVisitorCartSize, getUserCartSize }) => {


  return (
    <>
      <img src='https://i.postimg.cc/q76pMWNw/Temple-Rose-Left-Rose-Joe.png' alt='Halie Logo' className='h-full w-1/5' />
      <img src='https://i.postimg.cc/Jn7HF160/Temple-Rose-Title.png' alt='Halie Logo' className='h-full w-2/5' />
      <small>Flying as: <strong>{user.firstName ? user.firstName : "Guest"}</strong></small>
      <nav>
        {isLoggedIn ? (
          <div>
            <small>({getUserCartSize(userCart)})</small>
          </div>
        ) : (
          <div>
            <small>({getVisitorCartSize(visitorCart)})</small>
          </div>
        )}
        < button className='md:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <ul className='fixed left-0 right-0 bg-slate-600 min-h-screen p-4 space-y-4 transform translate-x-full md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-6 md:p-0 md:translate-x-0'>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Products</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
        </ul>
      </nav>
      <img src='https://i.postimg.cc/PxqzwzkS/Temple-Rose-Right-Rose.png' alt='Halie Logo' className='h-full w-1/5' />
    </>
  )
}

export default ShrunkNavbar;
