import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../features/uiSlice";
import projectsReducer from "../features/projectsSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    projects: projectsReducer,
  },
});
