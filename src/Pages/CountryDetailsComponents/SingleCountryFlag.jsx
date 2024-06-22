import { Card, CardActionArea, CardMedia } from "@mui/material";
import React from "react";

function SingleCountryFlag(props) {
   
  const { countryflag } = props;
  return (
    <>
      <Card>
        <CardActionArea sx={{ maxWidth: "100%",padding: '1.2rem',borderRadius: '1rem' }}>
          <CardMedia component="img" height="40%" image={countryflag} sx={{borderRadius: '0.5rem'}} />
        </CardActionArea>
      </Card>
    </>
  );
}

export default SingleCountryFlag;
