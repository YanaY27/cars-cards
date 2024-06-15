import { createSlice } from "@reduxjs/toolkit";
import { fetchCarsThunk } from "./operation";

const initialState = {
  cars: [],
  page: 1,
  limit: 12,
  total: 32,
  isLoading: false,
  isError: false,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCarsThunk.fulfilled,
        (state, { payload: { data, page, limit, total } }) => {
          state.page = page;
          state.limit = limit;
          state.total = total;
          state.cars = page === 1 ? data : [...state.cars, ...data];
          state.isLoading = false;
        }
      )
      .addCase(fetchCarsThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCarsThunk.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const carsReducer = carsSlice.reducer;


