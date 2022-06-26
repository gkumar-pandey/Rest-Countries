import { Grid, Typography } from "@mui/material";
import React from "react";

function SingleCountryData(props) {
  const { title, data } = props;
  return (
    <Grid container alignItems='center' sx={{padding: "0.5rem 0rem" }}>
      <Grid item>
        <Typography   variant='h6' component='h4' sx={{fontWeight: 'bold'}}>{title}</Typography>
      </Grid>
      <Grid item sx={{ marginLeft: "5px" }}>
      <Typography variant='h6' component='h4'  >{data}</Typography>
      </Grid>
    </Grid>
  );
}

export default SingleCountryData;
