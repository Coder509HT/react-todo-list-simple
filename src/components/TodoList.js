import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.value);

  console.log(todos);

  return (
    <ul className="todo-list">
      {todos.length > 0 ? (
        todos.map((todo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <h3>The To Do List Is Empty</h3>
      )}
    </ul>
  );
};

export default TodoList;
