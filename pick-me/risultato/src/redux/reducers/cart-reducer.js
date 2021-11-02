import { createSlice, createAction } from "@reduxjs/toolkit";

const isAddToCartAction = (action) => {
  return action.type.endsWith("/addToCart");
};

const removeFromCart = createAction("remove-from-cart");
const calcualteTotal = createAction("find-total");

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
      .addCase(calcualteTotal, (state, action) => {
        state.total = action.payload;
      })
      .addMatcher(isAddToCartAction, (state, action) => {
        state.total += action.payload.likes;
      })
      .addDefaultCase((state) => {
        return state;
      });
  },
});

export const { cleanCart, addToCart } = cartSlice.actions;

export { removeFromCart };

export const findCartTotal = () => (dispatch, getState) => {
  let cartPrice = getState().cart.cart.reduce((total, item) => {
    return total + item.likes;
  }, 0);

  dispatch({ type: calcualteTotal, payload: cartPrice });
};

export default cartSlice.reducer;
