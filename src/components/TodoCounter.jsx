import React, { Fragment} from "react";
import '../css/TodoCounter.css';

const TodoCounter = () => {
    return ( 
        <Fragment>
            <h2 className="TodoCounter">Has completado 2 de 3 TODOs</h2>
        </Fragment>
     );
}
 
export { TodoCounter };