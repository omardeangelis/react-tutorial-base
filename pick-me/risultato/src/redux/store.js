import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart-reducer";
import photoReducer from "./reducers/api-reducer";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    photos: photoReducer,
  },
});
