import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

function SingleCountryData(props) {
  const { title, data } = props;
  return (
    <Stack style={{ width: "100%", border: "1px solid red" }} direction={"row"}>
      <Typography variant="h6" component="h4" sx={{ fontWeight: "bold" }}>
        {title}
      </Typography>

      <Typography variant="h6" component="h4">
        {data}
      </Typography>
    </Stack>
  );
}

export default SingleCountryData;
