import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

function CountryCard(props) {
  const { name, population, region, capital, flags } = props;

  return (
    <Card sx={{ width: 300, height: "400px", boxShadow: 3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={flags?.png}
          alt={flags?.alt}
        />
        <CardContent>
          <div>
            <h2>{name?.common}</h2>
            <div>
              <div style={coustemStyle.info}>
                <h4>Population: </h4>
                <span style={coustemStyle.data}>{population}</span>
              </div>
              <div style={coustemStyle.info}>
                <h4>Region: </h4>
                <span style={coustemStyle.data}>{region}</span>
              </div>
              <div style={coustemStyle.info}>
                <h4>Capital: </h4>
                {capital?.map((ele, idx) => (
                  <span key={idx} style={coustemStyle.data}>
                    {ele}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
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
