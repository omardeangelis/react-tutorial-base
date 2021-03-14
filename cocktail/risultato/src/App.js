import { Navbar, Sidebar } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <Router className="App">
      <Navbar />
      <Sidebar />
      App
    </Router>
  );
}

export default App;
