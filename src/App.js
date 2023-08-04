import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";


function App() {

  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString().substring(2,9),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };


  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  };


  return (
    <div className="App">
      <header className="header">
        <h2 className="all_task">Всего: {todos.length}</h2>
        <h2 className="fulfilled">Невыполненные:</h2>
        <h2 className="unfulfilled">Выполненные:</h2>
      </header>
      <div className="container">
        <h1 className="title">TODO-LIST</h1>
        <TodoForm addTask={addTask} />
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              removeTask={removeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
