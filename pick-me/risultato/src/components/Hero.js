import React from "react";
import { Container, Button, Stack, Box } from "../components/styled";
import { ReactComponent as RightIcon } from "../images/right-arrow.svg";
import NftImage from "../images/nft-img.png";
import styled from "styled-components";

const CustomButton = styled(Button)`
  padding-left: 0px;
  svg {
    margin-left: 16px;

    & > * {
      fill: #f31caa;
    }
  }
`;

const CustomStack = styled(Stack)`
  @media screen and (max-width: 767px) {
    flex-direction: column;
    & > * {
      margin-left: 0px;
      margin-top: 24px;
    }
  }
`;

const Hero = () => {
  return (
    <Container size='xl' mt={["24px", "72px"]}>
      <CustomStack spacing='118px'>
        <Stack direction='column' align='start' spacing='48px' flex='1 1 auto'>
          <Box>
            <h1>The easiest way to buy Photos as NFT.</h1>
          </Box>
          <CustomButton
            variant='text'
            size={["lg", "xl"]}
            rightIcon={<RightIcon />}
          >
            Start Now
          </CustomButton>
        </Stack>
        <Box
          width='100%'
          height='356px'
          position='relative'
          borderRadius='16px'
          overflow='hidden'
          display='flex'
          style={{
            transform: "transalteZ(0)",
          }}
        >
          <img
            src={NftImage}
            alt='img'
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          />
        </Box>
      </CustomStack>
    </Container>
  );
};

export default Hero;
