import { configureStore } from '@reduxjs/toolkit'; // Correct import
import todoReducer from '../features/Slicer'; // Adjust path if needed

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});
