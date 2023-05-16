import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";
import FullNavbar from "./FullNavbar";
import ShrunkNavbar from "./ShrunkNavbar";
import "./navbar.css"

const Navbar = () => {
  const [isShrunk, setShrunk] = useState(false);
  const user = useSelector(state => state.auth.me);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const userCart = useSelector(state => state.userCart);
  const visitorCart = useSelector(state => state.visitorCart);
  console.log("Visitor cart: ", visitorCart)

  useEffect(() => {
    const handleNavbarHeight = () => {
      setShrunk((isShrunk) => {
        if (!isShrunk && (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90)) {
          return true;
        }
        if (isShrunk && document.body.scrollTop < 1 && document.documentElement.scrollTop < 1) {
          return false;
        }
        return isShrunk;
      })
    };
    window.addEventListener('scroll', handleNavbarHeight);
    return () => window.removeEventListener('scroll', handleNavbarHeight);
  }, [])

  const getUserCartSize = (userCart) => {
    let size = 0;
    userCart?.map(cartItem => {
      size += cartItem.quantity;
    }
    )
    return size
  }

  const getVisitorCartSize = (cart) => {
    let size = 0;
    for (let product of cart) {
      size += product.quantity;
    }
    return size;
  }

  return (
    <div className={isShrunk ? 'navbarShrunk h-28 z-50 bg-halie-light sticky top-0 flex justify-between items-center transition-all duration-500 ease-in-out' :
      'navbar h-52 z-50 sticky top-0 flex items-center transition-all duration-500 ease-in-out'
    }>
      {isShrunk ?
        <ShrunkNavbar
          user={user}
          isLoggedIn={isLoggedIn}
          userCart={userCart}
          visitorCart={visitorCart}
          getVisitorCartSize={getVisitorCartSize} getUserCartSize={getUserCartSize} />
        :
        <FullNavbar
          user={user}
          isLoggedIn={isLoggedIn}
          userCart={userCart}
          visitorCart={visitorCart}
          getVisitorCartSize={getVisitorCartSize} getUserCartSize={getUserCartSize} />
      }

      {/* <img src='https://i.postimg.cc/q76pMWNw/Temple-Rose-Left-Rose-Joe.png' alt='Halie Logo' className='h-full w-1/5' />
      <img src='https://i.postimg.cc/Jn7HF160/Temple-Rose-Title.png' alt='Halie Logo' className='h-full w-2/5' />
      <small>Shopping as: <strong>{user.firstName ? user.firstName : "Guest"}</strong></small>
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
      <img src='https://i.postimg.cc/PxqzwzkS/Temple-Rose-Right-Rose.png' alt='Halie Logo' className='h-full w-1/5' /> */}
    </div >
  )
}

export default Navbar;
