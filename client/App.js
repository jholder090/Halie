import React from "react";
import AppRoutes from './AppRoutes';
import { Navbar, Footer } from "./components/index";


const App = () => {
  // console.log("PROCESS", process.env.JWT);
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>

  );
};

export default App;
