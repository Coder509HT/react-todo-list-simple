import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todos = [
  { id: uuidv4(), text: "Learn HTML & CSS", complete: true },
  { id: uuidv4(), text: "Learn JavaScript", complete: true },
  { id: uuidv4(), text: "Learn PHP", complete: true },
  { id: uuidv4(), text: "Learn NodeJs", complete: false },
  { id: uuidv4(), text: "Learn ReactJs", complete: false },
  { id: uuidv4(), text: "Learn ReactNative", complete: false },
];

const todoSlice = createSlice({
  name: "todos",
  initialState: { value: todos },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    changeCompleteTodoValue: (state, action) => {
      state.value = state.value.map((todo) =>
        todo.id.toString() !== action.payload.id.toString()
          ? todo
          : { ...todo, complete: !todo.complete }
      );
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter(
        (todo) => todo.id.toString() !== action.payload.id.toString()
      );
    },
  },
});

export const { addTodo, changeCompleteTodoValue, removeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
