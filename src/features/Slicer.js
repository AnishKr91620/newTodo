import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
}

export const counterSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addList: (state,action) => {
      state.todos.push(action.payload)
    },
    toggleTodo: (state,action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed; // Toggle the completed status
      }      
    },
    deleteTode: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addList, toggleTodo, deleteTode } = counterSlice.actions

export default counterSlice.reducer