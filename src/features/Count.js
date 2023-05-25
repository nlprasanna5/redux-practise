import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: 'count',
  initialState: 0, // Use initialState instead of initialValue

  reducers: {
    increment: (state, action) => {
      return state + 1; // Return a new state object
    },
    decrement: (state, action) => {
      return state - 1; // Return a new state object
    },
    reset: (state, action) => {
      return 0; // Return a new state object
    }
  }
});

export const { increment, decrement, reset } = countSlice.actions;

export default countSlice.reducer;
