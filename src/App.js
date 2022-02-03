import React, { Fragment, useState } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
//import './App.css';

const defaultTodos =[
  {
    text: 'Cortar cebollar',
    completed: true
  },
  {
    text: 'Tomar curso de React',
    completed: false
  },
  {
    text: 'Llorar con la llorona',
    completed: false
  },
  { 
    text: 'LALALALAA', 
    completed: false 
  }
];

function App() {

  //Declaracion de estado
  const [todos, setTodos] = useState(defaultTodos);
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

  return (
    <Fragment>
      <TodoCounter 
        total ={totalTodos}
        completed ={completedTodos}
      />
      
      <TodoSearch 
        searchValue={searchValue}
        setSerchValue={setSerchValue}
      />
      

      <TodoList>
        {searchedTodos.map(todo => (
          
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed} 
          />
        ))}
        </TodoList>
      
      <CreateTodoButton />
      
    </Fragment>
  );
}

export default App;
