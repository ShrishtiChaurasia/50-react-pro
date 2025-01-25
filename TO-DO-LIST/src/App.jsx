import React, { useState } from "react";
import Addtask from "./Components/Addtask";
import List from "./Components/List";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const Addingtask = (value) => {
    if (value.trim === "") return;
    const newTask = { id: Date.now(), text: value };
    setTasks([...tasks, newTask]);
  };

  const DeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <div>
        <h1>TO DO LIST</h1>
        <Addtask addtask={Addingtask} />
        <List tasks={tasks} DeleteTask={DeleteTask} />
      </div>
    </>
  );
};

export default App;
