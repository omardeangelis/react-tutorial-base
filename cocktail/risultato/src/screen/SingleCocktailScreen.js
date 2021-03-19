import React from "react";
import useFetch from "../useFetch";
import { useParams, Link } from "react-router-dom";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import styled from "styled-components";
const SingleCocktailScreen = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useFetch(`i=${id}`, true);
  if (data) {
    console.log(data);
  }
  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>Cocktail non disponibile</h3>;
  }
  const {
    strAlcoholic: type,
    strCategory: category,
    strDrink: name,
    strGlass,
    strDrinkThumb: image,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strInstructions,
    strInstructionsIT,
    strMeasure1,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
  } = data.drinks[0];

  const strInstructionsList = [
    { istruzione: strIngredient1, qty: strMeasure1 },
    { istruzione: strIngredient2, qty: strMeasure2 },
    { istruzione: strIngredient3, qty: strMeasure3 },
    { istruzione: strIngredient4, qty: strMeasure4 },
    { istruzione: strIngredient5, qty: strMeasure5 },
  ];
  return (
    <Wrapper>
      <div className="cocktail-content container">
        <header>
          <Link to="/">
            <IoArrowBackCircleSharp className="icon" />
          </Link>
          <h4 className="back-arrow">Torna in Home</h4>
        </header>
        <hr />
        <div className="cocktail-container">
          <img src={image} alt={name} className="img" />
          <div className="cocktail-datails">
            <div className="spacer">
              <h2>{name}</h2>
              <div className="cocktail-type">
                <p className="label">{type}</p>
                <p className="label">{category}</p>
                <p className="label">{strGlass}</p>
              </div>
            </div>
            <hr />

            <div className="spacer">
              <h4>Ingredienti :</h4>
              <ul className="instruction-list">
                {strInstructionsList.map((el, index) => {
                  if (el.istruzione) {
                    return (
                      <li key={index}>
                        <p className="info">
                          {el.qty} {el.istruzione}
                        </p>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
            <hr />

            <div className="spacer">
              <h4>Istruzioni :</h4>
              <p>{strInstructionsIT ? strInstructionsIT : strInstructions}</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: auto;
  padding-bottom: 4rem;
  .spacer {
    display: grid;
    gap: 0.225rem;
  }
  .cocktail-content {
    display: grid;
    gap: 2rem;
    header {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 2rem;
      margin-top: 3rem;
      margin-bottom: 0;
      .icon {
        font-size: 2.5rem;
        transition: var(--transition);
        &:hover {
          color: var(--byzantine);
          transform: scale(1.02);
        }
      }
      .back-arrow {
        text-transform: uppercase;
        color: var(--primary-gray);
        font-weight: 500;
      }
    }
    .cocktail-container {
      margin-top: 1rem;
      display: grid;
      gap: 2rem;
      .img {
        width: 100%;
        border-radius: var(--radius);
      }
      .cocktail-datails {
        display: flex;
        flex-direction: column;
        gap: 1rem !important;
        .cocktail-type {
          display: flex;
          gap: 0.5rem !important;
          .label {
            text-transform: lowercase;
            font-size: 1.01em;
            font-weight: 700;
            letter-spacing: var(--letter-spacing);
            font-variant: small-caps;
            color: var(--soft-dark-gray);
            border: 1px solid var(--soft-light-gray);
            border-radius: var(--radius);
            background-color: var(--extra-light-gray);
            padding: 0.2rem;
          }
        }
        .info {
          color: var(--soft-dark-gray);
          max-width: 55ch;
        }
        h4 {
          color: var(--dark-gray);
        }
        .instruction-list {
          list-style: outside;
          padding-left: 1rem;
        }
      }
    }
  }
  @media screen and (min-width: 992px) {
    height: 84.5vh;
    hr {
      display: none;
    }
    .cocktail-container {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      .img {
        grid-column: 1/6;
        grid-row: 1/1;
        width: 100%;
      }
      .cocktail-datails {
        grid-column: 6/-1;
        grid-row: 1/1;
        width: 100%;
        .cocktail-type {
          display: grid;
          gap: 0.5rem !important;
        }
      }
    }
  }
`;

export default SingleCocktailScreen;
