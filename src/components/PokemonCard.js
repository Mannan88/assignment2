import React from 'react';

const PokemonCard = ({ pokemon }) => {
    return (
        <div className='poke_card'>
            <h2 id="info_name">{pokemon.name}</h2>
            <img className='info_image' src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p className='info'>Height: {pokemon.height}</p>
            <p className='info'>Weight: {pokemon.weight}</p>
            <p className='info'>Type: {pokemon.types.map(type => type.type.name).join(', ')}</p>
            <p className='info'>Attack: {pokemon.stats[4].base_stat}</p>
            <p className='info'>Defense: {pokemon.stats[3].base_stat}</p>
        </div>
    );
};

export default PokemonCard;
