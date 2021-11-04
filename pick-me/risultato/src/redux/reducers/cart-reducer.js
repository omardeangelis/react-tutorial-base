import { createSlice, createAction, isAnyOf } from "@reduxjs/toolkit";
import { setLocalStorageItem } from "../../utils/helpers";

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

const initialValue = {
  cart: [],
  total: 0,
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(removeFromCart, (state, action) => {
        state.cart = state.cart.filter((el) => el.id !== action.payload);
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

export const { cleanCart, addToCart } = cartSlice.actions;

export { removeFromCart };

export default cartSlice.reducer;
