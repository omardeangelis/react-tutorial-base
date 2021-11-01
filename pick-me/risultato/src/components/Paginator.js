import React from "react";
import { Button, Container, Stack } from "./styled";
import { ReactComponent as LeftIcon } from "../images/left-arrow.svg";
import { ReactComponent as RightIcon } from "../images/small-right-arrow.svg";
import { useSelector } from "react-redux";
import { Link } from "@reach/router";
const Paginator = () => {
  const { currentPage, hasNextPage, hasPrevPage } = useSelector(
    (state) => state.photos.pagination
  );

  function definePaginatorFlex() {
    if (!hasNextPage && hasPrevPage) {
      return "flex-start";
    } else if (hasNextPage && !hasPrevPage) {
      return "flex-end";
    }
    return "space-between";
  }
  return (
    <Container size='fullwidth' mt='118px'>
      <Container>
        <Stack justify={definePaginatorFlex()} align='center' width='100%'>
          {hasPrevPage && (
            <Link
              to={currentPage === 2 ? "/" : `/photos/${currentPage - 1}`}
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
          )}

          {hasNextPage && (
            <Link
              to={`/photos/${currentPage + 1}`}
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
          )}
        </Stack>
      </Container>
    </Container>
  );
};

export default Paginator;
