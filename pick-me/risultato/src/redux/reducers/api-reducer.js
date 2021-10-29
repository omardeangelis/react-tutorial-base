import { createSlice } from "@reduxjs/toolkit";
import instance from "../../api";

const initialState = {
  loading: true,
  error: {
    status: false,
    message: "",
  },
  photos: {},
};

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
      state.error.status = true;
      state.error.message = "";
      state.photos = {};
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    saveData: (state, action) => {
      state.photos = action.payload;
    },
    catchError: (state, action) => {
      state.error.status = true;
      state.error.message = action.payload;
      state.photos = {};
    },
  },
});

const { startLoading, stopLoading, saveData, catchError } = photoSlice.actions;

const { reducer } = photoSlice;

export const fetchData = (path) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await instance.get(path);
    dispatch(saveData(response.data));
  } catch (error) {
    dispatch(catchError(error));
  }
  dispatch(stopLoading());
};

export default reducer;
