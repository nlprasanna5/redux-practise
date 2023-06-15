import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },

    todoComplete: (state, action) => {
      const completedValues=state.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      });
    //   console.log(completedValues)
      return completedValues;
    },

    deleteTodo:(state,action) => {
        const deleteValues=state.filter((item,index)=> {
            return item.id !== action.payload
            
        });
        return deleteValues;
    }
  },
});

export const { addTodo, todoComplete,deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
