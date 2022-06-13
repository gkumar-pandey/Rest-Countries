import React from "react";
import { Grid, TextField } from "@mui/material";
import { Box, MenuItem } from "@mui/material";
import { Container } from "@mui/system";

function FilterSearch() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        margin: "auto",
      }}
      maxWidth="90%"
    >
      <Grid item lg={4} sm={8} md={6}>
        <TextField
          id="input-with-icon-textfield"
          placeholder="Search for Country...."
          size="small"
          sx={{ width: "100%" }}
        ></TextField>
      </Grid>
      <Grid
        item
        lg={8}
        sm={4}
        md={4}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <TextField
          label="Filter by Region"
          size="small"
          select
          sx={{ width: "200px" }}
        >
          <MenuItem value="Africa">Africa</MenuItem>
          <MenuItem value="America">America</MenuItem>
          <MenuItem value="Asia">Asia</MenuItem>
          <MenuItem value="Europe">Europe</MenuItem>
          <MenuItem value="Oceania">Oceania</MenuItem>
        </TextField>
      </Grid>
    </Grid>
  );
}

export default FilterSearch;
