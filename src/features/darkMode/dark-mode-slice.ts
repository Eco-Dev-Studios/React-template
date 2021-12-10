import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DarkModeState {
  isDarkMode: boolean;
}

const initialState: DarkModeState = {
  isDarkMode: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },

    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
      if (state.isDarkMode) {
        document.documentElement.classList.add("dark");
        return;
      }
      document.documentElement.classList.remove("dark");
    },
  },
});

export const { setDarkMode, toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
