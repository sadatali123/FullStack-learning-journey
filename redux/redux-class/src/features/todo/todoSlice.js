import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos: [{ id: "abc", task: "demo-task", isDone: false }],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
     
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo); //direct mutation
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    markAsDone: (state, action) => {
      state.todos = state.todo.map((todo) => {
        if (todo.id === action.payload) {
          todo.isDone = true;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions; //second times reducer exporting
export default todoSlice.reducer; // all the reducers export and import on store.js
