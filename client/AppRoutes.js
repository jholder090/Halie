import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {
  AllProducts,
  AuthForm,
  Login
} from './components/index'

const AppRoutes = () => {



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
