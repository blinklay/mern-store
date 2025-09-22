import { createAsyncThunk } from "@reduxjs/toolkit";
import { CartService } from "../../services/CartService";

export const addToCart = createAsyncThunk(
  "cart/add",
  async (cartData, { rejectWithValue }) => {
    try {
      const res = await CartService.addToCart(cartData.slug, cartData.variant, cartData.count);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Cart error");
    }
  }
)

export const fetchCart = createAsyncThunk(
  "cart/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await CartService.fetchCart()
      return res.data
    } catch (err) {
      return rejectWithValue(err.response?.data || "Cart error")
    }
  }
)