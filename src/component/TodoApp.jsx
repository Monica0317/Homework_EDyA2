import React, { useState, useEffect } from "react";
import { addTodo, getTodos } from "../services/todoService"; 
import styles from "../estilos/TodoApp.module.css";

const TodoApp = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos((fetchedTodos) => {
      setTodos(fetchedTodos);
    });
  }, []);

  const handleAddTodo = async () => {
    if (todoText.trim() !== "") {
      await addTodo(todoText);
      setTodoText("");
    } else {
      alert("El TODO no puede estar vacío.");
    }
  };


  return (
    <div className={` min-vh-100 min-vw-100 justify-content-center ${styles.todoContainer}`}>
      <h1 className={`text-center ${styles.todoTitle}`}>TODO App</h1>
      <div className={`d-flex justify-content-center ${styles.todoInputContainer}`}>
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="Escribe tu tarea..."
          className={`form-control ${styles.todoInput}`}
        />
        <button onClick={handleAddTodo} className={`btn  ${styles.addTodoButton}`}>
          Agregar
        </button>
      </div>
      <ul className={`list-group mt-4 ${styles.todoList}`}>
        {todos.map((todo) => (
          <li key={todo.id} className={`list-group-item d-flex justify-content-between align-items-center ${styles.todoItem}`}>
            <span>{todo.text}</span>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
