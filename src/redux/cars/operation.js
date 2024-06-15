import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6648993d2bb946cf2fa10fff.mockapi.io/";

export const fetchCarsThunk = createAsyncThunk(
  "cars/fetchAll",
  async ({ page = 1, limit = 12 }, thunkApi) => {
    try {
      const response = await axios.get("adverts", {
        params: { page, limit },
      });
      const data = response.data;
      const total = 32;
      return { data, page, limit, total };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
