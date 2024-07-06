import { Container, Paper } from "@mui/material";
import React from "react";
import CountryCardList from "../Components/CountryCardList";
import FilterSearch from "../Components/FilterSearch";
import MuiContainer from "../Components/MuiContainer";

const HomePage = () => {
  return (
    <MuiContainer>
      <FilterSearch />
      <CountryCardList />
    </MuiContainer>
  );
};

export default HomePage;
