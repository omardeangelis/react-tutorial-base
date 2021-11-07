import { createSlice } from "@reduxjs/toolkit";
import instance from "../../api";
import {
  getItemFromLocalStorage,
  setLocalStorageItem,
} from "../../utils/helpers";

const path = getItemFromLocalStorage("query")?.path || "";
const itemPerPage = getItemFromLocalStorage("query")?.itemPerPage || null;
const type = getItemFromLocalStorage("query")?.type || "";
const query = getItemFromLocalStorage("query")?.query || "";

const initialState = {
  query: {
    path: path || "",
    itemPerPage: itemPerPage || null,
    type: type || "",
    query: query || "",
  },
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
  pagination: {
    currentPage: 1,
    totalPage: null,
    hasNextPage: false,
    hasPrevPage: false,
  },
};

const isQuerySaved = (action) => {
  return action.type.endsWith("/saveQuery");
};

const photoSlice = createSlice({
  name: "photo",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
      state.photos = {};
    },
    stopLoading: (state) => {
      state.loading = false;
    },
    saveData: (state, action) => {
      state.photos = action.payload;
    },
    saveQuery: (state, action) => {
      state.query = { ...action.payload };
    },
    updatePage: (state, action) => {
      state.pagination.currentPage = action.payload;
    },

    checkPagination: (state, action) => {
      state.pagination.hasNextPage = action.payload.hasNextPage;
      state.pagination.hasPrevPage = action.payload.hasPrevPage;
      state.pagination.totalPage = action.payload.totalPage;
    },
    catchError: (state, action) => {
      state.error.status = true;
      state.error.message = action.payload;
      state.photos = {};
    },
    cleanError: (state) => {
      state.error.status = false;
      state.error.message = "";
    },
    checkRateLimiter: (state, action) => {
      state.rate_limit = {
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isQuerySaved, (state) => {
      setLocalStorageItem("query", state.query);
    });
  },
});

const {
  startLoading,
  stopLoading,
  saveData,
  saveQuery,
  catchError,
  cleanError,
  checkRateLimiter,
  updatePage,
  checkPagination,
} = photoSlice.actions;

const { reducer } = photoSlice;

export const fetchData = (path) => async (dispatch, getState) => {
  dispatch(startLoading());
  dispatch(cleanError());
  try {
    const response = await instance.get(path);
    dispatch(saveData(response.data));
    if (response?.data?.total === 0) {
      dispatch(catchError(["Nessun Elemento corrisponde alla ricerca"]));
    }
    if (response?.data?.total_pages) {
      const { currentPage } = getState().photos.pagination;
      const paginationInfo = {
        hasNextPage: currentPage + 1 <= response?.data?.total_pages,
        hasPrevPage: currentPage > 1,
        totalPage: response?.data?.total_pages,
      };

      dispatch(checkPagination(paginationInfo));
    }
    dispatch(
      checkRateLimiter({
        remaining: response.headers["x-ratelimit-remaining"],
        total: response.headers["x-ratelimit-limit"],
      })
    );
  } catch (error) {
    dispatch(catchError(error.errors));
  }
  dispatch(stopLoading());
};

export { catchError, cleanError, saveQuery, updatePage };

export default reducer;
