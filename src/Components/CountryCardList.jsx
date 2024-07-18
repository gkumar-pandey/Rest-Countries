import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

import { useDispatch, useSelector } from "react-redux";
import { CardSkeleton } from "./Loader";
import { Pagination, Stack } from "@mui/material";
import { fetchAllCountries } from "../store/countrySlice";
import { Link } from "react-router-dom";

function CountryCardList(props) {
  const [currPage, setCurrPage] = useState(1);
  const { countries, isLoading, filter } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCountries());
  }, []);

  const pagesCount = Math.ceil(countries?.length / 8);
  const firstIndex = (currPage - 1) * 8;
  const lastIndex = firstIndex + 8;

  const currPageCountries = countries?.slice(firstIndex, lastIndex);

  return (
    <Stack direction={"column"} justifyContent={"space-between"} gap={1}>
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
            {currPageCountries?.map((ele, idx) => (
              <Link
                key={idx}
                to={`/${ele?.name?.common}`}
                style={{ textDecoration: "none" }}
              >
                <CountryCard key={idx} {...ele} />
              </Link>
            ))}
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              sx={{ padding: "1rem 0" }}
            >
              <Pagination
                onChange={(e, page) => setCurrPage(page)}
                count={pagesCount}
                variant="outlined"
                shape="rounded"
              />
            </Stack>
          </>
        )}
      </Stack>
    </Stack>
  );
}

export default CountryCardList;
