import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { me } from './components/auth/authSlice'
import {
  Home,
  AllProducts,
  SingleProduct,
  Login,
  Cart,
  Checkout,
  Completion,
} from './components/index'


const AppRoutes = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.me);
  // console.log("APP ROUTES User.cartID: ", user.cartId)



  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div className='main h-auto'>
      <Routes >
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<AllProducts />} />
        <Route path='/products/:productId' element={<SingleProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/completion' element={<Completion />} />
        {user && user.length ?
          <Route path={`/cart/${user.cartId}`} element={<Cart />} />
          :
          <Route path={`/cart/guest`} element={<Cart />} />}
      </Routes>
    </div>
  )
}

export default AppRoutes;
