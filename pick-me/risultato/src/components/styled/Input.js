import styled from "styled-components";
import {
  layout,
  space,
  border,
  typography,
  shadow,
  color,
  background,
  compose,
} from "styled-system";

const InputWrapper = styled("input")(
  {
    background: "var(--grey-900)",
    border: "1px solid",
    borderColor: "var(--grey-600)",
    color: "var(--grey-600)",
    height: "48px",
    cursor: "text",
    borderRadius: "100px",
    paddingLeft: "20px",
    paddingRight: "20px",
    appearance: "none",
    outline: "none",
    fontSize: "16px",
    lineHeight: "20px",
    "&::placeholder": {
      color: "var(--grey-700)",
      lineHeight: "20px",
    },
  },

  compose(layout, space, border, typography, shadow, color, background)
);

export default InputWrapper;
