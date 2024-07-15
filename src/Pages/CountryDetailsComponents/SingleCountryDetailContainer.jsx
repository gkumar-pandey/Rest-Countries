import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SingleCountryData from "./SingleCountryData";
import React from "react";

function SingleCountryDetailContainer(props) {
  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = props;

  const currencyArr = currencies && Object.values(currencies);
  const laguagesArr = languages && Object.values(languages);

  return (
    <>
      <Typography
        variant="h3"
        component="div"
        sx={{ fontWeight: "600", margin: "1rem 0" }}
      >
        {name?.common}
      </Typography>
      <Box>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <div>
            <SingleCountryData title="Official Name: " data={name.official} />
            <SingleCountryData title="Population: " data={population} />
            <SingleCountryData title="Region: " data={region} />
            <SingleCountryData title="Sub Region: " data={subregion} />
            <SingleCountryData title="Capital: " data={capital && capital[0]} />
          </div>
          <div>
            <SingleCountryData
              title="Top Level Domain: "
              data={tld?.map((ele) => ele)}
            />
            <SingleCountryData
              title="Currencies: "
              data={currencyArr?.map((ele) => ele["name"])}
            />
            <SingleCountryData
              title="Languages"
              data={laguagesArr?.map((ele) => ele)}
            />
          </div>
        </Stack>
      </Box>
      <Stack direction={"row"} alignItems={"center"} gap={1}>
        <Typography variant="h6" component="h4" sx={{ fontWeight: "bold" }}>
          Border Countries
        </Typography>
        {borders?.map((ele, idx) => (
          <Button variant="contained" key={idx}>
            {ele}
          </Button>
        ))}
      </Stack>
    </>
  );
}

export default SingleCountryDetailContainer;
