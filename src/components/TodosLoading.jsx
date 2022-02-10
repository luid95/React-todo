import React from 'react';
import '../css/TodosLoading.css';

const TodosLoading = () => {
    return ( 
       <div className='LoadingTodo-container'>
            <span className='LoadingTodo-completeIcon'></span>
            <p className='LoadingTodo-text'>Cargando TODOs...</p>
            <span className='LoadingTodo-deleteIcon'></span>
       </div>
     );
}
 
export { TodosLoading };