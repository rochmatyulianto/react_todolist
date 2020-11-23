/**@jsx jsx */
/* import React from "react"; */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import Button from "../Button/Buttonclass";

import Container from "../../layout/Container";
import Item from "../../layout/Item";
/* import styles from "./header.module.css"; */
import { useTheme } from "emotion-theming";

import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();
  return (
    <section className="header-component">
      <Container alignItems="flex-start">
        <Item flex={1}>
          <Button text={showAdd ? "Finish" : "add"} onClick={showAddToggle} />
        </Item>
        <Item flex={2}>
          <h1 css={styles.headerTitle(theme)}>Todo Lists</h1>
        </Item>
        {/* <button className="header-btn main-red-color" onClick={clearTodos}>
        Clear
      </button> */}
        <Item flex={1} align="right">
          <Button text="Clear" onClick={clearTodos} color="red" align="right" />
        </Item>
      </Container>
      {/* <button className="header-btn main-black-color" onClick={showAddToggle}>
        {showAdd ? "Finish" : "add"}
      </button> */}
    </section>
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
