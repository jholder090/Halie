import React from "react";


const Navbar = () => {
  return (
    <div className='navbar h-1/5 sticky top-0 flex justify-between items-center px-4 bg-slate-600' x-data='{navbarOpen: false}'>
      <img src='https://i.postimg.cc/9Mw08wks/lotion.png' alt='Halie Logo' className='h-12' />
      <nav>
        <button className='md:hidden' @click=>
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
