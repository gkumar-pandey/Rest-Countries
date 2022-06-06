import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
function CountryCard() {
  return (
    <>
      <Card sx={{ maxWidth: 300 , border: '1px solid red' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default CountryCard;
