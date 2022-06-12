import { Card, CardActionArea, CardMedia } from "@mui/material";
import React from "react";

function SingleCountryFlag(props) {
   
  const { countryflag } = props;
  return (
    <>
      <Card>
        <CardActionArea sx={{ maxWidth: "100%",padding: '1.2rem' }}>
          <CardMedia component="img" height="40%" image={countryflag} />
        </CardActionArea>
      </Card>
    </>
  );
}

export default SingleCountryFlag;
