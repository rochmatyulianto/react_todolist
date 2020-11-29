import React from "react";

import Paper from "../components/Paper/paperClass";
import Header from "../components/Header/HeaderClass";
import ToDoForm from "../components/ToDoForm/todoformClass";
import Todos from "../components/Todos/todosClass";
import Container from "../layout/Container";

class TodoList extends React.Component {
  state = {
    todos: [
      { text: "Learning React!", isCompleted: false },
      { text: "Learning React!", isCompleted: false },
      { text: "Learning React!", isCompleted: false }
    ],
    showAdd: false
  };

  addTodo = (value) => {
    const { todos } = this.state;
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      this.setState({
        todos: addedTodo
      });
    } else {
      alert("max 10 todo");
    }
  };

  completeTodo = (index) => {
    const addedTodo = [...this.state.todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    this.setState({
      todos: addedTodo
    });
  };

  clearTodos = () => {
    if (this.state.showAdd) {
      alert("Finish add todo before clear");
      return;
    }
    this.setState({
      todos: []
    });
  };

  showAddToggle = () => {
    this.setState((prevState) => ({ showAdd: !prevState.showAdd }));
  };

  render() {
    const { todos, showAdd } = this.state;
    return (
      <Paper>
        <Container
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Header
            showAddToggle={this.showAddToggle}
            showAdd={showAdd}
            clearTodos={this.clearTodos}
          />
          <ToDoForm addTodo={this.addTodo} showAdd={showAdd} />
          <Todos todos={todos} completeTodo={this.completeTodo} />
        </Container>
      </Paper>
    );
  }
}

export default TodoList;
