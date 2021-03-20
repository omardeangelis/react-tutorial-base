import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { HiClipboardList } from "react-icons/hi";
import { useGlobalContext } from "../context";

const Cocktail = ({ strDrinkThumb: img, idDrink: _id, strDrink: name }) => {
  const { getScrollPosition } = useGlobalContext();
  const [show, setShow] = useState(false);
  const history = useHistory();
  const showInfo = () => {
    setShow(true);
  };

  const hideInfo = () => {
    setShow(false);
  };

  const goToCocktail = (_id) => {
    getScrollPosition(window.pageYOffset);
    history.push(`/cocktail/${_id}`);
  };

  return (
    <Wrapper onMouseEnter={showInfo} onMouseLeave={hideInfo}>
      <div
        className="img"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        className={
          show ? `card-text container show-info` : "card-text container"
        }
      >
        <h5>{name}</h5>
        <div
          className="see-more-btn brand-color"
          onClick={() => goToCocktail(_id)}
        >
          <h5>Ricetta</h5>
          <HiClipboardList className="icon " />
        </div>
      </div>
      <div className="card-text-sm container">
        <h5>{name}</h5>
        <div
          className="see-more-btn brand-color"
          onClick={() => goToCocktail(_id)}
        >
          <h5>Ricetta</h5>
          <HiClipboardList className="icon " />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  cursor: pointer;
  position: relative;
  width: 70%;
  margin: auto;
  border-radius: var(--img-radius);
  display: grid;
  box-shadow: var(--light-shadow);

  .img {
    width: 100%;
    height: 300px;
    border-radius: var(--img-radius);
  }

  .card-text-sm {
    display: flex;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .card-text,
  .card-text-sm {
    justify-content: space-between;
    align-items: center;
  }

  .card-text {
    display: none;
  }

  .see-more-btn {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    transition: var(--transition);
  }

  .see-more-btn:hover svg,
  .see-more-btn:hover h5 {
    color: var(--byzantine);
  }

  .see-more-btn:hover h5 {
    text-decoration: underline;
  }
  @media screen and (min-width: 992px) {
    width: 100%;
    margin: unset;

    .card-text {
      position: absolute;
      bottom: 0;
      overflow: hidden;
      height: 0;
      opacity: 0;
      width: 100%;
      background-color: transparent;
      color: var(--text-color);
      transition: var(--transition);
      display: flex !important;
    }

    .show-info {
      background-color: transparent;
      background-color: rgba(0, 0, 0, 0.8);
      opacity: 1;
      height: 20%;
    }
    .card-text-sm {
      display: none;
    }
  }
`;
export default Cocktail;
