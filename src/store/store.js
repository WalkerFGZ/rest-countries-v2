import { configureStore } from "@reduxjs/toolkit";
import { countriesApi } from "../services/countries";
import { countriesSlice } from "./slice";

export const store = configureStore({
  reducer: {
    countries: countriesSlice,
    [countriesApi.reducerPath]: countriesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countriesApi.middleware),
});
