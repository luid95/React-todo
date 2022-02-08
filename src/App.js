import React, { useState, useEffect } from "react";
import { AppUI } from "./AppUI";

// const defaultTodos =[
//   {
//     text: 'Cortar cebollar',
//     completed: true
//   },
//   {
//     text: 'Tomar curso de React',
//     completed: false
//   },
//   {
//     text: 'Llorar con la llorona',
//     completed: false
//   },
//   { 
//     text: 'LALALALAA', 
//     completed: false 
//   }
// ];

function useLocalStorage (itemName, initialValue){

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;

        }else{
          parsedItem = JSON.parse(localStorageItem);

        }

        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 1000);
  });



  //funcion para persistir los cambios generados a los TODOs
  const saveItem = ( newItem ) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);

      localStorage.setItem(itemName, stringifiedItem);

      setItem(newItem);
      setLoading(true);
    } catch (error) {
      setError(error);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error
  };

}

function App() {

  const {
    item: todos, 
    saveItem: saveTodos, 
    loading,
    error
  } = useLocalStorage('TODOS_V1', []);

  //Declaracion de estado
  const [searchValue, setSerchValue] = useState('');

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

  return (
    <AppUI
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSerchValue={setSerchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
