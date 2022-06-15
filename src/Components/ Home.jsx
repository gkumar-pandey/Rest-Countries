import React, { useState } from "react";
import CountryCardList from "./CountryCardList";
import { Container } from "@mui/system";
import { Paper } from "@mui/material";
function Home() {
  return (
    <>
      <Container sx={{ width: "100%", marginTop: "3.9rem" }} maxWidth="false">
        <CountryCardList   />
      </Container>
    </>
  );
}

export default Home;
