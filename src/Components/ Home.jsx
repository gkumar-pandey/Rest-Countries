import React from "react";
import FilterSearch from "./FilterSearch";
import CountryCardList from "./CountryCardList";
import { Container } from "@mui/system";
function Home() {
  return (
    <>
      <Container sx={{ width: "100%", marginTop: '5rem' }} maxWidth="false">
        <FilterSearch />
        <CountryCardList   />
      </Container>
    </>
  );
}

export default Home;
