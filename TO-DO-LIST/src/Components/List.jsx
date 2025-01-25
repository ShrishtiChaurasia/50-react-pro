import React from "react";
import Item from "./Item";

const List = ({ tasks, DeleteTask }) => {
  return (
    <>
      <ul>
        {tasks.map((todo) => (
          <Item key={tasks.id} todo={todo} delete={DeleteTask} />
        ))}
      </ul>
    </>
  );
};

export default List;
