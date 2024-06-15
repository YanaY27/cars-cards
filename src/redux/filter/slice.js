import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    selectedCar: null,
  },
  selectors: { selectCar: (state) => state.selectedCar },
  reducers: {
    setSelectedCar: (state, action) => {
      state.selectedCar = action.payload;
    },
  },
});

export const { setSelectedCar } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const { selectedCar } = filtersSlice.selectors;
