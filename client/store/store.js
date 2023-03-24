import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../components/auth/authSlice";
import allProductsReducer from "../components/slices/allProductsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    allProducts: allProductsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../components/auth/authSlice";
