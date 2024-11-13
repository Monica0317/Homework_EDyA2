import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, setText, reset, reset2 } from '../Features/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const { count, text } = useSelector((state) => state.counter);
  const [savedText, setSavedText] = useState('');

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && text.trim()) {
      setSavedText(text);
      dispatch(setText(''));
    }
  };

  const clearSavedText = () => {
    setSavedText('');
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-center items-center space-x-2">
        <button
          onClick={() => dispatch(decrement())}
          className="px-2 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
        >
          -
          
        </button>
        <span className="text-lg font-semibold ">{count}</span>
        <button
          onClick={() => dispatch(increment())}
          className="px-1 py-1 bg-green-500 text-white rounded text-sm hover:bg-green-600"
        >
          +

        </button>
      </div>
      <button
        onClick={() => dispatch(reset())}
        className="w-full px-2 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
      >
        Reiniciar Contador
      </button>

      <input
        type="text"
        value={text}
        onChange={(e) => dispatch(setText(e.target.value))}
        onKeyPress={handleKeyPress}
        className="w-full p-2 border-2 border-gray-300 rounded text-sm"
        placeholder="Escribe algo..."
      />
      <button
        onClick={() => dispatch(reset2())}
        className="w-full px-2 py-1 bg-indigo-500 text-white rounded text-sm hover:bg-indigo-600"
      >
        Reiniciar Texto
      </button>

      <div className="bg-gray-100 p-3 rounded shadow-sm">
        <h3 className="text-base font-semibold mb-2 text-gray-800">Texto Guardado:</h3>
        <p className="text-sm text-gray-600">{savedText || 'No hay texto guardado.'}</p>
        <button
          onClick={clearSavedText}
          className="mt-2 px-2 py-1 bg-red-500 text-white rounded text-sm hover:bg-red-600"
        >
          Borrar Texto Guardado
        </button>
      </div>
    </div>
  );
};

export default Counter;
