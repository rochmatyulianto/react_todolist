/**@jsx jsx */
import React from "react";
import { Link } from "react-router-dom";
import { jsx } from "@emotion/core";
import Item from "../../layout/Item";
import PropTypes from "prop-types";

import Todo from "../Todo/todoClass";

import * as styles from "./todos.styles";

import Container from "../../layout/Container";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos-component">
      <Container flexDirection="column" minHeight="500px">
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
          <React.Fragment>
            <div css={styles.todoPlaceholderText}>
              add todo by clicking{" "}
              <span css={styles.addButtonPlaceholderText}> Add</span> buttton on
              the left corner{" "}
            </div>
            <Container justifyContent="center">
              <Item>
                <span css={styles.SeeAboutPlaceholderText}>
                  <Link to="/about">About Page</Link>
                </span>
              </Item>
            </Container>
          </React.Fragment>
        )}
      </Container>
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
  completeTodo: PropTypes.func.isRequired
};
export default Todos;
