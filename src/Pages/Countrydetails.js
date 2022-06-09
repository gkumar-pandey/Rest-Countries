import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button, Grid, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
function Countrydetails() {
   
  return (
    <div>
      <div style={customStyle.backbtn}>
        <Link to='/' style={{textDecoration: 'none',color: 'black'}}>
          <Button
            variant="contianed"
            startIcon={<KeyboardBackspaceIcon />}
            sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          >
            <Typography
              variant="body1"
              sx={{ textTransform: "capitalize" }}
              component="p"
            >
              Back
            </Typography>
          </Button>
        </Link>
      </div>
      <Grid container>
        <Grid item lg={6} sm={6}></Grid>
        <Grid item lg={6} sm={6}></Grid>
      </Grid>
    </div>
  );
}
const customStyle = {
  backbtn: {
    marginTop: "5rem",
  },
};

export default Countrydetails;
