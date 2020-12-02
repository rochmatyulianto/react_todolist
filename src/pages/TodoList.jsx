import React, { useState } from "react";
import useStateWithLocalStorage from "../hooks/useStateWithLocalStorage";
import Paper from "../components/Paper/Paper";
import Header from "../components/Header/Header";
import ToDoForm from "../components/ToDoForm/ToDoForm";
import Todos from "../components/Todos/Todos";
import Container from "../layout/Container";

const TodoList = () => {
  /* const [todos, setTodos] = useState([
    { text: "Learning React!", isCompleted: false },
    { text: "Learning React!", isCompleted: false },
    { text: "Learning React!", isCompleted: false }
  ]);
 */

  /*  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  ); */

  const [todos, setTodos] = useStateWithLocalStorage("todos");

  const [showAdd, setShowAdd] = useState(false);

  /*  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
 */
  const addTodo = (value) => {
    if (todos.length < 10) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];
      setTodos(addedTodo);
    } else {
      alert("max 10 todo");
    }
  };

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    setTodos(addedTodo);
  };

  const clearTodos = () => !showAdd && setTodos([]);

  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Container
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Header
          showAddToggle={showAddToggle}
          showAdd={showAdd}
          clearTodos={clearTodos}
        />
        <ToDoForm addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
      </Container>
    </Paper>
  );
};

export default TodoList;
