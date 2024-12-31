import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import PokemonDisplay from './components/PokemonDisplay';
import PokemonList from './scrollPage/Details.js';
import './App.css';

function App() {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon?Limit=10')
    useEffect(() => {
        const fetchList = async () => {
            try {
                const response = await axios.get(nextUrl);
                setPokemonList((prevList) => [...prevList, ...response.data.results]);
                setNextUrl(response.data.next);
            }
            catch (error) {
                console.error('error fetching Pokemon List', error);
            }
        };
        fetchList();
    }, [nextUrl]);
    const loadMore = () => {
        if (nextUrl) {
            setNextUrl(nextUrl);
        }
    };
    const [pokemon, setPokemon] = useState(null);

    const fetchPokemon = async (query) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
            setPokemon(response.data);
        } catch (error) {
            console.error("Error fetching Pokémon:", error);
            setPokemon(null); // Clear the state if the Pokémon is not found
        }
    };

    return (

        <div className="App">
            <div className='left'>
                <h1>Pokédex</h1>
                <div className='all_pokemons'> <PokemonList pokemonList={pokemonList} />
                    {nextUrl && <button onClick={loadMore}>Load more Pokemons\</button>} </div></div>
            <div className='search_bar'>
                <SearchBar onSearch={fetchPokemon} />
                <PokemonDisplay pokemon={pokemon} /></div>


        </div>
    );
}

export default App;
