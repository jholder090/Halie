import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  AllProducts,
 } from './components/index'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/banana' element={<AllProducts />} />
    </Routes>
  )
}

export default AppRoutes;
