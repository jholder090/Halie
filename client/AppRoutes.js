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
  console.log("APP ROUTES User.cartID: ", user.cartId)



  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div className='main h-auto'>
      <Routes >
        <Route path='/home' user={user} element={<Home />} />
        <Route path='/products' user={user} element={<AllProducts />} />
        <Route path='/products/:productId' user={user} element={<SingleProduct />} />
        <Route path='/login' user={user} element={<Login />} />
        <Route path='/checkout' user={user} element={<Checkout />} />
        <Route path='/completion' user={user} element={<Completion />} />
        {user && user.cartId ?
          <Route path={`/cart/${user.cartId}`} user={user} element={<Cart />} />
          :
          <Route path={`/cart/guest`} user={user} element={<Cart />} />}
      </Routes>
    </div>
  )
}

export default AppRoutes;
