import { createSlice } from "@reduxjs/toolkit";
import { getSelf, login, register } from "./user-thunk";

const setPendng = (state) => {
  state.loading = true;
  state.error = false;
}

const setFullfield = (state, action) => {
  state.loading = false;
  state.error = null;
  state.user = action.payload.user;
  state.isAuth = true;
}

const setRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
}

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isAuth: false,
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    [register, login]
      .forEach((thunk) => {
        builder
          .addCase(thunk.pending, setPendng)
          .addCase(thunk.fulfilled, setFullfield)
          .addCase(thunk.rejected, setRejected)
      })
    builder
      .addCase(getSelf.pending, setPendng)
      .addCase(getSelf.rejected, setRejected)
      .addCase(getSelf.fulfilled, (state, action) => {
        const user = action.payload.user || null;

        state.loading = false;
        state.error = null;
        state.isAuth = !!user;
        state.user = user ? user : {};
      })
  }
})

export default userSlice.reducer