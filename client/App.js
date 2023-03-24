import React from "react";
import AppRoutes from './AppRoutes';
import { Navbar, Footer } from "./components/index";

const App = () => {
  // console.log("PROCESS", process.env.JWT);
  return (
    <div className="app-container">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>

  );
};

export default App;
