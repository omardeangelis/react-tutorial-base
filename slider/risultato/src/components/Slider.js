import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import data from "../data";
const Slider = () => {
  const [recensioni, _] = useState(data);
  const [active, setActive] = useState(0);

  //Passa alla prossima slide
  const prossimaSlide = () => {
    setActive((prevValue) => {
      if (prevValue + 1 > recensioni.length - 1) {
        return 0;
      } else {
        return prevValue + 1;
      }
    });
  };

  //passa alla precendete slide
  const precedenteSlide = () => {
    setActive((prevValue) => {
      if (prevValue - 1 < 0) {
        return recensioni.length - 1;
      } else {
        return prevValue - 1;
      }
    });
  };

  //Cambia automaticamente dopo 4 secondi la recensione
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prevValue) => {
        if (prevValue + 1 === recensioni.length) {
          return 0;
        } else {
          return prevValue + 1;
        }
      });
    }, 4000);
    //Elimina timout prima prima di attivare il prossimo
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);
  return (
    <div className='container slider'>
      {recensioni.map((recensione, index) => {
        //Cambio classe in base alla posizione dell'elemento rispetto a quello attivo
        let positionClass = "";
        if (index === active) {
          positionClass = "active";
        } else if (
          active === index + 1 ||
          (active === 0 && index === recensioni.length - 1)
        ) {
          positionClass = "prev";
        } else {
          positionClass = "next";
        }
        return (
          <Slide key={recensione.id} {...recensione} classes={positionClass} />
        );
      })}
      <div className='btn-group slider-btn-group'>
        <button className='btn btn-slider prev-slide' onClick={precedenteSlide}>
          prev
        </button>
        <button className='btn btn-slider next-slide' onClick={prossimaSlide}>
          next
        </button>
      </div>
    </div>
  );
};

export default Slider;
