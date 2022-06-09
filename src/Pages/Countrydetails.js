import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";
import { Button, Grid, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import axios from "axios";
function Countrydetails() {
  const [countryName, setcountryName] = useState('')
  const [singleCountryDetails , setsingleCountryDetails] = useState([]);
  
  const fetchSingleCountryDetials = async() => {
    const {data} = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
    // setsingleCountryDetails(data);

  }

  useEffect(()=> {
    // fetchSingleCountryDetials();
  },[])
   
  return (<>
    {
      singleCountryDetails.length == 0 ? ( <Box sx={{ display: "flex", justifyContent: "center", marginTop:'4rem' }}>
          <CircularProgress />
        </Box>):  (<div>
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
    </div>)
    }
   
  </>);
}
const customStyle = {
  backbtn: {
    marginTop: "5rem",
  },
};

export default Countrydetails;
