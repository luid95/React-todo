import React from "react";
import { TodoProvider } from "./context/AppContext";
import { AppUI } from "./AppUI";


function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
