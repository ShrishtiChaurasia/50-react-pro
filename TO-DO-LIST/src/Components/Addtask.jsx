import React, { useState } from "react";

const Addtask = ({ addtask }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    addtask(task);
    setTask("");
  };
  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="add task.."
          onChange={handleChange}
          value={task}
        />
        <button className="add-btn" onClick={handleSubmit}>
          ADD
        </button>
      </div>
    </>
  );
};

export default Addtask;
