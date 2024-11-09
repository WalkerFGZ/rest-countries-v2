import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteCountries: [],
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.favoriteCountries = action.payload;
    },
  },
});

export const { setCountries } = countriesSlice.actions;
export default countriesSlice.reducer;
