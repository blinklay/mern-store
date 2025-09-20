import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../services/AuthService";

export const login = createAsyncThunk(
  "user/login",
  async (authData, { rejectWithValue }) => {
    try {
      const res = await AuthService.login(authData.email, authData.password);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Login error");
    }
  }
);

export const register = createAsyncThunk(
  "user/register",
  async (authData, { rejectWithValue }) => {
    try {
      const res = await AuthService.register(authData.email, authData.password);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Register error");
    }
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
  await AuthService.logout();
  return true;
});