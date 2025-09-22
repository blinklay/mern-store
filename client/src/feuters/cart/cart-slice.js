import { createSlice } from "@reduxjs/toolkit";
import { addToCart, fetchCart } from "./cart-thunk";

const setPending = (state) => {
  state.loading = true;
  state.error = null;
};

const setFulfilled = (state, action) => {
  state.loading = false;
  state.error = null;
  state.products = action.payload.cart;
};

const setRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const initialState = {
  products: [],
  loading: false,
  error: null,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: (builder) => {
    [fetchCart, addToCart].forEach((thunk) => {
      builder
        .addCase(thunk.pending, setPending)
        .addCase(thunk.fulfilled, setFulfilled)
        .addCase(thunk.rejected, setRejected)
    })
  }
})

export default cartSlice.reducer;