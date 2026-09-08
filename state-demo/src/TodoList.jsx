import { useState } from "react";

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "initial todo", isDone: false },
  ]);

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      text: "deploy asap",
      isDone: false,
    };

    setTodos(todos.concat(newTodo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const toggleTodo = (id) => {
    setTodos(
        todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
        })
    )
  }

  return (
    <div>
      <h2>--- Todo List --- </h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => toggleTodo(todo.id)}> {todo.isDone ? "Undo" : "Done"} </button>
            <button onClick={() => deleteTodo(todo.id)}>Delete Todo</button>
            
          </li>
        ))}
        <br /> <button onClick={addTodo}>Add Todo</button>
      </ul>
    </div>
  );
};
