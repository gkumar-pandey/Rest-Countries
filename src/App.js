import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Countrydetails from "./Pages/Countrydetails";
import Home from "./Components/ Home";
import { useState } from "react";
function App() {
  const [isDarkMode, setDarkMode] = useState(false)
  const HandleDarkMode = () => {
    setDarkMode(!isDarkMode)
  }
  return (
    <Router>
      <Navbar isDarkMode={isDarkMode} HandleDarkMode={HandleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Countrydetails />} />
      </Routes>
    </Router>
  );
}

export default App;
