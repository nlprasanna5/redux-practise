import { createSlice } from "@reduxjs/toolkit";

// import { UsersData } from "../FakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: JSON.parse(localStorage.getItem('usersData'))|| []},
  reducers: {
    addUser: (state, action) => {
      state.value.push(action.payload);
      localStorage.setItem('usersData',JSON.stringify(state.value));
    },

    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
      localStorage.setItem('usersData',JSON.stringify(state.value));
    },

    updateUsername: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
      localStorage.setItem('usersData',JSON.stringify(state.value));
    },
  },
});

export const { addUser, deleteUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;