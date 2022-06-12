import axios from "axios";
import { CircularProgress, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleCountryDetailContainer from "./CountryDetailsComponents/SingleCountryDetailContainer";
import { useParams } from "react-router-dom";
import SingleCountryFlag from "./CountryDetailsComponents/SingleCountryFlag";

function Countrydetails() {
  const { id } = useParams();
  const [singleCountryDetails, setsingleCountryDetails] = useState([]);
  const FetchCountriesDetails = async () => {
    const { data } = await axios.get(`https://restcountries.com/v2/name/${id}`);
    setsingleCountryDetails(data);
  };
  console.log(singleCountryDetails);

  useEffect(() => {
    FetchCountriesDetails();
  }, []);
  return (
    <>
      {singleCountryDetails.length == 0 ? (
        <div
          style={{
            marginTop: "5rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Container maxWidth='80%'  sx={{  marginTop: '5rem'}}>
          <Grid
            container
            style={{  height: '90vh', display: 'flex',alignItems: 'center' }}
          >
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
                },
                idx
              ) => {
                return (
                  <>
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
                      />
                    </Grid>
                  </>
                );
              }
            )}
          </Grid>
        </Container>
      )}
    </>
  );
}

export default Countrydetails;
