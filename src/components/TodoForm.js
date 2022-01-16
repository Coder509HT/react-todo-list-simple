import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoReducer";
import { v4 as uuidv4 } from "uuid";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const createTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: uuidv4(), text, complete: false }));
    setText("");
  };

  return (
    <form className="todo-form" onSubmit={createTodo}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
