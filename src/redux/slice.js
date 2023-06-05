// counterSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async action using createAsyncThunk
export const fetchUser = createAsyncThunk('counter/fetchUser', async (userId, thunkAPI) => {
    try {
      // Simulating an asynchronous API call
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const user = await response.json();
      return user;
    } catch (error) {
      // Handle error and re-throw it to be caught by the rejected action
      thunkAPI.rejectWithValue(error.message);
    }
    
    

  });

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    user: 'null',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default counterSlice.reducer;
