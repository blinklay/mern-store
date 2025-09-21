import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../feuters/user/user-slice"
import modalReducer from "../feuters/modal/modal-slice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  }
})
