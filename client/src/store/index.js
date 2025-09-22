import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../feuters/user/user-slice"
import modalReducer from "../feuters/modal/modal-slice"
import cartReducer from "../feuters/cart/cart-slice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    cart: cartReducer
  }
})
