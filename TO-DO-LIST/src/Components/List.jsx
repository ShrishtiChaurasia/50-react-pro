import React from "react";
import Item from "./Item";

function List({ todos, deleteTask }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <Item key={todo.id} todo={todo} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
}

export default List;
