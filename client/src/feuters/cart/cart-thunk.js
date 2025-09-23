import { createAsyncThunk } from "@reduxjs/toolkit";
import { CartService } from "../../services/CartService";
import { MODAL_TYPES, openModal } from "../modal/modal-slice";

export const addToCart = createAsyncThunk(
  "cart/add",
  async (cartData, { dispatch, rejectWithValue }) => {
    try {
      const res = await CartService.addToCart(cartData.slug, cartData.variant, cartData.count);
      dispatch(openModal({ content: "Товар добавлен!", type: MODAL_TYPES.SUCCESS }))
      return res.data;
    } catch (err) {
      dispatch(openModal({ content: err.response?.data?.message || "Ошибка при добовлении в корзину!", type: MODAL_TYPES.DANGER }))
      return rejectWithValue(err.response?.data || "Cart error");
    }
  }
)

export const removeFromCart = createAsyncThunk(
  "cart/remove",
  async (cartData, { dispatch, rejectWithValue }) => {
    try {
      const res = await CartService.removeFromCart(cartData.slug, cartData.variant, cartData.count)
      dispatch(openModal({ content: "Товар удален!", type: MODAL_TYPES.SUCCESS }))
      return res.data;
    } catch (err) {
      dispatch(openModal({ content: err.response?.data?.message || "Не удалось убрать товар!", type: MODAL_TYPES.DANGER }))
      return rejectWithValue(err.response?.data || "Не удалось убрать товар!")
    }
  }
)

export const fetchCart = createAsyncThunk(
  "cart/get",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const res = await CartService.fetchCart()
      return res.data
    } catch (err) {
      dispatch(openModal({ content: err.response?.data?.message || "Ошибка при получении корзины!", type: MODAL_TYPES.DANGER }))
      return rejectWithValue(err.response?.data || "Cart error")
    }
  }
)