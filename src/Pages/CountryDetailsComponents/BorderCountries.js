import { Grid, Stack, Typography } from "@mui/material";
import Button from "@mui/material/Button";

import React from "react";

function BorderCountries({ borders }) {
  return (
    <>
      <Grid
        container
        alignItems="center"
        sx={{ padding: "2rem 0", border: "1px solid red" }}
      >
        <Grid container sx={{ border: "1px solid red" }}>
          <Grid item lg={3} sx={{ border: "1px solid blue" }}>
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Border Countries :
            </Typography>
          </Grid>
          <Grid
            item
            lg={9}
            sx={{ marginLeft: "5px", border: "1px solid green" }}
          >
            <Stack direction="row" spacing={1}>
              {borders.map((item) => (
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "#fafafa", color: "black" }}
                  size="small"
                >
                  {item}
                </Button>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default BorderCountries;
