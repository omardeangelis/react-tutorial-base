import {
  space,
  layout,
  border,
  flexbox,
  color,
  compose,
  position,
} from "styled-system";
import { css } from "@styled-system/css";
import styled from "styled-components";

const StackWrapper = styled("div")(
  ({
    childrenMarginTop,
    childrenMarginBottom,
    childrenMarginRight,
    childrenMarginLeft,
    align,
    justify,
    direction,
  }) =>
    css({
      display: "flex",
      alignItems: align,
      justifyContent: justify,
      flexDirection: direction,
      "& > * + *": {
        marginTop: childrenMarginTop,
        marginBottom: childrenMarginBottom,
        marginLeft: childrenMarginLeft,
        marginRight: childrenMarginRight,
      },
    }),
  compose(flexbox, border, layout, color, space, position)
);

const Stack = ({
  align,
  justify,
  spacing,
  direction = "row",
  children,
  ...rest
}) => {
  return (
    <StackWrapper
      {...rest}
      childrenMarginTop={direction === "column" ? spacing : 0}
      childrenMarginBottom={direction === "column-reverse" ? spacing : 0}
      childrenMarginLeft={direction === "row" ? spacing : 0}
      childrenMarginRight={direction === "row-reverse" ? spacing : 0}
      align={align}
      justify={justify}
      direction={direction}
    >
      {children}
    </StackWrapper>
  );
};

export default Stack;
