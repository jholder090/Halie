import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSingleProductAsync = createAsyncThunk("products/fetchSingleProduct", async (productId) => {
  const { data } = await axios.get(`http://localhost:5000/api/products/${productId}`);
  console.log("SINGLE PRODUCT SLICE DATA", data);
  return data;
});

export const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSingleProductAsync.fulfilled, (state, action) => {
      return action.payload;
    })
  }
});

export const selectSingleProduct = (state) => state.singleProduct;

export default singleProductSlice.reducer
