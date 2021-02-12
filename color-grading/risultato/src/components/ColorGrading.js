import React, { useState, useEffect } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import { v4 as uuidv4 } from "uuid";
const ColorGrading = () => {
  const [selectedColor, setSelectedColor] = useState([]);
  const [colorInput, setColorInput] = useState({
    color: "",
    qty: 10,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setColorInput({ ...colorInput, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (colorInput.color && colorInput.qty) {
      const { color, qty } = colorInput;
      setSelectedColor(
        new Values(color).all(Math.round((100 / parseInt(qty, 10)) * 2))
      );
      setColorInput({
        color: "",
        qty: 10,
      });
    }
  };

  useEffect(() => {
    setColorInput({ ...colorInput, color: "#1194ec" });
    setSelectedColor(
      new Values("#1194ec").all(
        Math.round((100 / parseInt(colorInput.qty, 10)) * 2)
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            name="color"
            id="color"
            value={colorInput.color}
            maxLength={7}
            onChange={handleChange}
            className="input"
          />
          <input
            type="number"
            step={5}
            name="qty"
            id="qty"
            max={100}
            min={5}
            value={colorInput.qty}
            onChange={handleChange}
            className="input"
          />
        </div>
        <button className="btn btn-selector" type="submit">
          Create
        </button>
      </form>
      <section className="color-section">
        {selectedColor ? (
          selectedColor.map((el) => <SingleColor key={uuidv4()} {...el} />)
        ) : (
          <h4>Loading</h4>
        )}
      </section>
    </>
  );
};

export default ColorGrading;
