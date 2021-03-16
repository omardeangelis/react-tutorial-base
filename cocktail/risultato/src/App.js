import { Navbar, Sidebar, Footer } from "./components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
function App() {
  return (
    <Router className="App">
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path="/" component={HomeScreen} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
