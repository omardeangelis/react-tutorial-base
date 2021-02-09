import React, { useState } from "react";
import Gelato from "./Gelato";
import axios from "axios";
// import data from "../fakeData";

const url = "https://react-corso-api.netlify.app/.netlify/functions/gelateria";

const Menu = () => {
  //Settaggio di State
  const [isLoading, setIsLoading] = useState(true);

  //Monitoro Errori dal data fetching
  const [isError, setIsError] = useState(false);

  //Tutti i prodotti che otterrò dalla mia api
  const [prodotti, setProdotti] = React.useState();

  //Prodotti filtrati: Non altero mai lo state di product
  const [filterProducts, setFilterProducts] = useState();

  //Il Primo valore di Categorie sarà 'all'
  const [selceted, setSelected] = useState(0);

  //Categorie di prodotti che potrò offire
  const [categorie, setCategorie] = useState([]);

  //Creo Array senza ripetizione di Valori per descrivere le categorie
  //Inserisco come primo alemento 'all'
  // const categorie = Array.from(
  //   new Set(prodotti.map((el) => el.categoria))
  // );
  // categorie.unshift("all");

  //Filtro prodotti e modifico valore di selected
  const filtraProdotti = (categoria, index) => {
    setSelected(index);

    //Se indico all ripristino allo stato iniziale
    if (categoria === "all") {
      setFilterProducts(prodotti);
    } //Se no uso filter Method
    else {
      const prodottiFiltrati = prodotti.filter((el) =>
        el.categoria === categoria ? el : ""
      );
      setFilterProducts(prodottiFiltrati);
    }
  };

  React.useEffect(() => {
    //Funzione Invocata Immediatamente
    (async () => {
      //Reimposto valori allo stato inziale prima di incominciare data fetching
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await axios.get(url);
        setProdotti(response.data.data.default);
        setFilterProducts(response.data.data.default);

        //Ottengo Array di elementi non ripetibili
        const nuoveCategorie = Array.from(
          new Set(response.data.data.default.map((el) => el.categoria))
        );

        //Aggiungo all'inizio termine all
        nuoveCategorie.unshift("all");
        setCategorie(nuoveCategorie);

        //Termino Caricamento
        setIsLoading(false);
      } catch (error) {
        //Errore
        setIsError(true);
        setIsLoading(false);
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="container">
      <h4 style={{ textAlign: "center", textTransform: "uppercase" }}>
        Le Nostre Scelte
      </h4>
      {
        //Se non sto caricando e non ci sono Errori
        !isLoading && !isError ? (
          <>
            <div className="lista-categorie">
              {categorie.map((categoria, index) => (
                <button
                  className={`btn btn-selector ${
                    selceted === index && "active"
                  }`}
                  key={index}
                  data-categoria={categoria}
                  onClick={() => filtraProdotti(categoria, index)}
                >
                  {categoria}
                </button>
              ))}
            </div>
            <hr />
            <div className="vetrina">
              {filterProducts.map((el) => (
                <Gelato key={el.id} {...el} />
              ))}
            </div>
          </>
        ) : //Se non sto caricando ma sono presenti errori
        !isLoading && isError ? (
          <h4
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            Errore...
          </h4>
        ) : (
          <h4
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            Loading...
          </h4>
        )
      }
    </div>
  );
};

export default Menu;
