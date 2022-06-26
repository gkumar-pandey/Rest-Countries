import React  from "react";
import CountryCardList from "./CountryCardList";
import { Container } from "@mui/system";
function Home() {
  return (
    <>
      <Container sx={{ width: "100%", marginTop: "3rem",paddingTop: '2rem' }} maxWidth="false">
        <CountryCardList   />
      </Container>
    </>
  );
}

export default Home;
