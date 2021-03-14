import { Navbar, Sidebar, Footer } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router className="App">
      <Navbar />
      <Sidebar />
      <Footer />
    </Router>
  );
}

export default App;
