import React from 'react';
const Card = ({pokemon}) => {
    return (
        <div class="display_cards">
            <img className='poke_image2' src={pokemon.sprites.front_default} alt={pokemon.name}/>
            <p className='poke_name2' >{pokemon.name}</p>
        </div>
    );
};
export default Card;