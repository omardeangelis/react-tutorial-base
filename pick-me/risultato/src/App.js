import { Router } from "@reach/router";
import HomePage from "./screen/home-screen";
import Paginated from "./screen/paginated-screen";
import Checkout from "./screen/checkout-screen";

function App() {
  return (
    <Router className='App'>
      <HomePage path='/' />
      <Checkout path='/checkout' />
      <Paginated path='/photo/:page' />
    </Router>
  );
}

export default App;
