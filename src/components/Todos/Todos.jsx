/**@jsx jsx */
/* import React from "react"; */
import { jsx } from "@emotion/core";

import PropTypes from "prop-types";

import Todo from "../Todo/Todo";

import * as styles from "./todos.styles";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section css={styles.todos}>
      {todos.length > 0 &&
        todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              text={todo.text}
              isCompleted={todo.isCompleted}
              completeTodo={completeTodo}
              index={index}
            />
          );
        })}
      {todos.length === 0 && (
        <div css={styles.todoPlaceholderText}>
          add todo by clicking{" "}
          <span css={styles.addButtonPlaceholderText}> Add</span> buttton on the
          left corner{" "}
        </div>
      )}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
  completeTodo: PropTypes.func.isRequired
};
export default Todos;
