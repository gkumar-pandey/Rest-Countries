import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CountryCardDetails from "./CountryCardDetails";
function CountryCard(props) {
  const { countryData } = props;
  
  const countryName = countryData.name.common;
  const countryFlag = countryData.flags.svg;
  const countryPopulation = countryData.population;
  const countryRegion = countryData.region;
  const countryCapital = countryData.capital;

  return (
    <>
      <Card sx={{ maxWidth: 300,height: '400px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={countryFlag}
            alt="green iguana"
          />
          <CardContent>
            <CountryCardDetails
              countryName={countryName}
              Population={countryPopulation}
              Region={countryRegion}
              Capital={countryCapital}
            />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default CountryCard;
