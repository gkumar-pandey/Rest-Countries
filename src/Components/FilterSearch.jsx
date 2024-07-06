import React, { useCallback, useEffect, useState } from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { MenuItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import useDebounce from "../hook/useDebounce";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCountries,
  fetchCountryByName,
  fetchCountryByRegion,
  setFilter,
} from "../store/countrySlice";

const RegionSelect = ({ value, onChange, name }) => {
  const regions = [
    { text: "Africa", value: "Africa" },
    { text: "America", value: "America" },
    { text: "Asia", value: "Asia" },
    { text: "Europe", value: "Europe" },
    { text: "Oceania", value: "Oceania" },
  ];

  return (
    <FormControl sx={{ width: 250, boxShadow: 1 }}>
      <Select
        placeholder="Filter By Region"
        name={name}
        value={value}
        onChange={onChange}
      >
        {regions.map((ele, idx) => (
          <MenuItem key={idx} value={ele.value}>
            {ele.text}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const SearchBar = ({ value, onChange, name }) => {
  return (
    <TextField
      value={value}
      name={name}
      onChange={onChange}
      sx={{ maxWidth: 400, width: "100%", boxShadow: 1 }}
      placeholder="Search for a country..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

function FilterSearch() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  const dispatch = useDispatch();

  const debounceSearchQuery = useDebounce(query, 300);

  useEffect(() => {
    if (debounceSearchQuery) {
      dispatch(fetchCountryByName({ name: debounceSearchQuery }));
    } else if (region) {
      dispatch(fetchCountryByRegion({ region: region }));
    } else {
      dispatch(fetchAllCountries());
    }
  }, [debounceSearchQuery, region]);

  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      sx={{ padding: "2rem 0" }}
    >
      <SearchBar
        name="searchQuery"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <RegionSelect
        value={region}
        name={"region"}
        onChange={(e) => setRegion(e.target.value)}
      />
    </Stack>
  );
}

export default FilterSearch;
