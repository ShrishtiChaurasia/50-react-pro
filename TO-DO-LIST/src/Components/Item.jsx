import React from "react";

const Item = ({ todo, DeleteTask }) => {
  return (
    <>
      <li>
        <span>{todo.text}</span>
        <button onClick={() => DeleteTask(todo.id)}>Delete</button>
      </li>
    </>
  );
};

export default Item;
