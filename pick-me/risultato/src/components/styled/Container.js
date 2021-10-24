import {
  space,
  layout,
  background,
  border,
  position,
  compose,
  variant,
} from "styled-system";
import styled from "styled-components";

const Container = styled("div")(
  variant({
    prop: "size",
    variants: {
      fullwidth: {
        maxWidth: "100%",
        width: "100%",
      },
      xl: {
        maxWidth: "1140px",
        width: "calc(100% - 48px)",
      },
      md: {
        maxWidth: "768px",
        width: "calc(100% - 24px)",
      },
      sm: {
        maxWidth: "568",
        width: "calc(100% - 12px)",
      },
      xs: {
        maxWidth: "440px",
        width: "calc(100% - 6px)",
      },
    },
  }),
  compose(space, layout, background, border, position)
);

Container.defaultProps = {
  ml: "auto",
  mr: "auto",
  size: "xl",
};

export default Container;
