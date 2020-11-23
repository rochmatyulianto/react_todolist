import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "emotion-theming";
import styled from "@emotion/styled";

const StyledButton = styled.button`
  font-size: 1.8rem;
  font-family: "Bungee", sans-serif;
  color: ${(props) => props.textColor};

  padding: 16px;
  cursor: pointer;

  background: unset;
  border: unset;
  outline: unset;
  text-align: ${(props) => props.align};
`;

class Button extends React.Component {
  render() {
    const { text, onClick, color, align, theme } = this.props;
    const {
      color: { primary }
    } = theme;
    let textColor;
    switch (color) {
      case "black":
        textColor = primary.black;
        break;
      case "red":
        textColor = primary.red;
        break;
      default:
        textColor = primary.black;
    }
    return (
      <StyledButton align={align} textColor={textColor} onClick={onClick}>
        {text}
      </StyledButton>
    );
  }
  static defaultProps = {
    text: "button",
    color: "black",
    align: "left"
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["black", "red"]),
    align: PropTypes.oneOf(["left", "right"])
  };
}

export default withTheme(Button);
