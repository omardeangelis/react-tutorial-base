import React from "react";
import { Button, Container, Stack } from "./styled";
import { ReactComponent as LeftIcon } from "../images/left-arrow.svg";
import { ReactComponent as RightIcon } from "../images/small-right-arrow.svg";
import { Link } from "@reach/router";
const Paginator = ({ page }) => {
  return (
    <Container size='fullwidth' mt='118px'>
      <Container>
        <Stack justify='space-between' align='center' width='100%'>
          <Link
            to='/'
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              size='md'
              variant='outlined'
              leftIcon={<LeftIcon />}
              iconColor='purple.300'
            >
              Prev
            </Button>
          </Link>
          <Link
            to='/'
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              size='md'
              variant='outlined'
              rightIcon={<RightIcon />}
              iconColor='purple.300'
            >
              Next
            </Button>
          </Link>
        </Stack>
      </Container>
    </Container>
  );
};

export default Paginator;
