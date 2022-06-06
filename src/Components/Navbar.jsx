import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { Icon } from "@mui/material";

import Button from "@mui/material/Button";
import { style } from "@mui/system";

function Navbar() {
  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "white" }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={customstyle.logo}>
            Where in the world?
          </Typography>
          <Button
            variant="outline"
            startIcon={<DarkModeOutlinedIcon/>}
            sx={{color: 'black'}}
          >
            Dark Mode
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

const customstyle = {
  logo: {
    color: "black",
    flexGrow: "1",
    fontWeight: "bold",
  },
  button: {},
};

export default Navbar;
