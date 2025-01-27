import React, { useState } from "react";
import Addtask from "./Components/Addtask";
import List from "./Components/List";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (value) => {
    if (value.trim() == "") return;
    const newtask = { id: Date.now(), text: value };
    setTodos([...todos, newtask]);
  };
  console.log(todos);

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <h1>TO DO LIST</h1>
      <Addtask addtask={addTask} />
      <List todos={todos} deleteTask={deleteTask} />
    </>
  );
};

export default App;
