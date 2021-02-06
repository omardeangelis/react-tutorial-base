import React from "react";

const Articolo = ({ body, title }) => {
  return (
    <article>
      <div style={{ position: "relative", height: "fit-content" }}>
        <h4> {title} </h4>
        <div className="underline"></div>
      </div>
      <p> {body}</p>
    </article>
  );
};

export default Articolo;
