import React, { useState } from 'react'
import Search_result from './Search_result';

const Search = () => {
    const [search, setKey]= useState('');
    const inputEvent = (e)=>{
        const data = e.target.value;
        setKey(data);
        console.log(data);
    }
    return (
        <div>
            <h1>Hi.. Search here</h1>
            <input type="text" placeholder="Search here" onChange={inputEvent} />
            {search === '' ? null : <Search_result name={search} />}
            
        </div>
    )
}

export default Search
