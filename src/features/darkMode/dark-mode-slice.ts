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
        }
    }
});

export const { setDarkMode, toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;