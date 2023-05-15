import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import ScrollToTop from './helpers/ScrollToTop';


const root = createRoot(document.getElementById("root"));


root.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <ScrollToTop />
        <App />
      </React.StrictMode>
    </Provider>
  </Router>
);
