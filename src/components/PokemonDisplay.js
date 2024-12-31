import React from 'react';
import PokemonCard from './PokemonCard';

const PokemonDisplay = ({ pokemon }) => {
    return (
        <div>
            {pokemon ? <PokemonCard pokemon={pokemon} /> : <p className='info'>No Pokémon found</p>}
        </div>
    );
};

export default PokemonDisplay;
