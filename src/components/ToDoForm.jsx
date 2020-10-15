import React, { useState } from "react";
import Proptypes from "prop-types";

const ToDoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("no blank todo!");
      return;
    }

    addTodo(value);

    setValue("");
  };

  return (
    <section className="add">
      <div className="add-form" onSubmit={handleFormSubmit}>
        <input
          className="add-input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="add-btn main-black-color">Add</button>
      </div>
    </section>
  );
};

ToDoForm.propTypes = {
  addTodo: Proptypes.func.isRequired
};
export default ToDoForm;
