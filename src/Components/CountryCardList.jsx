import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

function CountryCardList() {
  const [countrydata, setcountrydata] = useState([]);
  const FetchCountries = async () => {
    const { data } = await axios.get(`https://restcountries.com/v3.1/all`);
    setcountrydata(data.slice(0, 12));
  };
  useEffect(() => {
    FetchCountries();
  }, []);
  console.log(countrydata);
  console.log(typeof countrydata);
  return (
    <>
      {countrydata.length == 0 ? (
        <Box sx={{display: 'flex',justifyContent: 'center' }}>
        <CircularProgress/>
        </Box>
        
      ) : (
        <Grid container spacing={5} sx={{padding: '1rem', margin: 'auto'}}>
          {countrydata.map((countrydata, idx) => {
            return (
              <Grid item xs={12} sm={4} md={3} lg={3}>
                <CountryCard countryData={countrydata} key={idx} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
}

export default CountryCardList;
