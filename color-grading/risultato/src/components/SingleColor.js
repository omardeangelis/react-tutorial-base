import React from "react";
import { rgbToHex } from "../utils/helpers";

const SingleColor = ({ rgb, type, weight }) => {
  const [message, setMessage] = React.useState(false);
  //Trasformare rgb in hex
  //   const { rgb } = color[1];
  //   console.log(rgbToHex(...rgb));
  const copiaColore = () => {
    navigator.clipboard
      .writeText(rgbToHex(...rgb))
      .then((response) => console.log("copied"));
    setMessage(true);
  };

  React.useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  return (
    <div
      onClick={copiaColore}
      className={`single-color ${type}`}
      style={{ backgroundColor: `${rgbToHex(...rgb)}` }}
    >
      <h5>{rgbToHex(...rgb)}</h5>
      {message && <p>Colore copiato</p>}
    </div>
  );
};

export default SingleColor;
