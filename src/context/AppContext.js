import React, { useState, createContext } from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = createContext();

function TodoProvider(props) {

    const {
        item: todos, 
        saveItem: saveTodos, 
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);
    
    //Declaracion de estado
    const [searchValue, setSerchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    //Verificar  todos completed and all todos
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    //Busqueda del search para Todos
    let searchedTodos = [];
    
    if(!searchValue.length >= 1){
        
        searchedTodos = todos;
    }else{
        
        searchedTodos = todos.filter(todo => {
    
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
    
          return todoText.includes(searchText);
    
        });
        
    }
    
    //funcion para marcar completar y eliminar Todos
    const completeTodo = (text) => {
    
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
    
        saveTodos(newTodos);
    };
      
    const deleteTodo = (text) => {

        const todoIndex = todos.findIndex(todo => todo.text === text);

        const newTodos = [...todos];
        newTodos.splice(todoIndex,1);

        saveTodos(newTodos);
    };

    //funcion para marcar crear y eliminar Todos
    const addTodo = (text) => {
    
        const newTodos = [...todos];

        newTodos.push({
            completed: false,
            text
        });
    
        saveTodos(newTodos);
    };

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSerchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };