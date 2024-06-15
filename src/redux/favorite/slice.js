import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const carId = action.payload;
      if (!state.favorites.includes(carId)) {
        state.favorites.push(carId);
      }
    },
    removeFromFavorites: (state, action) => {
      const carId = action.payload;
      state.favorites = state.favorites.filter((id) => id !== carId);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;



export const favoritesReducer= favoritesSlice.reducer;

