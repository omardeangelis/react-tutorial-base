import { Navbar, Sidebar, Footer } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import AboutScreen from "./screen/AboutScreen";
import ContactScreen from "./screen/ContactScreen";
import SingleCocktailScreen from "./screen/SingleCocktailScreen";
import ErrorScreen from "./screen/ErrorScreen";

function App() {
  return (
    <Router className='App'>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/about' element={<AboutScreen />} />
        <Route path='/contattaci' element={<ContactScreen />} />
        <Route path='/cocktail/:id' element={<SingleCocktailScreen />} />
        <Route path='*' element={<ErrorScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
