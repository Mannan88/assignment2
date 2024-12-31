import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from "./Cards";
 const PokemonList = ({pokemonList}) => {
    const [list, setList] =  useState([]);
    useEffect(() =>
    {
        const fetchList = async ()=>{
            try{
                const detailedList = await Promise.all(
                    pokemonList.map(async(pokemon)=>{
                        const response = await axios.get(pokemon.url);
                        return response.data;
                    })
                );
                setList(detailedList);
            }
            catch(error){
                console.error('Error fetching pokemon details:', error);
            }
        };
        fetchList();
    } , [pokemonList]); 
    return (
        <div className='pokemon_cards'>
            {list.map((pokemon)=>(
         <Card key={pokemon.name} pokemon={pokemon}/>)
            )}
        </div>
    )
 }
 export default PokemonList;