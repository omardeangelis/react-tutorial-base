import { Router } from "@reach/router";
import HomePage from "./screen/home-screen";

let Checkout = () => (
  <div>
    <h1>Checkout</h1>
  </div>
);
let Paginated = (props) => <div>{props.page}</div>;
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
