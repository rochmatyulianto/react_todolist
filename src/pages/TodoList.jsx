import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import ToDoForm from "../components/ToDoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([{ text: "Learning React!" }]);
  return (
    <Paper>
      <Header />
      <ToDoForm />
      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
