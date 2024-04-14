import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import List from "./components/list";
import Todo from "./types";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  // const [newTodo, setNewTodos] = useState("");
  const updateTodo = (id: string) => {
    const newtask = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      } else {
        return todo;
      }
    });
    setTodos(newtask);
  };
  const deleteTodo = (id: string) => {
    const deletedTodo = todos.filter((todo) => todo.id != id);
    setTodos(deletedTodo);
  };
  const addNewTodo = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
  };
  const allChecked = (done: boolean) => {
    setTodos(todos.map((todo) => ({ ...todo, done })));
  };
  const allDeleteTask = () => {
    setTodos(todos.filter((todo) => todo.done != true));
  };
  useEffect(() => {
    async function getTodos() {
      const response = await fetch("http://localhost:9000/todos");
      const data = await response.json();
      setTodos(data);
      console.log(data);
    }
    getTodos();
  }, []);

  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header addNewTodo={addNewTodo} />
        <List todos={todos} updateTodo={updateTodo} deletedTodo={deleteTodo} />
        <Footer
          todo={todos}
          allChecked={allChecked}
          allDeleteTask={allDeleteTask}
        />
      </div>
    </div>
  );
}

export default App;
