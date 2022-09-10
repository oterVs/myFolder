import React, { useState } from 'react'
import Results from './Results';

const SearchBar = ({ items, onItemsSelected }) => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([])

    function handleChange(e){
        const value = e.target.value;
        setQuery(value)
    }

    return (
        <div>
            <input value={query} type="text" onChange={handleChange}></input>
            <Results items={items} onItemSelected={()=>{}}
            query={query} onResultsCalculated={()=>{}}></Results>
        </div>
    )
}

export default SearchBar