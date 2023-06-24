import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Todo = {
  id: string;
  description: string;
  isComplete: boolean;
};

export type TodoSliceState = Todo[];

const initialState: TodoSliceState = [];

export const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    toggleStatus: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isComplete = !todo.isComplete;
      }
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleStatus, removeTodo } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
