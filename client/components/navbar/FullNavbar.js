import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";
import { logout } from '../../store/store'

const FullNavbar = ({ user, isLoggedIn, userCart, visitorCart, getVisitorCartSize, getUserCartSize }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/home');
  };

  return (
    <>
      <img src='https://i.postimg.cc/q76pMWNw/Temple-Rose-Left-Rose-Joe.png' alt='Halie Logo' className='h-full w-1/5' />
      <img src='https://i.postimg.cc/Jn7HF160/Temple-Rose-Title.png' alt='Halie Logo' className='h-full w-2/5' />
      <nav className='flex items-center justify-center h-full w-1/5'>
        <ul className='flex'>
          <li onClick={() => navigate(`/home`)} className="px-1 cursor-pointer">Home</li>
          <li onClick={() => navigate(`/products/`)} className="px-1 cursor-pointer">Products</li>
          {isLoggedIn ? (
            <li onClick={() => navigate(`/cart/${user.cartId}`)} className="px-1 cursor-pointer">
              {`My Cart | ${getUserCartSize(userCart)}`}
            </li>
          ) : (
            <li onClick={() => navigate(`/cart/1`)} className="px-1 cursor-pointer">
              {`Guest Cart | ${getVisitorCartSize(visitorCart)}`}
            </li>
          )}
        </ul>
      </nav >
      {isLoggedIn ? (
        <button type="button" onClick={logoutAndRedirectHome}>
        Logout
      </button>
      )
      :
      (<button type="button" onClick={() => navigate('/login')}>
        Login
      </button>)
      }
      <img src='https://i.postimg.cc/PxqzwzkS/Temple-Rose-Right-Rose.png' alt='Halie Logo' className='h-full w-1/5' />
    </>
  )
}

export default FullNavbar;
