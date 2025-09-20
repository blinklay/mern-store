import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../feuters/user/user-slice"

export const store = configureStore({
  reducer: {
    user: userReducer
  }
})
