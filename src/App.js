import { useState } from "react";
import "./App.css";

function App() {
  const title = "Todo List";

  const [text, setText] = useState("");

  const [todos, setTodos] = useState([
    { id: 1, text: "Learn HTML & CSS", complete: true },
    { id: 2, text: "Learn JavaScript", complete: true },
    { id: 3, text: "Learn PHP", complete: true },
    { id: 4, text: "Learn NodeJs", complete: false },
    { id: 5, text: "Learn ReactJs", complete: false },
    { id: 6, text: "Learn ReactNative", complete: false },
  ]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: new Date().getTime(), text, complete: false }]);
    setText("");
  };

  const changeCompleteValue = (id) => {
    setTodos(
      todos.map((todo) =>
        parseInt(todo.id) !== parseInt(id)
          ? todo
          : { ...todo, complete: !todo.complete }
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => parseInt(todo.id) !== parseInt(id)));
  };

  return (
    <div className="App">
      <h1 className="todo-title">{title}</h1>

      <form className="todo-form" onSubmit={addTodo}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul className="todo-list">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id} className="todo">
              <input
                onChange={() => changeCompleteValue(todo.id)}
                checked={todo.complete}
                type="checkbox"
              />
              <p className={`todo-text ${todo.complete && "complete"}`}>
                {todo.text}
              </p>
              <button onClick={() => removeTodo(todo.id)}>Delete</button>
            </li>
          ))
        ) : (
          <h3>The To Do List Is Empty</h3>
        )}
      </ul>
    </div>
  );
}

export default App;
