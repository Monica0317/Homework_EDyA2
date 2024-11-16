import { ref, set, push, onValue } from "firebase/database";
import { db } from "../firebase/credenciales";


export const addTodo = async (todoText) => {
  try {
    const todoRef = ref(db, "todos/");
    const newTodoRef = push(todoRef);
    await set(newTodoRef, { text: todoText, completed: false });
    console.log("TODO agregado exitosamente");
  } catch (error) {
    console.error("Error al agregar TODO:", error.message);
  }
};

export const getTodos = (callback) => {
  const todoRef = ref(db, "todos/");
  onValue(todoRef, (snapshot) => {
    const todos = snapshot.val();
    const todoList = todos ? Object.keys(todos).map((key) => ({ id: key, ...todos[key] })) : [];
    callback(todoList);
  });
};

