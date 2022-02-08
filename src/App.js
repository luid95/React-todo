import React, { useState } from "react";
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

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];

  }else{
    parsedTodos = JSON.parse(localStorageTodos);

  }

  //Declaracion de estado
  const [todos, setTodos] = useState(parsedTodos);
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

  //funcion para persistir los cambios generados a los TODOs
  const saveTodos = ( newTodos ) => {
    const stringifiedTodos = JSON.stringify(newTodos);

    localStorage.setItem('TODOS_V1', stringifiedTodos);

    setTodos(newTodos);
  };

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
