import {
  FETCH_E_MODIFICA,
  DELETE_ITEM,
  AUMENTA_QTY,
  DIMINUISCI_QTY,
  SVUOTA_CARRELLO,
  CONTATORE,
  COSTO_TOTALE,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === FETCH_E_MODIFICA) {
    //Modifico Dati Fetchati Array
    return {
      ...state,
      isLoading: false,
      products: action.payload.map((el) => {
        return { ...el, qty: 1 };
      }),
    };
  }
  //Rimuovo un item
  if (action.type === DELETE_ITEM) {
    return {
      ...state,
      products: state.products.filter((el) => el._id !== action.payload),
    };
  }
  //Aumento quantità
  if (action.type === AUMENTA_QTY) {
    return {
      ...state,
      products: state.products.map((el) => {
        if (action.payload === el._id) {
          return {
            ...el,
            qty: el.qty + 1,
          };
        }
        return { ...el };
      }),
    };
  }
  //Diminuisco quantità
  if (action.type === DIMINUISCI_QTY) {
    return {
      ...state,
      products: state.products.map((el) => {
        if (action.payload === el._id) {
          return {
            ...el,
            qty: el.qty - 1,
          };
        }
        return { ...el };
      }),
    };
  }
  //Calcolo somma degli acquisti
  if (action.type === COSTO_TOTALE) {
    return {
      ...state,
      total: state.products.reduce((total, item) => {
        return total + item.price * item.qty;
      }, 0),
    };
  }
  //Calcolo numero di items nel carrello
  if (action.type === CONTATORE) {
    return {
      ...state,
      itemCounter: state.products.reduce((total, item) => {
        return total + item.qty;
      }, 0),
    };
  }
  //Cancello tutti gli elementi
  if (action.type === SVUOTA_CARRELLO) {
    return {
      ...state,
      products: [],
    };
  }
  return state;
};

export default reducer;
