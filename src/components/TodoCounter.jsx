import React, { Fragment} from "react";
import '../css/TodoCounter.css';

const TodoCounter = ({total, completed}) => {
    return ( 
        <Fragment>
            <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
        </Fragment>
     );
}
 
export { TodoCounter };