import { Grid, Typography } from "@mui/material";
import SingleCountryData from "./SingleCountryData";
import { Container } from "@mui/system";
import BorderCountries from "./BorderCountries";
import { Box } from "@mui/system";
import React from "react";

function SingleCountryDetailContainer(props) {
  const {
    name,
    nativename,
    topleveldomain,
    capital,
    subregion,
    region,
    population,
    currencies,
    languages,
  } = props;
  return (
    <>
      <Container maxWidth="md" sx={{}}>
        <Typography variant="h3" component="div" sx={{ fontWeight: "600", margin: '2rem 0'}}>
          {name}
        </Typography>
        <Grid container sx={{ border: "1px solid blue" }}>
          <Grid item lg={6}>
            <SingleCountryData title="Native Name" data={nativename} />
            <SingleCountryData title="Population" data={population} />
            <SingleCountryData title="Region" data={region} />
            <SingleCountryData title="Sub Region" data={subregion} />
            <SingleCountryData title="Capital" data={capital} />
          </Grid>
          <Grid item lg={6}>
            <SingleCountryData title="Top Level Domain" data={topleveldomain} />
            <SingleCountryData
              title="Currencies"
              data={currencies[0]["name"]}
            />
            <SingleCountryData title="Languages" data={languages[0]["name"]} />
          </Grid>
        </Grid>
        <Box>
            <BorderCountries/>
        </Box>
      </Container>
    </>
  );
}

export default SingleCountryDetailContainer;
