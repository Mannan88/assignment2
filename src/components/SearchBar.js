import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return ( 
        <div class="search_bar">
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a Pokémon..."
            />
            <button id="searchButton" type="submit">Search</button>
        </form>
        </div>
    );
};

export default SearchBar;  
