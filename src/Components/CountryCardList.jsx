import React, { useEffect } from "react";
import CountryCard from "./CountryCard";

import { useDispatch, useSelector } from "react-redux";
import { CardSkeleton } from "./Loader";
import { Stack } from "@mui/material";
import { fetchAllCountries } from "../store/countrySlice";
import { Link } from "react-router-dom";

function CountryCardList(props) {
  const { countries, isLoading, filter } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, []);

  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={4}
      alignContent={"center"}
      justifyContent={"space-evenly"}
    >
      {isLoading ? (
        [...Array(10)].map((_, idx) => <CardSkeleton key={idx} />)
      ) : (
        <>
          {countries?.map((ele, idx) => (
            <Link
              key={idx}
              to={`/${ele?.name?.common}`}
              style={{ textDecoration: "none" }}
            >
              <CountryCard key={idx} {...ele} />
            </Link>
          ))}
        </>
      )}
    </Stack>
  );
}

export default CountryCardList;
