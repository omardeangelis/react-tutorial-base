import { createSlice } from "@reduxjs/toolkit";
import instance from "../../api";

const initialState = {
  loading: true,
  error: {
    status: false,
    message: "",
  },
  photos: {},
  rate_limit: {
    remaining: null,
    total: 50,
  },
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
    checkRateLimiter: (state, action) => {
      state.rate_limit = {
        ...action.payload,
      };
    },
  },
});

const { startLoading, stopLoading, saveData, catchError, checkRateLimiter } =
  photoSlice.actions;

const { reducer } = photoSlice;

export const fetchData = (path) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await instance.get(path);
    dispatch(saveData(response.data));
    dispatch(
      checkRateLimiter({
        remaining: response.headers["x-ratelimit-remaining"],
        total: response.headers["x-ratelimit-limit"],
      })
    );
  } catch (error) {
    dispatch(catchError(error));
  }
  dispatch(stopLoading());
};

export default reducer;
