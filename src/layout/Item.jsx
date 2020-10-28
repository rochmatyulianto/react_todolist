/**@jsx jsx */
/* import React from "react"; */
import { jsx, css } from "@emotion/core";
import PropTypes from "prop-types";

const Item = ({ children, flex, align, padding }) => {
  return (
    <div
      className="flex-item"
      css={css`
        flex: ${flex};
        text-align: ${align};
        padding: ${padding};
      `}
    >
      {children}
    </div>
  );
};

Item.defaulProps = {
  align: "left",
  padding: "unset"
};

Item.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  align: PropTypes.oneOf(["center", "left", "right", "justify"]),
  padding: PropTypes.string
};

export default Item;
