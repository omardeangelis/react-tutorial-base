import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleHoliday from "./SingleHoliday";
const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";
const Holiday = () => {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState(1);

  //funzione per scelgiere prossimo valore di selected e prossima vacanza
  const nextHoliday = () => {
    setSelected((prevValue) => {
      if (prevValue + 1 === data.data.length) {
        return 0;
      } else {
        return prevValue + 1;
      }
    });
  };

  //Return Funzionale per controllare valore
  const prevHoliday = () => {
    setSelected((prevValue) => {
      if (prevValue - 1 < 0) {
        return data.data.length - 1;
      } else {
        return prevValue - 1;
      }
    });
  };

  //funzione per fetchare i dati da api
  const getData = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  //Return Condizionale per controllare di aver risolto la Promise
  if (data.success) {
    return (
      <>
        {data.data.length > 0 ? (
          <SingleHoliday
            {...data.data[selected]}
            next={nextHoliday}
            prev={prevHoliday}
          />
        ) : (
          <h4>No Vacanze</h4>
        )}
      </>
    );
  } else {
    //Se non ho soddisfatto promise vuol dire che sto caricando
    return <h2> Loading... </h2>;
  }
};

export default Holiday;
