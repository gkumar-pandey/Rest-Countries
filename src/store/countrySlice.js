import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchCountriesApi,
  fetchCountriesByRegionApi,
  fetchCountryByNameApi,
} from "../services";

const initialState = {
  countries: [],
  filter: {
    searchQuery: "",
    region: "",
  },
  isLoading: false,
  error: null,
};

export const fetchCountryByName = createAsyncThunk(
  "countries/fetchCountryName",
  async ({ name }) => {
    return fetchCountryByNameApi(name);
  }
);

export const fetchAllCountries = createAsyncThunk(
  "countries/fetchAllCountries",
  async () => {
    return fetchCountriesApi();
  }
);

export const fetchCountryByRegion = createAsyncThunk(
  "countries/fetchCountryByRegion",
  async ({ region }) => {
    return fetchCountriesByRegionApi(region);
  }
);

export const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setFilter: (state, action) => {
      const { name, value } = action.payload;
      state.filter = { ...state.filter, [name]: value };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCountryByName.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchCountryByName.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.countries = action.payload;
    });
    builder.addCase(fetchCountryByName.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      console.log(action.payload);
    });
    builder.addCase(fetchAllCountries.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchAllCountries.fulfilled, (state, action) => {
      state.isLoading = false;
      state.countries = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllCountries.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchCountryByRegion.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchCountryByRegion.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.countries = action.payload;
    });
    builder.addCase(fetchCountryByRegion.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { setCountries, setFilter } = countrySlice.actions;
export default countrySlice.reducer;
