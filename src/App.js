import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const title = "Todo List";

  return (
    <div className="App">
      <h1 className="todo-title">{title}</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
