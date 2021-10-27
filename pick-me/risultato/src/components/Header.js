import React from "react";
import { Container, Stack, Box, Button } from "./styled";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as CartIcon } from "../images/cart.svg";
const Header = () => {
  return (
    <>
      <Container size='fullwidth' position='fixed'>
        <Stack direction='column' align='center'>
          <Container>
            <Stack
              justify='space-between'
              align='center'
              width='100%'
              height={["64px", "72px"]}
            >
              <Logo />
              <Button variant='text'>
                <CartIcon />
              </Button>
            </Stack>
          </Container>
        </Stack>
      </Container>
      <Box height={["64px", "72px"]} width='100%'></Box>
    </>
  );
};

export default Header;
