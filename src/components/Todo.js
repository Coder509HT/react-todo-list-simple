import { useDispatch } from "react-redux";

import { changeCompleteTodoValue, removeTodo } from "../features/todoReducer";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li className="todo">
      <input
        onChange={() => dispatch(changeCompleteTodoValue({ id: todo.id }))}
        checked={todo.complete}
        type="checkbox"
      />
      <p className={`todo-text ${todo.complete && "complete"}`}>{todo.text}</p>
      <button onClick={() => dispatch(removeTodo({ id: todo.id }))}>
        Delete
      </button>
    </li>
  );
};

export default Todo;
