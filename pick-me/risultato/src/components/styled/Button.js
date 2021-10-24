import {
  space,
  layout,
  typography,
  borderRadius,
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
        borderRadius: "8px",
        paddingX: "10px",
        fontSize: "12px",
      },
      md: {
        height: "36px",
        borderRadius: "12px",
        paddingX: "14px",
        fontSize: "14px",
      },
      lg: {
        height: "48px",
        borderRadius: "16px",
        paddingX: "14px",
        fontSize: "14px",
      },
      xl: {
        height: "64px",
        borderRadius: "16px",
        paddingX: "22px",
        fontSize: "14px",
      },
    },
  }),
  variant({
    variants: {
      contained: {
        background: "var(--purple-300)",
        color: "var(--white)",
        border: "none",
        "&:hover": {
          background: "var(--purple-600)",
        },
      },
      outlined: {
        background: "transparent",
        color: "var(--purple-300)",
        border: "1.2px solid var(--purple-300)",
        "&:hover": {
          color: "var(--purple-600)",
          borderColor: "var(--purple-600)",
        },
      },
      text: {
        background: "transparent",
        color: "var(--purple-300)",
        border: "none",
        "&:hover": {
          color: "var(--purple-600)",
        },
      },
      disabled: {
        background: "var(--grey-600)",
        color: "var(--grey-800)",
        border: "none",
        cursor: "not-allowed",
      },
    },
  }),
  ({ isFullwidth }) =>
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
    }),
  compose(space, typography, position, shadow, borderRadius, layout)
);

const StyledContent = styled("div")({
  transition: "all 250ms",
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
      variant={isLoading ? "disbled" : variant || "contained"}
      {...rest}
    >
      <StyledContent>
        {!isLoading && leftIcon && (
          <ButtonIcon mr='6px'> {rightIcon} </ButtonIcon>
        )}

        {children}

        {!isLoading && rightIcon && (
          <ButtonIcon mr='6px'> {rightIcon} </ButtonIcon>
        )}
      </StyledContent>
    </StyledButton>
  );
};

export default Button;
