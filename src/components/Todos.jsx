import React from "react";

import Proptypes from "prop-types";

import Todo from "./Todo";

const Todos = ({ todos }) => {
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

Todos.propTypes = {
  todos: Proptypes.arrayOf(Proptypes.shape({ text: Proptypes.string }))
};
export default Todos;
