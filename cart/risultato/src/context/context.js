import React, { useContext, useReducer, useEffect } from "react";
//Import Funzione a cui delego la gestione delle mie funzioni
import reducer from "./reducer";
//importo tutte action.type
import {
  FETCH_E_MODIFICA,
  DELETE_ITEM,
  AUMENTA_QTY,
  DIMINUISCI_QTY,
  SVUOTA_CARRELLO,
  CONTATORE,
  COSTO_TOTALE,
} from "./actions";
//Importo customHooks
import useFetch from "./useFetch";
// Creo il context per essere utilizzato dai miei componenti
const AppContext = React.createContext();

//URL per le chiamate all API
const url = "https://react-corso-api.netlify.app/.netlify/functions/cartshop";

//Stato iniziale del nostro Reducer
const initialState = {
  products: [],
  isLoading: true,
  total: 0,
  itemCounter: 0,
};
//Componente con cui Wrappare la nostra intera app (o il componente che ha bisogno di accedere ad un determinato provider)
const AppProvider = ({ children }) => {
  const { data } = useFetch(url);
  const [state, dispatch] = useReducer(reducer, initialState);

  //Modifica e dai fetchati dal nostro custom Hooks
  const fetchData = () => {
    return dispatch({ type: FETCH_E_MODIFICA, payload: data });
  };

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
    if (data && !state.products.length > 0) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    dispatch({ type: COSTO_TOTALE });
    dispatch({ type: CONTATORE });
  }, [state.products]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        fetchData,
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
