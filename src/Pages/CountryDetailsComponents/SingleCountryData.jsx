import { Grid, Stack, Typography } from "@mui/material";
import React from "react";

function SingleCountryData(props) {
  const { title, data } = props;
  return (
    <Stack
      style={{ width: "100%" }}
      gap={1}
      alignItems={"center"}
      direction={"row"}
    >
      <Typography sx={{ fontWeight: "600", fontSize: "1.2rem" }}>
        {title}
      </Typography>
      <p>{data}</p>
    </Stack>
  );
}

export default SingleCountryData;
