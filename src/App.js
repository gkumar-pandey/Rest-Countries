import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Countrydetails from "./Pages/Countrydetails";
import Home from "./Components/ Home";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
function App() {
  const [isDarkMode, setDarkMode] = useState(false);
  const HandleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };
  const theme = createTheme({
    palette: {
      background: {
        paper: isDarkMode? "hsl(209, 23%, 22%)": "hsl(0, 0%, 100%)",
        default: isDarkMode? "hsl(207, 26%, 17%)": "#f5f5f5"
      },
      text: {
        primary: isDarkMode? 'hsl(0, 0%, 100%)': 'hsl(200, 15%, 8%)',
        secondary: isDarkMode? 'hsl(0, 0%, 100%)': 'hsl(200, 15%, 8%)'

      },
      primary: {
        main: isDarkMode? 'hsl(209, 23%, 22%)':'hsl(0, 0%, 100%)',
         
      }
    },
    typography: {
      fontFamily: "Raleway, sans-serif"
    }
  });
  // console.log(theme)
  return (
    <ThemeProvider theme={theme} >
    <CssBaseline/>
       
        <Router>
          <Navbar isDarkMode={isDarkMode} HandleDarkMode={HandleDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Countrydetails />} />
          </Routes>
        </Router>
       
    </ThemeProvider>
  );
}

export default App;
