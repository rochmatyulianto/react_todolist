import React from "react";
import PropTypes from "prop-types";
import Todo from "../Todo/todoClass";
import Container from "../../layout/Container";
import styled from "@emotion/styled";

const StyledtodoPlaceholderText = styled.div`
  font-family: "Homemade apple", sans-serif;
  font-size: 24px;
  text-align: center;
  padding: 16px;
`;
const StyledAddButtonPlaceholderText = styled.span`
  font-family: "bungee", sans-serif;
  font-size: 24px;
`;

class Todos extends React.Component {
  render() {
    const { todos, completeTodo } = this.props;
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
            <StyledtodoPlaceholderText>
              {[
                "add todo by clicking ",
                <StyledAddButtonPlaceholderText>
                  Add
                </StyledAddButtonPlaceholderText>,
                "button on the left corner"
              ]}
            </StyledtodoPlaceholderText>
          )}
        </Container>
      </section>
    );
  }

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string })),
    completeTodo: PropTypes.func.isRequired
  };
}
export default Todos;
