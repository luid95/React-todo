import React from 'react';
import '../css/CreateTodoButton.css';

const CreateTodoButton = (props) => {

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
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