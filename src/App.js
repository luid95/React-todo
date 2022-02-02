import React, { Fragment } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
//import './App.css';

const todos =[
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
  return (
    <Fragment>
      <TodoCounter />
      
      <TodoSearch />
      

      <TodoList>
        {todos.map(todo => (
          
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
