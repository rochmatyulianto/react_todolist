/**@jsx jsx */
/* import React from "react"; */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import React from "react";
import PropTypes from "prop-types";
import * as styles from "./todoform.styles";
import Container from "../../layout/Container";
import Item from "../../layout/Item";
import Button from "../Button/Button";

const ToDoForm = ({ addTodo, showAdd }) => {
  const theme = useTheme();

  const [value, setValue] = React.useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("no blank todo!");
      return;
    }

    if (value.length > 40) {
      alert("please create a shorter text! , max 40 char");
      setValue("");
      return;
    }

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section className="todoForm-component" /* css={styles.add} */>
        <form /* css={styles.addForm} */ onSubmit={handleFormSubmit}>
          <Container alignItems="flex-start">
            <Item flex={1} padding="0 0 0 16px">
              <input
                type="text"
                css={styles.addInput({ theme })}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Item>
            <Item>
              <Button text="Add" />
              {/* <button css={styles.addBtn({ theme })}>Add</button> */}
            </Item>
          </Container>
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
