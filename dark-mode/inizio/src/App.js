import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo";

//Funzione che se presente 'Theme' nel localStorage
// returna il suo valore o di default return 'light-mode'

function App() {
  return (
    <section className="section-center">
      <div className="container">
        <h2>DARK MODE APP</h2>
      </div>
    </section>
  );
}

export default App;
