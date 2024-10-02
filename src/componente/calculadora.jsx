import React, { useState } from 'react';


const Calculadora = () => {
    
    const [entrada, setEntrada] = useState('');
    const [resultado, setResultado] = useState('');

    const manejarClick = (valor) => {
        setEntrada(entrada + valor);
    };

    const calcularResultado = () => {
        try {
            setResultado(eval(entrada));  
        } catch (error) {
            setResultado('Error');  
        }
    };

    const limpiarEntrada = () => {
        setEntrada('');
        setResultado('');
    };

    return (
        <div className="calculadora">
            <div className="pantalla"> 
                <input type="text" value={entrada} readOnly/>
                <div className="resultado"> {resultado}</div>
            </div>
            <div className="botones">
                <button onClick={limpiarEntrada}>C</button>
                <button onClick={() => manejarClick('7')}>7</button>
                <button onClick={() => manejarClick('8')}>8</button>
                <button onClick={() => manejarClick('/')}>÷</button>
                <button onClick={() => manejarClick('9')}>9</button>
                <button onClick={() => manejarClick('4')}>4</button>
                <button onClick={() => manejarClick('5')}>5</button>
                <button onClick={() => manejarClick('*')}>*</button>
                <button onClick={() => manejarClick('6')}>6</button>
                <button onClick={() => manejarClick('1')}>1</button>
                <button onClick={() => manejarClick('2')}>2</button>
                <button onClick={() => manejarClick('-')}>-</button>
                <button onClick={() => manejarClick('3')}>3</button>
                <button onClick={() => manejarClick('0')}>0</button>
                <button onClick={() => manejarClick('.')}>.</button>
                <button onClick={() => manejarClick('+')}>+</button>
                <button onClick={calcularResultado}>=</button>
            </div>
        </div>
    );
};

export default Calculadora;
