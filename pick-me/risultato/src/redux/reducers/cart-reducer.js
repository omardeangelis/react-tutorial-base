import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  value: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, { type, payload }) => {
      state.value += payload;
    },
  },
});

export const { increment, incrementByAmount, decrement } = cartSlice.actions;

export default cartSlice.reducer;
