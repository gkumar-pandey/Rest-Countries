import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
function CountryCard(props) {
  const { countryData } = props;

  const countryName = countryData.name.common;
  const countryFlag = countryData.flags.svg;
  const countryPopulation = countryData.population;
  const countryRegion = countryData.region;
  const countryCapital = countryData.capital;

  return (
    <>
      <Card sx={{ width: 300, height: "400px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={countryFlag}
            alt="green iguana"
          />
          <CardContent>
            <div>
              <h2>{countryName}</h2>
              <div>
                <div style={coustemStyle.info}>
                  <h4>Population: </h4>
                  <span style={coustemStyle.data}>{countryPopulation}</span>
                </div>
                <div style={coustemStyle.info}>
                  <h4>Region: </h4>
                  <span style={coustemStyle.data}>{countryRegion}</span>
                </div>
                <div style={coustemStyle.info}>
                  <h4>Capital: </h4>
                  <span style={coustemStyle.data}>{countryCapital}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
const coustemStyle = {
  info: {
    display: "flex",
    alignItems: "center",
    height: "1.6rem",
  },
  data: {
    marginLeft: "5px",
  },
};

export default CountryCard;
