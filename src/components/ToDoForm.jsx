import React, { useState } from "react";
import PropTypes from "prop-types";

const ToDoForm = ({ addTodo, showAdd }) => {
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

  if (showAdd) {
    return (
      <section className="add">
        <form className="add-form" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="add-input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="add-btn main-black-color">Add</button>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

ToDoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};
export default ToDoForm;
