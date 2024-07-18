import axios from "axios";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SingleCountryDetailContainer from "./CountryDetailsComponents/SingleCountryDetailContainer";
import { Link, useParams } from "react-router-dom";
import SingleCountryFlag from "./CountryDetailsComponents/SingleCountryFlag";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountryByFullName } from "../store/countrySlice";
import MuiContainer from "../Components/MuiContainer";

function Countrydetails() {
  const { name } = useParams();
  const { countries, isLoading } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    if (name) {
      dispatch(fetchCountryByFullName({ name: name }));
    }
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MuiContainer>
      {isLoading || countries.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <Box style={{ padding: "2rem 0" }}>
          <Link to={`/`} style={{ textDecoration: "none" }}>
            <Button variant="contained" startIcon={<KeyboardBackspaceIcon />}>
              Back
            </Button>
          </Link>
          {countries?.length !== 0 &&
            countries?.map((country, idx) => {
              return (
                <Grid
                  container
                  columns={isMobile ? 1 : 2}
                  justifyContent={"center"}
                  alignItems={"center"}
                  key={idx}
                  columnSpacing={12}
                  style={{ padding: "2rem 0" }}
                >
                  <Grid item lg={1}>
                    <SingleCountryFlag countryflag={country?.flags?.png} />
                  </Grid>
                  <Grid item lg={1}>
                    <SingleCountryDetailContainer {...country} />
                  </Grid>
                </Grid>
              );
            })}
        </Box>
      )}
    </MuiContainer>
  );
}

export default Countrydetails;
