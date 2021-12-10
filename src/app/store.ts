import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../features/darkMode/dark-mode-slice";

export const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;