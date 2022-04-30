import HomePage from "./screen/home-screen";
import Paginated from "./screen/paginated-screen";
import Checkout from "./screen/checkout-screen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/checkout/' element={<Checkout />} />
        <Route
          path='
        /photo/:page
        '
          element={<Paginated />}
        />
      </Routes>
    </Router>
  );
}

export default App;
