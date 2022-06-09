import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Link, useNavigate} from "react-router-dom";

function CountryCardList(props) {
  const [countrydata, setcountrydata] = useState([]);
  const FetchCountries = async () => {
    const { data } = await axios.get(`https://restcountries.com/v3.1/all`);
    setcountrydata(data.slice(0, 12));
  };
  useEffect(() => {
    FetchCountries();
  }, []);
  const navigate = useNavigate();
  const tocountryDetails = () => {
    navigate('/detail', {state: {name: 'gautam '}})
  }
  return (
    <>
      {countrydata.length == 0 ? (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container sx={{ padding: "1rem", margin: "auto" }}>
          {countrydata.map((countrydata, idx) => {
            return (
              <Grid
                item
                xs={12}
                sm={4}
                md={3}
                lg={3}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "1rem 1rem",
                  marginBottom: "2rem",
                }}
              >
                <Link to="/detail" onClick={()=> tocountryDetails()} style={{textDecoration: 'none'}}   >
                  <CountryCard countryData={countrydata} key={idx} />
                </Link>
              </Grid>
            );
          })}
        </Grid>
      )}
    </>
  );
}

export default CountryCardList;
