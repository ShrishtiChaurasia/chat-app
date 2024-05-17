import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: true,
  reducers: {
    toggleTheme: (state) => {
      state = !state;
    },
  },
});

export const { toggleTheme } = toggleTheme.actions;
export default themeSlice.reducer;
