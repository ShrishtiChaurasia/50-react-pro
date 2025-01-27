import React from "react";

const Item = ({ todo, deleteTask }) => {
  return (
    <div>
      <li>
        <span>{todo.text}</span>
        <span>{todo.id}</span>
        <button
          onClick={() => {
            deleteTask(todo.id);
          }}
        >
          DELETE
        </button>
      </li>
    </div>
  );
};

export default Item;
