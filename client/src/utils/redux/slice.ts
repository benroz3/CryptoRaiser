import { createSlice } from "@reduxjs/toolkit";

export const navModal = createSlice({
  name: "navModal",
  initialState: {
    showNavModal: false,
  },
  reducers: {
    setShowNavModal: (state) => {
      state.showNavModal = !state.showNavModal;
    },
    closeNavModal: (state) => {
      state.showNavModal = false;
    },
  },
});

export const { setShowNavModal, closeNavModal } = navModal.actions;
export default navModal.reducer;