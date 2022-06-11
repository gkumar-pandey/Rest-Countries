import axios from "axios";
import { CircularProgress, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleCountryDetails from "./CountryDetailsComponents/ SingleCountryDetails";
import { useParams } from "react-router-dom";

function Countrydetails() {
  const { id } = useParams();
  const [singleCountryDetails, setsingleCountryDetails] = useState([]);
  const FetchCountriesDetails = async () => {
    const { data } = await axios.get(`https://restcountries.com/v2/name/${id}`);
    setsingleCountryDetails(data);
  };
  // console.log(singleCountryDetails);

  useEffect(() => {
    FetchCountriesDetails();
  }, []);
  // const {name,flag} = singleCountryDetails;
  // const countryFlag = data.
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
        <Grid container sx={{ border: "1px solid red", marginTop: "5rem" }}>
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
                <div key={name}>
                  <Grid item lg={6} sm={12}>
                    <img src={flag} />
                  </Grid>
                  <Grid item lg={6} sm={12}>
                    <SingleCountryDetails
                      name={name}
                      nativename={nativeName}
                      topleveldomain={topLevelDomain}
                      capital={capital}
                      subregion={subregion}
                      region={region}
                      population={population}
                      currencies={currencies}
                      languages = {languages}
                    />
                  </Grid>
                </div>
              );
            }
          )}
        </Grid>
      )}
    </>
  );
}

export default Countrydetails;
