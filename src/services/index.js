import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1";

export const fetchCountriesApi = async () => {
  try {
    const { data, status } = await axios.get(`${BASE_URL}/all`);

    if (status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error);
    return error?.data?.message;
  }
};

export const fetchCountryByNameApi = async (countryName) => {
  try {
    const { data, status } = await axios.get(`${BASE_URL}/name/${countryName}`);

    if (status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error);
    return error?.data?.message;
  }
};

export const fetchCountriesByRegionApi = async (region) => {
  try {
    const { data, status } = await axios.get(`${BASE_URL}/region/${region}`);
    if (status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error);
    return error.data.message;
  }
};

export const fetchCountryDataByNameApi = async (name) => {
  try {
    const { data, status } = await axios.get(`${BASE_URL}/name/${name}`);
    if (status === 200) {
      return data;
    }
  } catch (error) {
    console.log(error);
    return error.data.message;
  }
};
