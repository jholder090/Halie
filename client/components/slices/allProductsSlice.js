import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllProducts = createAsyncThunk(
  "products/fetchAll",
  async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/products');
      return data;
    } catch (err) {
       console.log(err)
    }
  }
);

export const productsSlice = createSlice ({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  }
});

export const selectAllProducts = (state) => state.allProducts;
export default productsSlice.reducer;
