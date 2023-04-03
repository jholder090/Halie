import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { me } from './components/auth/authSlice'
import {
  AllProducts,
  AuthForm,
  Login
} from './components/index'

const AppRoutes = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.me);
  console.log("APP ROUTES USER", user)

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div className='main h-4/5'>
      <Routes >
        <Route path='/' element={<AllProducts />} />
        <Route path='/auth' element={<Login />} />
      </Routes>
    </div>
  )
}

export default AppRoutes;
