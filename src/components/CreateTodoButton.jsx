import React, { Fragment } from 'react';
import '../css/CreateTodoButton.css';

const CreateTodoButton = (props) => {

    const onClickButton = (msg) => {
        alert(msg);
    };

    return ( 
        <button 
            className="CreateTodoButton"
            onClick={ () => onClickButton('Aqui deberia abrir el modal') }
        >
        +
        </button>
     );
}
 
export { CreateTodoButton };