import React from "react";
import styled from "styled-components";
const Card = ({ title, icon, text, img, subtitle, className }) => {
  return (
    <Wrapper className={className ? `${className}` : ""}>
      <div className="card container">
        <div className="card-title">
          <h4>{title}</h4>
        </div>
        {subtitle ? (
          <div className="card-subtitle">
            <h6>{subtitle}</h6>
          </div>
        ) : (
          <div className="card-icon">{icon}</div>
        )}
        {text ? (
          <div className="card-text">
            <p>{text}</p>
          </div>
        ) : (
          <img src={img} alt={title} className="card-img" />
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-color: white;
  border-radius: var(--radius);
  transition: var(--transition);
  &.value-card:hover {
    cursor: pointer;
    transform: scale(1.03);
    background-color: var(--trypan-blue-2);
    .card-title {
      color: white;
    }
    .card-text {
      color: var(--extra-light-gray);
    }
  }
  .card {
    display: grid;
    place-items: center;
    text-align: center;
    gap: 1rem;
    .card-subtitle {
      font-size: 1.1rem !important;
      color: var(--dark-gray);
    }
    .card-icon {
      font-size: 2rem !important;
      padding: 0;
    }
    .card-img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      filter: brightness(80%);
    }
    .card-text {
      margin-top: 0.3rem;
      max-width: 35ch;
    }
  }
`;

export default Card;
