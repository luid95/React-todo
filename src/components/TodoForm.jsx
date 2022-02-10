import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/AppContext';

import '../css/TodoForm.css';

const TodoForm = () => {

    //Crear un estado para el input
    const [newTodoValue, setNewTodoValue] = useState('');

    //Consumir el estado
    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext);
    
    const onChange = (event) => {
        //actualizar mi estado donde se almacena el nuevo Todo
        setNewTodoValue(event.target.value);

    };

    const onCancel = () => {
        
        setOpenModal(false);
    };

    const onSubmit = (event) => {
        
        event.preventDefault();
        
        //limpiar de espacios 
        let newValue = newTodoValue.trim();
        
        addTodo(newValue);
        setOpenModal(false);
    };

    return ( 
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Cortar cebolla para el almuerzo'
            />

            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    className='TodoForm-button TodoForm-button-cancel'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type='submit'
                    className='TodoForm-button TodoForm-button-add '
                >
                    Agregar
                </button>
            </div>
        </form>
     );
}
 
export { TodoForm };