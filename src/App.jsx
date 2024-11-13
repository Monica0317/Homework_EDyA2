import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import Counter from './components/Counter';
import Pokemon from './components/Pokemon';

const App = () => {
  return (
    <Provider store={store}>
      <div className="min-vh-100 min-vw-100 bg-light d-flex flex-column justify-content-center align-items-center py-4">
        <h1 className="text-4xl font-bold mb-8 text-primary text-shadow-lg fw-bold">
          Parcial 3
        </h1>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 col-md-12">
              <div className="p-4 bg-white rounded shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-4 text-success">
                  Pokémon 
                </h2>
                <Pokemon />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="p-4 bg-white rounded shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-4 text-info">
                  Contador 
                </h2>
                <Counter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
