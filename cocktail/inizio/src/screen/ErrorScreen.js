import React from "react";
import styled from "styled-components";
import Lottie from "react-lottie";
import animationData from "../assets/animation/not-found.json";
import { Link } from "react-router-dom";
const ErrorScreen = () => {
  return <Wrapper>Error Screen</Wrapper>;
};

const Wrapper = styled.section`
  min-height: 86.2vh;
  display: grid;
  place-items: center;
  h3 {
    text-transform: uppercase;
  }
  @media screen and (min-width: 992px) {
    min-height: 84.5vh;
  }
`;

export default ErrorScreen;
