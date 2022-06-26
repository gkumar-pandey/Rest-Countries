import axios from "axios";
import { Box, Button, CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleCountryDetailContainer from "./CountryDetailsComponents/SingleCountryDetailContainer";
import { Link, useParams } from "react-router-dom";
import SingleCountryFlag from "./CountryDetailsComponents/SingleCountryFlag";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

function Countrydetails() {
  const { id } = useParams();
  const [singleCountryDetails, setsingleCountryDetails] = useState([]);
  const FetchCountriesDetails = async () => {
    const { data } = await axios.get(
      `https://restcountries.com/v2/capital/${id}`
    );
    setsingleCountryDetails(data);
  };

  useEffect(() => {
    FetchCountriesDetails();
  }, []);
  return (
    <div style={{ marginTop: "5rem" }}>
      <Box sx={{ padding: "1.4rem 1.5rem" }}>
        <Link to={`/`} style={{textDecoration: 'none'}}>
          <Button
            variant="contained"
            startIcon={<KeyboardBackspaceIcon />}
            sx={{ marginLeft: "1rem" }}
          >
            Back
          </Button>
        </Link>
      </Box>
      {singleCountryDetails.length == 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Container maxWidth="100%">
          {singleCountryDetails.map(
            (
              {
                flag,
                name,
                nativeName,
                topLevelDomain,
                capital,
                subregion,
                region,
                population,
                currencies,
                languages,
                borders,
              },
              idx
            ) => {
              return (
                <Grid
                  key={name}
                  container
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Grid item lg={6} md={6} sm={12}>
                    <SingleCountryFlag countryflag={flag} />
                  </Grid>
                  <Grid item lg={6} md={6} sm={12}>
                    <SingleCountryDetailContainer
                      name={name}
                      nativename={nativeName}
                      topleveldomain={topLevelDomain}
                      capital={capital}
                      subregion={subregion}
                      region={region}
                      population={population}
                      currencies={currencies}
                      languages={languages}
                      borders={borders}
                    />
                  </Grid>
                </Grid>
              );
            }
          )}
        </Container>
      )}
    </div>
  );
}

export default Countrydetails;
