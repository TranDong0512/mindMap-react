/** @format */

import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type TodoState = {
  todos: Todo[];
};

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: nanoid(),
        title: action.payload,
        completed: false,
      });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.todos = state.todos.filter((item) => item.id !== id);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todoToggle = state.todos.find((item) => item.id === action.payload);
      if (todoToggle) todoToggle.completed = !todoToggle.completed;
    },
  },
});
export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
