import { createSlice, createAction, isAnyOf } from "@reduxjs/toolkit";
import {
  setLocalStorageItem,
  getItemFromLocalStorage,
} from "../../utils/helpers";

const isAddToCartAction = (action) => {
  return action.type.endsWith("/addToCart");
};

const isCartCleaned = (action) => {
  return action.type.endsWith("/cleanCart");
};

const isRemovedFromCard = (action) => {
  return action.type.endsWith("remove-from-cart");
};

const isCartAction = (action) => {
  return isAnyOf(isAddToCartAction, isRemovedFromCard, isCartCleaned)(action);
};

const removeFromCart = createAction("remove-from-cart");

const localStorageCart = getItemFromLocalStorage("cart");
const totalFromLocalStorage = getItemFromLocalStorage("total");

const initialValue = {
  cart: localStorageCart && localStorageCart.length > 0 ? localStorageCart : [],
  total: totalFromLocalStorage || 0,
  payed: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    cleanCart: (state) => {
      state.cart = [];
      state.total = 0;
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    payOrder: (state) => {
      state.payed = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(removeFromCart, (state, action) => {
        state.cart = state.cart.filter((el) => el.id !== action.payload.id);
      })
      .addMatcher(isAddToCartAction, (state, action) => {
        state.total += action.payload.likes;
      })
      .addMatcher(isRemovedFromCard, (state, action) => {
        state.total -= action.payload.likes;
      })
      .addMatcher(isCartAction, (state) => {
        setLocalStorageItem("cart", state.cart);
        setLocalStorageItem("total", state.total);
      })
      .addDefaultCase((state) => {
        return state;
      });
  },
});

const addSingleElementToCart = (item) => (dispatch, getState) => {
  const { cart } = getState().cart;

  if (cart.find((x) => x.id === item.id)) {
    return;
  }

  dispatch(addToCart(item));
};

export const { cleanCart, addToCart, payOrder } = cartSlice.actions;

export { removeFromCart, addSingleElementToCart };

export default cartSlice.reducer;
