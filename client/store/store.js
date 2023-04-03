import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import authReducer from "../components/auth/authSlice";
import allProductsReducer from "../components/slices/allProductsSlice";
import visitorCartReducer from "../components/slices/visitorCartSlice";
import userCartReducer from '../components/slices/userCartSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    allProducts: allProductsReducer,
    visitorCart: visitorCartReducer,
    userCart: userCartReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
export * from "../components/auth/authSlice";
