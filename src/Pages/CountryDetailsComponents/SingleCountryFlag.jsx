import { Card, CardActionArea, CardMedia } from "@mui/material";
import React from "react";

function SingleCountryFlag(props) {
  const { countryflag } = props;
  return (
    <>
      <img style={{ width: "100%" }} src={countryflag} alt="country-flag" />
    </>
  );
}

export default SingleCountryFlag;
