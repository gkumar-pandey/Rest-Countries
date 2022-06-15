import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Countrydetails from "./Pages/Countrydetails";
import Home from "./Components/ Home";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const HandleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper  >
        <Router>
          <Navbar isDarkMode={isDarkMode} HandleDarkMode={HandleDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Countrydetails />} />
          </Routes>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
