import "./App.css";
import Navbar from "./Components/Navbar";
import CountryCardList from "./Components/CountryCardList";
import FilterSearch from "./Components/FilterSearch";
import { Container } from "@mui/system";
function App() {
  return (
    <div className="App">
      <Navbar />
      <FilterSearch />
      <Container sx={{  width: '95%'}} maxWidth='false'>
        <CountryCardList />
      </Container>
    </div>
  );
}

export default App;
