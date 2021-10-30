import React from "react";
import { Box, Button, Stack } from "./styled";
import { ReactComponent as ColoredCart } from "../images/purple-cart.svg";
import styled from "styled-components";

const Card = styled(Box)`
  &:hover {
    .card-action {
      opacity: 1;
      visibility: visible;
      transform: rotateX(0deg);
      height: 100% !important;
    }
  }

  .card-action {
    opacity: 0;
    visibility: hidden;
    transition: all 125ms linear;
    transform: rotateX(-90deg);
    height: 0px;
    overflow: hidden;
  }
`;

const Photo = ({ alt_description, color, urls: { full }, likes }) => {
  return (
    <Card
      maxWidth='367px'
      height='343px'
      width='calc(100%)'
      borderRadius='4px 4px 0px 0px'
      overflowX='hidden'
      position='relative'
      style={{
        transform: "translateZ(0)",
      }}
    >
      <Box width='100%' height='100%' bg={color}>
        <img src={full} alt={alt_description} width='100%' height='100%' />
      </Box>
      <Box
        className='card-action'
        position='absolute'
        bottom='0px'
        width='100%'
        maxHeight='72px'
        bg='white'
      >
        <Stack
          justify='space-between'
          align='center'
          width='100%'
          height='100%'
          px='20px'
        >
          <p
            style={{
              color: "var(--grey-800)",
            }}
          >
            {" "}
            {likes}€
          </p>
          <Button
            variant={"text"}
            rightIcon={<ColoredCart />}
            iconColor='purple.300'
          ></Button>
        </Stack>
      </Box>
    </Card>
  );
};

export default Photo;
