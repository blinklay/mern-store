import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./user-thunk";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isAuth: false,
    loading: false,
    error: null
  },
  reducers: {
    setAuth(state, bool) {
      state.isAuth = bool
    },
    setUser(state, user) {
      state.user = user
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
        state.isAuth = true
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
        state.isAuth = true
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })
  }
})

export default userSlice.reducer