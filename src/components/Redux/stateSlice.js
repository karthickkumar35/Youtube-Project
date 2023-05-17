import { createSlice } from "@reduxjs/toolkit";

const stateSlice = createSlice({
  name: "sample",
  initialState: {
    isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    files: [],
    comment: [],
    user: JSON.parse(localStorage.getItem("user")) || [],
    search: "",
  },
  reducers: {
    logedin: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    files: (state, action) => {
      state.files = action.payload;
    },
    comment: (state, action) => {
      state.comment = action.payload;
    },
    user: (state, action) => {
      state.user = action.payload;
    },
    search: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { logedin, forms, files, comment, user, search } =
  stateSlice.actions;
export default stateSlice.reducer;
