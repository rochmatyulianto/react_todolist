/**@jsx jsx */
/* import React from "react"; */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import Button from "../Button/Button";
/* import styles from "./header.module.css"; */
import { useTheme } from "emotion-theming";

import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();
  return (
    <section css={styles.header}>
      {/* <button className="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? "Finish" : "add"}
      </button> */}

      <Button text={showAdd ? "Finish" : "add"} onClick={showAddToggle} />

      <h1 css={styles.headerTitle(theme)}>Todo Lists</h1>
      {/* <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button> */}
      <Button text="Clear" onClick={clearTodos} color="red" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
