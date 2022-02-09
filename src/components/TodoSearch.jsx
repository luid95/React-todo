import React, { useContext } from 'react';
import { TodoContext } from '../context/AppContext';
import '../css/TodoSearch.css';

const TodoSearch = () => {

    const { searchValue, setSerchValue } =useContext(TodoContext);

    //Declaracion de Eventos
    const OnSearchValueChange = (event) => {
        console.log(event.target.value);
        const search = event.target.value;
        setSerchValue(search)
    };

    return ( 
        <>
        <input 
            className="TodoSearch" 
            placeholder="Cebolla" 
            value={searchValue}
            onChange={OnSearchValueChange}
        />

        <p>{searchValue}</p>
        </>
     );
}
 
export { TodoSearch };