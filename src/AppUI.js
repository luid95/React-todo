import React, { Fragment, useContext } from 'react';

import { TodoContext } from "./context/AppContext";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { TodoForm } from './components/TodoForm';
import { CreateTodoButton } from "./components/CreateTodoButton";
import { Modal } from "./Modal/index";

import { TodosError } from './components/TodosError';
import { TodosLoading } from './components/TodosLoading';
import { EmptyTodos } from './components/EmptyTodos';

const AppUI = () => {

    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = useContext(TodoContext);
    
    return ( 
        <Fragment>
            <TodoCounter />
            
            <TodoSearch />
            
            
            <TodoList>
                {error && <TodosError error ={error} /> }
                {loading && <TodosLoading /> }
                {(!loading && !searchedTodos.length) && <EmptyTodos /> }

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
                
            {!!openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
            
            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
        
        </Fragment>
     );
}
 
export { AppUI };