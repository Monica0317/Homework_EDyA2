import React from "react";
import { useCounter } from "../hooks/useCounter";

export const Counter = () => {
  const { counter, increment, decrement, reset } = useCounter(10); // Puedes inicializar el valor del contador

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Disminuir</button>
      <button onClick={reset}>Restablecer</button>
    </div>
  );
};
