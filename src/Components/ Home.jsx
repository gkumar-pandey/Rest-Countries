import React from "react";
import FilterSearch from "./FilterSearch";
import CountryCardList from "./CountryCardList";
import { Container } from "@mui/system";
function Home() {
  return (
    <>
      <Container sx={{ width: "100%" }} maxWidth="false">
        <FilterSearch />
        <CountryCardList   />
      </Container>
    </>
  );
}

export default Home;
