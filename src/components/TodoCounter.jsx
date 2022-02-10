import React, { Fragment, useContext } from "react";
import { TodoContext } from "../context/AppContext";
import '../css/TodoCounter.css';

const TodoCounter = () => {

    const { totalTodos, completedTodos } = useContext(TodoContext);

    return ( 
        <Fragment>
            <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
        </Fragment>
     );
}
 
export { TodoCounter };