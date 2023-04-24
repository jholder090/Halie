import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { me } from './components/auth/authSlice'
import {
  AllProducts,
  SingleProduct,
  AuthForm,
  Login,
  Cart
} from './components/index'

const AppRoutes = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.me);

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div className='main h-4/5'>
      <Routes >
        <Route path='/products' element={<AllProducts />} />
        <Route path='/products/:productId' element={<SingleProduct />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart/:cartId' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default AppRoutes;
