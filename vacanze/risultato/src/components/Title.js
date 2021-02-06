import React from "react";

const titleStyle = {
  width: "fit-content",
  fontVariant: "small-caps",
  position: "relative",
  display: "grid",
  placeItems: "center",
};

const Title = ({ text }) => {
  return (
    <div style={titleStyle}>
      <h3> {text}</h3>
      <div className="underline"></div>
    </div>
  );
};

export default Title;
