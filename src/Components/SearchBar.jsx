import { TextField } from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import { style } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { Icon } from "@mui/material";

function SearchBar() {
  
  return (
    <div>
      <TextField
        id="input-with-icon-textfield"
        placeholder="Search for Country...."
        size="small"
        sx={coustemstyle.searchbar}
         
      ></TextField>
    </div>
  );
}
const coustemstyle = {
  searchbar: {
    // border: "1px solid red",

    width: "30%",
    padding: "1rem",
  },
};

export default SearchBar;
