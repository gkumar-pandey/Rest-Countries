import React, { useEffect, useRef, useState } from "react";
import CountryCard from "./CountryCard";
import FilterSearch from "./FilterSearch";

import axios from "axios";
import { CircularProgress } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

function CountryCardList(props) {
  const [searchInput, setSearchInput] = useState("");
  const [selectRegionInput, setSelectRegionInput] = useState("");
  const [countrydata, setcountrydata] = useState([]);
  const [FilteredCountries, setFilteredCountries] = useState([]);
  const FetchCountries = async () => {
    const { data } = await axios.get(`https://restcountries.com/v2/all`);
    setcountrydata(data);
  };
  useEffect(() => {
    FetchCountries();
  }, []);

  // SearchFilter function
  const SearchCountries = (searchParam) => {
    setSearchInput(searchParam);
  };
  useEffect(() => {
    if (searchInput) {
      const filterCountries = countrydata.filter(({ name }) => {
        return name.toLowerCase().includes(searchInput.toLowerCase());
      });
      setFilteredCountries(filterCountries);
    } else {
      setFilteredCountries(countrydata);
    }
  }, [searchInput]);

  const SelectCountriesByRegion = (selectParam) => {
    setSelectRegionInput(selectParam);
  };
  useEffect(() => {
    if(selectRegionInput){
       
      const filterCountries = countrydata.filter(({ region }) => {
        return region.toLowerCase().includes(selectRegionInput.toLowerCase());
      });
      setFilteredCountries(filterCountries);
    }
    else{
      setFilteredCountries(countrydata)
    }
    
  }, [selectRegionInput]);

  return (
    <>
      {countrydata.length == 0 ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        <>
          <FilterSearch
            SelectCountriesByRegion={SelectCountriesByRegion}
            SearchCountries={SearchCountries}
            searchInput={searchInput}
            selectRegionInput={selectRegionInput}
          />
          <Grid container sx={{ padding: "1rem", margin: "auto" }}>
            {(selectRegionInput.length==0 && searchInput.length==0) ? (
              <>
                {countrydata.map((countrydata, idx) => {
                  const name = countrydata.capital;
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={4}
                      md={3}
                      lg={3}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "1rem 1rem",
                        marginBottom: "2rem",
                      }}
                      key={idx}
                    >
                      <Link
                        to={`/detail/${name}`}
                        style={{ textDecoration: "none" }}
                      >
                        <CountryCard countryData={countrydata} />
                      </Link>
                    </Grid>
                  );
                })}
              </>
            ) : (
              <>
                {FilteredCountries.map((countrydata, idx) => {
                  const name = countrydata.capital;
                  return (
                    <Grid
                      item
                      xs={12}
                      sm={4}
                      md={3}
                      lg={3}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "1rem 1rem",
                        marginBottom: "2rem",
                      }}
                      key={idx}
                    >
                      <Link
                        to={`/detail/${name}`}
                        style={{ textDecoration: "none" }}
                      >
                        <CountryCard countryData={countrydata} />
                      </Link>
                    </Grid>
                  );
                })}
              </>
            )}
          </Grid>
        </>
      )}
    </>
  );
}

export default CountryCardList;
