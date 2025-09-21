import { createSlice } from "@reduxjs/toolkit";

export const MODAL_TYPES = {
  DANGER: "DANGER",
  SUCCESS: "SUCCESS"
}

const initialState = {
  isOpen: false,
  content: "",
  type: MODAL_TYPES.DANGER
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      state.content = action.payload.content;
      state.type = action.payload.type;
      state.isOpen = true
    },
    closeModal(state) {
      state.isOpen = false;
      state.content = ""
    }
  }
})

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer