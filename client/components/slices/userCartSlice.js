const { createAsyncThunk, createSlice } = require("@reduxjs/toolkit");
import axios from "axios";

export const fetchUserCartAsync = createAsyncThunk("userCart/fetchAll", async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:5000/api/cart/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
});

export const addToUserCartAsync = createAsyncThunk(
  "cart/add",
  async ({ cartId, productId, quantity, price}) => {
    try {
      await axios.post(`http://localhost:5000/api/cart/${cartId}`, {
        cartId,
        productId,
        quantity,
        price
      });
const { data } = await axios.get(
  `http://localhost:5000/api/cart/${cartId}`
);
// console.log("SLICE DATA", data)
return data;
    } catch (err) {
      console.log(err);
    }
  }
);

// export const removeCartItemAsync = createAsyncThunk(
//   "cart/remove",
//   async ({ idx, cartId }) => {
//     try {
//       await axios.delete(`http://localhost:3000/api/cart/${cartId}/${idx}`);
//       const { data } = await axios.get(
//         `http://localhost:3000/api/cart/${cartId}`
//       );
//       return data;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

export const adjustQtyAsync = createAsyncThunk(
  "cart/increase",
  async (cartItem) => {
    try {
      const { id, cartId, productId, quantity, price } = cartItem;
      // console.log("ID", id, "CARTID", cartId, "PRODUCTID", productId, "QTY", quantity)
      // const updatedCartItemQty = { id, quantity, cartId };
      await axios.put(
        `http://localhost:5000/api/cart/${id}`, //if issue come back here
        {
          // id,
          // cartId,
          // productId,
          quantity,
          price
        }
      );
      const { data } = await axios.get(
        `http://localhost:5000/api/cart/${cartId}`
      );
      // console.log("ADJUST QTY DATA FROM SLICE", data)
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const userCartSlice = createSlice({
  name: "userCart",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUserCartAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(addToUserCartAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(adjustQtyAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    // builder.addCase(removeCartItemAsync.fulfilled, (state, action) => {
    //   return action.payload;
    // });
  },
});

export const selectUserCart = (state) => state.userCart;
export default userCartSlice.reducer;
