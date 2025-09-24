import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthService } from "../../services/AuthService";
import { MODAL_TYPES, openModal } from "../modal/modal-slice";
import { UserService } from "../../services/UserService";

export const getSelf = createAsyncThunk(
  "user/self",
  async (_, { rejectWithValue }) => {
    try {
      const res = await UserService.getSelf()
      return res.data
    } catch (err) {
      rejectWithValue(err.response?.data)
    }
  }
)

export const login = createAsyncThunk(
  "user/login",
  async (authData, { dispatch, rejectWithValue }) => {
    try {
      const res = await AuthService.login(authData.email, authData.password);
      dispatch(openModal({ content: "Успешная авторизация!", type: MODAL_TYPES.SUCCESS }))
      return res.data;
    } catch (err) {
      dispatch(openModal({ content: err.response?.data?.message || "Ошибка авторизации!", type: MODAL_TYPES.DANGER }))
      return rejectWithValue(err.response?.data || "Login error");
    }
  }
);

export const register = createAsyncThunk(
  "user/register",
  async (authData, { dispatch, rejectWithValue }) => {
    try {
      const res = await AuthService.register(authData.email, authData.password);
      dispatch(openModal({ content: "Успешная регистрация!", type: MODAL_TYPES.SUCCESS }))
      return res.data;
    } catch (err) {
      dispatch(openModal({ content: err.response?.data?.message || "Ошибка регистрации!", type: MODAL_TYPES.DANGER }))
      return rejectWithValue(err.response?.data || "Register error");
    }
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
  await AuthService.logout();
  return true;
});