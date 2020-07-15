import React from 'react';
import uuid from "uuid"
import "bootstrap/dist/css/bootstrap.min.css"
import TodoList from "./components/TodoList"
import TodoInput from "./components/TodoInput"
//github-auto-commit-check
function App() {
  return (
    <div>
      <TodoList className="bg-danger" />
      <TodoInput className="bg-primary" />
    </div>
  );
}

export default App;
