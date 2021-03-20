import React from "react";
import Coktail from "./Cocktail";
import styled from "styled-components";

const Cocktails = ({ data }) => {
  return (
    <Wrapper>
      {data.map((el) => {
        return <Coktail key={el.idDrink} {...el} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  min-height: 20vh;
  display: grid;
  place-items: center;
  gap: 2rem;
  @media screen and (min-width: 753px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
export default Cocktails;
