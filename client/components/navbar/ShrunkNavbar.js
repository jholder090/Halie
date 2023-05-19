import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";

const ShrunkNavbar = ({ user, isLoggedIn, userCart, visitorCart, getVisitorCartSize, getUserCartSize }) => {

  const navigate = useNavigate();

  const logoutAndRedirectHome = () => {
    dispatch(logout());
    navigate('/home');
  };

  return (
    <>

      <img src='https://i.postimg.cc/4NBkbCyf/Temple-Rose-Title-Shrunk.png' alt='Halie Logo' className='h-full w-1/4' />
      <nav className='flex items-center justify-center h-full w-1/4'>
        <ul className='flex'>
          <li onClick={() => navigate(`/home`)} className="px-1 cursor-pointer">Home</li>
          <li onClick={() => navigate(`/products/`)} className="px-1 cursor-pointer">Products</li>
          {isLoggedIn ? (
            <li onClick={() => navigate(`/cart/${user.cartId}`)} className="px-1 cursor-pointer">
              {`My Cart | ${getUserCartSize(userCart)}`}
            </li>
          ) : (
            <li onClick={() => navigate(`/cart/guest`)} className="px-1 cursor-pointer">
              {`Guest Cart | ${getVisitorCartSize(visitorCart)}`}
            </li>
          )}
        </ul>
      </nav>
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
    </>
  )
}

export default ShrunkNavbar;
