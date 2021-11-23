import {
  space,
  layout,
  typography,
  color,
  border,
  shadow,
  position,
  compose,
  variant,
} from "styled-system";
import { css } from "@styled-system/css";
import styled from "styled-components";

const StyledButton = styled("button")(
  variant({
    prop: "size",
    variants: {
      sm: {
        height: "24px",
        borderRadius: "18px",
        paddingX: "10px",
        fontSize: "12px",
      },
      md: {
        height: "36px",
        borderRadius: "22px",
        paddingX: "14px",
        fontSize: "14px",
      },
      lg: {
        height: "48px",
        borderRadius: "26px",
        paddingX: "14px",
        fontSize: "28px",
      },
      xl: {
        height: "64px",
        borderRadius: "30px",
        paddingX: "22px",
        fontSize: "36px",
        fontWeight: 500,
      },
    },
  }),
  variant({
    variants: {
      contained: {
        background: "purple.300",
        color: "white",
        border: "none",
        "&:hover": {
          background: "purple.600",
        },
      },
      outlined: {
        background: "transparent",
        color: "purple.300",
        border: "1.2px solid",
        borderColor: "purple.300",
        "&:hover": {
          color: "purple.600",
          borderColor: "purple.600",
          "& svg > *": {
            fill: "purple.600",
          },
        },
      },
      text: {
        background: "transparent",
        color: "purple.300",
        border: "none",
        "&:hover": {
          color: "purple.600",
          "& svg > *": {
            fill: "purple.600",
          },
        },
      },
      disabled: {
        background: "grey.600",
        color: "grey.800",
        border: "none",
        cursor: "not-allowed",
      },
    },
  }),
  ({ isFullwidth, iconColor }) =>
    css({
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      width: isFullwidth ? "100%" : undefined,
      transition: "all 250ms, transform 0.1s ease-in-out",
      fontWeight: "600",
      outline: "none",
      whiteSpace: "nowrap",
      userSelect: "none",
      cursor: "pointer",
      letterSpacing: "0.1rem",
      "& svg > *": {
        fill: iconColor ? iconColor : "white",
        transition: "all 250ms, transform 0.1s ease-in-out",
      },
    }),
  compose(space, typography, color, position, shadow, border, layout)
);

const StyledContent = styled("div")({
  transition: "all 125ms",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
});

const ButtonIcon = styled.span(
  {
    display: "inline-flex",
    alignSelf: "center",
    fontSize: "16px",
    flexShrink: 0,
    color: "inherit",
  },
  space
);

const Button = ({
  variant,
  leftIcon,
  rightIcon,
  children,
  isLoading = false,
  ...rest
}) => {
  return (
    <StyledButton
      disabled={isLoading}
      variant={isLoading ? "disabled" : variant || "contained"}
      {...rest}
    >
      <StyledContent>
        {!isLoading && leftIcon && (
          <ButtonIcon mr='6px'> {leftIcon} </ButtonIcon>
        )}

        {children}

        {!isLoading && rightIcon && (
          <ButtonIcon ml='6px'> {rightIcon} </ButtonIcon>
        )}
      </StyledContent>
    </StyledButton>
  );
};

export default Button;
