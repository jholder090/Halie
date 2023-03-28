import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AllProducts,
} from './components/index'

const AppRoutes = () => {



  return (
    <div className='main h-4/5'>
      <Routes >
        <Route path='/' element={<AllProducts />} />
      </Routes>
      </div>
      )
}

export default AppRoutes;
