import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserCartAsync, selectUserCart } from "../slices/userCartSlice";

const Navbar = () => {
  const [isShrunk, setShrunk] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.me);
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const userCart = useSelector(state => state.userCart)
  // console.log("NAVBAR USERCART", userCart);

  

  useEffect(() => {
    const handleNavbarHeight = () => {
      setShrunk((isShrunk) => {
        if (!isShrunk && (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)) {
          return true;
        }
        if (isShrunk && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) {
          return false;
        }
        return isShrunk;
      })
    };
    window.addEventListener('scroll', handleNavbarHeight);
    return () => window.removeEventListener('scroll', handleNavbarHeight);
  }, [])

  const visitorCart = useSelector(state => state.visitorCart)

  const getVisitorCartSize = (cart) => {
    let size = 0;
    for (let product of cart) {
      size += product.quantity;
    }
    return size;
  }

  const getUserCartSize = (userCart) => {
    let size = 0;
    userCart?.map(cartItem => {
      size += cartItem.quantity;
    }
    )
    return size
  }

  return (
    <div className={isShrunk ? 'navbar h-20 sticky top-0 flex justify-between items-center px-4 bg-slate-600 transition-height duration-500 ease-in-out' :
      'navbar h-36 sticky top-0 flex justify-between items-center px-4 bg-slate-600 transition-height duration-500 ease-in-out'
    }>
      <img src='https://i.postimg.cc/9Mw08wks/lotion.png' alt='Halie Logo' className='h-12' />
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
    </div >
  )
}

export default Navbar;
