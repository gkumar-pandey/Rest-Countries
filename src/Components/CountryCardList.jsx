import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

function CountryCardList(props) {
  const [countrydata, setcountrydata] = useState([]);
  const FetchCountries = async () => {
    const { data } = await axios.get(`https://restcountries.com/v2/all`);
    setcountrydata(data.slice(0, 12));
  };
  useEffect(() => {
    FetchCountries();
  }, []);

  return (
    <>
      {countrydata.length == 0 ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container sx={{ padding: "1rem", margin: "auto" }}>
          {countrydata.map((countrydata, idx) => {
            const name = countrydata.name;
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
                <Link to={`/detail/${name}`} style={{ textDecoration: "none" }}>
                  <CountryCard countryData={countrydata} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
}

export default CountryCardList;
