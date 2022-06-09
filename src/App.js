import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Content from "./Components/Content";
import Countrydetails from "./Pages/Countrydetails";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/detail" element={<Countrydetails />} />
      </Routes>
    </Router>
  );
}

export default App;
