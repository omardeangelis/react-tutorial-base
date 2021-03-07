import React, { useContext, useReducer, useEffect } from "react";
//axios
import axios from "axios";
//Import Funzione a cui delego la gestione delle mie funzioni
import reducer from "./reducer";
//importo tutte action.type
import {
  DATA_FETCHING_STARTED,
  DATA_FETCHING_FAILED,
  DATA_FETCHING_SUCCESS,
  DELETE_ITEM,
  AUMENTA_QTY,
  DIMINUISCI_QTY,
  SVUOTA_CARRELLO,
  CONTATORE,
  COSTO_TOTALE,
} from "./actions";
// Creo il context per essere utilizzato dai miei componenti
const AppContext = React.createContext();

//URL per le chiamate all API
const url = "https://react-corso-api.netlify.app/.netlify/functions/cartshop";

//Stato iniziale del nostro Reducer
const initialState = {
  products: [],
  isLoading: true,
  isError: false,
  total: 0,
  itemCounter: 0,
};
//Componente con cui Wrappare la nostra intera app (o il componente che ha bisogno di accedere ad un determinato provider)
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteItem = (id) => {
    return dispatch({ type: DELETE_ITEM, payload: id });
  };

  //Aumenta Quantità
  const addQty = (id) => {
    return dispatch({ type: AUMENTA_QTY, payload: id });
  };

  //Riduce quantità singolo elemento
  const dimQty = (id) => {
    return dispatch({ type: DIMINUISCI_QTY, payload: id });
  };

  //Svuota Carrello
  const deleteAll = () => {
    return dispatch({ type: SVUOTA_CARRELLO });
  };
  useEffect(() => {
    (async () => {
      dispatch({ type: DATA_FETCHING_STARTED });
      try {
        const response = await axios.get(url);
        dispatch({
          type: DATA_FETCHING_SUCCESS,
          payload: response.data.default,
        });
      } catch (err) {
        dispatch({ type: DATA_FETCHING_FAILED });
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch({ type: COSTO_TOTALE });
    dispatch({ type: CONTATORE });
  }, [state.products]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        deleteItem,
        addQty,
        dimQty,
        deleteAll,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//Custom Hook che utilizza direttamente il nostro context
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
