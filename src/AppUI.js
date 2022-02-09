import React, { Fragment, useContext } from 'react';
import { TodoContext } from "./context/AppContext";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";

const AppUI = () => {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo
    } = useContext(TodoContext);
    
    return ( 
        <Fragment>
            <TodoCounter />
            
            <TodoSearch />
            
            
            <TodoList>
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

                {searchedTodos.map(todo => (
                
                <TodoItem 
                    key={todo.text} 
                    text={todo.text}
                    completed={todo.completed} 
                    onComplete={ () => completeTodo(todo.text) }
                    onDelete={ () => deleteTodo(todo.text) }
                />
                ))}
            </TodoList>
                

            
            <CreateTodoButton />
        
        </Fragment>
     );
}
 
export { AppUI };