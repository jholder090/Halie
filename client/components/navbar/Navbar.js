import React from "react";


const Navbar = () => {
  return (
    <div className='h-1/5 sticky top-0 flex justify-between items-center px-4 bg-slate-600'>
      <img src='https://i.postimg.cc/9Mw08wks/lotion.png' alt='Halie Logo' className='h-12' />
      <nav>
        <button className='md:hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        <ul className='fixed left-0 right-0 bg-slate-600 min-h-screen p-4 space-y-4 transform translate-x-full'>
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
