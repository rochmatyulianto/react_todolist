import React from "react";
import Todo from "./Todo";
const Todos = () => {
  const todos = [
    {
      text: "Belajar react!"
    },
    {
      text: "Belajar props di react!"
    },
    {
      text: "Belajar react hooks!"
    },
    {
      text: "Belajar state di react!"
    },
    {
      text: "Belajar react!"
    },
    {
      text: "Belajar react!"
    },
    {
      text: "Belajar props di react!"
    },
    {
      text: "Belajar react hooks!"
    },
    {
      text: "Belajar state di react!"
    },
    {
      text: "Belajar react!"
    }
  ];
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
