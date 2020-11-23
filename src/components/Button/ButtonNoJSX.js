/**@jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";
import * as styles from "./button.styles";

const Button = ({ text, onClick, color, align }) => {
  const theme = useTheme();

  return jsx(
    "button",
    {
      css: styles.button({
        color,
        align,
        theme
      }),
      onClick: onClick
    },
    text
  );
};

Button.defaultProps = {
  text: "button",
  color: "black",
  align: "left"
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  color: PropTypes.oneOf(["black", "red"]),
  align: PropTypes.oneOf(["left", "right"])
};
export default Button;
