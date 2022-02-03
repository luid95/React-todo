import React from 'react';
import '../css/TodoSearch.css';

const TodoSearch = () => {

    const OnSearchValueChange = (event) => {
        console.log(event.target.value);
    };

    return ( 
        <input 
            className="TodoSearch" 
            placeholder="Cebolla" 
            onChange={OnSearchValueChange}
        />
     );
}
 
export { TodoSearch };