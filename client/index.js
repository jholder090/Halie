import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import  Alpine  from "alpinejs";

const root = createRoot(document.getElementById("root"));

Alpine.start();

root.render(
  <Router>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Router>
);
