import React, { useState } from 'react';
import { useGetPokemonByNameQuery } from '../Features/pokemonSlice';

const Pokemon = () => {
  const [pokemonName, setPokemonName] = useState('pikachu');

  const { data, error, isLoading } = useGetPokemonByNameQuery(pokemonName, {
    skip: !pokemonName.trim(), 
  });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 ">Pokémon</h2>
      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value.toLowerCase())}
        className="border p-2 rounded mb-4"
        placeholder="nombre.."
      />
      
      {!pokemonName.trim() && (
        <div>nombre del Pokémon</div>
      )}
      
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: no encontrado</div>}
      {data && (
        <div className="space-y-2">
          <h3 className="text-xl capitalize">{data.name}</h3>
          <img 
            src={data.sprites.front_default} 
            alt={data.name}
            className="w-32 h-32"
          />
          <div>Altura: {data.height}</div>
          <div>Peso: {data.weight}</div>
          <div>Experiencia: {data.base_experience}</div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;