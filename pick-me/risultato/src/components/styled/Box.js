import {
  space,
  layout,
  background,
  border,
  position,
  flexbox,
  shadow,
  color,
  compose,
} from "styled-system";
import styled from "styled-components";

const Box = styled("div")(
  compose(space, layout, background, border, position, flexbox, shadow, color)
);

export default Box;
