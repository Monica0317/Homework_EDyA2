import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementBy } from "./counterSlice";
import styles from "../estilos/counter.module.css"; 

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState(0);

  const handleIncrementBy = () => {
    const value = parseInt(inputValue, 10) || 0;
    dispatch(incrementBy(value));
  };

  return (
    <div className={`text-center ${styles.counterContainer}`}>
      <h1 className={`mb-4 ${styles.counterTitle}`}>Contador: {count}</h1>
      <div className={`mb-4 ${styles.counterButtons}`}>
        <button
          className={`btn  mx-2 ${styles.incrementButton}`}
          onClick={() => dispatch(increment())}
        >
          Incrementar
        </button>
        <button
          className={`btn  mx-2 ${styles.decrementButton}`}
          onClick={() => dispatch(decrement())}
        >
          Decrementar
        </button>
      </div>
      <div className={`d-flex justify-content-center ${styles.counterInputContainer}`}>
        <input
          type="number"
          className={`form-control w-25 ${styles.counterInput}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className={`btn  mx-2 ${styles.incrementByButton}`}
          onClick={handleIncrementBy}
        >
          Incrementar por {inputValue}
        </button>
      </div>
    </div>
  );
};

export default Counter;
