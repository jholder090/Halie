import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../components/auth/authSlice";
import allProductsReducer from "../components/slices/allProductsSlice";
import visitorCartReducer from "../components/slices/visitorCartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    allProducts: allProductsReducer,
    visitorCart: visitorCartReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../components/auth/authSlice";
