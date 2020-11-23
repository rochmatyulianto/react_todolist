/**@jsx jsx */
/* import React from "react"; */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import Button from "../Button/ButtonNoJSX";

import Container from "../../layout/Container";
import Item from "../../layout/Item";
/* import styles from "./header.module.css"; */
import { useTheme } from "emotion-theming";

import * as styles from "./header.styles";

const Header = ({ showAddToggle, showAdd, clearTodos }) => {
  const theme = useTheme();
  return jsx(
    "section",
    {
      className: "header-component"
    },
    jsx(
      Container,
      {
        alignItems: "flex-start"
      },
      jsx(
        Item,
        {
          flex: 1
        },
        jsx(Button, {
          text: showAdd ? "Finish" : "add",
          onClick: showAddToggle
        })
      ),
      jsx(
        Item,
        {
          flex: 2
        },
        jsx(
          "h1",
          {
            css: styles.headerTitle(theme)
          },
          "Todo Lists"
        )
      ),
      jsx(
        Item,
        {
          flex: 1,
          align: "right"
        },
        jsx(Button, {
          text: "clear",
          onClick: clearTodos,
          color: "red",
          align: "right"
        })
      )
    )
  );
};

Header.propTypes = {
  showAddToggle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
