import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeIcon from "@mui/icons-material/LightMode";
import Button from "@mui/material/Button";

function Navbar(props) {
  const { isDarkMode, HandleDarkMode } = props;
  return (
    <>
      <AppBar position="fixed" color="">
        <Toolbar>
          <Typography variant="h6" component="div" sx={customstyle.logo}>
            Where in the world?
          </Typography>
          <Button
            variant="outline"
            onClick={() => HandleDarkMode()}
            startIcon={
              isDarkMode ? <LightModeIcon /> : <DarkModeOutlinedIcon />
            }
          >
            <Typography variant="body1" style={{ textTransform: "capitalize" }}>
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

const customstyle = {
  logo: {
    // color: "black",
    flexGrow: "1",
    fontWeight: "bold",
  },
  button: {},
};

export default Navbar;
